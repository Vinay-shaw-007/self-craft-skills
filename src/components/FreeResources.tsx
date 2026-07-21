// src/components/FreeResources.tsx
import { useEffect, useRef, useState } from "react";
import {
    Box, Button, Container, Stack, Typography,
} from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";
import { useSubscription } from "../hooks/useSubscription";
import PromptBuilderLogo from "../assets/Prompt-Builder.png";
import AIImagePromptBuilderLogo from "../assets/ai-image-prompt-builder.png";
import ObjectTalkLogo from "../assets/object-talk-master-builder.png";
import TimeDisciplineCoachLogo from "../assets/time-discipline-coach.png";
import AIEbookCover from "../assets/AI-ebook.png";
import { colors } from "../theme/colors";

interface FreeTool {
    name: string;
    description: string;
    note: string;
    image: string;
    href: string;
    cta: string;
}

const tools: FreeTool[] = [
    {
        name: "Prompt Builder",
        description: "Turn ideas into high-performing AI prompts in seconds. Describe what you need and get optimized prompts for ChatGPT, Claude, or any AI tool.",
        note: "No prompt engineering experience needed.",
        image: PromptBuilderLogo,
        href: "https://chatgpt.com/g/g-69c157457308819196af4084dcc29297-prompt-builder",
        cta: "Try Prompt Builder",
    },
    {
        name: "AI Image Prompt Builder",
        description: "Describe your vision and get detailed, optimized prompts ready for DALL·E, Midjourney, or any AI image generator.",
        note: "No design skills needed.",
        image: AIImagePromptBuilderLogo,
        href: "https://chatgpt.com/g/g-69cdcc3a22488191a7c61718c3397b77-ai-image-prompt-builder",
        cta: "Try Image Prompt Builder",
    },
    {
        name: "Object Talk Master Builder",
        description: "Bring any object to life with AI. Pick anything around you and get a fun, creative conversation — great for creativity and storytelling.",
        note: "Just pick an object and start talking.",
        image: ObjectTalkLogo,
        href: "https://chatgpt.com/g/g-69d3f13719288191b4460abdc37e59ff-object-talk-master-builder",
        cta: "Try Object Talk",
    },
    {
        name: "Time Discipline Coach",
        description: "Your personal AI coach for time management and discipline. Tailored routines, focus strategies, and actionable plans to stop procrastinating.",
        note: "Built for students, professionals, and creators.",
        image: TimeDisciplineCoachLogo,
        href: "https://chatgpt.com/g/g-69d880ca14608191b411154bd596158f-time-discipline-coach",
        cta: "Try Time Discipline Coach",
    },
];

