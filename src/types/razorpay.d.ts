interface RazorpayPaymentSuccessResponse {
    razorpay_payment_id: string;
    razorpay_order_id?: string;
    razorpay_signature?: string;
}

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    handler: (response: RazorpayPaymentSuccessResponse) => void;
    modal?: {
        ondismiss?: () => void;
    };
}

interface RazorpayInstance {
    open: () => void;
    on: (event: string, callback: () => void) => void;
}

interface RazorpayConstructor {
    new (options: RazorpayOptions): RazorpayInstance;
}

interface Window {
    Razorpay?: RazorpayConstructor;
}
