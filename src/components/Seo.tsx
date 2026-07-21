// src/components/Seo.tsx
// Per-route <title>, meta description and canonical for this SPA. Updates
// the existing head tags imperatively on route change (rather than adding
// duplicates), so search engines that render JS see page-specific metadata.
// Social scrapers that don't run JS fall back to the static tags in index.html.
import { useEffect } from "react";

const SITE = "https://selfcraftskills.com";

interface SeoProps {
    title: string;
    description?: string;
    /** Path only, e.g. "/pricing". Defaults to no canonical change. */
    canonicalPath?: string;
}

const setMeta = (name: string, content: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
    let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
};

const Seo = ({ title, description, canonicalPath }: SeoProps) => {
    useEffect(() => {
        document.title = title;
        if (description) setMeta("description", description);
        if (canonicalPath) setCanonical(`${SITE}${canonicalPath}`);
    }, [title, description, canonicalPath]);

    return null;
};

export default Seo;
