// src/data/servicesData.ts
// Freelance service catalogue for the /services page. YGM — Your Growth
// Matters — is the YouTube growth sub-brand; the broader social media
// services sit above it under the Self Craft Skills parent brand.
// Prices are the live 2026 rates — update here, not in the page.

/** Enquiries share the main site's channels so nothing lands in a second inbox. */
export const CONTACT = {
    whatsapp: "https://wa.me/message/4NYE3ABSMTN5K1",
    email: "selfcraftskills@gmail.com",
};

export interface ServiceCategory {
    no: string;
    title: string;
    desc: string;
}

/** The six-category overview — platform-agnostic, no pricing attached. */
export const serviceCategories: ServiceCategory[] = [
    {
        no: "01",
        title: "Social Media Strategy & Consulting",
        desc: "Platform strategy, content direction, competitor research, social audits and growth guidance.",
    },
    {
        no: "02",
        title: "Content Strategy & Planning",
        desc: "Content ideas, calendars, platform-specific planning and content repurposing.",
    },
    {
        no: "03",
        title: "Social Media Account Management",
        desc: "End-to-end channel support, scheduling, publishing, community engagement and optimisation.",
    },
    {
        no: "04",
        title: "Content Development & Scripting",
        desc: "Short-form scripts, hooks, captions, LinkedIn posts and YouTube titles, descriptions and outlines.",
    },
    {
        no: "05",
        title: "Creative Production & Direction",
        desc: "YouTube thumbnails, social posts and carousels, Reels/Shorts editing and AI-assisted content.",
    },
    {
        no: "06",
        title: "Analytics & Growth Optimisation",
        desc: "Performance reports, content analysis, SEO, channel audits and data-informed growth recommendations.",
    },
];

export type YgmServiceId = "management" | "strategy" | "branding" | "shorts";

export interface YgmService {
    id: YgmServiceId;
    title: string;
    desc: string;
}

export const ygmServices: YgmService[] = [
    {
        id: "management",
        title: "YouTube Channel Management",
        desc: "Full-service upload scheduling, SEO-optimised titles, descriptions, tags, playlists, chapters, cards, and end screens.",
    },
    {
        id: "strategy",
        title: "Content Strategy & Planning",
        desc: "Data-driven keyword research, competitor analysis, content planning, and analytics to maximise reach and watch time.",
    },
    {
        id: "branding",
        title: "Thumbnails & Channel Branding",
        desc: "Eye-catching custom thumbnails, channel banners, and community graphics that strengthen your visual identity.",
    },
    {
        id: "shorts",
        title: "Shorts, Reels & Consultations",
        desc: "Repurposing long-form content into Shorts and Reels, plus 1-on-1 strategy consultations tailored to your channel goals.",
    },
];

export interface YgmPlan {
    name: string;
    /** Struck-through list price. */
    was: string;
    now: string;
    period: string;
    /** Shown above the card when the tier builds on the one before it. */
    carryOver?: string;
    features: string[];
    focus: string;
    audience: string;
    /** The middle tier is the one most channels land on. */
    highlighted?: boolean;
}

export const ygmPlans: YgmPlan[] = [
    {
        name: "YGM Essentials",
        was: "₹9,999",
        now: "₹7,999",
        period: "per month",
        features: [
            "Up to 8 video uploads per month",
            "Uploading and scheduling",
            "SEO optimisation for titles, descriptions, and tags",
            "Playlist organisation",
            "Chapters, cards, and end screens where applicable",
            "Monthly channel performance report",
        ],
        focus: "Consistency, organisation, and channel maintenance.",
        audience: "For creators who need reliable channel operations.",
    },
    {
        name: "YGM Growth",
        was: "₹17,999",
        now: "₹15,999",
        period: "per month",
        carryOver: "Everything in Essentials, plus:",
        features: [
            "Competitor research",
            "Monthly analytics review",
            "CTR, watch time, and retention review where data is available",
            "Monthly growth report with recommendations",
            "10 content ideas per month",
            "Content planning support",
        ],
        focus: "Better-informed decisions and a clearer content direction.",
        audience: "For creators who want more strategic support.",
        highlighted: true,
    },
    {
        name: "YGM Authority",
        was: "₹25,999",
        now: "₹23,999",
        period: "per month",
        carryOver: "Everything in Growth, plus:",
        features: [
            "Up to 8 custom thumbnails per month",
            "Up to 5 community post graphics per month",
            "Channel banner design or update support, as agreed during onboarding",
        ],
        focus: "A more consistent channel identity and a streamlined creative workflow.",
        audience: "For creators who need strategy and creative support together.",
    },
];

export interface OneTimeService {
    id: "audit" | "consult";
    title: string;
    price: string;
    terms: string;
    listLabel: string;
    items: string[];
}

export const oneTimeServices: OneTimeService[] = [
    {
        id: "audit",
        title: "YouTube Channel Audit",
        price: "₹1,999",
        terms: "One time",
        listLabel: "Includes:",
        items: [
            "Channel homepage and organisation review",
            "Review of selected videos and metadata",
            "Thumbnail and title observations",
            "SEO and content presentation opportunities",
            "Prioritised recommendations for improvement",
        ],
    },
    {
        id: "consult",
        title: "1-on-1 Consultation",
        price: "₹1,499",
        terms: "60 mins",
        listLabel: "Discuss topics such as:",
        items: [
            "Content strategy and planning",
            "Channel optimisation",
            "Thumbnail and title direction",
            "YouTube Studio analytics",
            "Publishing workflow and growth priorities",
        ],
    },
];

export interface AddOn {
    service: string;
    price: string;
    revisions: string;
}

export const addOns: AddOn[] = [
    { service: "Custom YouTube thumbnail", price: "₹700 / thumbnail", revisions: "2 rounds" },
    { service: "Community post graphic", price: "₹500 / graphic", revisions: "2 rounds" },
    { service: "Channel banner design", price: "₹2,000 / banner", revisions: "2 rounds" },
    { service: "Shorts / Reels editing", price: "Starting at ₹700 / video", revisions: "1 round" },
    { service: "Long-form YouTube editing", price: "Starting at ₹3,000 / video", revisions: "2 rounds" },
];
