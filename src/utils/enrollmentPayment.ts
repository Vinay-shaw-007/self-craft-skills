const RAZORPAY_SCRIPT_URL = "https://checkout.razorpay.com/v1/checkout.js";
const RAZORPAY_KEY_ID = "rzp_live_SKUTPQDrl2Uump";
const DEFAULT_ENROLLMENT_AMOUNT_PAISE = 57900;
const COURSE_NAME = "AI Unlocked: Zero to Hero";
const ENROLLMENT_PAYMENT_STORAGE_KEY = "scs_enrollment_payment_id";

let razorpayScriptPromise: Promise<boolean> | null = null;

const loadRazorpayScript = (): Promise<boolean> => {
    if (typeof window === "undefined") {
        return Promise.resolve(false);
    }

    if ((window as Window & { Razorpay?: unknown }).Razorpay) {
        return Promise.resolve(true);
    }

    if (razorpayScriptPromise) {
        return razorpayScriptPromise;
    }

    razorpayScriptPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = RAZORPAY_SCRIPT_URL;
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });

    return razorpayScriptPromise;
};

export const getStoredEnrollmentPaymentId = (): string => {
    if (typeof window === "undefined") {
        return "";
    }

    return window.localStorage.getItem(ENROLLMENT_PAYMENT_STORAGE_KEY) ?? "";
};

export const storeEnrollmentPaymentId = (paymentId: string): void => {
    if (typeof window === "undefined" || !paymentId) {
        return;
    }

    window.localStorage.setItem(ENROLLMENT_PAYMENT_STORAGE_KEY, paymentId);
};

interface EnrollmentPaymentConfig {
    amountPaise?: number;
    planName?: string;
}

export const startEnrollmentPayment = async (
    config: EnrollmentPaymentConfig = {},
): Promise<void> => {
    const amountPaise = config.amountPaise ?? DEFAULT_ENROLLMENT_AMOUNT_PAISE;
    const planNameSuffix = config.planName ? ` - ${config.planName}` : "";

    const existingPaymentId = getStoredEnrollmentPaymentId();
    if (existingPaymentId) {
        const redirectUrl = new URL("/enroll/complete", window.location.origin);
        redirectUrl.searchParams.set("payment_id", existingPaymentId);
        window.location.assign(redirectUrl.toString());
        return;
    }

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded || !window.Razorpay) {
        window.alert("Payment not completed. Please try again.");
        return;
    }

    const options: RazorpayOptions = {
        key: RAZORPAY_KEY_ID,
        amount: amountPaise,
        currency: "INR",
        name: "Self Craft Skills",
        description: `${COURSE_NAME}${planNameSuffix}`,
        handler: (response) => {
            if (!response?.razorpay_payment_id) {
                window.alert("Payment not completed. Please try again.");
                return;
            }

            storeEnrollmentPaymentId(response.razorpay_payment_id);
            const redirectUrl = new URL(
                "/enroll/complete",
                window.location.origin,
            );
            redirectUrl.searchParams.set("payment_id", response.razorpay_payment_id);
            window.location.assign(redirectUrl.toString());
        },
        modal: {
            ondismiss: () => {
                window.alert("Payment not completed. Please try again.");
            },
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", () => {
        window.alert("Payment not completed. Please try again.");
    });
    paymentObject.open();
};

export const enrollmentMeta = {
    courseName: COURSE_NAME,
};
