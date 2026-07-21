// src/hooks/useSubscription.tsx
//
// Single source of truth for "is this user currently subscribed".
// Every page/component reads subscription state through useSubscription().
//
// Two modes, decided once at startup:
//  • REAL — Supabase env vars are configured: status comes from
//    GET /api/subscription-status, subscribe() runs Razorpay Checkout,
//    cancel() calls POST /api/cancel-subscription.
//  • MOCK — no env vars (local dev before setup): the old localStorage
//    state machine, driven by the dev toggle. Nothing else in the app
//    knows or cares which mode is active.
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { PLAN_NAME } from "../config/pricing";
import { isSupabaseConfigured } from "../lib/supabaseClient";
import { openRazorpayCheckout } from "../lib/razorpayCheckout";
import { useAuth } from "./useAuth";

export type SubscriptionStatus =
    | "active" | "inactive" | "cancelled"
    | "created" | "authenticated" | "past_due"
    | "halted" | "paused" | "completed" | "expired";

export type SubscribeResult = "success" | "pending" | "needs_login" | "error";

interface SubscriptionContextValue {
    status: SubscriptionStatus;
    isSubscribed: boolean;
    planName: string;
    renewsOn: string | null;
    /** True while the first status fetch for a logged-in user is in flight. */
    loading: boolean;
    /** True when running against localStorage instead of the real API. */
    isMockMode: boolean;
    subscribe: () => Promise<SubscribeResult>;
    cancel: () => Promise<void>;
    /** Dev-only escape hatch used by <SubscriptionDevToggle /> in mock mode. */
    setMockStatus: (status: SubscriptionStatus) => void;
}

const STORAGE_KEY = "scs_mock_subscription_status";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const formatDate = (iso: string | null): string | null =>
    iso
        ? new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
        : null;

const readMockStatus = (): SubscriptionStatus => {
    if (typeof window === "undefined") return "inactive";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "active" || stored === "cancelled" ? stored : "inactive";
};

const SubscriptionContext = createContext<SubscriptionContextValue | undefined>(undefined);

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
    const { user, session } = useAuth();
    const isMockMode = !isSupabaseConfigured;

    const [status, setStatus] = useState<SubscriptionStatus>(isMockMode ? readMockStatus() : "inactive");
    const [isSubscribed, setIsSubscribed] = useState(isMockMode ? readMockStatus() === "active" : false);
    const [renewsOn, setRenewsOn] = useState<string | null>(null);
    const [loading, setLoading] = useState(!isMockMode);

    // ── Mock mode: persist toggle state ────────────────────────────────────
    useEffect(() => {
        if (!isMockMode) return;
        window.localStorage.setItem(STORAGE_KEY, status);
        setIsSubscribed(status === "active");
        setRenewsOn(status === "active" ? "9 Aug 2026" : null);
    }, [isMockMode, status]);

    // ── Real mode: fetch status whenever the session changes ───────────────
    const fetchStatus = useCallback(async (): Promise<boolean> => {
        if (isMockMode) return false;
        if (!session?.access_token) {
            setStatus("inactive");
            setIsSubscribed(false);
            setRenewsOn(null);
            setLoading(false);
            return false;
        }
        try {
            const res = await fetch("/api/subscription-status", {
                headers: { authorization: `Bearer ${session.access_token}` },
            });
            if (!res.ok) throw new Error(`status ${res.status}`);
            const data = await res.json();
            setStatus(data.status as SubscriptionStatus);
            setIsSubscribed(Boolean(data.isSubscribed));
            setRenewsOn(formatDate(data.renewsOn));
            return Boolean(data.isSubscribed);
        } catch {
            // Network/API failure: fail closed (not subscribed).
            setStatus("inactive");
            setIsSubscribed(false);
            setRenewsOn(null);
            return false;
        } finally {
            setLoading(false);
        }
    }, [isMockMode, session?.access_token]);

    useEffect(() => {
        void fetchStatus();
    }, [fetchStatus]);

    const value = useMemo<SubscriptionContextValue>(() => ({
        status,
        isSubscribed,
        planName: PLAN_NAME,
        renewsOn,
        loading,
        isMockMode,

        subscribe: async (): Promise<SubscribeResult> => {
            if (isMockMode) {
                setStatus("active");
                return "success";
            }
            if (!session?.access_token || !user) return "needs_login";

            try {
                const res = await fetch("/api/create-subscription", {
                    method: "POST",
                    headers: { authorization: `Bearer ${session.access_token}` },
                });
                if (res.status === 409) {
                    // Already subscribed (e.g. second tab) — just refresh.
                    await fetchStatus();
                    return "success";
                }
                if (!res.ok) return "error";
                const { subscriptionId, razorpayKeyId } = await res.json();

                const paid = await openRazorpayCheckout({
                    razorpayKeyId,
                    subscriptionId,
                    email: user.email ?? undefined,
                    name: (user.user_metadata?.full_name as string | undefined) ?? undefined,
                });
                if (!paid) return "pending";

                // The webhook flips the status; poll briefly until it lands.
                for (let attempt = 0; attempt < 6; attempt++) {
                    if (await fetchStatus()) return "success";
                    await sleep(2000);
                }
                return "pending";
            } catch {
                return "error";
            }
        },

        cancel: async () => {
            if (isMockMode) {
                setStatus("cancelled");
                return;
            }
            if (!session?.access_token) return;
            try {
                await fetch("/api/cancel-subscription", {
                    method: "POST",
                    headers: { authorization: `Bearer ${session.access_token}` },
                });
            } finally {
                await fetchStatus();
            }
        },

        setMockStatus: (next) => {
            if (isMockMode) setStatus(next);
        },
    }), [status, isSubscribed, renewsOn, loading, isMockMode, session, user, fetchStatus]);

    return (
        <SubscriptionContext.Provider value={value}>
            {children}
        </SubscriptionContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components -- provider + hook stay in one file on purpose, see file header
export const useSubscription = (): SubscriptionContextValue => {
    const ctx = useContext(SubscriptionContext);
    if (!ctx) {
        throw new Error("useSubscription must be used within a SubscriptionProvider");
    }
    return ctx;
};
