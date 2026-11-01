// src/data/servicesData.ts
// Freelance service catalogue for the /services page. YGM — Your Growth
// Matters — is the growth sub-brand, selling YouTube, Instagram and LinkedIn
// retainers; the broader social media services sit above it under the Self
// Craft Skills parent brand.
// Prices are the live 2026 rates — update here, not in the page.

import { waLink } from "./contact";

export { CONTACT, WA_YGM } from "./contact";

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

export type YgmServiceId = "management" | "strategy" | "branding" | "shortform";

export interface YgmService {
    id: YgmServiceId;
    title: string;
    desc: string;
}

export const ygmServices: YgmService[] = [
    {
        id: "management",
        title: "Channel & Account Management",
        desc: "Publishing and scheduling, SEO-optimised titles, descriptions, captions and tags, plus playlists, chapters, and profile housekeeping.",
    },
    {
        id: "strategy",
        title: "Content Strategy & Planning",
        desc: "Keyword and hashtag research, competitor analysis, content planning, and analytics read properly, so decisions come from your own numbers.",
    },
    {
        id: "branding",
        title: "Thumbnails, Carousels & Branding",
        desc: "Custom thumbnails, feed and document carousels, banners, Story designs, and community graphics that strengthen your visual identity.",
    },
    {
        id: "shortform",
        title: "Short-Form, Writing & Calls",
        desc: "Long-form repurposed into Shorts and Reels, posts ghostwritten in your voice, and 1-on-1 strategy calls tailored to your goals.",
    },
];


