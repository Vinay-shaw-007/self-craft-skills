// POST /api/razorpay-webhook
// Receives Razorpay webhook events and keeps the subscriptions table
// current. Register this URL in the Razorpay dashboard with the events:
//   subscription.activated, subscription.charged, subscription.cancelled,
//   subscription.halted, subscription.paused, subscription.completed,
//   payment.failed
// The signature check makes it safe to expose publicly.
import { json, supabaseAdmin } from "../lib/supabase.mts";
import { verifyWebhookSignature } from "../lib/razorpay.mts";

// Razorpay event → our status column. subscription.charged also refreshes
// current_period_end from the payload.
const EVENT_STATUS: Record<string, string> = {
    "subscription.activated": "active",
    "subscription.charged": "active",
    "subscription.cancelled": "cancelled",
    "subscription.halted": "halted",
    "subscription.paused": "paused",
    "subscription.resumed": "active",
    "subscription.completed": "completed",
};

interface WebhookBody {
    event?: string;
    payload?: {
        subscription?: { entity?: { id?: string; status?: string; current_end?: number | null } };
        payment?: { entity?: { subscription_id?: string } };
    };
}

export const config = { path: "/api/razorpay-webhook" };

export default async (req: Request): Promise<Response> => {
    if (req.method !== "POST") {
        return json({ error: "Method not allowed" }, 405);
    }

    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    if (!verifyWebhookSignature(rawBody, signature)) {
        return json({ error: "Invalid signature" }, 401);
    }

    let body: WebhookBody;
    try {
        body = JSON.parse(rawBody) as WebhookBody;
    } catch {
        return json({ error: "Invalid JSON" }, 400);
    }

    const event = body.event ?? "";
    const db = supabaseAdmin();

    try {
        if (event in EVENT_STATUS) {
            const entity = body.payload?.subscription?.entity;
            if (!entity?.id) return json({ error: "Missing subscription entity" }, 400);

            const update: Record<string, unknown> = { status: EVENT_STATUS[event] };
            if (entity.current_end) {
                update.current_period_end = new Date(entity.current_end * 1000).toISOString();
            }

            const { error } = await db
                .from("subscriptions")
                .update(update)
                .eq("razorpay_subscription_id", entity.id);
            if (error) throw error;
        } else if (event === "payment.failed") {
            const subscriptionId = body.payload?.payment?.entity?.subscription_id;
            // Razorpay retries failed charges itself; we just surface the state.
            // subscription.halted arrives later if all retries fail.
            if (subscriptionId) {
                const { error } = await db
                    .from("subscriptions")
                    .update({ status: "past_due" })
                    .eq("razorpay_subscription_id", subscriptionId)
                    .eq("status", "active");
                if (error) throw error;
            }
        }
        // Unknown events are acknowledged so Razorpay doesn't keep retrying.

        return json({ received: true });
    } catch (err) {
        console.error(`razorpay-webhook failed for event ${event}`, err);
        // Non-2xx makes Razorpay retry the delivery later — desirable for
        // transient DB errors.
        return json({ error: "Webhook processing failed" }, 500);
    }
};
