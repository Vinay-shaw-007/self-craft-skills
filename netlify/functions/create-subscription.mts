// POST /api/create-subscription
// Creates a Razorpay Subscription for the logged-in user and records it
// (status 'created') in Supabase. The frontend then opens Razorpay Checkout
// with the returned subscription_id; the webhook flips the status to
// 'active' once the first charge succeeds.
import { getUserFromRequest, json, supabaseAdmin } from "../lib/supabase.mts";
import { createSubscription, getSubscription } from "../lib/razorpay.mts";

// Razorpay subscription states in which the pending subscription is still
// payable at checkout. Anything else (expired, cancelled, …) means we must
// create a fresh one instead of reusing the stale id.
const REUSABLE_RZP_STATES = new Set(["created", "authenticated"]);

// Declaring the path here (Netlify Functions v2) makes the function respond
// directly at /api/create-subscription — no netlify.toml redirect needed,
// so it can't be shadowed by the SPA catch-all in public/_redirects.
export const config = { path: "/api/create-subscription" };

export default async (req: Request): Promise<Response> => {
    if (req.method !== "POST") {
        return json({ error: "Method not allowed" }, 405);
    }

    const user = await getUserFromRequest(req);
    if (!user) {
        return json({ error: "Not logged in" }, 401);
    }

    const db = supabaseAdmin();

    // If the user already has a live subscription, don't create another.
    const { data: existing } = await db
        .from("subscriptions")
        .select("razorpay_subscription_id, status, current_period_end")
        .eq("user_id", user.id)
        .in("status", ["created", "authenticated", "active", "past_due"])
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

    if (existing?.status === "active" || existing?.status === "past_due") {
        return json({ error: "You already have an active subscription" }, 409);
    }

    try {
        // Reuse a pending subscription from an abandoned checkout, but only if
        // Razorpay still considers it payable. Razorpay auto-expires unpaid
        // subscriptions, so a stale id would fail checkout with "id does not
        // exist" — in that case we fall through and create a fresh one.
        if (existing?.razorpay_subscription_id) {
            const live = await getSubscription(existing.razorpay_subscription_id);
            if (live && REUSABLE_RZP_STATES.has(live.status)) {
                return json({
                    subscriptionId: existing.razorpay_subscription_id,
                    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
                });
            }
            // Stale/expired — mark the old row so it won't be reused again.
            await db
                .from("subscriptions")
                .update({ status: "expired" })
                .eq("razorpay_subscription_id", existing.razorpay_subscription_id);
        }

        const subscription = await createSubscription(user.id);

        const { error: insertError } = await db.from("subscriptions").insert({
            user_id: user.id,
            razorpay_subscription_id: subscription.id,
            status: "created",
        });
        if (insertError) {
            console.error("Failed to record subscription", insertError);
            return json({ error: "Failed to record subscription" }, 500);
        }

        return json({
            subscriptionId: subscription.id,
            razorpayKeyId: process.env.RAZORPAY_KEY_ID,
        });
    } catch (err) {
        console.error("create-subscription failed", err);
        return json({ error: "Could not create subscription" }, 500);
    }
};
