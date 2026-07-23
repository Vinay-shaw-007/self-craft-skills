// src/pages/PricingPage.tsx
import { useState } from "react";
import { Alert, Box, Button, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useSubscription } from "../hooks/useSubscription";
import { MONTHLY_PRICE_DISPLAY, PLAN_NAME } from "../config/pricing";
import Seo from "../components/Seo";
import CompleteProfilePrompt from "../components/CompleteProfilePrompt";
import { colors } from "../theme/colors";

const included = [
    "Unlimited access to every course",
    "New courses added regularly",
    "Downloadable resources & templates",
    "Certificate of completion for each course",
    "Cancel anytime, no lock-in",
];

const PricingPage = () => {
    const { isSubscribed, subscribe } = useSubscription();
    const navigate = useNavigate();
    const [busy, setBusy] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubscribe = async () => {
        setMessage(null);
        setBusy(true);
        const result = await subscribe();
        setBusy(false);

        if (result === "success") {
            navigate("/subscribe/success");
        } else if (result === "needs_login") {
            navigate("/signup");
        } else if (result === "pending") {
            setMessage("Payment is being confirmed — this can take a moment. Refresh shortly, or check your account page.");
        } else {
            setMessage("Something went wrong starting your subscription. Please try again, or contact us if it keeps happening.");
        }
    };

    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Seo
                title={`Pricing — ${MONTHLY_PRICE_DISPLAY}/month, Every Course | Self Craft Skills`}
                description={`One membership, ${MONTHLY_PRICE_DISPLAY} per month, unlocks every course on Self Craft Skills. No per-course payments, no lock-in — cancel anytime.`}
                canonicalPath="/pricing"
            />
            <Container maxWidth="sm">
                {/* Catches Google sign-ups (who skip the signup form) here, since
                    non-members land on pricing rather than the dashboard. */}
                <CompleteProfilePrompt />

                <Box sx={{ textAlign: "center", mb: 5 }}>
                    <Typography sx={{
                        fontSize: "0.72rem", fontWeight: 700,
                        letterSpacing: "0.14em", textTransform: "uppercase",
                        color: colors.indigo, mb: 1,
                    }}>
                        Pricing
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: { xs: "2.1rem", md: "2.8rem" }, color: colors.ink }}>
                        One plan. Everything included.
                    </Typography>
                    <Typography sx={{ mt: 1.5, color: colors.slate, lineHeight: 1.7 }}>
                        No per-course payments — a single minimal monthly subscription
                        unlocks every course on Self Craft Skills.
                    </Typography>
                </Box>

                <Box sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: "28px",
                    background: `linear-gradient(160deg, ${colors.indigoDeeper}, ${colors.indigoDeep})`,
                    color: "#fff",
                    textAlign: "center",
                }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1.05rem" }}>{PLAN_NAME}</Typography>
                    <Typography sx={{
                        fontFamily: '"Space Grotesk"',
                        fontWeight: 800,
                        fontSize: { xs: "2.6rem", md: "3.2rem" },
                        mt: 1.5,
                    }}>
                        {MONTHLY_PRICE_DISPLAY}
                        <Typography component="span" sx={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
                            {" "}/ month
                        </Typography>
                    </Typography>

                    <Stack spacing={1.2} sx={{ mt: 3.5, mb: 3.5, textAlign: "left" }}>
                        {included.map((item) => (
                            <Stack key={item} direction="row" spacing={1} alignItems="center">
                                <CheckRoundedIcon sx={{ color: colors.lavender, fontSize: 20 }} />
                                <Typography sx={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.8)" }}>
                                    {item}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>

                    {isSubscribed ? (
                        <Button
                            component={RouterLink}
                            to="/dashboard"
                            fullWidth
                            endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                            sx={{
                                py: 1.4, borderRadius: "999px",
                                fontWeight: 700, fontSize: "0.98rem",
                                color: colors.indigoDeep, background: "#fff",
                                "&:hover": { background: "#f0f0f0" },
                            }}
                        >
                            You're a member — go to dashboard
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubscribe}
                            fullWidth
                            disabled={busy}
                            endIcon={busy ? undefined : <ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                            sx={{
                                py: 1.4, borderRadius: "999px",
                                fontWeight: 700, fontSize: "0.98rem",
                                color: colors.indigoDeep, background: "#fff",
                                "&:hover": { background: "#f0f0f0" },
                                "&.Mui-disabled": { background: "rgba(255,255,255,0.6)" },
                            }}
                        >
                            {busy ? <CircularProgress size={22} sx={{ color: colors.indigoDeep }} /> : "Become a member"}
                        </Button>
                    )}

                    {message && (
                        <Alert severity="info" sx={{ mt: 2.5, borderRadius: "14px", textAlign: "left" }}>
                            {message}
                        </Alert>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default PricingPage;
