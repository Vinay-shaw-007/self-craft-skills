// src/pages/CourseDetailPage.tsx
import React, { useState } from "react";
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
    Divider,
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
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StatsBanner from "../components/StatsBanner";

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

    const keyFeatures = [
        {
            text: "Weekly Live Classes",
            icon: <LiveTvIcon color="info" fontSize="inherit" />,
        },
        {
            text: "Beginner-Friendly",
            icon: <StairsIcon color="info" fontSize="inherit" />,
        },
        {
            text: "LIVE Q&A session",
            icon: <QuestionAnswerIcon color="info" fontSize="inherit" />,
        },
        {
            text: "No prior experience required",
            icon: <SchoolIcon color="info" fontSize="inherit" />,
        },
        {
            text: "Certificate of completion",
            icon: <WorkspacePremiumIcon color="info" fontSize="inherit" />,
        },
        {
            text: "Bonus: worth ₹4999",
            icon: <CardGiftcardIcon color="info" fontSize="inherit" />,
        },
    ];

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
                        p: { xs: 2, md: 4 },
                        borderRadius: "16px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                        backgroundImage:
                            "linear-gradient(135deg, #fffbe6 0%, #ffffff 100%)",
                    }}
                >
                    <Grid container spacing={5}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Course Syllabus
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
                                            boxShadow:
                                                "0 4px 12px rgba(0,0,0,0.05)",
                                            transition:
                                                "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-5px)",
                                                boxShadow:
                                                    "0 12px 24px rgba(0,0,0,0.08)",
                                            },
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                        >
                                            <Typography fontWeight="bold">
                                                {week.week}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            sx={{ backgroundColor: "#f8f9fa" }}
                                        >
                                            <Typography
                                                variant="body2"
                                                fontStyle="italic"
                                                color="text.secondary"
                                                sx={{ mb: 2 }}
                                            >
                                                <strong>Takeaway:</strong>{" "}
                                                {week.takeaway}
                                            </Typography>
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
                                                                color="success"
                                                                fontSize="small"
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={topic}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ position: "sticky", top: 100 }}>
                                <List>
                                    {keyFeatures.map((feature) => (
                                        <ListItem
                                            key={feature.text}
                                            disablePadding
                                        >
                                            <ListItemIcon
                                                sx={{ minWidth: "40px" }}
                                            >
                                                {feature.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={feature.text}
                                                primaryTypographyProps={{
                                                    variant: "body2",
                                                    fontWeight: "500",
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Divider sx={{ my: 2 }} />
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CalendarMonthIcon color="warning" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Duration"
                                            secondary={course.details.duration}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ScheduleIcon color="warning" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Class Length"
                                            secondary={
                                                course.details.classLength
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <LaptopChromebookIcon color="warning" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Mode"
                                            secondary={course.details.mode}
                                        />
                                    </ListItem>
                                </List>
                                {course.details.whoIsThisFor && (
                                    <Box sx={{ mt: 3 }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                mb: 1,
                                            }}
                                        >
                                            <PersonOutlineIcon color="primary" />
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                            >
                                                Who is this for?
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {course.details.whoIsThisFor}
                                        </Typography>
                                    </Box>
                                )}
                                {/* {course.details.bonuses &&
                                    <Box sx={{ mt: 3 }}>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom>Bonuses</Typography>
                                        {course.details.bonuses.map((bonus, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                            <WorkspacePremiumIcon color="secondary" fontSize="small"/>
                                            <Typography variant="body2">{bonus}</Typography>
                                        </Box>
                                        ))}
                                    </Box>
                                } */}
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
