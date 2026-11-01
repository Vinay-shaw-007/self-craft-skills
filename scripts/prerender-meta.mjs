// scripts/prerender-meta.mjs
//
// Writes a static HTML file per marketing route carrying that route's own
// <title>, description, Open Graph / Twitter tags and structured data.
//
// Why: the SPA sets per-route metadata at runtime in components/Seo.tsx, but
// social scrapers (WhatsApp, LinkedIn, Facebook) don't run JS — they read the
// static tags in index.html. Without this, sharing /services shows the course
// membership card instead of the YGM services one.
//
// Netlify serves /services from services.html before falling through to the
// SPA catch-all in public/_redirects, and each file is a full copy of
// index.html, so the app still boots and routes normally. If a host doesn't
// do extensionless serving, this is a harmless no-op — the SPA handles the
// route as it does today.
//
// Runs after `vite build`, so the hashed asset names are already correct.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const SITE = "https://selfcraftskills.com";

// Prices are read out of the page's own data file rather than restated here,
// so the schema markup can't quietly drift from what visitors are shown.
const DATA = "src/data/servicesData.ts";
const dataSrc = readFileSync(DATA, "utf8");

// Both catalogues carry tiers of the same name, so each is parsed from its
// own slice of the file and the platform is kept in the offer name.
const bounds = [
    ["YouTube", "const youtube: PlatformCatalogue", "const instagram: PlatformCatalogue"],
    ["Instagram", "const instagram: PlatformCatalogue", "const linkedin: PlatformCatalogue"],
    ["LinkedIn", "const linkedin: PlatformCatalogue", "export const platforms"],
];

const plans = [];
const oneOffs = [];

for (const [platform, from, to] of bounds) {
    const start = dataSrc.indexOf(from);
    const end = dataSrc.indexOf(to);
    if (start === -1 || end === -1 || end <= start) {
        console.error(`[prerender-meta] could not find the ${platform} catalogue in ${DATA}. Did the data shape change?`);
        process.exit(1);
    }
    const section = dataSrc.slice(start, end);

    // `was` is optional: only tiers with a real higher list price carry one.
    const p = [...section.matchAll(/name:\s*"(YGM [^"]+)",\s*(?:was:\s*"[^"]*",\s*)?now:\s*"₹([\d,]+)"/g)]
        .map((m) => ({ name: `${m[1]} — ${platform}`, price: m[2].replace(/,/g, "") }));
    const o = [...section.matchAll(/title:\s*"([^"]+)",\s*price:\s*"₹([\d,]+)",\s*terms:\s*"([^"]+)"/g)]
        .map((m) => ({ name: m[1], price: m[2].replace(/,/g, ""), terms: m[3] }));

    if (p.length !== 3 || o.length !== 2) {
        console.error(`[prerender-meta] parsed ${p.length} plans and ${o.length} one-off services for ${platform} — expected 3 and 2. Did the data shape change?`);
        process.exit(1);
    }
    plans.push(...p);
    oneOffs.push(...o);
}

const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "YGM — Social Media Growth & Channel Management",
    serviceType: "Social media and YouTube channel management",
    url: `${SITE}/services`,
    description:
        "Social media strategy, content, channel management and analytics for YouTube, Instagram and LinkedIn — for creators, brands and startups.",
    provider: {
        "@type": "Organization",
        name: "Self Craft Skills",
        url: SITE,
    },
    areaServed: { "@type": "Country", name: "India" },
    availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${SITE}/services`,
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "YGM plans and services",
        itemListElement: [
            ...plans.map((p) => ({
                "@type": "Offer",
                name: p.name,
                priceCurrency: "INR",
                price: p.price,
                priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    priceCurrency: "INR",
                    price: p.price,
                    unitText: "month",
                },
            })),
            ...oneOffs.map((o) => ({
                "@type": "Offer",
                name: o.name,
                priceCurrency: "INR",
                price: o.price,
                description: o.terms,
            })),
        ],
    },
};

const routes = [
    {
        file: "services.html",
        path: "/services",
        title: "Social Media & YouTube Growth | YGM by Self Craft Skills",
        description:
            "Social media strategy, content and channel management for YouTube, Instagram and LinkedIn. Monthly plans from ₹7,999, audits from ₹1,499.",
        ogTitle: "YGM — Your Growth Matters | Social Media Growth & Channel Management",
        ogDescription:
            "Social media strategy, content and channel management for creators and brands. YouTube and Instagram plans from ₹7,999, or a one-time audit from ₹1,499.",
        image: `${SITE}/og-ygm.jpg`,
        imageAlt: "YGM — Your Growth Matters, powered by Self Craft Skills",
        // Google has ignored meta keywords since 2009 — kept only because the
        // site's other pages carry one. Real keyword signal comes from the H1,
        // headings and body copy.
        keywords:
            "social media management, instagram management pricing, youtube channel management, instagram growth services, social media strategy, linkedin content, youtube seo india, channel audit",
        // index.html's schema describes the course membership. Left in place it
        // would tell Google this page is a Product/Course/FAQ it is not.
        dropSchemaTypes: ["Product", "Course", "FAQPage"],
        addSchema: servicesSchema,
    },
];

const indexPath = join(DIST, "index.html");
if (!existsSync(indexPath)) {
    console.error(`[prerender-meta] ${indexPath} not found — run after \`vite build\`.`);
    process.exit(1);
}
const index = readFileSync(indexPath, "utf8");

