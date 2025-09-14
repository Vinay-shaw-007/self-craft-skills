// src/components/HowItWorks.tsx
import { Box, Container, Typography, Grid } from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VideocamIcon from "@mui/icons-material/Videocam";
import PaymentIcon from "@mui/icons-material/Payment";
import FadeInOnScroll from "./FadeInOnScroll";

const steps = [
    {
        icon: <AdsClickIcon sx={{ fontSize: 50, color: "#ff7043" }} />,
        title: "Find Us Online",
        description: "Discover our courses through Facebook & Instagram ads.",
    },
    {
        icon: <WhatsAppIcon sx={{ fontSize: 50, color: "#66bb6a" }} />,
        title: "Register & Onboard",
        description: "Easily register and get all updates via WhatsApp.",
    },
    {
        icon: <VideocamIcon sx={{ fontSize: 50, color: "#26c6da" }} />,
        title: "Live Learning",
        description: "Join interactive live sessions on Zoom or Google Meet.",
    },
    {
        icon: <PaymentIcon sx={{ fontSize: 50, color: "#ffee58" }} />,
        title: "Simple Payments",
        description:
            "Pay securely using Google Forms with QR code integration.",
    },
];

const HowItWorks = () => {
    return (
        <Box
            sx={{
                py: { xs: 6, md: 8 },
                px: { xs: 2, md: 4 },
                borderRadius: "24px", // Added rounded corners
                background: "linear-gradient(45deg, #1f2937 30%, #111827 90%)",
                color: "white",
                zIndex: 1
            }}
        >
            <Container >
                <Box
                    sx={{
                        position: "absolute",
                        bottom: -400,
                        left: -100,
                        width: 200,
                        height: 200,
                        background: "linear-gradient(135deg, #55bcc6ff, #ffffffff)",
                        borderRadius: "50%",
                        opacity: 0.2,
                        zIndex: 0,
                    }}
                />
                <FadeInOnScroll>
                    <Typography
                        variant="h4"
                        component="h2"
                        align="center"
                        fontWeight="bold"
                        gutterBottom
                    >
                        How It Works
                    </Typography>
                </FadeInOnScroll>
                <Grid
                    container
                    spacing={4}
                    sx={{ mt: 4 }}
                    justifyContent="space-between"
                >
                    {steps.map((step, index) => (
                        // --- THIS IS THE UPDATED GRID ITEM WITH THE HOVER EFFECT ---
                        <Grid
                            size={{ lg: 3, md: 6, xs: 12 }}
                            key={index}
                            sx={{
                                flexGrow: 1,
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                borderRadius: "12px",
                                paddingY: 3, // Add padding to create the card effect
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow:
                                        "0 0 25px rgba(255, 255, 255, 0.15)", // Subtle glow
                                },
                            }}
                        >
                            <FadeInOnScroll>
                                <Box sx={{ textAlign: "center" }}>
                                    {step.icon}
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{ mt: 2, mb: 1 }}
                                    >
                                        {step.title}
                                    </Typography>
                                    <Typography sx={{ color: "#e0e0e0" }}>
                                        {step.description}
                                    </Typography>
                                </Box>
                            </FadeInOnScroll>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default HowItWorks;
