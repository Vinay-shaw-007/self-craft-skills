// POST /api/cancel-subscription
// Cancels the logged-in user's subscription at the end of the current
// billing cycle (they keep access until then). The webhook confirms the
// cancellation, but we optimistically mark it here too.
import { getUserFromRequest, json, supabaseAdmin } from "../lib/supabase.mts";
import { cancelSubscription } from "../lib/razorpay.mts";

export const config = { path: "/api/cancel-subscription" };

export default async (req: Request): Promise<Response> => {
    if (req.method !== "POST") {
        return json({ error: "Method not allowed" }, 405);
    }

    const user = await getUserFromRequest(req);
    if (!user) {
        return json({ error: "Not logged in" }, 401);
    }

    const db = supabaseAdmin();
    const { data: sub } = await db
        .from("subscriptions")
        .select("razorpay_subscription_id, status")
        .eq("user_id", user.id)
        .in("status", ["active", "past_due", "authenticated"])
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

    if (!sub?.razorpay_subscription_id) {
        return json({ error: "No active subscription to cancel" }, 404);
    }

    try {
        await cancelSubscription(sub.razorpay_subscription_id);

        const { error } = await db
            .from("subscriptions")
            .update({ status: "cancelled" })
            .eq("razorpay_subscription_id", sub.razorpay_subscription_id);
        if (error) throw error;

        return json({ cancelled: true });
    } catch (err) {
        console.error("cancel-subscription failed", err);
        return json({ error: "Could not cancel subscription" }, 500);
    }
};