const FreeResources = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalCards, setTotalCards] = useState(0);
    const { isSubscribed } = useSubscription();

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        setTotalCards(el.children.length);

        const handleScroll = () => {
            const cardWidth = el.scrollWidth / el.children.length;
            const index = Math.round(el.scrollLeft / cardWidth);
            setActiveIndex(index);
        };

        el.addEventListener("scroll", handleScroll, { passive: true });
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box sx={{ py: { xs: 9, md: 12 } }}>
            <Container maxWidth="lg">
                {/* Section heading */}
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
                        <Typography sx={{
                            fontSize: "0.72rem", fontWeight: 700,
                            letterSpacing: "0.14em", textTransform: "uppercase",
                            color: colors.indigo, mb: 1.5,
                        }}>
                            100% free · no signup required
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: { xs: "2.1rem", md: "3rem" },
                            lineHeight: 1.1,
                            maxWidth: 720,
                            mx: "auto",
                        }}>
                            <Box component="span" sx={{ color: colors.indigo }}>Free tools</Box>{" "}
                            <Box component="span" sx={{ color: colors.ink }}>to start your AI journey.</Box>
                        </Typography>
                        <Typography sx={{
                            mt: 2, color: colors.slate,
                            maxWidth: 560, mx: "auto",
                            lineHeight: 1.7, fontSize: "0.98rem",
                        }}>
                            Try what we build before you subscribe — AI tools and
                            e-books made by Self Craft Skills, free for everyone.
                        </Typography>
                    </Box>
                </FadeInOnScroll>

                {/* Category quick links */}
                <FadeInOnScroll>
                    <Stack direction="row" spacing={1.2} justifyContent="center" sx={{ mb: { xs: 4, md: 5 } }}>
                        {[
                            { label: "Tools", href: "#tools" },
                            { label: "E-Books", href: "#ebooks" },
                        ].map((item) => (
                            <Box
                                key={item.href}
                                component="a"
                                href={item.href}
                                sx={{
                                    px: 2.2, py: 0.8,
                                    borderRadius: "999px",
                                    border: "1px solid rgba(18,19,43,0.1)",
                                    background: "#fff",
                                    color: colors.ink,
                                    fontWeight: 600,
                                    fontSize: "0.85rem",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        background: colors.indigo,
                                        color: "#fff",
                                        borderColor: colors.indigo,
                                    },
                                }}
                            >
                                {item.label}
                            </Box>
                        ))}
                    </Stack>
                </FadeInOnScroll>

                {/* Tools */}
                <FadeInOnScroll>
                    <Typography
                        id="tools"
                        sx={{
                            fontFamily: '"Space Grotesk"',
                            fontWeight: 700,
                            fontSize: { xs: "1.3rem", md: "1.5rem" },
                            color: colors.ink,
                            mb: 3,
                            scrollMarginTop: "100px",
                        }}
                    >
                        Tools
                    </Typography>
                </FadeInOnScroll>

                <FadeInOnScroll>
                    <Box ref={scrollRef} sx={{
                        display: { xs: "flex", sm: "grid" },
                        gridTemplateColumns: { sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                        gap: { xs: 2, sm: 3 },
                        mb: { xs: 2, sm: 8, md: 10 },
                        // Mobile: horizontal scroll carousel
                        overflowX: { xs: "auto", sm: "visible" },
                        scrollSnapType: { xs: "x mandatory", sm: "none" },
                        WebkitOverflowScrolling: "touch",
                        pb: { xs: 1, sm: 0 },
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": { display: "none" },
                        "& > *": {
                            width: { xs: 260, sm: "auto" },
                            minWidth: { xs: 260, sm: "auto" },
                            flexShrink: { xs: 0, sm: 1 },
                            scrollSnapAlign: { xs: "start", sm: "none" },
                        },
                    }}>
                        {tools.map((tool) => (
                            <Box key={tool.name} sx={{
                                borderRadius: "24px",
                                overflow: "hidden",
                                border: "1px solid rgba(18,19,43,0.08)",
                                background: "#fff",
                                display: "flex",
                                flexDirection: "column",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: `0 20px 48px rgba(${colors.indigoRgb}, 0.12)`,
                                    borderColor: `rgba(${colors.indigoRgb}, 0.25)`,
                                },
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    py: { xs: 3, md: 4 },
                                    background: colors.lavenderSoft,
                                }}>
                                    <Box
                                        component="img"
                                        src={tool.image}
                                        alt={tool.name}
                                        sx={{
                                            width: { xs: 96, md: 112 },
                                            height: { xs: 96, md: 112 },
                                            borderRadius: "24px",
                                        }}
                                    />
                                </Box>
                                <Box sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                                        <AutoAwesomeRoundedIcon sx={{ color: colors.indigo, fontSize: 18 }} />
                                        <Typography sx={{
                                            fontFamily: '"Space Grotesk"',
                                            fontWeight: 700,
                                            fontSize: "1.1rem",
                                            color: colors.ink,
                                        }}>
                                            {tool.name}
                                        </Typography>
                                    </Stack>
                                    <Typography sx={{
                                        color: colors.slate, lineHeight: 1.7,
                                        fontSize: "0.88rem", mb: 1,
                                    }}>
                                        {tool.description}
                                    </Typography>
                                    <Typography sx={{
                                        color: "#999", lineHeight: 1.7,
                                        fontSize: "0.82rem", mb: 2,
                                    }}>
                                        {tool.note} Powered by a custom GPT built by Self Craft Skills.
                                    </Typography>
                                    <Button
                                        component="a"
                                        href={tool.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        fullWidth
                                        endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                        sx={{
                                            mt: "auto",
                                            py: 1.2,
                                            borderRadius: "999px",
                                            fontWeight: 700,
                                            fontSize: "0.9rem",
                                            color: "#fff",
                                            background: colors.indigo,
                                            "&:hover": { background: colors.indigoDark },
                                        }}
                                    >
                                        {tool.cta}
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    {/* Mobile scroll dots */}
                    {totalCards > 1 && (
                        <Stack
                            direction="row"
                            spacing={0.9}
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                display: { xs: "flex", sm: "none" },
                                mb: { xs: 8 },
                            }}
                        >
                            {Array.from({ length: totalCards }).map((_, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <Box
                                        key={i}
                                        sx={{
                                            width: isActive ? 22 : 7,
                                            height: 7,
                                            borderRadius: 99,
                                            background: isActive ? colors.indigo : "rgba(18,19,43,0.18)",
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                );
                            })}
                        </Stack>
                    )}
                </FadeInOnScroll>

                {/* E-Books */}
                <FadeInOnScroll>
                    <Typography
                        id="ebooks"
                        sx={{
                            fontFamily: '"Space Grotesk"',
                            fontWeight: 700,
                            fontSize: { xs: "1.3rem", md: "1.5rem" },
                            color: colors.ink,
                            mb: 3,
                            scrollMarginTop: "100px",
                        }}
                    >
                        E-Books
                    </Typography>
                </FadeInOnScroll>

                <FadeInOnScroll>
                    <Box sx={{
                        maxWidth: 360,
                        borderRadius: "24px",
                        overflow: "hidden",
                        border: "1px solid rgba(18,19,43,0.08)",
                        background: "#fff",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: `0 20px 48px rgba(${colors.indigoRgb}, 0.12)`,
                            borderColor: `rgba(${colors.indigoRgb}, 0.25)`,
                        },
                    }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            py: { xs: 3, md: 4 },
                            background: colors.lavenderSoft,
                        }}>
                            <Box
                                component="img"
                                src={AIEbookCover}
                                alt="AI Simplified E-Book"
                                sx={{
                                    width: { xs: 120, md: 150 },
                                    height: "auto",
                                    borderRadius: "12px",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                }}
                            />
                        </Box>

                        <Box sx={{ p: 2.5 }}>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                                <MenuBookRoundedIcon sx={{ color: colors.indigo, fontSize: 18 }} />
                                <Typography sx={{
                                    fontFamily: '"Space Grotesk"',
                                    fontWeight: 700,
                                    fontSize: "1.1rem",
                                    color: colors.ink,
                                }}>
                                    AI Simplified
                                </Typography>
                            </Stack>

                            <Typography sx={{
                                color: colors.slate, lineHeight: 1.7,
                                fontSize: "0.88rem", mb: 1,
                            }}>
                                Your beginner-friendly guide to understanding AI — what it
                                is, how it works, how to write better prompts, and more.
                            </Typography>

                            <Typography sx={{
                                color: "#999", lineHeight: 1.7,
                                fontSize: "0.82rem", mb: 2,
                            }}>
                                No technical background needed. Written by Self Craft Skills.
                            </Typography>

                            <Button
                                component="a"
                                href="https://craftsmith54.gumroad.com/l/ai-simplified-ebook?wanted=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                fullWidth
                                endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                sx={{
                                    py: 1.2,
                                    borderRadius: "999px",
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                    color: "#fff",
                                    background: colors.indigo,
                                    "&:hover": { background: colors.indigoDark },
                                }}
                            >
                                Download Free E-Book
                            </Button>
                        </Box>
                    </Box>
                </FadeInOnScroll>

                {/* Membership cross-sell — only for visitors who aren't members yet */}
                {!isSubscribed && (
                    <FadeInOnScroll>
                        <Box sx={{
                            mt: { xs: 8, md: 10 },
                            p: { xs: 3, md: 4 },
                            borderRadius: "24px",
                            background: `linear-gradient(135deg, ${colors.indigoDeep}, ${colors.indigo})`,
                            color: "#fff",
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { sm: "center" },
                            justifyContent: "space-between",
                            gap: 2.5,
                            textAlign: { xs: "center", sm: "left" },
                        }}>
                            <Box>
                                <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: { xs: "1.2rem", md: "1.4rem" } }}>
                                    Liked the free tools? The full courses go deeper.
                                </Typography>
                                <Typography sx={{ mt: 0.5, color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
                                    One minimal monthly membership unlocks every course.
                                </Typography>
                            </Box>
                            <Button component={RouterLink} to="/pricing"
                                endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                sx={{
                                    px: 3, py: 1.2, borderRadius: "999px",
                                    color: colors.indigoDeep, fontWeight: 700,
                                    background: "#fff", whiteSpace: "nowrap",
                                    "&:hover": { background: "#f0f0f0" },
                                }}>
                                Become a member
                            </Button>
                        </Box>
                    </FadeInOnScroll>
                )}
            </Container>
        </Box>
    );
};

export default FreeResources;
