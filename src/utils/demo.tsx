// src/pages/CourseDetailPage.tsx
import { useParams } from "react-router-dom";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
} from "@mui/material";
import useScrollToHash from "../hooks/useScrollToHash";
import { coursesData } from "../components/coursesData";
// Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CourseDetailPage = () => {
    useScrollToHash();
    const { courseId } = useParams<{ courseId: string }>();
    const course = coursesData.find((c) => c.id === courseId);

    if (!course || !course.details.syllabus) {
        // Fallback for courses without full details yet
        return (
            <Box sx={{ py: 6 }}>
                <Container>
                    <Typography variant="h4" fontWeight="bold">
                        {course?.title || "Course Details"}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Full details for this course are coming soon!
                    </Typography>
                </Container>
            </Box>
        );
    }

    return (
        <Box>
            {/* 1. New High-Quality SVG Banner */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    textAlign: "center",
                    color: "white",
                    background:
                        "linear-gradient(45deg, #1f2937 30%, #111827 90%)",
                }}
            >
                <Container>
                    <Typography variant="h3" component="h1" fontWeight="bold">
                        {course.title}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, color: "#e0e0e0" }}>
                        {course.details.summary}
                    </Typography>
                </Container>
            </Box>

            {/* 2. New Two-Column Layout */}
            <Container sx={{ py: 6 }}>
                <Grid container spacing={4}>
                    {/* Left Column: Syllabus */}
                    <Grid size={12}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Course Syllabus
                        </Typography>
                        {course.details.syllabus.map((week, index) => (
                            <Accordion
                                key={index}
                                defaultExpanded={index === 0}
                                sx={{
                                    mb: 1.5,
                                    "&:before": { display: "none" },
                                    borderRadius: "12px",
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography fontWeight="bold">
                                        {week.week}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
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
                                            <ListItem key={i} disablePadding>
                                                <ListItemIcon
                                                    sx={{ minWidth: "40px" }}
                                                >
                                                    <CheckCircleOutlineIcon
                                                        color="success"
                                                        fontSize="small"
                                                    />
                                                </ListItemIcon>
                                                <ListItemText primary={topic} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>

                    {/* Right Column: Sticky Sidebar */}
                    <Grid size={12}>
                        <Paper
                            sx={{
                                p: 3,
                                borderRadius: "16px",
                                position: "sticky",
                                top: 100,
                                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                            }}
                        >
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CalendarMonthIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Duration"
                                        secondary={course.details.duration}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ScheduleIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Class Length"
                                        secondary={course.details.classLength}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <LaptopChromebookIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Mode"
                                        secondary={course.details.mode}
                                    />
                                </ListItem>
                            </List>

                            <Box sx={{ mt: 3 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Who is this for?
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {course.details.whoIsThisFor}
                                </Typography>
                            </Box>

                            <Box sx={{ mt: 3 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Bonuses
                                </Typography>
                                {course.details.bonuses?.map((bonus) => (
                                    <Box
                                        key={bonus}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            mb: 0.5,
                                        }}
                                    >
                                        <WorkspacePremiumIcon
                                            color="secondary"
                                            fontSize="small"
                                        />
                                        <Typography variant="body2">
                                            {bonus}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Button
                                fullWidth
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                href="https://forms.gle/HnFrNt84kW8cibSZ9" // Link to your Google Form
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    mt: 3,
                                    borderRadius: "50px",
                                    py: 1.5,
                                    fontWeight: "bold",
                                    background:
                                        "linear-gradient(45deg, #D32F2F 30%, #E57373 90%)",
                                    color: "white",
                                    boxShadow:
                                        "0 4px 15px rgba(211, 47, 47, 0.4)",
                                }}
                            >
                                Enroll Now
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CourseDetailPage;
