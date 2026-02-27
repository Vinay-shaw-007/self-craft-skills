// src/components/HowItWorks.tsx
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

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
        accent: "#0ea5e9",
        icon: <SecurityIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: "Quick Registration",
        description: "Complete a short registration form after payment.",
        points: [
            "Google Form opens automatically",
            "Share basic enrollment details",
            "Takes less than a minute",
        ],
        accent: "#6366f1",
        icon: <DescriptionOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: "WhatsApp Learning Onboarding",
        description: "Get instantly onboarded through WhatsApp.",
        points: [
            "Instant welcome message",
            "Class links, schedules and resources",
            "Doubt support throughout the course",
        ],
        accent: "#10b981",
        icon: <WhatsAppIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: "Need Help? We're Here",
        description: "Reach out anytime for assistance or queries.",
        points: [
            "Official email and WhatsApp support",
            "Fast, friendly learner-first responses",
            "Support before, during and after the course",
        ],
        accent: "#f59e0b",
        icon: <SupportAgentIcon sx={{ fontSize: 28 }} />,
    },
];

const HowItWorks = () => {
    return (
        <Box
            id="enrollment-process"
            sx={{
                mt: 4,
                p: { xs: 2.2, md: 4 },
                borderRadius: "28px",
                background:
                    "radial-gradient(circle at 10% 0%, #eff6ff 0%, #f8fafc 40%, #eef2ff 100%)",
                border: "1px solid #dbe4ff",
                boxShadow: "0 18px 46px rgba(30, 41, 59, 0.08)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    width: 240,
                    height: 240,
                    right: -80,
                    top: -90,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(56, 189, 248, 0.24), rgba(99, 102, 241, 0))",
                }}
            />

            <FadeInOnScroll>
                <Typography
                    variant="overline"
                    sx={{
                        color: "#475569",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                    }}
                >
                    Enrollment Flow
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        color: "#0f172a",
                        mt: 0.6,
                        fontSize: { xs: "1.8rem", md: "2.3rem" },
                    }}
                >
                    Enrolment Process
                </Typography>
                <Typography
                    sx={{
                        mt: 1.2,
                        color: "#475569",
                        maxWidth: 700,
                        fontSize: { xs: "0.98rem", md: "1.05rem" },
                    }}
                >
                    A simple, secure journey - from payment to live learning and
                    support.
                </Typography>
            </FadeInOnScroll>

            <Grid container spacing={2.2} alignItems="stretch" sx={{ mt: 1.6 }}>
                {processCards.map((card, index) => (
                    <Grid
                        key={card.title}
                        size={{ xs: 12, sm: 6, lg: 3 }}
                        sx={{ display: "flex" }}
                    >
                        <FadeInOnScroll>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    minHeight: { xs: 360, sm: 380, lg: 410 },
                                    p: 2.2,
                                    borderRadius: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    background: "rgba(255,255,255,0.78)",
                                    backdropFilter: "blur(8px)",
                                    border: `1px solid ${card.accent}33`,
                                    boxShadow: "0 10px 24px rgba(30, 41, 59, 0.08)",
                                    transition:
                                        "transform 0.25s ease, box-shadow 0.25s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow:
                                            "0 16px 30px rgba(30, 41, 59, 0.14)",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#64748b",
                                        fontWeight: 700,
                                        letterSpacing: "0.08em",
                                        fontSize: "0.78rem",
                                    }}
                                >
                                    STEP {String(index + 1).padStart(2, "0")}
                                </Typography>

                                <Box
                                    sx={{
                                        mt: 1.5,
                                        width: 48,
                                        height: 48,
                                        borderRadius: "14px",
                                        display: "grid",
                                        placeItems: "center",
                                        color: "#fff",
                                        background: `linear-gradient(135deg, ${card.accent}, #0f172a)`,
                                    }}
                                >
                                    {card.icon}
                                </Box>

                                <Typography
                                    sx={{
                                        mt: 1.6,
                                        fontWeight: 700,
                                        fontSize: "1.1rem",
                                        color: "#0f172a",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: 0.8,
                                        color: "#475569",
                                        fontSize: "0.92rem",
                                        lineHeight: 1.55,
                                    }}
                                >
                                    {card.description}
                                </Typography>

                                <List sx={{ mt: 0.8, px: 0 }}>
                                    {card.points.map((point) => (
                                        <ListItem
                                            key={point}
                                            disableGutters
                                            sx={{
                                                py: 0.38,
                                                gap: 0.8,
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            <CheckCircleRoundedIcon
                                                sx={{
                                                    color: card.accent,
                                                    fontSize: 18,
                                                    mt: "2px",
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    color: "#334155",
                                                    fontSize: "0.84rem",
                                                    lineHeight: 1.45,
                                                }}
                                            >
                                                {point}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </FadeInOnScroll>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HowItWorks;
