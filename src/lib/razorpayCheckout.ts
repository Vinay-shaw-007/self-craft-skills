// src/lib/razorpayCheckout.ts
// Loads Razorpay's Checkout script on demand and opens the payment modal
// for a subscription. Resolves true when payment succeeds, false when the
// user closes the modal.
declare global {
    interface Window {
        Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
    }
}

const SCRIPT_URL = "https://checkout.razorpay.com/v1/checkout.js";

const loadScript = (): Promise<boolean> =>
    new Promise((resolve) => {
        if (window.Razorpay) return resolve(true);
        const script = document.createElement("script");
        script.src = SCRIPT_URL;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });

interface CheckoutParams {
    razorpayKeyId: string;
    subscriptionId: string;
    email?: string;
    name?: string;
}

export const openRazorpayCheckout = async (params: CheckoutParams): Promise<boolean> => {
    const loaded = await loadScript();
    if (!loaded || !window.Razorpay) return false;

    return new Promise((resolve) => {
        const rzp = new window.Razorpay!({
            key: params.razorpayKeyId,
            subscription_id: params.subscriptionId,
            name: "Self Craft Skills",
            description: "All-Access Membership",
            prefill: { email: params.email, name: params.name },
            theme: { color: "#4F46E5" },
            handler: () => resolve(true),
            modal: { ondismiss: () => resolve(false) },
        });
        rzp.open();
    });
};
