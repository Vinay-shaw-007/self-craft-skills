// src/components/About.tsx
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import FadeInOnScroll from "./FadeInOnScroll";

// 1. New structured content for the four feature blocks
const features = [
    {
        icon: <ModelTrainingIcon sx={{ fontSize: "3rem" }} color="primary" />,
        title: "🎯 Practical Skills",
        description:
            "Master in-demand skills with hands-on, expert-led courses. Begin with our AI & ChatGPT Zero-to-Hero program and gain an edge in today’s world.",
    },
    {
        icon: <PsychologyIcon sx={{ fontSize: "3rem" }} color="secondary" />,
        title: "🧠 Mindset Coaching",
        description:
            "Build focus, resilience, and clarity through life sessions designed to help you stay productive and unlock your true potential.",
    },
    {
        icon: <TrendingUpIcon sx={{ fontSize: "3rem", color: "#2e7d32" }} />, // Custom green
        title: "📈 Growth-Oriented Learning",
        description:
            "Our programs are built not just to teach, but to transform the way you think, learn, and work—driving long-term success.",
    },
    {
        icon: <GroupsIcon sx={{ fontSize: "3rem", color: "#ff8f00" }} />, // Custom orange
        title: "🤝 Community Support",
        description:
            "Learn together, stay accountable, and connect with like-minded learners through our supportive learning community.",
    },
];

const About = () => {
    return (
        // 2. New light blue-to-white gradient background
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                background: "linear-gradient(180deg, #EDF5FD 0%, #FFFFFF 70%)",
            }}
        >
            <Container>
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
                        <Typography
                            variant="h4"
                            component="h2"
                            fontWeight="bold"
                        >
                            ✨ Unlock Skills + Mindset to Craft Yourself
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: "800px", mx: "auto", mt: 2 }}
                        >
                            At Self-Craft Skills, we combine real-world
                            practical skills with mindset development so you can
                            learn faster, grow smarter, and achieve more.
                        </Typography>
                    </Box>
                </FadeInOnScroll>

                {/* 3. A 2x2 grid for the feature cards */}
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={6} key={index}>
                            <FadeInOnScroll>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        height: "100%",
                                        borderRadius: "12px",
                                        transition:
                                            "transform 0.3s ease, box-shadow 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow:
                                                "0 12px 30px rgba(0,0,0,0.1)",
                                        },
                                    }}
                                >
                                    {feature.icon}
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{ mt: 2, mb: 1 }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </Paper>
                            </FadeInOnScroll>
                        </Grid>
                    ))}
                </Grid>

                {/* 4. New Call-to-Action Button */}
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
                                    boxShadow:
                                        "0 6px 20px rgba(211, 47, 47, 0.5)",
                                },
                            }}
                        >
                            Start Learning Today
                        </Button>
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default About;
