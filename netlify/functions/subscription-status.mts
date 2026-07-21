// GET /api/subscription-status
// Returns the logged-in user's current subscription state. This is the
// endpoint the frontend useSubscription() hook calls — its response shape
// deliberately mirrors what the mock hook exposes today.
import { getUserFromRequest, json, supabaseAdmin } from "../lib/supabase.mts";

const PLAN_NAME = "Self Craft Skills — All-Access";

export const config = { path: "/api/subscription-status" };

export default async (req: Request): Promise<Response> => {
    if (req.method !== "GET") {
        return json({ error: "Method not allowed" }, 405);
    }

    const user = await getUserFromRequest(req);
    if (!user) {
        return json({ error: "Not logged in" }, 401);
    }

    const { data, error } = await supabaseAdmin()
        .from("subscriptions")
        .select("status, current_period_end")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

    if (error) {
        console.error("subscription-status query failed", error);
        return json({ error: "Could not load subscription" }, 500);
    }

    const status = data?.status ?? "inactive";
    const periodEnd = data?.current_period_end ? new Date(data.current_period_end) : null;

    // Active always counts; a cancelled subscription stays watchable until
    // the already-paid period runs out.
    const isSubscribed =
        status === "active" ||
        status === "past_due" ||
        (status === "cancelled" && periodEnd !== null && periodEnd > new Date());

    return json({
        status,
        isSubscribed,
        planName: PLAN_NAME,
        renewsOn: periodEnd ? periodEnd.toISOString() : null,
    });
};
