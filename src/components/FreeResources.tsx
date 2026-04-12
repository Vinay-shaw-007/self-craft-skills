import { useEffect, useRef, useState } from "react";
import {
    Box, Button, Container, Stack, Typography,
} from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import FadeInOnScroll from "./FadeInOnScroll";
import PromptBuilderLogo from "../assets/Prompt-Builder.png";
import AIImagePromptBuilderLogo from "../assets/ai-image-prompt-builder.png";
import ObjectTalkLogo from "../assets/object-talk-master-builder.png";
import TimeDisciplineCoachLogo from "../assets/time-discipline-coach.png";
import AIEbookCover from "../assets/AI-ebook.png";

const FreeResources = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalCards, setTotalCards] = useState(0);

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
        <Box sx={{ py: { xs: 10, md: 14 } }}>
            <Container maxWidth="lg">
                {/* Section heading */}
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
                        <Typography variant="h2" sx={{
                            fontSize: { xs: "2rem", md: "2.8rem" },
                            color: "#111",
                            maxWidth: 700,
                            mx: "auto",
                        }}>
                            Free resources to supercharge your AI journey.
                        </Typography>
                    </Box>

                    {/* Banner */}
                    <Box sx={{
                        maxWidth: 860,
                        mx: "auto",
                        mb: { xs: 5, md: 6 },
                        p: 0.6,
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, #6C5CE7, #0984E3, #00B894)",
                    }}>
                        <Box sx={{
                            borderRadius: "17px",
                            px: { xs: 2.5, md: 3.5 },
                            py: { xs: 2, md: 2.5 },
                            background: "rgba(0,0,0,0.85)",
                            backdropFilter: "blur(20px)",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { xs: "flex-start", md: "center" },
                            justifyContent: "space-between",
                            gap: 2,
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: "rgba(255,255,255,0.5)",
                                    fontWeight: 600, fontSize: "0.72rem",
                                    letterSpacing: "0.1em", textTransform: "uppercase",
                                }}>
                                    Built for learners & creators
                                </Typography>
                                <Typography sx={{
                                    mt: 0.5, color: "#fff", fontWeight: 600,
                                    fontSize: { xs: "1rem", md: "1.15rem" },
                                }}>
                                    Explore our free AI-powered tools & resources — no signup required.
                                </Typography>
                            </Box>
                            <Box sx={{
                                px: 2, py: 0.8, borderRadius: "10px",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "rgba(255,255,255,0.7)",
                                fontWeight: 600, fontSize: "0.84rem",
                                whiteSpace: "nowrap",
                            }}>
                                100% Free
                            </Box>
                        </Box>
                    </Box>
                </FadeInOnScroll>

                {/* Category quick links */}
                <FadeInOnScroll>
                    <Stack
                        direction="row"
                        spacing={1.2}
                        justifyContent="center"
                        sx={{ mb: { xs: 4, md: 5 } }}
                    >
                        {[
                            { label: "Tools", href: "#tools" },
                            { label: "E-Books", href: "#ebooks" },
                        ].map((item) => (
                            <Box
                                key={item.href}
                                component="a"
                                href={item.href}
                                sx={{
                                    px: 2.2,
                                    py: 0.8,
                                    borderRadius: "999px",
                                    border: "1px solid rgba(0,0,0,0.1)",
                                    background: "#fff",
                                    color: "#111",
                                    fontWeight: 600,
                                    fontSize: "0.85rem",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        background: "#111",
                                        color: "#fff",
                                        borderColor: "#111",
                                    },
                                }}
                            >
                                {item.label}
                            </Box>
                        ))}
                    </Stack>
                </FadeInOnScroll>

                {/* Tools Category */}
                <FadeInOnScroll>
                    <Typography
                        id="tools"
                        sx={{
                            fontFamily: '"Space Grotesk"',
                            fontWeight: 700,
                            fontSize: { xs: "1.3rem", md: "1.5rem" },
                            color: "#111",
                            mb: 3,
                            scrollMarginTop: "100px",
                        }}
                    >
                        Tools
                    </Typography>
                </FadeInOnScroll>

                {/* Tools Grid */}
                <FadeInOnScroll>
                    <Box ref={scrollRef} sx={{
                        display: { xs: "flex", sm: "grid" },
                        gridTemplateColumns: { sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                        gap: { xs: 2, sm: 3, md: 3.5 },
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
                        {/* Prompt Builder Card */}
                        <Box sx={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid rgba(108, 92, 231, 0.2)",
                            background: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 20px 48px rgba(108, 92, 231, 0.12)",
                            },
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                py: { xs: 3, md: 4 },
                                background: "linear-gradient(135deg, rgba(108, 92, 231, 0.06), rgba(9, 132, 227, 0.06))",
                            }}>
                                <Box
                                    component="img"
                                    src={PromptBuilderLogo}
                                    alt="Prompt Builder"
                                    sx={{
                                        width: { xs: 100, md: 120 },
                                        height: { xs: 100, md: 120 },
                                        borderRadius: "24px",
                                    }}
                                />
                            </Box>
                            <Box sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                                    <AutoAwesomeRoundedIcon sx={{ color: "#6C5CE7", fontSize: 18 }} />
                                    <Typography sx={{
                                        fontFamily: '"Space Grotesk"',
                                        fontWeight: 700,
                                        fontSize: "1.15rem",
                                        color: "#111",
                                    }}>
                                        Prompt Builder
                                    </Typography>
                                </Stack>
                                <Typography sx={{
                                    color: "#666", lineHeight: 1.7,
                                    fontSize: "0.88rem", mb: 1,
                                }}>
                                    Turn ideas into high-performing AI prompts in seconds. Just describe what you need, and Prompt Builder creates optimized prompts—or refines your existing ones—for ChatGPT, Claude, or any AI tool.
                                </Typography>
                                <Typography sx={{
                                    color: "#999", lineHeight: 1.7,
                                    fontSize: "0.82rem", mb: 2,
                                }}>
                                    No prompt engineering experience needed. Powered by a custom GPT built by Self Craft Skills.
                                </Typography>
                                <Button
                                    component="a"
                                    href="https://chatgpt.com/g/g-69c157457308819196af4084dcc29297-prompt-builder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fullWidth
                                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                    sx={{
                                        mt: "auto",
                                        py: 1.2,
                                        borderRadius: "12px",
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        color: "#fff",
                                        background: "#111",
                                        "&:hover": { background: "#222" },
                                    }}
                                >
                                    Try Prompt Builder — It's Free
                                </Button>
                            </Box>
                        </Box>

                        {/* AI Image Prompt Builder Card */}
                        <Box sx={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid rgba(9, 132, 227, 0.2)",
                            background: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 20px 48px rgba(9, 132, 227, 0.12)",
                            },
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                py: { xs: 3, md: 4 },
                                background: "linear-gradient(135deg, rgba(9, 132, 227, 0.06), rgba(108, 92, 231, 0.06))",
                            }}>
                                <Box
                                    component="img"
                                    src={AIImagePromptBuilderLogo}
                                    alt="AI Image Prompt Builder"
                                    sx={{
                                        width: { xs: 100, md: 120 },
                                        height: { xs: 100, md: 120 },
                                        borderRadius: "24px",
                                    }}
                                />
                            </Box>
                            <Box sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                                    <AutoAwesomeRoundedIcon sx={{ color: "#0984E3", fontSize: 18 }} />
                                    <Typography sx={{
                                        fontFamily: '"Space Grotesk"',
                                        fontWeight: 700,
                                        fontSize: "1.15rem",
                                        color: "#111",
                                    }}>
                                        AI Image Prompt Builder
                                    </Typography>
                                </Stack>
                                <Typography sx={{
                                    color: "#666", lineHeight: 1.7,
                                    fontSize: "0.88rem", mb: 1,
                                }}>
                                    Create personalised AI image prompts just for you. Describe your vision, and get detailed, optimized prompts ready for DALL·E, Midjourney, or any AI image generator.
                                </Typography>
                                <Typography sx={{
                                    color: "#999", lineHeight: 1.7,
                                    fontSize: "0.82rem", mb: 2,
                                }}>
                                    No design skills needed. Powered by a custom GPT built by Self Craft Skills.
                                </Typography>
                                <Button
                                    component="a"
                                    href="https://chatgpt.com/g/g-69cdcc3a22488191a7c61718c3397b77-ai-image-prompt-builder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fullWidth
                                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                    sx={{
                                        mt: "auto",
                                        py: 1.2,
                                        borderRadius: "12px",
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        color: "#fff",
                                        background: "#111",
                                        "&:hover": { background: "#222" },
                                    }}
                                >
                                    Try Image Prompt Builder — It's Free
                                </Button>
                            </Box>
                        </Box>

                        {/* Object Talk Master Builder Card */}
                        <Box sx={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid rgba(0, 184, 148, 0.2)",
                            background: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 20px 48px rgba(0, 184, 148, 0.12)",
                            },
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                py: { xs: 3, md: 4 },
                                background: "linear-gradient(135deg, rgba(0, 184, 148, 0.06), rgba(9, 132, 227, 0.06))",
                            }}>
                                <Box
                                    component="img"
                                    src={ObjectTalkLogo}
                                    alt="Object Talk Master Builder"
                                    sx={{
                                        width: { xs: 100, md: 120 },
                                        height: { xs: 100, md: 120 },
                                        borderRadius: "24px",
                                    }}
                                />
                            </Box>
                            <Box sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                                    <AutoAwesomeRoundedIcon sx={{ color: "#00B894", fontSize: 18 }} />
                                    <Typography sx={{
                                        fontFamily: '"Space Grotesk"',
                                        fontWeight: 700,
                                        fontSize: "1.15rem",
                                        color: "#111",
                                    }}>
                                        Object Talk Master Builder
                                    </Typography>
                                </Stack>
                                <Typography sx={{
                                    color: "#666", lineHeight: 1.7,
                                    fontSize: "0.88rem", mb: 1,
                                }}>
                                    Bring any object to life with AI. Pick anything around you and get a fun, creative conversation as if that object could talk — great for creativity, storytelling, and learning.
                                </Typography>
                                <Typography sx={{
                                    color: "#999", lineHeight: 1.7,
                                    fontSize: "0.82rem", mb: 2,
                                }}>
                                    Just pick an object and start talking. Powered by a custom GPT built by Self Craft Skills.
                                </Typography>
                                <Button
                                    component="a"
                                    href="https://chatgpt.com/g/g-69d3f13719288191b4460abdc37e59ff-object-talk-master-builder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fullWidth
                                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                    sx={{
                                        mt: "auto",
                                        py: 1.2,
                                        borderRadius: "12px",
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        color: "#fff",
                                        background: "#111",
                                        "&:hover": { background: "#222" },
                                    }}
                                >
                                    Try Object Talk — It's Free
                                </Button>
                            </Box>
                        </Box>

                        {/* Time Discipline Coach Card */}
                        <Box sx={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid rgba(255, 107, 107, 0.2)",
                            background: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 20px 48px rgba(255, 107, 107, 0.12)",
                            },
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                py: { xs: 3, md: 4 },
                                background: "linear-gradient(135deg, rgba(255, 107, 107, 0.06), rgba(253, 203, 110, 0.06))",
                            }}>
                                <Box
                                    component="img"
                                    src={TimeDisciplineCoachLogo}
                                    alt="Time Discipline Coach"
                                    sx={{
                                        width: { xs: 100, md: 120 },
                                        height: { xs: 100, md: 120 },
                                        borderRadius: "24px",
                                    }}
                                />
                            </Box>
                            <Box sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                                    <AutoAwesomeRoundedIcon sx={{ color: "#FF6B6B", fontSize: 18 }} />
                                    <Typography sx={{
                                        fontFamily: '"Space Grotesk"',
                                        fontWeight: 700,
                                        fontSize: "1.15rem",
                                        color: "#111",
                                    }}>
                                        Time Discipline Coach
                                    </Typography>
                                </Stack>
                                <Typography sx={{
                                    color: "#666", lineHeight: 1.7,
                                    fontSize: "0.88rem", mb: 1,
                                }}>
                                    Your personal AI coach to master time management and build lasting discipline. Get tailored routines, focus strategies, and actionable plans to stop procrastinating and take control of your day.
                                </Typography>
                                <Typography sx={{
                                    color: "#999", lineHeight: 1.7,
                                    fontSize: "0.82rem", mb: 2,
                                }}>
                                    Built for students, professionals, and creators. Powered by a custom GPT built by Self Craft Skills.
                                </Typography>
                                <Button
                                    component="a"
                                    href="https://chatgpt.com/g/g-69d880ca14608191b411154bd596158f-time-discipline-coach"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fullWidth
                                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                    sx={{
                                        mt: "auto",
                                        py: 1.2,
                                        borderRadius: "12px",
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        color: "#fff",
                                        background: "#111",
                                        "&:hover": { background: "#222" },
                                    }}
                                >
                                    Try Time Discipline Coach — It's Free
                                </Button>
                            </Box>
                        </Box>
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
                                            background: isActive ? "#6C5CE7" : "rgba(0,0,0,0.18)",
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                );
                            })}
                        </Stack>
                    )}
                </FadeInOnScroll>

                {/* E-Books Category */}
                <FadeInOnScroll>
                    <Typography
                        id="ebooks"
                        sx={{
                            fontFamily: '"Space Grotesk"',
                            fontWeight: 700,
                            fontSize: { xs: "1.3rem", md: "1.5rem" },
                            color: "#111",
                            mb: 3,
                            scrollMarginTop: "100px",
                        }}
                    >
                        E-Books
                    </Typography>
                </FadeInOnScroll>

                {/* AI Simplified E-Book Card */}
                <FadeInOnScroll>
                    <Box sx={{
                        maxWidth: 360,
                        borderRadius: "20px",
                        overflow: "hidden",
                        border: "1px solid rgba(0, 184, 148, 0.2)",
                        background: "#fff",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 20px 48px rgba(0, 184, 148, 0.12)",
                        },
                    }}>
                        {/* Cover image */}
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            py: { xs: 3, md: 4 },
                            background: "linear-gradient(135deg, rgba(0, 184, 148, 0.06), rgba(9, 132, 227, 0.06))",
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

                        {/* Content */}
                        <Box sx={{ p: 2.5 }}>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                                <MenuBookRoundedIcon sx={{ color: "#00B894", fontSize: 18 }} />
                                <Typography sx={{
                                    fontFamily: '"Space Grotesk"',
                                    fontWeight: 700,
                                    fontSize: "1.15rem",
                                    color: "#111",
                                }}>
                                    AI Simplified
                                </Typography>
                            </Stack>

                            <Typography sx={{
                                color: "#666", lineHeight: 1.7,
                                fontSize: "0.88rem", mb: 1,
                            }}>
                                Your beginner-friendly guide to understanding AI — what it is, how it works, write better prompts and more.
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
                                    borderRadius: "12px",
                                    fontWeight: 600,
                                    fontSize: "0.9rem",
                                    color: "#fff",
                                    background: "#111",
                                    "&:hover": { background: "#222" },
                                }}
                            >
                                Download Free E-Book
                            </Button>
                        </Box>
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default FreeResources;
