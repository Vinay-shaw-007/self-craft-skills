// netlify/lib/razorpay.mts
// Thin Razorpay REST helpers (no SDK dependency — the API is plain HTTPS
// with basic auth, and functions cold-start faster with fewer deps).
import { createHmac, timingSafeEqual } from "node:crypto";

const RAZORPAY_BASE = "https://api.razorpay.com/v1";

const authHeader = (): string => {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
        throw new Error("Missing RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET env var");
    }
    return "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64");
};

export interface RazorpaySubscription {
    id: string;
    status: string;
    short_url?: string;
    current_end?: number | null;
}

/**
 * Creates a Razorpay Subscription against the plan configured in the
 * dashboard (RAZORPAY_PLAN_ID). total_count is mandatory for subscriptions:
 * 120 monthly cycles = 10 years, effectively "until cancelled".
 */
export const createSubscription = async (userId: string): Promise<RazorpaySubscription> => {
    const planId = process.env.RAZORPAY_PLAN_ID;
    if (!planId) throw new Error("Missing RAZORPAY_PLAN_ID env var");

    const res = await fetch(`${RAZORPAY_BASE}/subscriptions`, {
        method: "POST",
        headers: {
            authorization: authHeader(),
            "content-type": "application/json",
        },
        body: JSON.stringify({
            plan_id: planId,
            total_count: 120,
            customer_notify: 1,
            notes: { user_id: userId },
        }),
    });

    if (!res.ok) {
        const detail = await res.text();
        throw new Error(`Razorpay create subscription failed (${res.status}): ${detail}`);
    }
    return (await res.json()) as RazorpaySubscription;
};

/**
 * Cancels a subscription at the end of the current billing cycle, so the
 * member keeps access for the period they already paid for.
 */
export const cancelSubscription = async (subscriptionId: string): Promise<RazorpaySubscription> => {
    const res = await fetch(`${RAZORPAY_BASE}/subscriptions/${subscriptionId}/cancel`, {
        method: "POST",
        headers: {
            authorization: authHeader(),
            "content-type": "application/json",
        },
        body: JSON.stringify({ cancel_at_cycle_end: 1 }),
    });

    if (!res.ok) {
        const detail = await res.text();
        throw new Error(`Razorpay cancel subscription failed (${res.status}): ${detail}`);
    }
    return (await res.json()) as RazorpaySubscription;
};

/**
 * Verifies the X-Razorpay-Signature header on a webhook delivery:
 * HMAC-SHA256 of the raw request body with the webhook secret.
 */
export const verifyWebhookSignature = (rawBody: string, signature: string | null): boolean => {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret || !signature) return false;

    const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
    const a = Buffer.from(expected, "utf8");
    const b = Buffer.from(signature, "utf8");
    return a.length === b.length && timingSafeEqual(a, b);
};
