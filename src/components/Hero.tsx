// src/components/Hero.tsx
import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // 1. Import RouterLink
import HomeImage from "../assets/home.svg";

const Hero = () => {
    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                py: { xs: 8, md: 12 },
                backgroundColor: "white",
            }}
        >
            {/* Top-left pink circle */}
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: -30, md: -50 },
                    left: { xs: -30, md: -50 },
                    width: { xs: 150, md: 300 },
                    height: { xs: 150, md: 300 },
                    background: "linear-gradient(135deg, #FF9A8B, #FF6A88)",
                    borderRadius: "50%",
                    opacity: { xs: 0.2, md: 0.2 },
                    zIndex: 0,
                }}
            />

            {/* Bottom-right yellow-orange circle */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: { xs: -20, md: -60 },
                    right: { xs: -20, md: -40 },
                    width: { xs: 100, md: 200 },
                    height: { xs: 100, md: 200 },
                    background: "linear-gradient(135deg, #FFD93D, #FF6B6B)",
                    borderRadius: "50%",
                    opacity: { xs: 0.1, md: 0.2 },
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg">
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
                        gap: { xs: 4, md: 6 },
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: "100%", sm: 420, md: 520 },
                                maxWidth: "100%",
                                borderRadius: 6,
                                overflow: "hidden",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                            }}
                        >
                            <Box
                                component="img"
                                src={HomeImage}
                                alt="Self Craft Skills hero"
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: "#d32f2f",
                                letterSpacing: "0.24em",
                                fontWeight: 500,
                            }}
                        >
                            Self Craft Skills
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: "2.4rem", md: "3.4rem" },
                                color: "#333",
                                mt: 1,
                            }}
                        >
                            Learn & Share Knowledge{" "}
                            <span style={{ color: "#D32F2F" }}>
                                Across Different Fields.
                            </span>
                        </Typography>
                        <Box
                            sx={{
                                mt: 2,
                                px: { xs: 2, md: 2.4 },
                                py: { xs: 1.8, md: 2.1 },
                                borderRadius: 4,
                                background:
                                    "linear-gradient(135deg, rgba(255, 245, 245, 0.98) 0%, rgba(255, 233, 233, 0.96) 100%)",
                                border: "1px solid rgba(211, 47, 47, 0.16)",
                                boxShadow:
                                    "0 18px 40px rgba(211, 47, 47, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.85)",
                                maxWidth: 560,
                                mx: { xs: "auto", md: 0 },
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: -24,
                                    right: -24,
                                    width: 110,
                                    height: 110,
                                    borderRadius: "50%",
                                    background:
                                        "radial-gradient(circle, rgba(255, 138, 128, 0.32) 0%, rgba(255, 138, 128, 0) 72%)",
                                }}
                            />
                            <Typography
                                sx={{
                                    position: "relative",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    px: 1.3,
                                    py: 0.55,
                                    borderRadius: "999px",
                                    backgroundColor: "rgba(183, 28, 28, 0.08)",
                                    color: "#9f1717",
                                    fontWeight: 700,
                                    fontSize: { xs: "0.78rem", md: "0.84rem" },
                                    textTransform: "uppercase",
                                    letterSpacing: "0.12em",
                                }}
                            >
                                FRESH BATCH STARTING SOON!
                            </Typography>
                            <Typography
                                sx={{
                                    position: "relative",
                                    mt: 1.15,
                                    color: "#2a1414",
                                    fontWeight: 800,
                                    fontSize: { xs: "1.1rem", md: "1.28rem" },
                                    lineHeight: 1.25,
                                }}
                            >
                                Reserve Your Spot Today
                            </Typography>
                        </Box>
                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                mt: 2,
                                mb: 4,
                                color: "text.secondary",
                                maxWidth: 560,
                                mx: { xs: "auto", md: 0 },
                            }}
                        >
                            Our mission is to empower you with practical,
                            growth-driven skills that shape your future and help
                            you become future-ready.
                        </Typography>
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
                            Explore Courses
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
