// src/data/contact.ts
// One WhatsApp number, and the links that open a chat with a first message
// already written.
//
// This replaced a wa.me/message/<code> short link. That link could only ever
// send the single default message set inside the WhatsApp Business app, so a
// ₹25,999 LinkedIn plan enquiry and a ₹299 course question arrived worded
// identically and the conversation started by asking what they wanted. A
// click-to-chat link carries its own text, so each button says where it came
// from. The trade-off is that the number sits in the page source.

/** International format: country code, no plus, no spaces — what wa.me expects. */
const WHATSAPP_NUMBER = "917890041604";

/** Opens WhatsApp with `message` typed and ready to send. */
export const waLink = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Site-wide buttons, which know nothing about what the visitor was reading. */
export const WA_GENERAL = waLink(
    "Hi 👋, I'd like to know more about Self Craft Skills — your courses or YGM growth services. Please share the details.",
);

/** The services side, where no single plan is in view. */
export const WA_YGM = waLink(
    "Hi 👋, I'd like to enquire about YGM growth services. Please share the details.",
);

/** Enquiries share the main site's channels so nothing lands in a second inbox. */
export const CONTACT = {
    whatsapp: WA_GENERAL,
    email: "selfcraftskills@gmail.com",
};