/** Replace with a hard failure if the tag isn't found, so a change to
 *  index.html can't silently leave a route serving the wrong preview. */
const swap = (html, label, pattern, replacement) => {
    if (!html.match(pattern)) throw new Error(`[prerender-meta] no match for ${label} — index.html changed shape?`);
    return html.replace(pattern, replacement);
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const r of routes) {
    let html = index;
    html = swap(html, "title", /<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
    html = swap(html, "description", /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${esc(r.description)}" />`);
    html = swap(html, "keywords", /<meta name="keywords" content="[^"]*" \/>/,
        `<meta name="keywords" content="${esc(r.keywords)}" />`);
    html = swap(html, "canonical", /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${SITE}${r.path}" />`);
    html = swap(html, "og:title", /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${esc(r.ogTitle)}" />`);
    html = swap(html, "og:description", /<meta property="og:description" content="[^"]*" \/>/,
        `<meta property="og:description" content="${esc(r.ogDescription)}" />`);
    html = swap(html, "og:url", /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${SITE}${r.path}" />`);
    // Scrapers render the card better when the image dimensions are declared.
    html = swap(html, "og:image", /<meta property="og:image" content="[^"]*" \/>/,
        `<meta property="og:image" content="${r.image}" />\n  ` +
        `<meta property="og:image:width" content="1200" />\n  ` +
        `<meta property="og:image:height" content="630" />\n  ` +
        `<meta property="og:image:alt" content="${esc(r.imageAlt)}" />`);
    html = swap(html, "twitter:title", /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${esc(r.ogTitle)}" />`);
    html = swap(html, "twitter:description", /<meta name="twitter:description" content="[^"]*" \/>/,
        `<meta name="twitter:description" content="${esc(r.ogDescription)}" />`);
    html = swap(html, "twitter:image", /<meta name="twitter:image" content="[^"]*" \/>/,
        `<meta name="twitter:image" content="${r.image}" />`);

    // Drop the inherited schema that describes other pages.
    const drop = new Set(r.dropSchemaTypes ?? []);
    let dropped = 0;
    html = html.replace(/\n?\s*<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (match, body) => {
        try {
            const parsed = JSON.parse(body);
            if (drop.has(parsed["@type"])) { dropped += 1; return ""; }
        } catch { /* leave anything unparseable untouched */ }
        return match;
    });
    if (dropped !== drop.size) {
        throw new Error(`[prerender-meta] dropped ${dropped} schema blocks, expected ${drop.size} — index.html changed shape?`);
    }

    if (r.addSchema) {
        if (!html.includes("</head>")) throw new Error("[prerender-meta] no </head> found");
        html = html.replace("</head>",
            `  <script type="application/ld+json">\n${JSON.stringify(r.addSchema, null, 2)}\n  </script>\n</head>`);
    }

    writeFileSync(join(DIST, r.file), html, "utf8");
    console.log(`[prerender-meta] wrote ${DIST}/${r.file} for ${r.path} ` +
        `(${plans.length} plans + ${oneOffs.length} one-off offers, ${dropped} stale schema blocks removed)`);
}
