import { Box, Grid, Stack, Typography } from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const processCards = [
    {
        title: "Secure Course Payment",
        description:
            "Pay confidently using our trusted Razorpay payment gateway.",
        points: [
            "Fast, secure checkout",
            "UPI, Cards, Net Banking supported",
            "Instant payment confirmation",
        ],
        icon: <SecurityIcon sx={{ fontSize: 22 }} />,
        color: "#6C5CE7",
        bg: "#f3f1ff",
    },
    {
        title: "Quick Registration",
        description: "Complete a short registration form after payment.",
        points: [
            "Google Form opens automatically",
            "Share basic enrollment details",
            "Takes less than a minute",
        ],
        icon: <DescriptionOutlinedIcon sx={{ fontSize: 22 }} />,
        color: "#0984E3",
        bg: "#e8f4fd",
    },
    {
        title: "WhatsApp Learning Onboarding",
        description: "Get instantly onboarded through WhatsApp.",
        points: [
            "Instant welcome message",
            "Class links, schedules and resources",
            "Doubt support throughout the course",
        ],
        icon: <WhatsAppIcon sx={{ fontSize: 22 }} />,
        color: "#00B894",
        bg: "#e6f9f3",
    },
    {
        title: "Need Help? We're Here",
        description: "Reach out anytime for assistance or queries.",
        points: [
            "Official email and WhatsApp support",
            "Fast, friendly learner-first responses",
            "Support before, during and after the course",
        ],
        icon: <SupportAgentIcon sx={{ fontSize: 22 }} />,
        color: "#E17055",
        bg: "#fef0ec",
    },
];

const HowItWorks = () => {
    return (
        <Box
            id="enrollment-process"
            sx={{
                mt: 4,
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                border: "1px solid rgba(0,0,0,0.06)",
                background: "#fff",
            }}
        >
            <FadeInOnScroll>
                <Typography sx={{
                    fontSize: "0.72rem", fontWeight: 600,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "#999",
                }}>
                    Enrollment Flow
                </Typography>
                <Typography variant="h4" sx={{
                    fontFamily: '"Space Grotesk"',
                    fontWeight: 700, color: "#111",
                    mt: 0.8,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                }}>
                    Enrolment Process
                </Typography>
                <Typography sx={{
                    mt: 1, color: "#666",
                    maxWidth: 600, fontSize: "0.92rem", lineHeight: 1.7,
                }}>
                    A simple, secure journey - from payment to live learning and
                    support.
                </Typography>
            </FadeInOnScroll>

            <Grid container spacing={2} sx={{ mt: 2 }} alignItems="stretch">
                {processCards.map((card, index) => (
                    <Grid key={card.title} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: "flex" }}>
                        <FadeInOnScroll style={{ display: "flex", width: "100%" }}>
                            <Box sx={{
                                height: "100%", width: "100%",
                                p: 2.5,
                                borderRadius: "16px",
                                border: "1px solid rgba(0,0,0,0.06)",
                                background: "#fafafa",
                                display: "flex",
                                flexDirection: "column",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: `0 16px 40px ${card.color}12`,
                                    borderColor: `${card.color}20`,
                                },
                            }}>
                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <Box sx={{
                                        width: 40, height: 40,
                                        borderRadius: "12px",
                                        display: "grid", placeItems: "center",
                                        color: card.color,
                                        backgroundColor: card.bg,
                                    }}>
                                        {card.icon}
                                    </Box>
                                    <Typography sx={{
                                        fontFamily: '"Space Grotesk"',
                                        fontSize: "0.72rem", fontWeight: 700,
                                        color: "#999", letterSpacing: "0.08em",
                                    }}>
                                        STEP {String(index + 1).padStart(2, "0")}
                                    </Typography>
                                </Stack>

                                <Typography sx={{
                                    mt: 2,
                                    fontFamily: '"Space Grotesk"',
                                    fontWeight: 700, fontSize: "1.02rem",
                                    color: "#111", lineHeight: 1.3,
                                }}>
                                    {card.title}
                                </Typography>
                                <Typography sx={{
                                    mt: 0.8, color: "#666",
                                    fontSize: "0.86rem", lineHeight: 1.6,
                                }}>
                                    {card.description}
                                </Typography>

                                <Stack spacing={0.6} sx={{ mt: 1.5 }}>
                                    {card.points.map((point) => (
                                        <Stack key={point} direction="row" spacing={0.8} alignItems="flex-start">
                                            <CheckRoundedIcon sx={{
                                                color: card.color,
                                                fontSize: 16, mt: "2px",
                                            }} />
                                            <Typography sx={{
                                                color: "#444",
                                                fontSize: "0.82rem",
                                                lineHeight: 1.45,
                                            }}>
                                                {point}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Box>
                        </FadeInOnScroll>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HowItWorks;
