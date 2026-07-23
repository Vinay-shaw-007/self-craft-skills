// src/pages/SignUpPage.tsx
import { useEffect, useState } from "react";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    IconButton,
    InputAdornment,
    Link as MuiLink,
    TextField,
    Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import GoogleAuthButton from "../components/GoogleAuthButton";
import { useAuth } from "../hooks/useAuth";
import { friendlyAuthError } from "../lib/authErrors";
import { colors } from "../theme/colors";

const fieldSx = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "14px",
        background: "#fff",
    },
};

/** Rough password strength purely to guide the user — not a hard gate. */
const scorePassword = (pw: string): { score: 0 | 1 | 2 | 3; label: string; color: string } => {
    if (pw.length < 6) return { score: 0, label: "Too short", color: "#c0492f" };
    let variety = 0;
    if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) variety++;
    if (/\d/.test(pw)) variety++;
    if (/[^A-Za-z0-9]/.test(pw)) variety++;

    if (pw.length >= 12 && variety >= 2) return { score: 3, label: "Strong password", color: "#1d7a55" };
    if (pw.length >= 8 && variety >= 1) return { score: 2, label: "Good password", color: "#a06712" };
    return { score: 1, label: "Weak — add length or numbers/symbols", color: "#c0492f" };
};

const SignUpPage = () => {
    const { signUp, resendConfirmation, isConfigured, user, loading } = useAuth();
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [notConfigured, setNotConfigured] = useState(false);
    const [confirmationSent, setConfirmationSent] = useState(false);
    const [resent, setResent] = useState(false);
    const [busy, setBusy] = useState(false);

    // Already logged in? Send them to their dashboard.
    useEffect(() => {
        if (!loading && user) navigate("/dashboard", { replace: true });
    }, [loading, user, navigate]);

    const strength = password ? scorePassword(password) : null;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        if (!isConfigured) {
            setNotConfigured(true);
            return;
        }

        // Light validation: WhatsApp needs a country code + number.
        const cleanedPhone = phone.replace(/\s+/g, "");
        if (!/^\+?\d{10,15}$/.test(cleanedPhone)) {
            setError("Please enter a valid WhatsApp number with country code, e.g. +91XXXXXXXXXX.");
            return;
        }

        setBusy(true);
        const result = await signUp(email, password, fullName, cleanedPhone);
        setBusy(false);

        if (result.error) {
            setError(friendlyAuthError(result.error));
            return;
        }
        if (result.needsEmailConfirmation) {
            setConfirmationSent(true);
            return;
        }
        navigate("/pricing");
    };

    const handleResend = async () => {
        setError(null);
        const result = await resendConfirmation(email);
        if (result.error) {
            setError(friendlyAuthError(result.error));
            return;
        }
        setResent(true);
    };

    return (
        <AuthLayout
            title="Create your account"
            subtitle="One membership unlocks every course. Start here."
        >
            {confirmationSent ? (
                <>
                    <Alert severity="success" sx={{ borderRadius: "14px" }}>
                        Almost there — we've sent a confirmation link to{" "}
                        <strong>{email}</strong>. Click it, then log in.
                    </Alert>
                    {resent ? (
                        <Alert severity="info" sx={{ mt: 1.5, borderRadius: "14px" }}>
                            Sent again — please check your inbox and spam folder.
                        </Alert>
                    ) : (
                        <Typography sx={{ mt: 2, textAlign: "center", fontSize: "0.86rem", color: colors.slate }}>
                            Didn't receive it?{" "}
                            <MuiLink
                                component="button"
                                type="button"
                                onClick={handleResend}
                                underline="always"
                                sx={{ fontWeight: 700, color: colors.indigo }}
                            >
                                Resend email
                            </MuiLink>
                        </Typography>
                    )}
                    {error && (
                        <Alert severity="error" sx={{ mt: 1.5, borderRadius: "14px" }}>{error}</Alert>
                    )}
                </>
            ) : (
                <>
                    <GoogleAuthButton
                        label="Sign up with Google"
                        redirectPath="/dashboard"
                        onError={(m) => setError(m || null)}
                    />

                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth margin="normal" label="Full name" required
                            value={fullName} onChange={(e) => setFullName(e.target.value)} sx={fieldSx}
                        />
                        <TextField
                            fullWidth margin="normal" label="Email address" type="email" required
                            value={email} onChange={(e) => setEmail(e.target.value)} sx={fieldSx}
                        />
                        <TextField
                            fullWidth margin="normal" label="WhatsApp number" type="tel" required
                            placeholder="+91XXXXXXXXXX"
                            value={phone} onChange={(e) => setPhone(e.target.value)}
                            helperText="Include your country code — we'll send updates here"
                            sx={fieldSx}
                        />
                        <TextField
                            fullWidth margin="normal" label="Password" required
                            type={showPassword ? "text" : "password"}
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            helperText={strength ? strength.label : "At least 6 characters"}
                            sx={{
                                ...fieldSx,
                                "& .MuiFormHelperText-root": strength ? { color: strength.color, fontWeight: 600 } : {},
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword((s) => !s)}
                                            edge="end"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword
                                                ? <VisibilityOffOutlinedIcon fontSize="small" />
                                                : <VisibilityOutlinedIcon fontSize="small" />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Strength bar */}
                        {strength && (
                            <Box sx={{ display: "flex", gap: 0.6, mt: 0.8 }}>
                                {[1, 2, 3].map((i) => (
                                    <Box key={i} sx={{
                                        flex: 1, height: 4, borderRadius: 99,
                                        background: strength.score >= i ? strength.color : "rgba(18,19,43,0.1)",
                                        transition: "background 0.2s ease",
                                    }} />
                                ))}
                            </Box>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            disabled={busy}
                            sx={{
                                mt: 3,
                                py: 1.4,
                                fontSize: "0.98rem",
                                fontWeight: 700,
                                borderRadius: "999px",
                                color: "#fff",
                                background: colors.indigo,
                                "&:hover": { background: colors.indigoDark },
                                "&.Mui-disabled": { background: colors.lavenderSoft },
                            }}
                        >
                            {busy ? <CircularProgress size={22} sx={{ color: colors.indigo }} /> : "Create account"}
                        </Button>

                        {error && (
                            <Alert severity="error" sx={{ mt: 2.5, borderRadius: "14px" }}>
                                {error}
                            </Alert>
                        )}
                        {notConfigured && (
                            <Alert severity="info" sx={{ mt: 2.5, borderRadius: "14px" }}>
                                Member accounts are launching soon — sign up will be
                                enabled once memberships go live.
                            </Alert>
                        )}
                    </Box>
                </>
            )}

            <Typography sx={{ mt: 3, textAlign: "center", fontSize: "0.9rem", color: colors.slate }}>
                Already have an account?{" "}
                <MuiLink
                    component={RouterLink}
                    to="/login"
                    underline="hover"
                    sx={{ fontWeight: 700, color: colors.indigo }}
                >
                    Log in
                </MuiLink>
            </Typography>
        </AuthLayout>
    );
};

export default SignUpPage;
