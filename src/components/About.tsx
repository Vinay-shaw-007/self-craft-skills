// src/components/About.tsx
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import FadeInOnScroll from "./FadeInOnScroll";

// Features data for card layout
const features = [
    {
        icon: <ModelTrainingIcon sx={{ fontSize: "3.5rem", color: "#fff" }} />,
        title: "Diverse Learning Paths",
        description:
            "Explore courses tailored to your passion and career growth across various fields.",
        gradient: "linear-gradient(135deg, #FF6B6B, #FFD93D)",
    },
    {
        icon: <PsychologyIcon sx={{ fontSize: "3.5rem", color: "#fff" }} />,
        title: "Hands-on Learning",
        description:
            "Work on real-world projects with expert guidance and practical exercises.",
        gradient: "linear-gradient(135deg, #6BCB77, #4D96FF)",
    },
    {
        icon: <TrendingUpIcon sx={{ fontSize: "3.5rem", color: "#fff" }} />,
        title: "Mindset Coaching",
        description:
            "Boost your confidence and resilience with actionable strategies and coaching.",
        gradient: "linear-gradient(135deg, #FF7E5F, #FEB47B)",
    },
    {
        icon: <GroupsIcon sx={{ fontSize: "3.5rem", color: "#fff" }} />,
        title: "Community Support",
        description:
            "Join an inspiring network of learners to share ideas, stay up-to-date, and become more productive. ",
        gradient: "linear-gradient(135deg, #00C9FF, #92FE9D)",
    },
];

const About = () => {
    return (
        <Box
        //     sx={{
        //         py: { xs: 6, md: 10 },
        //         background: "linear-gradient(180deg, #EDF5FD 0%, #FFFFFF 70%)",
        //         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='none' stroke='%23e5e5e5' stroke-width='1'%3E%3Cpath d='M 40 0 L 0 0 0 40'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
        //         backgroundSize: "25px 25px",
        //         backgroundRepeat: "repeat",
        //     }}
        >
        
            
            <Container>
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
                        {/* 2. New yellow title badge design */}
                        <Paper sx={{
                            display: 'inline-block',
                            p: '8px 32px',
                            borderRadius: '50px',
                            backgroundColor: '#fef08a',
                            boxShadow: '0 8px 16px rgba(250, 204, 21, 0.2)',
                            mb: 3
                        }}>
                            <Typography variant="h5" component="h2" fontWeight="bold" >
                                ✨ About Self Craft Skills
                            </Typography>
                        </Paper>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: "800px", mx: "auto", mt: 2 }}
                        >
                            Self Craft Skills is a knowledge-sharing platform
                            where you can explore diverse fields, build
                            practical expertise, and develop a growth
                            mindset—all designed to empower you to learn smarter
                            and achieve more.
                        </Typography>
                    </Box>
                </FadeInOnScroll>

                <Grid container spacing={4} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid size={{xs:12, sm:6, md:3}} key={index}>
                            <FadeInOnScroll>
                                <Box
                                    sx={{
                                        position: "relative",
                                        p: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            background: feature.gradient,
                                            borderRadius: "20px",
                                            p: 3,
                                            height: "100%",
                                            color: "#fff",
                                            boxShadow:
                                                "0 8px 20px rgba(0, 0, 0, 0.15)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                                boxShadow:
                                                    "0 12px 30px rgba(0, 0, 0, 0.25)",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 64,
                                                height: 64,
                                                backgroundColor: "rgba(255,255,255,0.2)",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mb: 2,
                                                mx: "auto",
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            align="center"
                                            gutterBottom
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            align="center"
                                            sx={{ lineHeight: 1.6 }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Box>
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
                                    boxShadow:
                                        "0 6px 20px rgba(211, 47, 47, 0.5)",
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
