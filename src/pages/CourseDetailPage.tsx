// src/pages/CourseDetailPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Container,
    Typography,
    Alert,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    CardMedia,
} from "@mui/material";
import useScrollToHash from "../hooks/useScrollToHash";
import { coursesData } from "../components/coursesData";
import StickyEnrollBar from "../components/StickyEnrollBar";
import BonusSection from "../components/BonusSection";
import BannerImage from "../assets/banner.png";
import MeetMentorSection from "../components/MeetMentorSection";
// Icons
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StairsIcon from "@mui/icons-material/Stairs";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StatsBanner from "../components/StatsBanner";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

const CourseDetailPage = () => {
    useScrollToHash();
    const { courseId } = useParams<{ courseId: string }>();
    const course = coursesData.find((c) => c.id === courseId);

    // This is the line that controls the accordions. It's now set to 'false'.
    const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

    const handleAccordionChange =
        (panel: string) =>
        (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedPanel(isExpanded ? panel : false);
        };

    const fallbackKeyFeatures = [
        "Weekly Live Classes",
        "Beginner-Friendly",
        "LIVE Q&A session",
        "No prior experience required",
        "Certificate of completion",
        "Bonus: worth \u20B94999",
    ];

    const getFeatureIcon = (featureText: string) => {
        if (featureText.includes("Live")) {
            return <LiveTvIcon color="info" fontSize="inherit" />;
        }
        if (featureText.includes("Beginner")) {
            return <StairsIcon color="info" fontSize="inherit" />;
        }
        if (featureText.includes("Q&A")) {
            return <QuestionAnswerIcon color="info" fontSize="inherit" />;
        }
        if (featureText.includes("prior experience")) {
            return <SchoolIcon color="info" fontSize="inherit" />;
        }
        if (featureText.toLowerCase().includes("certificate")) {
            return <WorkspacePremiumIcon color="info" fontSize="inherit" />;
        }
        if (featureText.toLowerCase().includes("bonus")) {
            return <CardGiftcardIcon color="info" fontSize="inherit" />;
        }
        return <CheckCircleOutlineIcon color="info" fontSize="inherit" />;
    };

    const keyFeatures = (course?.details.keyFeatures ?? fallbackKeyFeatures).map(
        (text) => ({
            text,
            icon: getFeatureIcon(text),
        })
    );

    const audienceCards = [
        {
            title: "Students",
            description:
                "Build practical AI skills early and stand out in academics, internships, and placements.",
            icon: <SchoolOutlinedIcon />,
            accent: "#2563eb",
        },
        {
            title: "Working Professionals",
            description:
                "Use AI tools to improve speed, productivity, and decision-making in day-to-day work.",
            icon: <WorkOutlineIcon />,
            accent: "#7c3aed",
        },
        {
            title: "Lifelong Learners",
            description:
                "Learn with a structured path and mentor guidance even if you are starting from zero.",
            icon: <PsychologyAltOutlinedIcon />,
            accent: "#d32f2f",
        },
        {
            title: "Creators & Freelancers",
            description:
                "Create smarter workflows, better content, and stronger personal branding with AI.",
            icon: <AutoAwesomeOutlinedIcon />,
            accent: "#0f766e",
        },
    ];

    const [activeAudience, setActiveAudience] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveAudience(
                (prev) => (prev + 1) % audienceCards.length
            );
        }, 2600);

        return () => window.clearInterval(intervalId);
    }, [audienceCards.length]);

    if (!course) {
        return (
            <Box sx={{ py: 6 }}>
                {" "}
                <Container>
                    {" "}
                    <Alert severity="error">Course not found!</Alert>{" "}
                </Container>{" "}
            </Box>
        );
    }

    if (!course.details.syllabus) {
        return (
            <Box sx={{ py: 6 }}>
                <Container>
                    <Typography variant="h4" fontWeight="bold">
                        {course.title}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {course.details.summary}
                    </Typography>
                    <Typography sx={{ mt: 4, fontStyle: "italic" }}>
                        Full syllabus and details for this course are coming
                        soon!
                    </Typography>
                </Container>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='none' stroke='%23e5e5e5' stroke-width='1'%3E%3Cpath d='M 40 0 L 0 0 0 40'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "25px 25px",
                backgroundRepeat: "repeat",
            }}
        >
            <Box
            // sx={{
            //     py: { xs: 8, md: 12 },
            //     textAlign: "center",
            //     color: "white",
            //     background:
            //         "linear-gradient(45deg, #1f2937 30%, #111827 90%)",
            // }}
            >
                {/* <Container> */}
                {/* {course.titleSvg ? (
                        <img
                            src={course.titleSvg}
                            alt={course.title}
                            style={{
                                height: "80px",
                                filter: "brightness(0) invert(1) drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
                            }}
                        />
                    ) : (
                        <Typography
                            variant="h3"
                            component="h1"
                            fontWeight="bold"
                        >
                            {course.title}
                        </Typography>
                    )}
                    <Typography variant="h6" sx={{ mt: 2, color: "#e0e0e0" }}>
                        {course.details.summary}
                    </Typography> */}

                {/* </Container> */}
                <CardMedia
                    component="img"
                    image={BannerImage}
                    alt={course.title}
                    sx={{
                        width: "100%",
                        maxHeight: 400,
                        objectFit: "cover",
                        borderRadius: "8px",
                        mb: 3,
                    }}
                />
            </Box>

            <Container sx={{ py: 6 }}>
                <Paper
                    sx={{
                        p: { xs: 2.5, md: 4 },
                        borderRadius: "24px",
                        border: "1px solid #f2e7e7",
                        boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
                        background:
                            "linear-gradient(180deg, #fffdf8 0%, #ffffff 45%, #fffaf9 100%)",
                    }}
                >
                    <Grid container spacing={{ xs: 3, md: 5 }}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#d32f2f",
                                    fontWeight: 600,
                                    letterSpacing: "0.14em",
                                }}
                            >
                                Learning Roadmap
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                gutterBottom
                                sx={{
                                    color: "#111827",
                                    fontSize: { xs: "2rem", md: "2.4rem" },
                                }}
                            >
                                Course{" "}
                                <Box
                                    component="span"
                                    sx={{ color: "#d32f2f" }}
                                >
                                    Curriculum
                                </Box>
                            </Typography>
                            {course.details.syllabus.map((week, index) => {
                                const panelId = `panel${index}`;
                                return (
                                    <Accordion
                                        key={index}
                                        expanded={expandedPanel === panelId}
                                        onChange={handleAccordionChange(
                                            panelId
                                        )}
                                        sx={{
                                            mb: 1.5,
                                            "&:before": { display: "none" },
                                            borderRadius: "12px",
                                            border: "1px solid #efe7e7",
                                            backgroundColor: "#fff",
                                            boxShadow:
                                                "0 6px 16px rgba(15, 23, 42, 0.06)",
                                            transition:
                                                "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-3px)",
                                                boxShadow:
                                                    "0 12px 24px rgba(15, 23, 42, 0.08)",
                                            },
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                <ExpandMoreIcon
                                                    sx={{ color: "#d32f2f" }}
                                                />
                                            }
                                            sx={{
                                                borderRadius: "12px",
                                                "&.Mui-expanded": {
                                                    minHeight: 48,
                                                    backgroundColor: "#fff4f4",
                                                },
                                                "& .MuiAccordionSummary-content.Mui-expanded":
                                                    {
                                                        my: 1.5,
                                                    },
                                            }}
                                        >
                                            <Typography
                                                fontWeight={600}
                                                sx={{
                                                    color: "#111827",
                                                    fontSize: {
                                                        xs: "1.05rem",
                                                        md: "1.2rem",
                                                    },
                                                }}
                                            >
                                                {week.week}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            sx={{
                                                backgroundColor: "#fffafb",
                                                borderTop: "1px solid #f5e7e7",
                                            }}
                                        >
                                            {week.takeaway ? (
                                                <Box
                                                    sx={{
                                                        mb: 1.5,
                                                        px: 1.5,
                                                        py: 1.1,
                                                        borderRadius: "10px",
                                                        border: "1px solid #fde2e2",
                                                        background:
                                                            "linear-gradient(180deg, #fff7f7 0%, #fffdfd 100%)",
                                                    }}
                                                >
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            display: "block",
                                                            color: "#d32f2f",
                                                            fontWeight: 700,
                                                            letterSpacing: "0.06em",
                                                            textTransform: "uppercase",
                                                            mb: 0.35,
                                                        }}
                                                    >
                                                        Goal
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: "#374151",
                                                            lineHeight: 1.65,
                                                        }}
                                                    >
                                                        {week.takeaway}
                                                    </Typography>
                                                </Box>
                                            ) : null}
                                            <List>
                                                {week.topics.map((topic, i) => (
                                                    <ListItem
                                                        key={i}
                                                        disablePadding
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                minWidth:
                                                                    "40px",
                                                            }}
                                                        >
                                                            <CheckCircleOutlineIcon
                                                                color="info"
                                                                fontSize="small"
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={topic}
                                                            primaryTypographyProps={{
                                                                variant: "body2",
                                                                fontWeight: 400,
                                                                color: "#374151",
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                            <Paper
                                elevation={0}
                                sx={{
                                    mt: 1.5,
                                    mb: 1.5,
                                    p: 2,
                                    borderRadius: "12px",
                                    border: "1px solid #efe7e7",
                                    backgroundColor: "#fff",
                                    boxShadow: "0 6px 16px rgba(15, 23, 42, 0.06)",
                                }}
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{
                                        color: "#111827",
                                        fontSize: { xs: "1.05rem", md: "1.2rem" },
                                    }}
                                >
                                    {course.details.finalCapstoneHeading ||
                                        "Final Capstone Project"}
                                </Typography>
                            </Paper>
                            <Paper
                                elevation={0}
                                sx={{
                                    mb: 1.5,
                                    p: 2,
                                    borderRadius: "12px",
                                    border: "1px solid #efe7e7",
                                    backgroundColor: "#fff",
                                    boxShadow: "0 6px 16px rgba(15, 23, 42, 0.06)",
                                }}
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{
                                        color: "#111827",
                                        fontSize: { xs: "1.05rem", md: "1.2rem" },
                                    }}
                                >
                                    {course.details.certificateHeading ||
                                        "Certificate"}
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ position: "sticky", top: 100 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2.2,
                                        mb: 2,
                                        borderRadius: "16px",
                                        border: "1px solid #e8f0fe",
                                        background:
                                            "linear-gradient(180deg, #f9fcff 0%, #ffffff 100%)",
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        sx={{ mb: 0.8, color: "#111827" }}
                                    >
                                        What You Get
                                    </Typography>
                                    <List sx={{ py: 0 }}>
                                        {keyFeatures.map((feature) => (
                                            <ListItem
                                                key={feature.text}
                                                disablePadding
                                                sx={{ py: 0.35 }}
                                            >
                                                <ListItemIcon
                                                    sx={{ minWidth: "36px" }}
                                                >
                                                    {feature.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature.text}
                                                    primaryTypographyProps={{
                                                        variant: "body2",
                                                        fontWeight: 500,
                                                        color: "#1f2937",
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>

                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2.2,
                                        mb: 2,
                                        borderRadius: "16px",
                                        border: "1px solid #f5ece2",
                                        background:
                                            "linear-gradient(180deg, #fffaf4 0%, #ffffff 100%)",
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        sx={{ mb: 0.8, color: "#111827" }}
                                    >
                                        Class Details
                                    </Typography>
                                    <List sx={{ py: 0 }}>
                                        <ListItem sx={{ px: 0, py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <CalendarMonthIcon color="warning" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Duration"
                                                secondary={course.details.duration}
                                            />
                                        </ListItem>
                                        <ListItem sx={{ px: 0, py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <ScheduleIcon color="warning" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Class Length"
                                                secondary={
                                                    course.details.classLength
                                                }
                                            />
                                        </ListItem>
                                        <ListItem sx={{ px: 0, py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <LaptopChromebookIcon color="warning" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Mode"
                                                secondary={course.details.mode}
                                            />
                                        </ListItem>
                                    </List>
                                </Paper>

                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

                <Paper
                    sx={{
                        mt: 4,
                        p: { xs: 2.5, md: 4 },
                        borderRadius: "24px",
                        overflow: "hidden",
                        border: "1px solid #e8eef8",
                        background:
                            "linear-gradient(135deg, #f8fbff 0%, #ffffff 60%, #fff8f8 100%)",
                        boxShadow: "0 14px 36px rgba(15, 23, 42, 0.08)",
                    }}
                >
                    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#d32f2f",
                                    fontWeight: 600,
                                    letterSpacing: "0.14em",
                                }}
                            >
                                Best Suited For
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    mt: 0.6,
                                    fontWeight: 700,
                                    color: "#111827",
                                    lineHeight: 1.2,
                                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                                }}
                            >
                                Who is this{" "}
                                <Box component="span" sx={{ color: "#d32f2f" }}>
                                    Course
                                </Box>{" "}
                                For?
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 1.5,
                                    color: "#4b5563",
                                    maxWidth: 360,
                                    lineHeight: 1.8,
                                }}
                            >
                                This program is designed for different learner
                                profiles. Cards auto-highlight one by one so you
                                can quickly check where you fit best.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 8 }}>
                            <Box sx={{ display: "grid", gap: 1.4 }}>
                                {audienceCards.map((card, index) => {
                                    const isActive = index === activeAudience;
                                    return (
                                        <Paper
                                            key={card.title}
                                            elevation={0}
                                            sx={{
                                                p: 2,
                                                borderRadius: "16px",
                                                border: `1px solid ${
                                                    isActive
                                                        ? `${card.accent}55`
                                                        : "#e8edf5"
                                                }`,
                                                background: isActive
                                                    ? `linear-gradient(120deg, ${card.accent}16 0%, #ffffff 70%)`
                                                    : "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1.8,
                                                transition:
                                                    "all 0.45s ease, transform 0.45s ease",
                                                transform: isActive
                                                    ? "translateX(-8px) scale(1.01)"
                                                    : "translateX(0) scale(1)",
                                                boxShadow: isActive
                                                    ? `0 12px 26px ${card.accent}22`
                                                    : "0 4px 12px rgba(15, 23, 42, 0.05)",
                                                opacity: isActive ? 1 : 0.82,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 46,
                                                    height: 46,
                                                    borderRadius: "12px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: isActive
                                                        ? card.accent
                                                        : "#6b7280",
                                                    backgroundColor: isActive
                                                        ? `${card.accent}1f`
                                                        : "#f3f4f6",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {card.icon}
                                            </Box>
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: "#111827",
                                                        fontSize: {
                                                            xs: "1rem",
                                                            md: "1.08rem",
                                                        },
                                                    }}
                                                >
                                                    {card.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "#4b5563",
                                                        lineHeight: 1.7,
                                                    }}
                                                >
                                                    {card.description}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    );
                                })}
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <MeetMentorSection />
            <BonusSection />
            <StatsBanner />
            <StickyEnrollBar course={course} />
        </Box>
    );
};

export default CourseDetailPage;


