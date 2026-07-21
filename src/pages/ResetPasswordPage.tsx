// src/pages/ResetPasswordPage.tsx
// Step 2 of password recovery: the user arrives here from the email link.
// Supabase detects the recovery token in the URL and creates a temporary
// session; we let the user set a new password with updateUser().
import { useEffect, useState } from "react";
import {
    Alert, Box, Button, CircularProgress, TextField, Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth";
import { supabase } from "../lib/supabaseClient";
import { colors } from "../theme/colors";

const fieldSx = { "& .MuiOutlinedInput-root": { borderRadius: "14px", background: "#fff" } };

const ResetPasswordPage = () => {
    const { updatePassword, isConfigured } = useAuth();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [ready, setReady] = useState(false);
    const [done, setDone] = useState(false);
    const [busy, setBusy] = useState(false);

    // The recovery link opens the app with a token; Supabase fires
    // "PASSWORD_RECOVERY" once it establishes the temporary session.
    useEffect(() => {
        if (!supabase) return;
        supabase.auth.getSession().then(({ data }) => {
            if (data.session) setReady(true);
        });
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "PASSWORD_RECOVERY" || session) setReady(true);
        });
        return () => listener.subscription.unsubscribe();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        if (password !== confirm) {
            setError("Passwords don't match.");
            return;
        }

        setBusy(true);
        const result = await updatePassword(password);
        setBusy(false);

        if (result.error) {
            setError(result.error);
            return;
        }
        setDone(true);
        setTimeout(() => navigate("/dashboard"), 1800);
    };

    return (
        <AuthLayout
            title="Set a new password"
            subtitle="Choose a new password for your Self Craft Skills account."
        >
            {done ? (
                <Alert severity="success" sx={{ borderRadius: "14px" }}>
                    Password updated. Taking you to your dashboard…
                </Alert>
            ) : !isConfigured ? (
                <Alert severity="info" sx={{ borderRadius: "14px" }}>
                    Member accounts are launching soon — password reset will be
                    enabled once memberships go live.
                </Alert>
            ) : !ready ? (
                <Box sx={{ textAlign: "center", py: 3 }}>
                    <CircularProgress sx={{ color: colors.indigo }} />
                    <Typography sx={{ mt: 2, color: colors.slate, fontSize: "0.9rem" }}>
                        Verifying your reset link…
                    </Typography>
                    <Typography sx={{ mt: 1, color: "#999", fontSize: "0.8rem" }}>
                        If this doesn't clear, request a fresh link from the
                        "Forgot password" page — reset links expire after a while.
                    </Typography>
                </Box>
            ) : (
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth margin="normal" label="New password" type="password" required
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        helperText="At least 6 characters" sx={fieldSx}
                    />
                    <TextField
                        fullWidth margin="normal" label="Confirm new password" type="password" required
                        value={confirm} onChange={(e) => setConfirm(e.target.value)} sx={fieldSx}
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
                        {busy ? <CircularProgress size={22} sx={{ color: colors.indigo }} /> : "Update password"}
                    </Button>

                    {error && <Alert severity="error" sx={{ mt: 2.5, borderRadius: "14px" }}>{error}</Alert>}
                </Box>
            )}
        </AuthLayout>
    );
};

export default ResetPasswordPage;
