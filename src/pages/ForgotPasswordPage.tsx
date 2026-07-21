// src/pages/ForgotPasswordPage.tsx
// Step 1 of password recovery: the user enters their email and Supabase
// sends a reset link that lands on /reset-password.
import { useState } from "react";
import {
    Alert, Box, Button, CircularProgress, Link as MuiLink, TextField, Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth";
import { colors } from "../theme/colors";

const fieldSx = { "& .MuiOutlinedInput-root": { borderRadius: "14px", background: "#fff" } };

const ForgotPasswordPage = () => {
    const { requestPasswordReset, isConfigured } = useAuth();
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [sent, setSent] = useState(false);
    const [notConfigured, setNotConfigured] = useState(false);
    const [busy, setBusy] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        if (!isConfigured) {
            setNotConfigured(true);
            return;
        }

        setBusy(true);
        const result = await requestPasswordReset(email);
        setBusy(false);

        if (result.error) {
            setError(result.error);
            return;
        }
        setSent(true);
    };

    return (
        <AuthLayout
            title="Reset your password"
            subtitle="Enter your email and we'll send you a link to set a new password."
        >
            {sent ? (
                <Alert severity="success" sx={{ borderRadius: "14px" }}>
                    If an account exists for <strong>{email}</strong>, a password-reset
                    link is on its way. Check your inbox (and spam folder).
                </Alert>
            ) : (
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth margin="normal" label="Email address" type="email" required
                        value={email} onChange={(e) => setEmail(e.target.value)} sx={fieldSx}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        disabled={busy}
                        sx={{
                            mt: 3, py: 1.4, fontSize: "0.98rem", fontWeight: 700,
                            borderRadius: "999px", color: "#fff", background: colors.indigo,
                            "&:hover": { background: colors.indigoDark },
                            "&.Mui-disabled": { background: colors.lavenderSoft },
                        }}
                    >
                        {busy ? <CircularProgress size={22} sx={{ color: colors.indigo }} /> : "Send reset link"}
                    </Button>

                    {error && <Alert severity="error" sx={{ mt: 2.5, borderRadius: "14px" }}>{error}</Alert>}
                    {notConfigured && (
                        <Alert severity="info" sx={{ mt: 2.5, borderRadius: "14px" }}>
                            Member accounts are launching soon — password reset will be
                            enabled once memberships go live.
                        </Alert>
                    )}
                </Box>
            )}

            <Typography sx={{ mt: 3, textAlign: "center", fontSize: "0.9rem", color: colors.slate }}>
                Remembered it?{" "}
                <MuiLink component={RouterLink} to="/login" underline="hover" sx={{ fontWeight: 700, color: colors.indigo }}>
                    Back to log in
                </MuiLink>
            </Typography>
        </AuthLayout>
    );
};

export default ForgotPasswordPage;
