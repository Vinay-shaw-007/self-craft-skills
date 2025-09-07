// src/components/CtaBanner.tsx
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // Icon for background
import GroupsIcon from "@mui/icons-material/Groups"; // 1. Import a new icon

const CtaBanner = () => {
    return (
        <Box
            sx={{
                borderRadius: "24px",
                background: "linear-gradient(45deg, #0a192f 30%, #1a237e 90%)",
                color: "white",
                position: "relative",
                overflow: "hidden",
                py: { xs: 6, md: 8 }, // Added padding back inside the component
            }}
        >
            {/* 1. New subtle background icon for visual depth */}
            <AutoAwesomeIcon
                sx={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    fontSize: "300px",
                    color: "rgba(255, 255, 255, 0.05)",
                    transform: "rotate(-15deg)",
                }}
            />

            <Container maxWidth="lg">
                <FadeInOnScroll>
                    {/* 2. New two-column layout */}
                    <Grid container alignItems="center" spacing={4}>
                        {/* Left Column: Headline */}
                        <Grid size={12} textAlign={"center"}>
                            <Typography
                                variant="h3"
                                component="h2"
                                fontWeight="bold"
                                sx={{
                                    textAlign: { xs: "center", md: "left" },
                                    fontSize: { xs: "2rem", md: "3rem" },
                                }}
                            >
                                {`👉 The Future Won't Wait — Why Should You?`}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    my: { xs: 2, md: 1 },
                                    color: "#e0e0e0",
                                    maxWidth: "100%",
                                }}
                            >
                                {`Upgrade your career and personal growth with
                                Self-Craft Skills' live programs.`}
                            </Typography>
                        </Grid>

                        {/* Right Column: Action Area */}
                        <Grid size={12}>
                            <Paper
                                elevation={4}
                                sx={{
                                    p: 3,
                                    borderRadius: "16px",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(5px)",
                                    textAlign: "center",
                                }}
                            >
                                {/* 3. New urgency statement */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 1,
                                        mb: 0.5,
                                    }}
                                >
                                    <GroupsIcon sx={{ color: "#FFD700" }} />
                                    <Typography
                                        fontWeight="bold"
                                        variant="h6"
                                        sx={{
                                            // 2. This creates the gradient text effect
                                            background:
                                                "linear-gradient(45deg, #FFD700 30%, #FFA500 90%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            fontSize: { xs: "1rem", md: "1.5rem"},
                                        }}
                                    >
                                        Only 30 Seats are Available
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#bdbdbd", mb: 2 }}
                                >
                                    for our upcoming cohort.
                                </Typography>
                                <Button
                                    component={RouterLink}
                                    to="/courses"
                                    variant="contained"
                                    sx={{
                                        borderRadius: "50px",
                                        px: 4,
                                        py: 1.5,
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        letterSpacing: "0.5px",
                                        background:
                                            "linear-gradient(45deg, #D32F2F 30%, #E57373 90%)",
                                        color: "white",
                                        boxShadow:
                                            "0 4px 15px rgba(211, 47, 47, 0.4)",
                                        transition:
                                            "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                        "&:hover": {
                                            transform: "translateY(-3px)",
                                            boxShadow:
                                                "0 6px 20px rgba(211, 47, 47, 0.5)",
                                        },

                                        // width: "100%",
                                    }}
                                >
                                    ✅ Get Started Today
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default CtaBanner;
