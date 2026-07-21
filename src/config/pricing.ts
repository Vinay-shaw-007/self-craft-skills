// src/config/pricing.ts
// Single source of truth for the subscription price shown across the site.
// TODO: replace with the real price before launch, and keep it in sync with
// the Razorpay Subscription plan created in the dashboard.
export const MONTHLY_PRICE_RUPEES = 299;
export const MONTHLY_PRICE_DISPLAY = `₹${MONTHLY_PRICE_RUPEES}`;
export const PLAN_NAME = "Self Craft Skills — All-Access";
