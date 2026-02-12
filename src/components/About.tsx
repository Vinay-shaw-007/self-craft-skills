import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Button,
    Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import FadeInOnScroll from "./FadeInOnScroll";
import AboutImage from "../assets/Aboutimg.svg";

const features = [
    {
        icon: <ModelTrainingIcon sx={{ fontSize: "1.8rem", color: "#d32f2f" }} />,
        title: "Diverse Learning Paths",
        description:
            "Explore courses tailored to your passion and career growth across various fields.",
    },
    {
        icon: <PsychologyIcon sx={{ fontSize: "1.8rem", color: "#d32f2f" }} />,
        title: "Hands-on Learning",
        description:
            "Work on real-world projects with expert guidance and practical exercises.",
    },
    {
        icon: <TrendingUpIcon sx={{ fontSize: "1.8rem", color: "#d32f2f" }} />,
        title: "Mindset Coaching",
        description:
            "Boost your confidence and resilience with actionable strategies and coaching.",
    },
    {
        icon: <GroupsIcon sx={{ fontSize: "1.8rem", color: "#d32f2f" }} />,
        title: "Community Support",
        description:
            "Join an inspiring network of learners to share ideas, stay up-to-date, and become more productive.",
    },
];

const About = () => {
    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                py: { xs: 8, md: 12 },
                background: "linear-gradient(180deg, #fff7f7 0%, #ffffff 70%)",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: 48, md: 72 },
                    right: { xs: -90, md: -150 },
                    width: { xs: 170, md: 260 },
                    height: { xs: 170, md: 260 },
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle at 30% 30%, #FFE8B5 0%, #FFD6A5 65%, rgba(255,214,165,0) 100%)",
                    opacity: 0.5,
                    filter: "blur(4px)",
                    zIndex: 0,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: { xs: -60, md: -100 },
                    left: { xs: -60, md: -100 },
                    width: { xs: 200, md: 320 },
                    height: { xs: 200, md: 320 },
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #FF9A8B, #FF6A88)",
                    opacity: 0.1,
                    zIndex: 0,
                }}
            />

            <Container sx={{ position: "relative", zIndex: 1 }}>
                <FadeInOnScroll>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                            gap: { xs: 4, md: 7 },
                            alignItems: "center",
                            mb: { xs: 7, md: 9 },
                        }}
                    >
                        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                            <Paper
                                sx={{
                                    display: "inline-block",
                                    px: 2.5,
                                    py: 1,
                                    borderRadius: "999px",
                                    backgroundColor: "#ffebee",
                                    border: "1px solid #ffcdd2",
                                    mb: 2,
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={700}
                                    sx={{
                                        color: "#d32f2f",
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    About Self Craft Skills
                                </Typography>
                            </Paper>

                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    color: "#1f1f1f",
                                    fontSize: { xs: "2rem", md: "2.6rem" },
                                    lineHeight: 1.2,
                                }}
                            >
                                Learn Practical Skills with Clarity, Mentorship,
                                and Momentum
                            </Typography>

                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{
                                    mt: 2,
                                    maxWidth: 620,
                                    mx: { xs: "auto", md: 0 },
                                    fontWeight: 400,
                                    lineHeight: 1.7,
                                }}
                            >
                                Self Craft Skills helps learners build real,
                                future-ready capabilities through guided learning,
                                action-focused projects, and a supportive growth
                                community.
                            </Typography>

                            <Stack
                                spacing={1}
                                sx={{
                                    mt: 3,
                                    alignItems: { xs: "center", md: "flex-start" },
                                }}
                            >
                                <Typography sx={{ color: "#444" }}>
                                    - Structured programs designed for real progress
                                </Typography>
                                <Typography sx={{ color: "#444" }}>
                                    - Practical tasks with mentor-backed feedback
                                </Typography>
                                <Typography sx={{ color: "#444" }}>
                                    - Skill growth that supports career confidence
                                </Typography>
                            </Stack>

                            <Button
                                component={RouterLink}
                                to="/courses"
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    borderRadius: "50px",
                                    px: { xs: 4, md: 5 },
                                    py: 1.5,
                                    fontWeight: "bold",
                                    fontSize: "1rem",
                                    letterSpacing: "0.4px",
                                    background:
                                        "linear-gradient(45deg, #D32F2F 30%, #E57373 90%)",
                                    color: "white",
                                    boxShadow: "0 4px 15px rgba(211, 47, 47, 0.35)",
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                        boxShadow:
                                            "0 6px 20px rgba(211, 47, 47, 0.45)",
                                    },
                                }}
                            >
                                Explore Courses
                            </Button>
                        </Box>

                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: 560,
                                mx: "auto",
                                borderRadius: 6,
                                overflow: "hidden",
                                boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                            }}
                        >
                            <Box
                                component="img"
                                src={AboutImage}
                                alt="Students learning and collaborating"
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Box>
                </FadeInOnScroll>

                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                color: "#222",
                                fontSize: { xs: "1.7rem", md: "2.1rem" },
                            }}
                        >
                            Why Learners Choose Us
                        </Typography>
                    </Box>
                </FadeInOnScroll>

                <Grid container spacing={3} alignItems="stretch">
                    {features.map((feature, index) => (
                        <Grid
                            size={{ xs: 12, sm: 6, md: 3 }}
                            key={index}
                            sx={{ display: "flex" }}
                        >
                            <FadeInOnScroll>
                                <Box sx={{ width: "100%", height: "100%" }}>
                                    <Paper
                                        sx={{
                                            p: 3,
                                            borderRadius: "16px",
                                            border: "1px solid #f1e4e4",
                                            height: "100%",
                                            minHeight: 280,
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                                            transition: "all 0.25s ease",
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 52,
                                                height: 52,
                                                backgroundColor: "#ffebee",
                                                borderRadius: "14px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mb: 2,
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>

                                        <Typography
                                            variant="h6"
                                            fontWeight={700}
                                            sx={{ color: "#222", mb: 1 }}
                                        >
                                            {feature.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#5f6368", lineHeight: 1.7 }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Paper>
                                </Box>
                            </FadeInOnScroll>
                        </Grid>
                    ))}
                </Grid>

                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
                        <Button
                            component={RouterLink}
                            to="/courses"
                            variant="contained"
                            sx={{
                                borderRadius: "50px",
                                px: { xs: 4, md: 5 },
                                py: 1.5,
                                fontWeight: "bold",
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                                background:
                                    "linear-gradient(45deg, #D32F2F 30%, #E57373 90%)",
                                color: "white",
                                boxShadow: "0 4px 15px rgba(211, 47, 47, 0.4)",
                                transition:
                                    "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                "&:hover": {
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 6px 20px rgba(211, 47, 47, 0.5)",
                                },
                            }}
                        >
                            Start your learning journey
                        </Button>
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default About;
