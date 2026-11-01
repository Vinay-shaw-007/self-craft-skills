// src/pages/ServicesPage.tsx
// Freelance services page for YGM — Your Growth Matters, the YouTube growth
// sub-brand of Self Craft Skills. This page runs the YGM green palette
// end to end (see theme/ygmColors.ts) rather than the site's indigo, so it
// reads as a micro-site for the sub-brand. Content lives in data/servicesData.ts.
import { Box, Button, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import PaletteRoundedIcon from "@mui/icons-material/PaletteRounded";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import { Children, useRef, useState, type ReactNode } from "react";
import Seo from "../components/Seo";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { socialLinks } from "../data/socialLinks";
// Exact-case filename — the Netlify build runs on a case-sensitive filesystem.
import YgmLogoSrc from "../assets/YGM.png";
import {
    CONTACT, platforms, serviceCategories, ygmServices,
    type PlatformId, type YgmServiceId,
} from "../data/servicesData";
import { ygm } from "../theme/ygmColors";

const heroPlatforms = [
    { label: "YouTube", icon: <YouTubeIcon sx={{ fontSize: 18 }} /> },
    { label: "Instagram", icon: <InstagramIcon sx={{ fontSize: 18 }} /> },
    { label: "LinkedIn", icon: <LinkedInIcon sx={{ fontSize: 18 }} /> },
];

const ygmServiceIcons: Record<YgmServiceId, ReactNode> = {
    management: <ManageAccountsRoundedIcon />,
    strategy: <QueryStatsRoundedIcon />,
    branding: <PaletteRoundedIcon />,
    shorts: <MovieFilterRoundedIcon />,
};

const oneTimeIcons = {
    audit: <FactCheckRoundedIcon />,
    consult: <ForumRoundedIcon />,
};

const eyebrowSx = {
    fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.14em", textTransform: "uppercase" as const,
};

/**
 * White dot grid shared by both dark green sections, masked so the pattern
 * reads at the edges and clears the headline. Defined once so the hero and
 * the footer always match.
 */
const DOT_MASK = "radial-gradient(ellipse 70% 45% at 50% 22%, transparent 30%, #000 100%)";

const dotGridSx = {
    content: '""',
    position: "absolute" as const,
    inset: 0,
    backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1.2px, transparent 1.2px)",
    backgroundSize: "22px 22px",
    WebkitMaskImage: DOT_MASK,
    maskImage: DOT_MASK,
    pointerEvents: "none" as const,
};

/**
 * A row of cards that stacks nowhere. From md up it is a plain CSS grid.
 * Below that the cards sit side by side in a snapping scroll track, one per
 * screen with the next peeking, and a dot per card below — so a three-card
 * section costs one card of page height on a phone instead of three.
 *
 * `tail` is a card that belongs in the desktop grid but not in the swipe:
 * it renders as the last grid column from md up, and under the dots below.
 */
