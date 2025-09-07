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
    Alert,
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

    if (!course) {
        return <Alert severity="error">Course not found!</Alert>;
    }

    // This is a placeholder for the full detail content.
    // For now, it just displays the title and summary.
    return (
        <Box
            sx={{
                backgroundColor: "white",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23dbe9f6' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
        >
            <Box
                sx={{
                    height: "40vh",
                    width: "100%",
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: "fit-center",
                    backgroundPosition: "center",
                }}
            />
            {/* <Container sx={{ py: 6 }}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    {course.title}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    {course.details.summary}
                </Typography>
            </Container> */}
            {/* 2. New Two-Column Layout */}
            <Container sx={{ py: 6 }}>
                <Grid container spacing={4}>
                    {/* Left Column: Syllabus */}
                    <Grid size={12}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Course Syllabus
                        </Typography>
                        {course.details.syllabus?.map((week, index) => (
                            <Accordion
                                key={index}
                                defaultExpanded={index === 0}
                                sx={{
                                    mb: 1.5,
                                    py: 1,
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
                                            <ListItem
                                                key={i}
                                                // disablePadding
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: "40px",
                                                    }}
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
