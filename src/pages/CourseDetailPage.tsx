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
import CourseAccessGate from "../components/CourseAccessGate";
import StatsBanner from "../components/StatsBanner";
import StickyEnrollBar from "../components/StickyEnrollBar";
import { useSubscription } from "../hooks/useSubscription";
import Seo from "../components/Seo";
import { colors } from "../theme/colors";

const CourseDetailPage = () => {
    useScrollToHash();
    const { courseId } = useParams<{ courseId: string }>();
    const course = coursesData.find((c) => c.id === courseId);
    const { isSubscribed } = useSubscription();
    const [expandedPanel, setExpandedPanel] = useState<string | false>(false);
    const [activeAudience, setActiveAudience] = useState(0);

    const handleAccordionChange =
        (panel: string) =>
        (_event: SyntheticEvent, isExpanded: boolean) => {
            setExpandedPanel(isExpanded ? panel : false);
        };

    const fallbackKeyFeatures = [
        "On-Demand Video Lessons",
        "Beginner-Friendly",
        "Live Q&A sessions for members",
        "No prior experience required",
        "Certificate of completion",
        "Downloadable resources & templates",
    ];

    const getFeatureIcon = (featureText: string) => {
        if (featureText.includes("Live")) return <LiveTvIcon sx={{ color: colors.indigo, fontSize: 18 }} />;
        if (featureText.includes("Beginner")) return <StairsIcon sx={{ color: colors.indigo, fontSize: 18 }} />;
        if (featureText.includes("Q&A")) return <QuestionAnswerIcon sx={{ color: colors.indigo, fontSize: 18 }} />;
        if (featureText.includes("prior experience")) return <SchoolIcon sx={{ color: colors.indigo, fontSize: 18 }} />;
        if (featureText.toLowerCase().includes("certificate")) return <WorkspacePremiumIcon sx={{ color: colors.indigo, fontSize: 18 }} />;
        if (featureText.toLowerCase().includes("bonus")) return <CardGiftcardIcon sx={{ color: colors.indigo, fontSize: 18 }} />;
        return <CheckRoundedIcon sx={{ color: colors.indigo, fontSize: 18 }} />;
    };

    const audienceCards = [
        {
            title: "Students",
            description:
                "Build practical AI skills early and stand out in academics, internships, and placements.",
            icon: <SchoolOutlinedIcon />,
            color: colors.indigo,
            bg: colors.lavenderSoft,
        },
        {
            title: "Working Professionals",
            description:
                "Use AI tools to improve speed, productivity, and decision-making in day-to-day work.",
            icon: <WorkOutlineIcon />,
            color: colors.indigo,
            bg: colors.lavenderSoft,
        },
        {
            title: "Lifelong Learners",
            description:
                "Learn with a structured path and mentor guidance even if you are starting from zero.",
            icon: <PsychologyAltOutlinedIcon />,
            color: colors.indigo,
            bg: colors.lavenderSoft,
        },
        {
            title: "Creators and Freelancers",
            description:
                "Create smarter workflows, better content, and stronger personal branding with AI.",
            icon: <AutoAwesomeOutlinedIcon />,
            color: colors.indigo,
            bg: colors.lavenderSoft,
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
                    <Typography variant="h2" color={colors.ink}>{course.title}</Typography>
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
            value: course.details.duration ?? "12 lessons",
            icon: <CalendarMonthIcon sx={{ color: colors.indigo }} />,
        },
        {
            label: "Class length",
            value: course.details.classLength ?? "60-90 mins",
            icon: <ScheduleIcon sx={{ color: colors.indigo }} />,
        },
        {
            label: "Mode",
            value: course.details.mode ?? "Online",
            icon: <LaptopChromebookIcon sx={{ color: colors.indigo }} />,
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
            <Seo
                title={`${course.title} | Self Craft Skills`}
                description={course.details.summary}
                canonicalPath={`/courses/${course.id}`}
            />
            {/* Hero section - dark */}
            <Box sx={{
                position: "relative",
                overflow: "hidden",
                pt: { xs: 4, md: 5 },
                pb: { xs: 6, md: 8 },
                background: `linear-gradient(160deg, ${colors.indigoDeeper} 0%, ${colors.indigoDeep} 60%, ${colors.indigo} 130%)`,
                color: "#fff",
            }}>
                {/* Glow orbs */}
                <Box sx={{
                    position: "absolute", top: -200, right: -100,
                    width: 500, height: 500, borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(${colors.lavenderRgb}, 0.18), transparent 70%)`,
                    filter: "blur(80px)",
                }} />
                <Box sx={{
                    position: "absolute", bottom: -150, left: -100,
                    width: 400, height: 400, borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(${colors.indigoRgb}, 0.3), transparent 70%)`,
                    filter: "blur(80px)",
                }} />

                <Container sx={{ position: "relative", zIndex: 1 }}>
                    <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Chip label="On-Demand Course" size="small" sx={{
                                borderRadius: "999px",
                                color: colors.lavender,
                                backgroundColor: `rgba(${colors.lavenderRgb}, 0.12)`,
                                border: `1px solid rgba(${colors.lavenderRgb}, 0.25)`,
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
                                        borderRadius: "999px",
                                        px: 3.2, py: 1.3,
                                        color: colors.indigoDeep, fontWeight: 700,
                                        background: "#fff",
                                        "&:hover": { background: "#f0f0f0" },
                                    }}
                                >
                                    {isSubscribed ? "Watch now" : "View pricing plans"}
                                </Button>
                                <Button
                                    href="#curriculum"
                                    startIcon={<ArrowDownwardRoundedIcon />}
                                    sx={{
                                        width: { xs: "100%", sm: "auto" },
                                        borderRadius: "999px",
                                        px: 3, py: 1.2,
                                        color: "rgba(255,255,255,0.7)",
                                        border: "1px solid rgba(255,255,255,0.18)",
                                        "&:hover": {
                                            background: "rgba(255,255,255,0.08)",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    See curriculum
                                </Button>
                            </Stack>

                            <Grid container spacing={1.4} sx={{ mt: 2.5 }} alignItems="stretch">
                                {metaCards.map((card) => (
                                    <Grid key={card.label} size={{ xs: 12, sm: 4 }} sx={{ display: "flex" }}>
                                        <Box sx={{
                                            p: 2,
                                            width: "100%",
                                            borderRadius: "14px",
                                            border: `1px solid rgba(${colors.lavenderRgb}, 0.12)`,
                                            background: "rgba(255,255,255,0.05)",
                                            display: "flex",
                                            alignItems: "center",
                                        }}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                {card.icon}
                                                <Box>
                                                    <Typography sx={{
                                                        fontSize: "0.72rem", fontWeight: 600,
                                                        letterSpacing: "0.06em", textTransform: "uppercase",
                                                        color: "rgba(255,255,255,0.4)",
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
                    background: "linear-gradient(to bottom, transparent, #F7F7FB)",
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
                                color: colors.ink,
                            }}>
                                What you'll learn, module by module.
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
                                                    ? `1px solid rgba(${colors.indigoRgb}, 0.25)`
                                                    : "1px solid rgba(0,0,0,0.04)",
                                                background: isOpen ? colors.lavenderSoft : "#fafafa",
                                                "&:before": { display: "none" },
                                                transition: "all 0.2s ease",
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={isOpen
                                                    ? <RemoveRoundedIcon sx={{ fontSize: 18, color: colors.indigo }} />
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
                                                        color: isOpen ? colors.indigo : "#333",
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
                                                            <CheckRoundedIcon sx={{ color: colors.indigo, fontSize: 16, mt: "3px" }} />
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
                                        background: colors.lavenderSoft,
                                        border: `1px solid rgba(${colors.indigoRgb}, 0.12)`,
                                    }}>
                                        <Typography sx={{ fontWeight: 700, color: colors.ink, fontSize: "0.92rem" }}>
                                            {course.details.finalCapstoneHeading ?? "Final Capstone Project"}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Box sx={{
                                        p: 2, borderRadius: "12px",
                                        background: colors.lavenderSoft,
                                        border: `1px solid rgba(${colors.indigoRgb}, 0.12)`,
                                    }}>
                                        <Typography sx={{ fontWeight: 700, color: colors.ink, fontSize: "0.92rem" }}>
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
                                        fontWeight: 700, color: colors.ink,
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
                                        fontWeight: 700, color: colors.ink,
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
                                                        fontWeight: 600, color: colors.ink,
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
                                            borderRadius: "999px",
                                            color: "#fff",
                                            fontWeight: 700,
                                            background: colors.indigo,
                                            "&:hover": { background: colors.indigoDark },
                                        }}
                                    >
                                        {isSubscribed ? "Watch now" : "Subscribe to watch"}
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {!isSubscribed && <HowItWorks />}

                {/* Audience section — sales content, hidden once subscribed */}
                {!isSubscribed && <Box sx={{
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
                                color: colors.ink,
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
                                                    fontWeight: 700, color: colors.ink,
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
                </Box>}
            </Container>

            {!isSubscribed && <MeetMentorSection />}
            <CourseAccessGate courseId={course.id} courseTitle={course.title} />
            {!isSubscribed && <StatsBanner />}
            <StickyEnrollBar course={course} />
        </Box>
    );
};

export default CourseDetailPage;