const SwipeRow = ({
    cols,
    tail,
    children,
}: {
    cols: number;
    tail?: ReactNode;
    children: ReactNode;
}) => {
    const cards = Children.toArray(children);
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    /**
     * Distance from one card's left edge to the next, measured rather than
     * computed, so the gap and the track's own padding stay out of it.
     */
    const stride = () => {
        const el = trackRef.current;
        if (!el) return 1;
        const [a, b] = [el.children[0], el.children[1]] as HTMLElement[];
        return (b ? b.offsetLeft - a.offsetLeft : 0) || el.clientWidth || 1;
    };

    const onScroll = () => {
        const el = trackRef.current;
        if (!el) return;
        const i = Math.round(el.scrollLeft / stride());
        setActive(Math.min(cards.length - 1, Math.max(0, i)));
    };

    const goTo = (i: number) =>
        trackRef.current?.scrollTo({ left: stride() * i, behavior: "smooth" });

    return (
        <>
            <Box
                ref={trackRef}
                onScroll={onScroll}
                sx={{
                    display: { xs: "flex", md: "grid" },
                    gridTemplateColumns: { md: `repeat(${cols}, 1fr)` },
                    gap: 2.5,
                    alignItems: "stretch",
                    overflowX: { xs: "auto", md: "visible" },
                    scrollSnapType: { xs: "x mandatory", md: "none" },
                    WebkitOverflowScrolling: "touch",
                    // Full-bleed on a phone, so a card can scroll under the
                    // container gutter instead of stopping short of it.
                    mx: { xs: -2, sm: -3, md: 0 },
                    px: { xs: 2, sm: 3, md: 0 },
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    "& > *": {
                        // One card per screen on a phone, two on a tablet,
                        // both with the next one peeking so the swipe is obvious.
                        flex: { xs: "0 0 86%", sm: "0 0 47%", md: "initial" },
                        scrollSnapAlign: { xs: "center", md: "none" },
                    },
                }}
            >
                {cards}
                {tail && <Box sx={{ display: { xs: "none", md: "block" } }}>{tail}</Box>}
            </Box>

            <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ display: { xs: "flex", md: "none" }, mt: 2.5 }}
            >
                {cards.map((_, i) => (
                    <Box
                        key={i}
                        component="button"
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Show card ${i + 1} of ${cards.length}`}
                        aria-current={i === active}
                        sx={{
                            p: 0, border: 0, cursor: "pointer", appearance: "none",
                            height: 8, borderRadius: "999px",
                            width: i === active ? 24 : 8,
                            background: i === active ? ygm.green : `rgba(${ygm.forestRgb},0.2)`,
                            transition: "width 0.25s ease, background 0.25s ease",
                        }}
                    />
                ))}
            </Stack>

            {tail && <Box sx={{ display: { xs: "block", md: "none" }, mt: 2.5 }}>{tail}</Box>}
        </>
    );
};

const footerHeadSx = {
    fontWeight: 600, fontSize: "0.86rem", mb: 1.5, color: "rgba(255,255,255,0.75)",
};

const footerLinkSx = {
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.86rem",
    transition: "color 0.2s",
    "&:hover": { color: "#fff" },
};

/**
 * The YGM mark. The artwork is a full-bleed square with no corner radius of
 * its own, so we clip it to a squircle here. Nothing is scaled past the
 * edges: the arrow tip sits close enough to the corner to lose its point.
 */
const YgmLogo = ({ size, alt = "" }: { size: number | Record<string, number>; alt?: string }) => (
    <Box sx={{
        width: size, height: size,
        borderRadius: "22%",
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: "0 14px 34px rgba(0,0,0,0.3)",
    }}>
        <Box
            component="img"
            src={YgmLogoSrc}
            alt={alt}
            sx={{ width: "100%", height: "100%", display: "block" }}
        />
    </Box>
);

/** Both CTAs, used in the hero and again at the foot of the page. */
const ContactButtons = ({ onDark }: { onDark?: boolean }) => (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "center" }}>
        <Button
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon sx={{ fontSize: 18 }} />}
            endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
            sx={{
                px: 3.2, py: 1.3, borderRadius: "999px",
                fontWeight: 700, fontSize: "0.95rem",
                color: "#fff", background: ygm.green,
                "&:hover": { background: ygm.greenDark },
            }}
        >
            Enquire on WhatsApp
        </Button>
        <Button
            href={`mailto:${CONTACT.email}?subject=YGM%20services%20enquiry`}
            startIcon={<EmailRoundedIcon sx={{ fontSize: 18 }} />}
            sx={{
                px: 3.2, py: 1.3, borderRadius: "999px",
                fontWeight: 600, fontSize: "0.95rem",
                color: onDark ? "rgba(255,255,255,0.85)" : ygm.ink,
                border: onDark
                    ? "1px solid rgba(255,255,255,0.18)"
                    : `1px solid rgba(${ygm.forestRgb},0.18)`,
                "&:hover": {
                    background: onDark ? "rgba(255,255,255,0.06)" : `rgba(${ygm.forestRgb},0.05)`,
                    color: onDark ? "#fff" : ygm.ink,
                },
            }}
        >
            Email us
        </Button>
    </Stack>
);

/** The platform's own mark, used wherever pricing is platform-specific. */
const platformIcons: Record<PlatformId, { Icon: typeof YouTubeIcon; color: string }> = {
    youtube: { Icon: YouTubeIcon, color: "#FF0000" },
    instagram: { Icon: InstagramIcon, color: "#E1306C" },
    linkedin: { Icon: LinkedInIcon, color: "#0A66C2" },
};

const PlatformIcon = ({ platform, sx }: { platform: PlatformId; sx?: object }) => {
    const { Icon, color } = platformIcons[platform];
    return <Icon sx={{ color, ...sx }} />;
};

/**
 * Flags which platform a price applies to, so a YouTube retainer is never
 * read as covering Instagram work, or the other way round.
 */
const PlatformBadge = ({ label, platform }: { label: string; platform: PlatformId }) => (
    <Stack direction="row" spacing={0.9} alignItems="center" sx={{
        px: 2, py: 0.8, borderRadius: "999px",
        background: ygm.mint,
        border: `1px solid rgba(${ygm.greenRgb},0.22)`,
    }}>
        <PlatformIcon platform={platform} sx={{ fontSize: 20 }} />
        <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: ygm.ink }}>
            {label}
        </Typography>
    </Stack>
);

const SectionHeading = ({ eyebrow, title, sub, logo, badge, badgePlatform }: {
    eyebrow: string; title: string; sub?: string; logo?: boolean;
    badge?: string; badgePlatform?: PlatformId;
}) => (
    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        {logo && (
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2.5 }}>
                <YgmLogo size={60} />
            </Box>
        )}
        {badge && badgePlatform && (
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <PlatformBadge label={badge} platform={badgePlatform} />
            </Box>
        )}
        <Typography sx={{ ...eyebrowSx, color: ygm.green, mb: 1.5 }}>{eyebrow}</Typography>
        <Typography variant="h2" sx={{
            fontSize: { xs: "1.9rem", md: "2.6rem" }, lineHeight: 1.15, color: ygm.ink,
        }}>
            {title}
        </Typography>
        {sub && (
            <Typography sx={{
                mt: 2, color: ygm.slate, maxWidth: 620, mx: "auto",
                lineHeight: 1.7, fontSize: "0.98rem",
            }}>
                {sub}
            </Typography>
        )}
    </Box>
);

const ServicesPage = () => {
    // Which catalogue the pricing sections show. Both stay mounted.
    const [platform, setPlatform] = useState<PlatformId>("youtube");

    return (
        <main>
            <Seo
                title="Social Media &amp; YouTube Growth | YGM by Self Craft Skills"
                description="Social media strategy, content and channel management for YouTube, Instagram and LinkedIn. YouTube retainers from ₹7,999, audits from ₹1,999."
                canonicalPath="/services"
            />

            {/* ---------- Hero ---------- */}
            <Box sx={{
                position: "relative",
                overflow: "hidden",
                background: `linear-gradient(160deg, ${ygm.forestDeep}, ${ygm.forest})`,
                color: "#fff",
                py: { xs: 7, md: 11 },
                "&::before": dotGridSx,
                // Soft corner glows for depth — one white, one brand green.
                "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: `
                        radial-gradient(circle at 86% 10%, rgba(255,255,255,0.14), transparent 40%),
                        radial-gradient(circle at 8% 92%, rgba(${ygm.greenRgb},0.3), transparent 45%)
                    `,
                    pointerEvents: "none",
                },
            }}>
                {/* Matches the grain used on the footer */}
                <Box className="noise-overlay" sx={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

                <Container maxWidth="md" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                        <YgmLogo size={{ xs: 76, md: 96 }} alt="YGM — Your Growth Matters" />
                    </Box>
                    {/* The brand sits in the kicker and the keywords in the H1:
                        "YGM" is a name nobody searches for, and the H1 is one of
                        the strongest on-page signals Google reads. */}
                    <Typography sx={{
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        fontWeight: 700, letterSpacing: "0.08em",
                        textTransform: "uppercase", color: ygm.greenBright,
                        mb: 1.5,
                    }}>
                        YGM — Your Growth Matters
                    </Typography>
                    <Typography variant="h1" sx={{
                        fontSize: { xs: "2.1rem", md: "3.1rem" }, lineHeight: 1.1,
                    }}>
                        Social Media Growth &amp;{" "}
                        <Box component="span" sx={{ color: ygm.greenBright }}>Channel Management</Box>
                    </Typography>
                    <Typography sx={{
                        mt: 2.5, fontSize: { xs: "1.02rem", md: "1.15rem" },
                        color: "rgba(255,255,255,0.78)", maxWidth: 640, mx: "auto", lineHeight: 1.7,
                    }}>
                        Social media strategy, content and channel management for businesses,
                        brands, startups and creators. You create; we help you grow.
                    </Typography>

                    {/* useFlexGap: Stack's default margin-based spacing leaves a stray
                        left margin on the first chip of a wrapped row, which knocks
                        that row off-centre. The chips do wrap at phone widths. */}
                    <Stack direction="row" spacing={1.2} useFlexGap sx={{ mt: 4, mb: 4.5, justifyContent: "center", flexWrap: "wrap" }}>
                        {heroPlatforms.map((p) => (
                            <Stack key={p.label} direction="row" spacing={0.8} alignItems="center" sx={{
                                px: 2.2, py: 0.9, borderRadius: "999px",
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.1)",
                            }}>
                                {p.icon}
                                <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>{p.label}</Typography>
                            </Stack>
                        ))}
                    </Stack>

                    <ContactButtons onDark />
                </Container>
            </Box>

            {/* ---------- Services at a glance ---------- */}
            <Box sx={{ background: ygm.mintSoft, py: { xs: 7, md: 10 } }}>
                <Container maxWidth="lg">
                    <SectionHeading
                        eyebrow="Services at a glance"
                        title="Everything we do, in six areas."
                        sub="Strategy, content, channel management and performance optimisation — picked individually or bundled into a monthly retainer."
                    />
                    <Grid container spacing={2.5}>
                        {serviceCategories.map((s) => (
                            <Grid key={s.no} size={{ xs: 12, md: 6 }}>
                                <FadeInOnScroll style={{ height: "100%" }}>
                                    <Box sx={{
                                        height: "100%",
                                        p: { xs: 2.8, md: 3.2 },
                                        borderRadius: "22px",
                                        background: "#fff",
                                        border: `1px solid rgba(${ygm.forestRgb},0.08)`,
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            boxShadow: `0 16px 40px rgba(${ygm.forestRgb},0.1)`,
                                        },
                                    }}>
                                        <Stack direction="row" spacing={1.6} alignItems="baseline">
                                            <Typography sx={{
                                                fontFamily: '"Space Grotesk"', fontWeight: 800,
                                                fontSize: "1.05rem", color: ygm.green,
                                            }}>
                                                {s.no}
                                            </Typography>
                                            <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.02rem", color: ygm.ink }}>
                                                {s.title}
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{
                                            mt: 1.2, color: ygm.slate, lineHeight: 1.7, fontSize: "0.92rem",
                                        }}>
                                            {s.desc}
                                        </Typography>
                                    </Box>
                                </FadeInOnScroll>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{
                        mt: 3, p: { xs: 2.5, md: 3 }, borderRadius: "22px",
                        background: ygm.mint,
                        display: "flex", flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "flex-start", md: "center" },
                        justifyContent: "space-between", gap: 1.5,
                    }}>
                        <Typography sx={{ ...eyebrowSx, color: ygm.green }}>
                            Ways to work together
                        </Typography>
                        <Typography sx={{ fontWeight: 700, color: ygm.ink, fontSize: "0.95rem" }}>
                            Monthly Retainers · Consulting Sessions · Custom Packages
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* ---------- YGM positioning ---------- */}
            <Box sx={{ py: { xs: 7, md: 10 } }}>
                <Container maxWidth="lg">
                    <SectionHeading
                        eyebrow="Built by a creator"
                        title="Focused on your growth."
                        logo
                    />
                    <Grid container spacing={2.5}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                height: "100%", p: { xs: 3, md: 4 }, borderRadius: "24px",
                                background: ygm.forest, color: "rgba(255,255,255,0.85)",
                            }}>
                                <Typography sx={{ lineHeight: 1.8, fontSize: "1rem" }}>
                                    Growing a YouTube channel takes more than publishing videos.
                                    It takes planning, consistency, optimisation, and an
                                    understanding of what your audience wants to watch.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                height: "100%", p: { xs: 3, md: 4 }, borderRadius: "24px",
                                background: "#fff", border: `1px solid rgba(${ygm.greenRgb},0.3)`,
                            }}>
                                <Typography sx={{ lineHeight: 1.8, fontSize: "1rem", color: ygm.ink }}>
                                    YGM — Your Growth Matters — helps growing creators manage their
                                    channels more strategically, improve their publishing workflow,
                                    and make informed content decisions.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Box sx={{
                                p: { xs: 3, md: 4 }, borderRadius: "24px",
                                background: ygm.forest, color: "rgba(255,255,255,0.85)",
                            }}>
                                <Typography sx={{ lineHeight: 1.8, fontSize: "1rem" }}>
                                    We bring together channel management, YouTube SEO, content
                                    planning, analytics, creative support, and video services
                                    under one clear approach.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* ---------- YGM service pillars ---------- */}
            <Box sx={{ background: ygm.mintSoft, py: { xs: 7, md: 10 } }}>
                <Container maxWidth="lg">
                    <SectionHeading
                        eyebrow="Our YouTube services"
                        title="What YGM handles for your channel."
                    />
                    <Grid container spacing={2.5}>
                        {ygmServices.map((s) => (
                            <Grid key={s.id} size={{ xs: 12, sm: 6 }}>
                                <FadeInOnScroll style={{ height: "100%" }}>
                                    <Box sx={{
                                        height: "100%", p: { xs: 2.8, md: 3.2 },
                                        borderRadius: "22px", background: "#fff",
                                        border: `1px solid rgba(${ygm.forestRgb},0.08)`,
                                    }}>
                                        <Box sx={{
                                            width: 46, height: 46, borderRadius: "14px",
                                            display: "grid", placeItems: "center",
                                            background: ygm.mint, color: ygm.green, mb: 2,
                                        }}>
                                            {ygmServiceIcons[s.id]}
                                        </Box>
                                        <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.05rem", color: ygm.ink }}>
                                            {s.title}
                                        </Typography>
                                        <Typography sx={{
                                            mt: 1.2, color: ygm.slate, lineHeight: 1.7, fontSize: "0.92rem",
                                        }}>
                                            {s.desc}
                                        </Typography>
                                    </Box>
                                </FadeInOnScroll>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* ---------- Platform switch ----------
                Both catalogues stay in the DOM and are shown or hidden with CSS,
                so the hidden platform's prices are still crawled and findable
                with the browser's own text search. */}
            <Box sx={{ pt: { xs: 7, md: 10 } }}>
                <Container maxWidth="lg">
                    <Stack direction="row" spacing={0.6} sx={{
                        mx: "auto", p: 0.6,
                        width: { xs: "100%", sm: "fit-content" },
                        maxWidth: 440,
                        borderRadius: "999px",
                        background: ygm.mint,
                        border: `1px solid rgba(${ygm.greenRgb},0.2)`,
                        "& .MuiButton-startIcon": { display: { xs: "none", sm: "inherit" } },
                    }}>
                        {platforms.map((cat) => {
                            const active = cat.id === platform;
                            return (
                                <Button
                                    key={cat.id}
                                    onClick={() => setPlatform(cat.id)}
                                    aria-pressed={active}
                                    startIcon={<PlatformIcon platform={cat.id} sx={{
                                        fontSize: 20,
                                        color: active ? undefined : ygm.slate,
                                    }} />}
                                    sx={{
                                        flex: { xs: 1, sm: "0 0 auto" }, minWidth: 0,
                                        px: { xs: 1, sm: 3.2 }, py: 1, borderRadius: "999px",
                                        fontWeight: 700, fontSize: { xs: "0.86rem", sm: "0.92rem" },
                                        color: active ? "#fff" : ygm.slate,
                                        background: active ? ygm.forest : "transparent",
                                        "&:hover": {
                                            background: active ? ygm.forest : "rgba(255,255,255,0.65)",
                                        },
                                    }}
                                >
                                    {cat.label}
                                </Button>
                            );
                        })}
                    </Stack>
                    <Typography sx={{
                        mt: 1.8, textAlign: "center",
                        fontSize: "0.88rem", color: ygm.slate,
                    }}>
                        The same monthly ladder on both platforms — different work inside each tier.
                    </Typography>
                </Container>
            </Box>

            {platforms.map((cat) => (
                <Box key={cat.id} sx={{ display: cat.id === platform ? "block" : "none" }}>
                {/* ---------- Monthly plans ---------- */}
                <Box sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 7, md: 10 } }}>
                    <Container maxWidth="lg">
                        <SectionHeading
                            eyebrow="Monthly retainers"
                            title="Choose the level of support you need."
                            badge={cat.badge}
                            badgePlatform={cat.id}
                            sub={cat.plansSub}
                        />
                        <SwipeRow cols={3}>
                            {cat.plans.map((plan) => (
                                <Stack key={plan.name} sx={{ height: "100%" }}>
                                    {/* Reserved on every card so the price blocks line up,
                                        including against the card peeking in from the
                                        side on a phone. */}
                                    <Typography sx={{
                                        minHeight: 26, mb: { xs: 1, md: 0.5 },
                                        textAlign: "center", fontSize: "0.86rem",
                                        fontWeight: 600, color: ygm.slate,
                                    }}>
                                        {plan.carryOver ?? ""}
                                    </Typography>

                                    <Box sx={{
                                        flexGrow: 1,
                                        // Column flex so the focus note and CTA sit on the
                                        // card floor — Authority has fewer features, and
                                        // otherwise its button floats above the others.
                                        display: "flex",
                                        flexDirection: "column",
                                        p: { xs: 3, md: 3.5 },
                                        borderRadius: "26px",
                                        background: plan.highlighted ? ygm.forest : "#fff",
                                        color: plan.highlighted ? "#fff" : ygm.ink,
                                        border: plan.highlighted
                                            ? `1px solid ${ygm.forest}`
                                            : `1px solid rgba(${ygm.forestRgb},0.12)`,
                                        boxShadow: plan.highlighted
                                            ? `0 22px 50px rgba(${ygm.forestRgb},0.22)`
                                            : "none",
                                    }}>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <PlatformIcon platform={cat.id} sx={{
                                                fontSize: 24,
                                                opacity: plan.highlighted ? 0.85 : 1,
                                            }} />
                                            <Typography component="h3" sx={{
                                                fontFamily: '"Space Grotesk"', fontWeight: 700,
                                                fontSize: "1.15rem", textTransform: "uppercase",
                                                letterSpacing: "0.02em",
                                            }}>
                                                {plan.name}
                                            </Typography>
                                        </Stack>

                                        <Box sx={{
                                            mt: 2, mb: 2.5, py: 1.8, px: 2, borderRadius: "18px",
                                            textAlign: "center",
                                            background: plan.highlighted ? "#fff" : ygm.forest,
                                            color: plan.highlighted ? ygm.ink : "#fff",
                                        }}>
                                            {/* Three separate lines rather than an inline
                                                suffix — with "/month" inline, the struck price
                                                centres over the number+suffix group and the big
                                                figure sits visibly off-axis. */}
                                            <Typography sx={{
                                                fontSize: "1rem", fontWeight: 500, lineHeight: 1.4,
                                                textDecoration: "line-through",
                                                opacity: 0.5,
                                            }}>
                                                {plan.was ?? "\u00A0"}
                                            </Typography>
                                            <Typography sx={{
                                                fontFamily: '"Space Grotesk"', fontWeight: 800,
                                                fontSize: { xs: "1.9rem", md: "2.1rem" }, lineHeight: 1.25,
                                            }}>
                                                {plan.now}
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: "0.85rem", fontWeight: 500,
                                                opacity: 0.6, letterSpacing: "0.02em",
                                            }}>
                                                {plan.period}
                                            </Typography>
                                        </Box>

                                        <Stack spacing={1.2} sx={{ flexGrow: 1 }}>
                                            {plan.features.map((f) => (
                                                <Stack key={f} direction="row" spacing={1.2} alignItems="flex-start">
                                                    <CheckRoundedIcon sx={{
                                                        fontSize: 18, mt: "2px", flexShrink: 0,
                                                        color: plan.highlighted ? ygm.greenBright : ygm.green,
                                                    }} />
                                                    <Typography sx={{
                                                        fontSize: "0.9rem", lineHeight: 1.6,
                                                        color: plan.highlighted ? "rgba(255,255,255,0.82)" : ygm.slate,
                                                    }}>
                                                        {f}
                                                    </Typography>
                                                </Stack>
                                            ))}
                                        </Stack>

                                        <Typography sx={{
                                            mt: 2.5, pt: 2, fontSize: "0.82rem", lineHeight: 1.6,
                                            borderTop: plan.highlighted
                                                ? "1px solid rgba(255,255,255,0.12)"
                                                : `1px solid rgba(${ygm.forestRgb},0.08)`,
                                            color: plan.highlighted ? "rgba(255,255,255,0.6)" : ygm.slate,
                                        }}>
                                            <Box component="span" sx={{ fontWeight: 700 }}>The focus:</Box>{" "}
                                            {plan.focus}
                                        </Typography>

                                        <Button
                                            href={CONTACT.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            fullWidth
                                            endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                            sx={{
                                                mt: 2.5, py: 1.2, borderRadius: "999px",
                                                fontWeight: 700, fontSize: "0.92rem",
                                                color: plan.highlighted ? ygm.forest : "#fff",
                                                background: plan.highlighted ? "#fff" : ygm.green,
                                                "&:hover": {
                                                    background: plan.highlighted ? "#eaeaea" : ygm.greenDark,
                                                },
                                            }}
                                        >
                                            Get started
                                        </Button>
                                    </Box>

                                    <Typography sx={{
                                        mt: 1.5, textAlign: "center",
                                        fontSize: "0.84rem", color: ygm.slate, lineHeight: 1.6,
                                    }}>
                                        {plan.audience}
                                    </Typography>
                                </Stack>
                            ))}
                        </SwipeRow>

                        {/* Boundaries stated before a client has to ask. */}
                        <Box sx={{
                            mt: { xs: 4, md: 5 }, p: { xs: 2.5, md: 3.5 },
                            borderRadius: "22px",
                            background: ygm.mintSoft,
                            border: `1px solid rgba(${ygm.forestRgb},0.1)`,
                        }}>
                            <Typography sx={{
                                fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.1em",
                                textTransform: "uppercase", color: ygm.green, mb: 1.5,
                            }}>
                                What each package covers
                            </Typography>
                            <Stack spacing={1.2}>
                                {cat.notes.map((n) => (
                                    <Typography key={n.label} sx={{
                                        fontSize: "0.88rem", lineHeight: 1.7, color: ygm.slate,
                                    }}>
                                        <Box component="span" sx={{ fontWeight: 700, color: ygm.ink }}>
                                            {n.label}:
                                        </Box>{" "}
                                        {n.text}
                                    </Typography>
                                ))}
                            </Stack>
                        </Box>
                    </Container>
                </Box>

                {/* ---------- One-time options ---------- */}
                <Box sx={{ background: ygm.mintSoft, py: { xs: 7, md: 10 } }}>
                    <Container maxWidth="lg">
                        <SectionHeading
                            eyebrow="One-time options"
                            title="Need expert direction before committing monthly?"
                            sub={cat.oneTimeSub}
                        />
                        <SwipeRow
                            cols={3}
                            tail={
                                <Box sx={{
                                    height: "100%", p: { xs: 3, md: 3.5 }, borderRadius: "26px",
                                    background: "#fff", border: `1px solid rgba(${ygm.forestRgb},0.12)`,
                                    display: "flex", flexDirection: "column", justifyContent: "center",
                                }}>
                                    <Typography component="h3" sx={{
                                        fontFamily: '"Space Grotesk"', fontWeight: 700,
                                        fontSize: "1.2rem", color: ygm.ink,
                                    }}>
                                        Why one-time?
                                    </Typography>
                                    <Typography sx={{
                                        mt: 1.5, color: ygm.slate, lineHeight: 1.8, fontSize: "0.95rem",
                                    }}>
                                        No commitment needed. Get expert insight, a clear action plan,
                                        and start growing on your own terms.
                                    </Typography>
                                    <Button
                                        href={CONTACT.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                        sx={{
                                            mt: 3, py: 1.2, borderRadius: "999px",
                                            fontWeight: 700, fontSize: "0.92rem",
                                            color: "#fff", background: ygm.green,
                                            "&:hover": { background: ygm.greenDark },
                                        }}
                                    >
                                        Book a slot
                                    </Button>
                                </Box>
                            }
                        >
                            {cat.oneTime.map((s) => (
                                <Box key={s.id} sx={{
                                    height: "100%", p: { xs: 3, md: 3.5 }, borderRadius: "26px",
                                    background: ygm.forest, color: "#fff",
                                }}>
                                    <Box sx={{
                                        width: 46, height: 46, borderRadius: "14px",
                                        display: "grid", placeItems: "center",
                                        background: "rgba(255,255,255,0.1)", color: ygm.greenBright, mb: 2,
                                    }}>
                                        {oneTimeIcons[s.icon]}
                                    </Box>
                                    <Typography component="h3" sx={{
                                        fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: "1.2rem",
                                    }}>
                                        {s.title}
                                    </Typography>
                                    <Stack direction="row" spacing={1} alignItems="baseline" sx={{ mt: 1.5, mb: 2.5 }}>
                                        <Typography sx={{
                                            fontFamily: '"Space Grotesk"', fontWeight: 800,
                                            fontSize: "1.8rem", color: ygm.greenBright,
                                        }}>
                                            {s.price}
                                        </Typography>
                                        <Typography sx={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.5)" }}>
                                            — {s.terms}
                                        </Typography>
                                    </Stack>
                                    <Typography sx={{
                                        fontSize: "0.84rem", fontWeight: 600,
                                        color: "rgba(255,255,255,0.5)", mb: 1.2,
                                    }}>
                                        {s.listLabel}
                                    </Typography>
                                    <Stack spacing={1.1}>
                                        {s.items.map((item) => (
                                            <Stack key={item} direction="row" spacing={1.2} alignItems="flex-start">
                                                <CheckRoundedIcon sx={{
                                                    fontSize: 18, mt: "2px", flexShrink: 0, color: ygm.greenBright,
                                                }} />
                                                <Typography sx={{
                                                    fontSize: "0.9rem", lineHeight: 1.6,
                                                    color: "rgba(255,255,255,0.8)",
                                                }}>
                                                    {item}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Box>
                            ))}
                        </SwipeRow>
                    </Container>
                </Box>

                {/* ---------- Add-on rate card ---------- */}
                <Box sx={{ py: { xs: 7, md: 10 } }}>
                    <Container maxWidth="md">
                        <SectionHeading
                            eyebrow="Extra support. Clear pricing."
                            title="Add creative services whenever you need them."
                            sub={cat.addOnsSub}
                        />
                        <Box sx={{
                            borderRadius: "24px", overflow: "hidden",
                            border: `1px solid rgba(${ygm.forestRgb},0.12)`,
                        }}>
                            <Box sx={{ overflowX: "auto" }}>
                                <Box component="table" sx={{
                                    width: "100%", minWidth: 520, borderCollapse: "collapse",
                                    "& th, & td": { textAlign: "left", px: { xs: 2, md: 3 }, py: 2 },
                                }}>
                                    <Box component="thead" sx={{ background: ygm.mint }}>
                                        <Box component="tr">
                                            {["Service", "Price", "Revisions included"].map((h) => (
                                                <Box key={h} component="th" sx={{
                                                    fontWeight: 700, fontSize: "0.88rem", color: ygm.ink,
                                                }}>
                                                    {h}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box component="tbody">
                                        {cat.addOns.map((row) => (
                                            <Box key={row.service} component="tr" sx={{
                                                background: "#fff",
                                                borderTop: `1px solid rgba(${ygm.forestRgb},0.08)`,
                                            }}>
                                                <Box component="td" sx={{ fontWeight: 600, fontSize: "0.92rem", color: ygm.ink }}>
                                                    {row.service}
                                                </Box>
                                                <Box component="td" sx={{ fontSize: "0.92rem", color: ygm.green, fontWeight: 600 }}>
                                                    {row.price}
                                                </Box>
                                                <Box component="td" sx={{ fontSize: "0.92rem", color: ygm.slate }}>
                                                    {row.revisions}
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                </Box>
            ))}

            {/* ---------- Closing CTA + YGM footer ----------
                App.tsx suppresses the site's indigo footer on this route, so this
                block carries the site-wide links in YGM green instead of stacking
                two dark sections in clashing brand colours. */}
            <Box component="footer" sx={{
                position: "relative",
                overflow: "hidden",
                background: `linear-gradient(160deg, ${ygm.forest}, ${ygm.forestDeep})`,
                color: "#fff",
                pt: { xs: 8, md: 11 },
                pb: { xs: 4, md: 5 },
                "&::before": dotGridSx,
                // Glows mirrored off the hero so the two sections don't look identical.
                "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: `
                        radial-gradient(circle at 12% 8%, rgba(255,255,255,0.12), transparent 40%),
                        radial-gradient(circle at 90% 85%, rgba(${ygm.greenRgb},0.28), transparent 45%)
                    `,
                    pointerEvents: "none",
                },
            }}>
                <Box className="noise-overlay" sx={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    {/* CTA */}
                    <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto" }}>
                        <Typography sx={{ ...eyebrowSx, color: ygm.greenBright, mb: 2 }}>
                            Ready to work with YGM?
                        </Typography>
                        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, lineHeight: 1.15 }}>
                            Let's build a stronger channel.
                        </Typography>
                        <Typography sx={{
                            mt: 2.5, mb: 4, color: "rgba(255,255,255,0.72)", lineHeight: 1.8,
                        }}>
                            You focus on creating content worth watching. Whether you need channel
                            management, strategic support, creative services, or a one-time audit,
                            let's find the right starting point.
                        </Typography>
                        <ContactButtons onDark />
                    </Box>

                    <Divider sx={{ my: { xs: 6, md: 8 }, borderColor: "rgba(255,255,255,0.1)" }} />

                    {/* Site links, carried over from the main footer */}
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Stack direction="row" spacing={1.6} alignItems="center">
                                <YgmLogo size={48} />
                                <Box>
                                    <Typography sx={{
                                        fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: "1.05rem",
                                    }}>
                                        YGM — Your Growth Matters
                                    </Typography>
                                    <Typography sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
                                        Powered by Self Craft Skills
                                    </Typography>
                                </Box>
                            </Stack>
                            <Typography sx={{
                                mt: 2, color: "rgba(255,255,255,0.45)",
                                maxWidth: 360, lineHeight: 1.7, fontSize: "0.88rem",
                            }}>
                                YouTube growth, channel management and social media strategy for
                                creators, brands and startups. You create; we help you grow.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 6, md: 2 }}>
                            <Typography sx={footerHeadSx}>Explore</Typography>
                            <Stack spacing={1}>
                                <Link component={RouterLink} to="/" underline="hover" sx={footerLinkSx}>Home</Link>
                                <Link component={RouterLink} to="/courses" underline="hover" sx={footerLinkSx}>Programs</Link>
                                <Link component={RouterLink} to="/pricing" underline="hover" sx={footerLinkSx}>Pricing</Link>
                                <Link component={RouterLink} to="/free-resources" underline="hover" sx={footerLinkSx}>Free Resources</Link>
                                <Link component={RouterLink} to="/faq" underline="hover" sx={footerLinkSx}>FAQs</Link>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 6, md: 2 }}>
                            <Typography sx={footerHeadSx}>Policies</Typography>
                            <Stack spacing={1}>
                                <Link component={RouterLink} to="/privacy-policy" underline="hover" sx={footerLinkSx}>Privacy Policy</Link>
                                <Link component={RouterLink} to="/terms-and-conditions" underline="hover" sx={footerLinkSx}>Terms & Conditions</Link>
                                <Link component={RouterLink} to="/ygm-terms" underline="hover" sx={footerLinkSx}>YGM Service Terms</Link>
                                <Link component={RouterLink} to="/refund-policy" underline="hover" sx={footerLinkSx}>Refund Policy</Link>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 3 }}>
                            <Typography sx={footerHeadSx}>Contact</Typography>
                            <Stack spacing={1}>
                                <Link href={`mailto:${CONTACT.email}`} underline="hover" sx={footerLinkSx}>
                                    {CONTACT.email}
                                </Link>
                                <Link href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                                    underline="hover" sx={footerLinkSx}>
                                    Message on WhatsApp
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.08)" }} />

                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "flex-start", md: "center" },
                        justifyContent: "space-between", gap: 2,
                    }}>
                        <Typography sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem" }}>
                            {"©"} {new Date().getFullYear()} Self Craft Skills. All rights reserved.
                        </Typography>
                        <Stack direction="row" spacing={0.8}>
                            {socialLinks.map((item) => (
                                <Link key={item.label} href={item.href}
                                    target="_blank" rel="noopener noreferrer" aria-label={item.label}
                                    sx={{
                                        width: 36, height: 36,
                                        borderRadius: "10px",
                                        display: "grid", placeItems: "center",
                                        color: "rgba(255,255,255,0.4)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            color: "#fff",
                                            background: `rgba(${ygm.greenRgb},0.25)`,
                                            transform: "translateY(-2px)",
                                        },
                                    }}>
                                    {item.icon}
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </main>
    );
};

export default ServicesPage;
