// src/pages/SubscriptionSuccessPage.tsx
// Landing page after a subscription is created. This is also the shape the
// real Razorpay Subscription checkout return_url will point to later.
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useSubscription } from "../hooks/useSubscription";
import { colors } from "../theme/colors";

const SubscriptionSuccessPage = () => {
    const { planName } = useSubscription();

    return (
        <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 } }}>
            <Paper sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                textAlign: "center",
                border: `1px solid rgba(${colors.indigoRgb}, 0.2)`,
            }}>
                <CheckCircleRoundedIcon sx={{ fontSize: 56, color: colors.indigo, mb: 2 }} />

                <Typography variant="h5" sx={{
                    fontFamily: '"Space Grotesk"',
                    fontWeight: 700,
                    color: colors.ink,
                    mb: 1,
                }}>
                    Welcome aboard!
                </Typography>

                <Typography sx={{ color: colors.slate, lineHeight: 1.7, mb: 3 }}>
                    You're now on <strong>{planName}</strong>. Every course is
                    unlocked — start watching whenever you're ready.
                </Typography>

                <Stack spacing={1.5}>
                    <Button
                        component={RouterLink}
                        to="/dashboard"
                        fullWidth
                        sx={{
                            py: 1.3,
                            borderRadius: "999px",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            color: "#fff",
                            background: colors.indigo,
                            "&:hover": { background: colors.indigoDark },
                        }}
                    >
                        Go to dashboard
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
};

export default SubscriptionSuccessPage;
