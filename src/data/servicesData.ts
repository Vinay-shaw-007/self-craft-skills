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


export type PlatformId = "youtube" | "instagram";

export interface YgmPlan {
    name: string;
    /** Struck-through list price. Only where a higher list price really exists. */
    was?: string;
    now: string;
    period: string;
    /** Shown above the card when the tier builds on the one before it. */
    carryOver?: string;
    features: string[];
    focus: string;
    audience: string;
    /** The middle tier is the one most clients land on. */
    highlighted?: boolean;
}

export interface OneTimeService {
    id: string;
    icon: "audit" | "consult";
    title: string;
    price: string;
    terms: string;
    listLabel: string;
    items: string[];
}

export interface AddOn {
    service: string;
    price: string;
    revisions: string;
}

export interface PlatformCatalogue {
    id: PlatformId;
    /** Toggle label. */
    label: string;
    /** Pill above the plans grid. */
    badge: string;
    plansSub: string;
    oneTimeSub: string;
    addOnsSub: string;
    plans: YgmPlan[];
    oneTime: OneTimeService[];
    addOns: AddOn[];
    /** Scope boundaries worth stating before a client asks. */
    notes: { label: string; text: string }[];
}

const youtube: PlatformCatalogue = {
    id: "youtube",
    label: "YouTube",
    badge: "For YouTube Channels",
    plansSub: "Each tier builds on the one before it, with no lock-in. Switch platform above for Instagram plans.",
    oneTimeSub: "Get a clearer picture of your channel and the opportunities worth exploring.",
    addOnsSub: "Available on their own or alongside any monthly plan.",
    plans: [
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
    ],
    oneTime: [
        {
            id: "yt-audit",
            icon: "audit",
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
            id: "yt-consult",
            icon: "consult",
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
    ],
    addOns: [
        { service: "Custom YouTube thumbnail", price: "₹700 / thumbnail", revisions: "2 rounds" },
        { service: "Community post graphic", price: "₹500 / graphic", revisions: "2 rounds" },
        { service: "Channel banner design", price: "₹2,000 / banner", revisions: "2 rounds" },
        { service: "Shorts / Reels editing", price: "Starting at ₹700 / video", revisions: "1 round" },
        { service: "Long-form YouTube editing", price: "Starting at ₹3,000 / video", revisions: "2 rounds" },
    ],
    notes: [
        {
            label: "Upload allowance",
            text: "Counted per calendar month and does not roll over. Extra uploads are charged at the rate card.",
        },
        {
            label: "Not included",
            text: "Paid ads and ad spend, influencer fees, filming, and long-form editing beyond the agreed allowance.",
        },
        {
            label: "Revisions",
            text: "Two revision rounds per designed thumbnail or graphic; further rounds or out-of-scope requests may cost extra.",
        },
    ],
};

const instagram: PlatformCatalogue = {
    id: "instagram",
    label: "Instagram",
    badge: "For Instagram Profiles",
    plansSub: "Feed, Stories and Reels handled together, with no lock-in. Switch platform above for YouTube plans.",
    oneTimeSub: "Start with a clear read on your profile before committing to a monthly package.",
    addOnsSub: "Buy any piece on its own, or top up a monthly package when a month runs heavy.",
    plans: [
        {
            name: "YGM Essentials",
            now: "₹7,999",
            period: "per month",
            features: [
                "Up to 8 feed posts per month, including 2 carousels",
                "2 basic Reel edits per month",
                "Monthly content strategy and ideation",
                "Captions, hooks, and hashtag research",
                "Instagram SEO optimisation",
                "Stories planning, coordination, and publishing",
                "Scheduling and publishing",
                "Profile optimisation",
                "Monthly analytics report",
            ],
            focus: "Consistency, a clear content direction, and a profile that converts.",
            audience: "For creators building a consistent Instagram presence.",
        },
        {
            name: "YGM Growth",
            now: "₹15,999",
            period: "per month",
            carryOver: "Everything in Essentials, plus:",
            features: [
                "Up to 12 feed posts per month, including 4 carousels",
                "4 basic Reel edits per month",
                "Monthly competitor research",
                "Advanced content planning",
                "Performance-based recommendations",
                "Comments and DMs answered once per working day",
                "Detailed monthly analytics",
                "Monthly growth action plan",
            ],
            focus: "Data-informed decisions and an audience that stays engaged.",
            audience: "For creators seeking strategic, data-informed growth.",
            highlighted: true,
        },
        {
            name: "YGM Authority",
            now: "₹23,999",
            period: "per month",
            carryOver: "Everything in Growth, plus:",
            features: [
                "Up to 16 feed posts per month, including 6 carousels",
                "6 basic Reel edits per month",
                "8 custom Story designs per month",
                "Deeper competitor and content analysis",
                "Content performance optimisation",
                "Comments and DMs answered twice per working day",
                "Priority content coordination",
            ],
            focus: "A complete, active presence across feed, Stories, and Reels.",
            audience: "For creators building a strong, active personal brand.",
        },
    ],
    oneTime: [
        {
            id: "ig-audit",
            icon: "audit",
            title: "Instagram Profile Audit",
            price: "₹1,499",
            terms: "One time",
            listLabel: "Includes:",
            items: [
                "Profile, bio, and highlights review",
                "Content pillars and feed consistency review",
                "Hook, caption, and hashtag observations",
                "Instagram SEO and discoverability opportunities",
                "Prioritised recommendations for improvement",
            ],
        },
        {
            id: "ig-consult",
            icon: "consult",
            title: "Instagram Strategy Call",
            price: "₹1,499",
            terms: "60 mins",
            listLabel: "Discuss topics such as:",
            items: [
                "Content strategy and posting cadence",
                "Profile and highlight optimisation",
                "Hooks, carousels, and Reel direction",
                "Instagram Insights, read properly",
                "Publishing workflow and growth priorities",
            ],
        },
    ],
    addOns: [
        { service: "Static post design", price: "₹500 / post", revisions: "2 rounds" },
        { service: "Carousel design, up to 5 slides", price: "₹1,000 / carousel", revisions: "2 rounds" },
        { service: "Additional carousel slide", price: "₹150 / slide", revisions: "2 rounds" },
        { service: "Instagram Story design", price: "₹300 / story", revisions: "1 round" },
        { service: "Reel cover design", price: "₹250 / cover", revisions: "2 rounds" },
        { service: "Basic Reel editing", price: "Starting at ₹700 / video", revisions: "1 round" },
        { service: "Advanced Reel editing", price: "Starting at ₹1,500 / video", revisions: "2 rounds" },
        { service: "Profile optimisation", price: "₹999 / one time", revisions: "—" },
        { service: "Monthly content calendar", price: "₹1,500 / month", revisions: "—" },
        { service: "Monthly analytics and recommendations", price: "₹1,500 / month", revisions: "—" },
    ],
    notes: [
        {
            label: "Content allowance",
            text: "Feed posts include static designs and carousels within each package's stated carousel limit. Allowances are counted per calendar month and do not roll over.",
        },
        {
            label: "Stories",
            text: "Planning, coordination, and publishing are included on every package. Custom Story graphic design is included on Authority and charged separately below.",
        },
        {
            label: "Reels",
            text: "Basic edits are included up to each package's limit. Advanced editing, and anything beyond the limit, is charged at the rate card. Filming is not included.",
        },
        {
            label: "Community management",
            text: "Comment and DM responses are included on Growth and Authority, Monday to Friday, within the response limits agreed at onboarding.",
        },
        {
            label: "Not included",
            text: "Paid ads and ad spend, influencer fees, filming, and content beyond the agreed monthly allowance.",
        },
        {
            label: "Revisions",
            text: "Two revision rounds per designed post or carousel; further rounds or out-of-scope requests may cost extra.",
        },
    ],
};

/** Both catalogues, in the order the toggle shows them. */
export const platforms: PlatformCatalogue[] = [youtube, instagram];

/** The cheapest monthly plan anywhere — the "from" figure quoted off-page. */
export const ENTRY_PRICE = youtube.plans[0].now;
/** The cheapest way in without a retainer. */
export const ENTRY_AUDIT_PRICE = instagram.oneTime[0].price;
/** The monthly ladder, identical on both platforms. */
export const PLAN_PRICES = youtube.plans.map((p) => p.now);
export const CONSULT_PRICE = youtube.oneTime[1].price;