export type PlatformId = "youtube" | "instagram" | "linkedin";

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
    plansSub: "Each tier builds on the one before it, with no lock-in. Use the switch above to compare platforms.",
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
                "SEO for titles, descriptions, and tags",
                "Playlist organisation",
                "Chapters, cards, and end screens",
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
                "CTR, watch time, and retention review",
                "Growth report with recommendations",
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
                "Up to 5 community post graphics",
                "Channel banner design or update",
                "Creative direction set at onboarding",
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
                "Channel homepage and layout review",
                "Selected videos and metadata review",
                "Thumbnail and title observations",
                "SEO and presentation opportunities",
                "Prioritised recommendations",
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
                "Publishing workflow and priorities",
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
    plansSub: "Feed, Stories and Reels handled together, with no lock-in. Use the switch above to compare platforms.",
    oneTimeSub: "Start with a clear read on your profile before committing to a monthly package.",
    addOnsSub: "Buy any piece on its own, or top up a monthly package when a month runs heavy.",
    plans: [
        {
            name: "YGM Essentials",
            was: "₹9,999",
            now: "₹7,999",
            period: "per month",
            features: [
                "Up to 8 feed posts, including 2 carousels",
                "2 basic Reel edits per month",
                "Content strategy, captions, and hooks",
                "Profile, hashtag, and Instagram SEO",
                "Stories, scheduling, and publishing",
                "Monthly analytics report",
            ],
            focus: "Consistency, a clear content direction, and a profile that converts.",
            audience: "For creators building a consistent Instagram presence.",
        },
        {
            name: "YGM Growth",
            was: "₹17,999",
            now: "₹14,999",
            period: "per month",
            carryOver: "Everything in Essentials, plus:",
            features: [
                "Up to 12 feed posts, including 4 carousels",
                "4 basic Reel edits per month",
                "Monthly competitor research",
                "Advanced content planning",
                "Comments and DMs once per working day",
                "Detailed analytics and action plan",
            ],
            focus: "Data-informed decisions and an audience that stays engaged.",
            audience: "For creators seeking strategic, data-informed growth.",
            highlighted: true,
        },
        {
            name: "YGM Authority",
            was: "₹25,999",
            now: "₹21,999",
            period: "per month",
            carryOver: "Everything in Growth, plus:",
            features: [
                "Up to 16 feed posts, including 6 carousels",
                "6 basic Reel edits per month",
                "8 custom Story designs per month",
                "Deeper competitor and content analysis",
                "Comments and DMs twice per working day",
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
                "Content pillars and feed consistency",
                "Hook, caption, and hashtag notes",
                "SEO and discoverability opportunities",
                "Prioritised recommendations",
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
                "Publishing workflow and priorities",
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


const linkedin: PlatformCatalogue = {
    id: "linkedin",
    label: "LinkedIn",
    badge: "For LinkedIn Profiles",
    plansSub: "Posts written in your voice and delivered ready to publish, with no lock-in. Use the switch above to compare platforms.",
    oneTimeSub: "Start with a clear read on your profile and positioning before committing to a monthly package.",
    addOnsSub: "Buy any piece on its own, or top up a monthly package when a month runs heavy.",
    plans: [
        {
            name: "YGM Essentials",
            was: "₹12,999",
            now: "₹9,999",
            period: "per month",
            features: [
                "12 ghostwritten posts per month",
                "Content strategy and content pillars",
                "Profile optimisation at onboarding",
                "Posts delivered on a weekly schedule",
                "One 30-minute voice call per month",
                "Monthly performance report",
            ],
            focus: "A consistent voice and a profile that explains what you do.",
            audience: "For founders and professionals starting to post seriously.",
        },
        {
            name: "YGM Growth",
            was: "₹21,999",
            now: "₹17,999",
            period: "per month",
            carryOver: "Everything in Essentials, plus:",
            features: [
                "Up to 16 ghostwritten posts per month",
                "2 of them as document carousels",
                "Industry and competitor research",
                "A running idea bank you can draw from",
                "Two 30-minute voice calls per month",
                "Detailed monthly analytics",
            ],
            focus: "A sharper point of view, backed by what is working in your market.",
            audience: "For founders building reach and authority in a niche.",
            highlighted: true,
        },
        {
            name: "YGM Authority",
            was: "₹29,999",
            now: "₹25,999",
            period: "per month",
            carryOver: "Everything in Growth, plus:",
            features: [
                "Up to 20 ghostwritten posts per month",
                "4 of them as document carousels",
                "Profile and banner refresh",
                "A 30-minute voice call every week",
                "Drafted replies for comment threads",
                "Quarterly positioning review",
            ],
            focus: "A deliberate personal brand, maintained week by week.",
            audience: "For founders treating LinkedIn as a primary channel.",
        },
    ],
    oneTime: [
        {
            id: "li-audit",
            icon: "audit",
            title: "LinkedIn Profile Audit",
            price: "₹1,499",
            terms: "One time",
            listLabel: "Includes:",
            items: [
                "Headline, About, and featured review",
                "Positioning and content pillars",
                "Recent posts and what they earned",
                "Search and discoverability",
                "Prioritised recommendations",
            ],
        },
        {
            id: "li-consult",
            icon: "consult",
            title: "LinkedIn Strategy Call",
            price: "₹1,499",
            terms: "60 mins",
            listLabel: "Discuss topics such as:",
            items: [
                "What you want to be known for",
                "Content pillars and posting cadence",
                "Hooks, structure, and formats",
                "Reading your own analytics",
                "Turning attention into conversations",
            ],
        },
    ],
    addOns: [
        { service: "Ghostwritten LinkedIn post", price: "₹600 / post", revisions: "2 rounds" },
        { service: "Document carousel, up to 6 slides", price: "₹1,200 / carousel", revisions: "2 rounds" },
        { service: "Additional carousel slide", price: "₹150 / slide", revisions: "2 rounds" },
        { service: "Profile optimisation", price: "₹1,999 / one time", revisions: "2 rounds" },
        { service: "Profile banner design", price: "₹1,000 / banner", revisions: "2 rounds" },
        { service: "Monthly content calendar", price: "₹1,500 / month", revisions: "—" },
        { service: "Monthly analytics and recommendations", price: "₹1,500 / month", revisions: "—" },
    ],
    notes: [
        {
            label: "Publishing",
            text: "You publish. We deliver finished posts, with any graphics attached, to the schedule agreed at onboarding. If you would rather we published for you, we can work through a scheduling tool you authorise yourself — we never ask for your LinkedIn password and we do not use shared logins.",
        },
        {
            label: "Engagement",
            text: "Replying to comments, and commenting on other people's posts, happens from your own account. On Authority we draft those replies for you to post.",
        },
        {
            label: "Reporting",
            text: "LinkedIn performance data sits behind your account, so monthly reporting uses the analytics export you share with us.",
        },
        {
            label: "Calls",
            text: "Ghostwriting depends on regular contact — the calls in your plan are how the writing stays in your voice. Unused calls do not roll over.",
        },
        {
            label: "Not included",
            text: "Paid ads and ad spend, InMail and outreach campaigns, lead generation, and content beyond the agreed monthly allowance.",
        },
        {
            label: "Carousels",
            text: "A document carousel runs to six slides. Longer decks are billed per additional slide at the rate card above. Carousels count towards your monthly post allowance.",
        },
        {
            label: "Revisions",
            text: "Two revision rounds per post or carousel; further rounds or out-of-scope requests may cost extra.",
        },
    ],
};

/** Every catalogue, in the order the toggle shows them. */
export const platforms: PlatformCatalogue[] = [youtube, instagram, linkedin];

/** "Get started" on a plan card: the message names tier, platform and price. */
export const planEnquiry = (platform: PlatformCatalogue, plan: YgmPlan) =>
    waLink(
        `Hi 👋, I'd like to enquire about the ${plan.name} plan for ${platform.label} `
        + `(${plan.now} ${plan.period}). Please share the details.`,
    );

/** The one-time card's CTA: we know the platform, not which of the two products. */
export const oneTimeEnquiry = (platform: PlatformCatalogue) =>
    waLink(
        `Hi 👋, I'd like to book a one-time ${platform.label} service — `
        + `an audit or a strategy call. Please share the details.`,
    );

const rupees = (price: string) => Number(price.replace(/\D/g, ""));
const cheapest = (prices: string[]) =>
    prices.reduce((a, b) => (rupees(b) < rupees(a) ? b : a));
const dearest = (prices: string[]) =>
    prices.reduce((a, b) => (rupees(b) > rupees(a) ? b : a));

const everyPlanPrice = platforms.flatMap((p) => p.plans.map((plan) => plan.now));

/** The cheapest monthly plan anywhere — the "from" figure quoted off-page. */
export const ENTRY_PRICE = cheapest(everyPlanPrice);
/** The top of the ladder, for quoting a range off-page. */
export const TOP_PRICE = dearest(everyPlanPrice);
/** The cheapest way in without a retainer. */
export const ENTRY_AUDIT_PRICE = cheapest(
    platforms.map((p) => p.oneTime[0].price),
);
export const CONSULT_PRICE = cheapest(
    platforms.map((p) => p.oneTime[1].price),
);
