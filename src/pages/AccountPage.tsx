// src/pages/AccountPage.tsx
import { useState } from "react";
import { Box, Button, Chip, Container, Divider, Stack, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSubscription } from "../hooks/useSubscription";
import { useAuth } from "../hooks/useAuth";
import EditProfileCard from "../components/EditProfileCard";
import { MONTHLY_PRICE_DISPLAY } from "../config/pricing";
import { colors } from "../theme/colors";

const statusColor: Record<string, { bg: string; color: string }> = {
    active: { bg: "#e6f5ee", color: "#1d7a55" },
    past_due: { bg: "#fdf3e6", color: "#a06712" },
    cancelled: { bg: "#fdeeec", color: "#c0492f" },
    inactive: { bg: "#f5f5f5", color: "#999" },
};

const AccountPage = () => {
    const { status, isSubscribed, planName, renewsOn, cancel } = useSubscription();
    const { user, isConfigured, signOut } = useAuth();
    const navigate = useNavigate();
    const [cancelling, setCancelling] = useState(false);
    const chip = statusColor[status] ?? statusColor.inactive;

    const handleCancel = async () => {
        setCancelling(true);
        await cancel();
        setCancelling(false);
    };

    const handleSignOut = async () => {
        await signOut();
        navigate("/");
    };

    return (
        <Box sx={{ py: { xs: 8, md: 10 } }}>
            <Container maxWidth="sm">
                <Typography sx={{
                    fontSize: "0.72rem", fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: colors.indigo, mb: 1,
                }}>
                    Account
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.4rem" }, color: colors.ink, mb: 4 }}>
                    Manage your membership
                </Typography>

                {/* Profile card (only meaningful once real auth is live) */}
                {isConfigured && user && (
                    <Box sx={{
                        p: { xs: 2.5, md: 3 },
                        mb: 2.5,
                        borderRadius: "24px",
                        border: "1px solid rgba(18,19,43,0.08)",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                    }}>
                        <Box sx={{ minWidth: 0 }}>
                            <Typography sx={{ fontWeight: 700, color: colors.ink }}>
                                {(user.user_metadata?.full_name as string | undefined) ?? "Member"}
                            </Typography>
                            <Typography sx={{ color: "#999", fontSize: "0.85rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {user.email}
                            </Typography>
                        </Box>
                        <Button
                            onClick={handleSignOut}
                            sx={{
                                px: 2.4, py: 0.9, flexShrink: 0,
                                borderRadius: "999px", fontWeight: 600,
                                color: colors.ink,
                                border: "1px solid rgba(18,19,43,0.14)",
                                "&:hover": { background: "rgba(18,19,43,0.04)" },
                            }}
                        >
                            Log out
                        </Button>
                    </Box>
                )}

                {isConfigured && user && <EditProfileCard />}

                {isConfigured && !user ? (
                    <Box sx={{
                        p: { xs: 3, md: 3.5 },
                        borderRadius: "24px",
                        border: "1px solid rgba(18,19,43,0.08)",
                        background: "#fff",
                        textAlign: "center",
                    }}>
                        <Typography sx={{ color: colors.slate, fontSize: "0.95rem", mb: 2.5 }}>
                            Log in to see and manage your membership.
                        </Typography>
                        <Button
                            component={RouterLink}
                            to="/login"
                            sx={{
                                px: 4, py: 1.2, borderRadius: "999px",
                                fontWeight: 700, color: "#fff", background: colors.indigo,
                                "&:hover": { background: colors.indigoDark },
                            }}
                        >
                            Log in
                        </Button>
                    </Box>
                ) : (
                    <Box sx={{
                        p: { xs: 3, md: 3.5 },
                        borderRadius: "24px",
                        border: "1px solid rgba(18,19,43,0.08)",
                        background: "#fff",
                    }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Box>
                                <Typography sx={{ fontWeight: 700, color: colors.ink }}>{planName}</Typography>
                                <Typography sx={{ color: "#999", fontSize: "0.85rem", mt: 0.3 }}>
                                    {MONTHLY_PRICE_DISPLAY}/month
                                </Typography>
                            </Box>
                            <Chip
                                label={status.replace("_", " ").replace(/^\w/, (c) => c.toUpperCase())}
                                size="small"
                                sx={{ fontWeight: 700, background: chip.bg, color: chip.color }}
                            />
                        </Stack>

                        <Divider sx={{ my: 2.5 }} />

                        {isSubscribed && status !== "cancelled" ? (
                            <>
                                <Typography sx={{ color: colors.slate, fontSize: "0.9rem" }}>
                                    {renewsOn
                                        ? <>Your membership renews on <strong>{renewsOn}</strong>. You keep full access to every course until then.</>
                                        : <>Your membership is active — you have full access to every course.</>}
                                </Typography>
                                <Button
                                    onClick={handleCancel}
                                    fullWidth
                                    disabled={cancelling}
                                    sx={{
                                        mt: 3, py: 1.2, borderRadius: "999px",
                                        fontWeight: 700, color: "#c0492f",
                                        border: "1px solid rgba(192,73,47,0.3)",
                                        "&:hover": { background: "#fdeeec" },
                                    }}
                                >
                                    {cancelling ? "Cancelling..." : "Cancel membership"}
                                </Button>
                                <Typography sx={{ mt: 1.5, color: "#999", fontSize: "0.78rem", textAlign: "center" }}>
                                    Cancelling stops future charges — access continues until the end of the paid period.
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography sx={{ color: colors.slate, fontSize: "0.9rem" }}>
                                    {status === "cancelled"
                                        ? isSubscribed
                                            ? <>Your membership is cancelled and will end on <strong>{renewsOn}</strong>. You keep access until then, and can rejoin anytime.</>
                                            : "Your membership has ended. Rejoin anytime to regain access to every course."
                                        : "You don't have an active membership yet."}
                                </Typography>
                                <Button
                                    component={RouterLink}
                                    to="/pricing"
                                    fullWidth
                                    sx={{
                                        mt: 3, py: 1.2, borderRadius: "999px",
                                        fontWeight: 700, color: "#fff", background: colors.indigo,
                                        "&:hover": { background: colors.indigoDark },
                                    }}
                                >
                                    {status === "cancelled" ? "Rejoin now" : "Become a member"}
                                </Button>
                            </>
                        )}
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default AccountPage;
