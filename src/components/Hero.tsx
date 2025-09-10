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
                // This new SVG background mimics the abstract "network" style you wanted
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 800'%3e%3cg fill-opacity='0.2'%3e%3cpolygon fill='%23e6e6fa' points='1600 160 0 460 0 360 1600 60'/%3e%3cpolygon fill='%23dcdcf6' points='1600 260 0 560 0 460 1600 160'/%3e%3cpolygon fill='%23d1d1f2' points='1600 360 0 660 0 560 1600 260'/%3e%3cpolygon fill='%23c7c7ee' points='1600 460 0 760 0 660 1600 360'/%3e%3cpolygon fill='%23bcbaea' points='1600 800 0 800 0 760 1600 460'/%3e%3c/g%3e%3c/svg%3e")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
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
