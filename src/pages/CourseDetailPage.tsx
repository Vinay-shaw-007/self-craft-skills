import { useEffect, useState, type SyntheticEvent } from "react";
import { useParams } from "react-router-dom";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StairsIcon from "@mui/icons-material/Stairs";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import useScrollToHash from "../hooks/useScrollToHash";
import { coursesData } from "../components/coursesData";
import HowItWorks from "../components/HowItWorks";
import MeetMentorSection from "../components/MeetMentorSection";
import PricingPlansSection from "../components/BonusSection";
import StatsBanner from "../components/StatsBanner";
import StickyEnrollBar from "../components/StickyEnrollBar";

const CourseDetailPage = () => {
    useScrollToHash();
    const { courseId } = useParams<{ courseId: string }>();
    const course = coursesData.find((c) => c.id === courseId);
    const [expandedPanel, setExpandedPanel] = useState<string | false>(false);
    const [activeAudience, setActiveAudience] = useState(0);

    const handleAccordionChange =
        (panel: string) =>
        (_event: SyntheticEvent, isExpanded: boolean) => {
            setExpandedPanel(isExpanded ? panel : false);
        };

    const fallbackKeyFeatures = [
        "Weekly Live Classes",
        "Beginner-Friendly",
        "LIVE Q&A session",
        "No prior experience required",
        "Certificate of completion",
        "Bonus: worth Rs.4999 (Free)",
    ];

    const getFeatureIcon = (featureText: string) => {
        if (featureText.includes("Live")) return <LiveTvIcon sx={{ color: "#0984E3", fontSize: 18 }} />;
        if (featureText.includes("Beginner")) return <StairsIcon sx={{ color: "#00B894", fontSize: 18 }} />;
        if (featureText.includes("Q&A")) return <QuestionAnswerIcon sx={{ color: "#6C5CE7", fontSize: 18 }} />;
        if (featureText.includes("prior experience")) return <SchoolIcon sx={{ color: "#00B894", fontSize: 18 }} />;
        if (featureText.toLowerCase().includes("certificate")) return <WorkspacePremiumIcon sx={{ color: "#E17055", fontSize: 18 }} />;
        if (featureText.toLowerCase().includes("bonus")) return <CardGiftcardIcon sx={{ color: "#FD79A8", fontSize: 18 }} />;
        return <CheckRoundedIcon sx={{ color: "#00B894", fontSize: 18 }} />;
    };

    const audienceCards = [
        {
            title: "Students",
            description:
                "Build practical AI skills early and stand out in academics, internships, and placements.",
            icon: <SchoolOutlinedIcon />,
            color: "#6C5CE7",
            bg: "#f3f1ff",
        },
        {
            title: "Working Professionals",
            description:
                "Use AI tools to improve speed, productivity, and decision-making in day-to-day work.",
            icon: <WorkOutlineIcon />,
            color: "#00B894",
            bg: "#e6f9f3",
        },
        {
            title: "Lifelong Learners",
            description:
                "Learn with a structured path and mentor guidance even if you are starting from zero.",
            icon: <PsychologyAltOutlinedIcon />,
            color: "#FD79A8",
            bg: "#fce4ec",
        },
        {
            title: "Creators and Freelancers",
            description:
                "Create smarter workflows, better content, and stronger personal branding with AI.",
            icon: <AutoAwesomeOutlinedIcon />,
            color: "#0984E3",
            bg: "#e8f4fd",
        },
    ];

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveAudience((prev) => (prev + 1) % audienceCards.length);
        }, 2600);

        return () => window.clearInterval(intervalId);
    }, [audienceCards.length]);

    if (!course) {
        return (
            <Box sx={{ py: 8 }}>
                <Container>
                    <Alert severity="error">Course not found.</Alert>
                </Container>
            </Box>
        );
    }

    if (!course.details.syllabus) {
        return (
            <Box sx={{ py: 8 }}>
                <Container>
                    <Typography variant="h2" color="#111">{course.title}</Typography>
                    <Typography sx={{ mt: 2, color: "#666", lineHeight: 1.8 }}>
                        {course.details.summary}
                    </Typography>
                    <Typography sx={{ mt: 3, fontStyle: "italic", color: "#999" }}>
                        Full syllabus and detailed presentation are coming soon.
                    </Typography>
                </Container>
            </Box>
        );
    }

    const keyFeatures = (course.details.keyFeatures ?? fallbackKeyFeatures).map((text) => ({
        text,
        icon: getFeatureIcon(text),
    }));

    const metaCards = [
        {
            label: "Duration",
            value: course.details.duration ?? "4 weeks",
            icon: <CalendarMonthIcon sx={{ color: "#6C5CE7" }} />,
        },
        {
            label: "Class length",
            value: course.details.classLength ?? "60-90 mins",
            icon: <ScheduleIcon sx={{ color: "#00B894" }} />,
        },
        {
            label: "Mode",
            value: course.details.mode ?? "Online",
            icon: <LaptopChromebookIcon sx={{ color: "#FD79A8" }} />,
        },
    ];

    const scrollToPricingPlans = () => {
        const section = document.getElementById("pricing-plans");
        if (!section) return;
        const headerOffset = 92;
        const targetTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: Math.max(targetTop - headerOffset, 0),
            behavior: "smooth",
        });
    };

    return (
        <Box sx={{ pb: { xs: 18, md: 12 } }}>
            {/* Hero section - dark */}
            <Box sx={{
                position: "relative",
                overflow: "hidden",
                pt: { xs: 4, md: 5 },
                pb: { xs: 6, md: 8 },
                background: "linear-gradient(180deg, #0a0a0a 0%, #111 60%, #1a1a2e 100%)",
                color: "#fff",
            }} className="noise-overlay">
                {/* Glow orbs */}
                <Box sx={{
                    position: "absolute", top: -200, right: -100,
                    width: 500, height: 500, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(108, 92, 231, 0.12), transparent 70%)",
                    filter: "blur(80px)",
                }} />
                <Box sx={{
                    position: "absolute", bottom: -150, left: -100,
                    width: 400, height: 400, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(9, 132, 227, 0.08), transparent 70%)",
                    filter: "blur(80px)",
                }} />

                <Container sx={{ position: "relative", zIndex: 1 }}>
                    <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Chip label="Live Course" size="small" sx={{
                                borderRadius: "8px",
                                color: "#00B894",
                                backgroundColor: "rgba(0, 184, 148, 0.1)",
                                border: "1px solid rgba(0, 184, 148, 0.2)",
                                fontWeight: 600,
                            }} />
                            <Typography variant="h1" sx={{
                                mt: 2,
                                maxWidth: 820,
                                fontSize: { xs: "2.2rem", md: "3rem", lg: "3.5rem" },
                                lineHeight: { xs: 1.1, md: 1.04 },
                            }}>
                                {course.title}
                            </Typography>
                            <Typography sx={{
                                mt: 2, maxWidth: 680,
                                color: "rgba(255,255,255,0.5)",
                                fontSize: { xs: "0.98rem", md: "1.04rem" },
                                lineHeight: 1.7,
                            }}>
                                {course.details.summary}
                            </Typography>

                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2.5 }}>
                                {keyFeatures.slice(0, 4).map((feature) => (
                                    <Box key={feature.text} sx={{
                                        px: 1.5, py: 0.5,
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        background: "rgba(255,255,255,0.04)",
                                        color: "rgba(255,255,255,0.6)",
                                        fontSize: "0.82rem",
                                        fontWeight: 500,
                                    }}>
                                        {feature.text}
                                    </Box>
                                ))}
                            </Stack>

                            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
                                <Button
                                    onClick={scrollToPricingPlans}
                                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                    sx={{
                                        width: { xs: "100%", sm: "auto" },
                                        borderRadius: "12px",
                                        px: 3.2, py: 1.3,
                                        color: "#111", fontWeight: 700,
                                        background: "#fff",
                                        "&:hover": { background: "#f0f0f0" },
                                        boxShadow: "0 8px 32px rgba(255,255,255,0.1)",
                                    }}
                                >
                                    View pricing plans
                                </Button>
                                <Button
                                    href="#curriculum"
                                    startIcon={<ArrowDownwardRoundedIcon />}
                                    sx={{
                                        width: { xs: "100%", sm: "auto" },
                                        borderRadius: "12px",
                                        px: 3, py: 1.2,
                                        color: "rgba(255,255,255,0.6)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        "&:hover": {
                                            background: "rgba(255,255,255,0.04)",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    See curriculum
                                </Button>
                            </Stack>

                            <Grid container spacing={1.4} sx={{ mt: 2.5 }}>
                                {metaCards.map((card) => (
                                    <Grid key={card.label} size={{ xs: 12, sm: 4 }}>
                                        <Box sx={{
                                            p: 2,
                                            borderRadius: "14px",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                            background: "rgba(255,255,255,0.04)",
                                        }}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                {card.icon}
                                                <Box>
                                                    <Typography sx={{
                                                        fontSize: "0.72rem", fontWeight: 600,
                                                        letterSpacing: "0.06em", textTransform: "uppercase",
                                                        color: "rgba(255,255,255,0.35)",
                                                    }}>
                                                        {card.label}
                                                    </Typography>
                                                    <Typography sx={{
                                                        mt: 0.2, fontWeight: 600,
                                                        fontSize: "0.95rem",
                                                    }}>
                                                        {card.value}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box sx={{ position: "relative", maxWidth: 520, mx: "auto" }}>
                                <Box sx={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
                                }}>
                                    <Box
                                        component="img"
                                        src={course.image}
                                        alt={course.title}
                                        sx={{
                                            width: "100%",
                                            height: { xs: 280, md: 370 },
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Bottom gradient fade to white */}
                <Box sx={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: 120,
                    background: "linear-gradient(to bottom, transparent, #fafafa)",
                    pointerEvents: "none",
                }} />
            </Box>

            {/* Curriculum section */}
            <Container sx={{ mt: { xs: -2, md: -3 } }}>
                <Box
                    id="curriculum"
                    sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: "20px",
                        border: "1px solid rgba(0,0,0,0.06)",
                        background: "#fff",
                        scrollMarginTop: "110px",
                    }}
                >
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography sx={{
                                fontSize: "0.72rem", fontWeight: 600,
                                letterSpacing: "0.12em", textTransform: "uppercase",
                                color: "#999",
                            }}>
                                Curriculum roadmap
                            </Typography>
                            <Typography variant="h3" sx={{
                                mt: 1,
                                fontSize: { xs: "1.9rem", md: "2.5rem" },
                                color: "#111",
                            }}>
                                What learners cover week by week.
                            </Typography>

                            <Box sx={{ mt: 2.5 }}>
                                {course.details.syllabus.map((week, index) => {
                                    const panelId = `panel${index}`;
                                    const isOpen = expandedPanel === panelId;
                                    return (
                                        <Accordion
                                            key={week.week}
                                            expanded={isOpen}
                                            onChange={handleAccordionChange(panelId)}
                                            disableGutters
                                            elevation={0}
                                            sx={{
                                                mb: 1,
                                                borderRadius: "12px !important",
                                                overflow: "hidden",
                                                border: isOpen
                                                    ? "1px solid rgba(108, 92, 231, 0.15)"
                                                    : "1px solid rgba(0,0,0,0.04)",
                                                background: isOpen ? "#faf9ff" : "#fafafa",
                                                "&:before": { display: "none" },
                                                transition: "all 0.2s ease",
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={isOpen
                                                    ? <RemoveRoundedIcon sx={{ fontSize: 18, color: "#6C5CE7" }} />
                                                    : <AddRoundedIcon sx={{ fontSize: 18, color: "#999" }} />
                                                }
                                                sx={{
                                                    px: 2, py: 0.4,
                                                    "& .MuiAccordionSummary-content": { my: 1 },
                                                }}
                                            >
                                                <Box>
                                                    <Typography sx={{
                                                        fontWeight: 700,
                                                        color: isOpen ? "#111" : "#333",
                                                        fontSize: { xs: "0.92rem", md: "1rem" },
                                                    }}>
                                                        {week.week}
                                                    </Typography>
                                                    <Typography sx={{
                                                        mt: 0.3, color: "#999",
                                                        fontSize: "0.84rem",
                                                        lineHeight: 1.5,
                                                    }}>
                                                        {week.takeaway}
                                                    </Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ px: 2, pb: 2 }}>
                                                <Stack spacing={0.5}>
                                                    {week.topics.map((topic) => (
                                                        <Stack key={topic} direction="row" spacing={0.8} alignItems="flex-start">
                                                            <CheckRoundedIcon sx={{ color: "#00B894", fontSize: 16, mt: "3px" }} />
                                                            <Typography sx={{
                                                                color: "#444",
                                                                fontSize: "0.88rem",
                                                                lineHeight: 1.6,
                                                            }}>
                                                                {topic}
                                                            </Typography>
                                                        </Stack>
                                                    ))}
                                                </Stack>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                })}
                            </Box>

                            <Grid container spacing={1.5} sx={{ mt: 1.5 }}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Box sx={{
                                        p: 2, borderRadius: "12px",
                                        background: "#f3f1ff",
                                        border: "1px solid rgba(108, 92, 231, 0.1)",
                                    }}>
                                        <Typography sx={{ fontWeight: 700, color: "#111", fontSize: "0.92rem" }}>
                                            {course.details.finalCapstoneHeading ?? "Final Capstone Project"}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Box sx={{
                                        p: 2, borderRadius: "12px",
                                        background: "#e8f4fd",
                                        border: "1px solid rgba(9, 132, 227, 0.1)",
                                    }}>
                                        <Typography sx={{ fontWeight: 700, color: "#111", fontSize: "0.92rem" }}>
                                            {course.details.certificateHeading ?? "Certificate"}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Sidebar */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ position: { xs: "static", md: "sticky" }, top: 104 }}>
                                <Box sx={{
                                    p: 2.5, mb: 2,
                                    borderRadius: "16px",
                                    background: "#fafafa",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                }}>
                                    <Typography sx={{
                                        fontFamily: '"Space Grotesk"',
                                        fontWeight: 700, color: "#111",
                                        fontSize: "0.95rem",
                                    }}>
                                        What you get
                                    </Typography>
                                    <Stack spacing={0.8} sx={{ mt: 1.5 }}>
                                        {keyFeatures.map((feature) => (
                                            <Stack key={feature.text} direction="row" spacing={0.8} alignItems="center">
                                                {feature.icon}
                                                <Typography sx={{
                                                    color: "#444",
                                                    fontWeight: 500,
                                                    fontSize: "0.86rem",
                                                }}>
                                                    {feature.text}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Box>

                                <Box sx={{
                                    p: 2.5,
                                    borderRadius: "16px",
                                    background: "#fafafa",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                }}>
                                    <Typography sx={{
                                        fontFamily: '"Space Grotesk"',
                                        fontWeight: 700, color: "#111",
                                        fontSize: "0.95rem",
                                    }}>
                                        Class details
                                    </Typography>
                                    <Stack spacing={1.2} sx={{ mt: 1.5 }}>
                                        {metaCards.map((card) => (
                                            <Stack key={card.label} direction="row" spacing={1} alignItems="center">
                                                {card.icon}
                                                <Box>
                                                    <Typography sx={{
                                                        fontSize: "0.76rem", fontWeight: 600,
                                                        color: "#999", textTransform: "uppercase",
                                                        letterSpacing: "0.04em",
                                                    }}>
                                                        {card.label}
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontWeight: 600, color: "#111",
                                                        fontSize: "0.9rem",
                                                    }}>
                                                        {card.value}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        ))}
                                    </Stack>

                                    <Button
                                        onClick={scrollToPricingPlans}
                                        fullWidth
                                        sx={{
                                            mt: 2, py: 1.2,
                                            borderRadius: "12px",
                                            color: "#fff",
                                            fontWeight: 700,
                                            background: "#111",
                                            "&:hover": { background: "#222" },
                                        }}
                                    >
                                        Enroll from {"\u20B9579"}
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <HowItWorks />

                {/* Audience section */}
                <Box sx={{
                    mt: 4,
                    p: { xs: 3, md: 4 },
                    borderRadius: "20px",
                    border: "1px solid rgba(0,0,0,0.06)",
                    background: "#fff",
                }}>
                    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography sx={{
                                fontSize: "0.72rem", fontWeight: 600,
                                letterSpacing: "0.12em", textTransform: "uppercase",
                                color: "#999",
                            }}>
                                Best suited for
                            </Typography>
                            <Typography variant="h3" sx={{
                                mt: 1,
                                fontSize: { xs: "1.9rem", md: "2.3rem" },
                                color: "#111",
                            }}>
                                Who this course is built for.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 8 }}>
                            <Stack spacing={1.2}>
                                {audienceCards.map((card, index) => {
                                    const isActive = index === activeAudience;
                                    return (
                                        <Box key={card.title} sx={{
                                            p: 2,
                                            borderRadius: "16px",
                                            display: "flex",
                                            flexDirection: { xs: "column", sm: "row" },
                                            gap: 1.5,
                                            alignItems: { xs: "flex-start", sm: "center" },
                                            border: isActive
                                                ? `1px solid ${card.color}25`
                                                : "1px solid rgba(0,0,0,0.04)",
                                            background: isActive ? "#fafafa" : "#fff",
                                            transform: isActive ? "translateX(-4px)" : "translateX(0)",
                                            transition: "all 0.35s ease",
                                        }}>
                                            <Box sx={{
                                                width: 44, height: 44,
                                                borderRadius: "12px",
                                                display: "grid", placeItems: "center",
                                                color: isActive ? card.color : "#999",
                                                backgroundColor: isActive ? card.bg : "#f5f5f5",
                                                transition: "all 0.3s ease",
                                            }}>
                                                {card.icon}
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    fontFamily: '"Space Grotesk"',
                                                    fontWeight: 700, color: "#111",
                                                    fontSize: "0.95rem",
                                                }}>
                                                    {card.title}
                                                </Typography>
                                                <Typography sx={{
                                                    mt: 0.3, color: "#666",
                                                    lineHeight: 1.6, fontSize: "0.86rem",
                                                }}>
                                                    {card.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <MeetMentorSection />
            <PricingPlansSection courseTitle={course.title} />
            <StatsBanner />
            <StickyEnrollBar course={course} />
        </Box>
    );
};

export default CourseDetailPage;
