// src/components/Hero.tsx
import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // 1. Import RouterLink

const Hero = () => {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                textAlign: "center",
                backgroundColor: "white",
            //     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='none' stroke='%23e5e5e5' stroke-width='1'%3E%3Cpath d='M 40 0 L 0 0 0 40'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
            //     backgroundSize: "25px 25px",
            //     backgroundRepeat: "repeat",
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

            <Container>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        color: "#333",
                    }}
                >
                    
                    Learn & Share Knowledge{" "}
                    <span style={{ color: "#D32F2F" }}>Across Different Fields.</span>
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        mt: 2,
                        mb: 4,
                        color: "text.secondary",
                        maxWidth: "700px",
                        mx: "auto",
                    }}
                >
                    Our mission is to empower you with practical, growth-driven
                    skills that shape your future and help you become
                    future-ready.
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
                            boxShadow: "0 6px 20px rgba(211, 47, 47, 0.5)",
                        },
                    }}
                >
                    Explore Courses
                </Button>
            </Container>
        </Box>
    );
};

export default Hero;
