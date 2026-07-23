// src/pages/LoginPage.tsx
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
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
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

const LoginPage = () => {
    const { signIn, resendConfirmation, isConfigured, user, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Where the user was trying to go before being sent to login.
    const from = (location.state as { from?: string } | null)?.from ?? "/dashboard";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [notConfigured, setNotConfigured] = useState(false);
    const [needsConfirmation, setNeedsConfirmation] = useState(false);
    const [resent, setResent] = useState(false);
    const [busy, setBusy] = useState(false);

    // Already logged in? Don't show a pointless form.
    useEffect(() => {
        if (!loading && user) navigate(from, { replace: true });
    }, [loading, user, from, navigate]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
        setNeedsConfirmation(false);
        setResent(false);

        if (!isConfigured) {
            setNotConfigured(true);
            return;
        }

        setBusy(true);
        const result = await signIn(email, password);
        setBusy(false);

        if (result.error) {
            setError(friendlyAuthError(result.error));
            if (result.error.toLowerCase().includes("email not confirmed")) {
                setNeedsConfirmation(true);
            }
            return;
        }
        navigate(from, { replace: true });
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
            title="Welcome back"
            subtitle="Log in to continue watching your courses."
        >
            <GoogleAuthButton
                label="Continue with Google"
                redirectPath={from}
                onError={(m) => setError(m || null)}
            />

            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth margin="normal" label="Email address" type="email" required
                    value={email} onChange={(e) => setEmail(e.target.value)} sx={fieldSx}
                />
                <TextField
                    fullWidth margin="normal" label="Password" required
                    type={showPassword ? "text" : "password"}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    sx={fieldSx}
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

                <Box sx={{ textAlign: "right", mt: 0.5 }}>
                    <MuiLink
                        component={RouterLink}
                        to="/forgot-password"
                        underline="hover"
                        sx={{ fontSize: "0.84rem", fontWeight: 600, color: colors.indigo }}
                    >
                        Forgot password?
                    </MuiLink>
                </Box>

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
                    {busy ? <CircularProgress size={22} sx={{ color: colors.indigo }} /> : "Log in"}
                </Button>

                {error && (
                    <Alert severity="error" sx={{ mt: 2.5, borderRadius: "14px" }}>
                        {error}
                    </Alert>
                )}

                {needsConfirmation && !resent && (
                    <Alert severity="info" sx={{ mt: 1.5, borderRadius: "14px" }}>
                        Didn't get the confirmation email?{" "}
                        <MuiLink
                            component="button"
                            type="button"
                            onClick={handleResend}
                            underline="always"
                            sx={{ fontWeight: 700, color: colors.indigo }}
                        >
                            Resend it
                        </MuiLink>
                    </Alert>
                )}
                {resent && (
                    <Alert severity="success" sx={{ mt: 1.5, borderRadius: "14px" }}>
                        Sent — check your inbox (and spam folder).
                    </Alert>
                )}

                {notConfigured && (
                    <Alert severity="info" sx={{ mt: 2.5, borderRadius: "14px" }}>
                        Member accounts are launching soon — login will be enabled
                        once memberships go live.
                    </Alert>
                )}
            </Box>

            <Typography sx={{ mt: 3, textAlign: "center", fontSize: "0.9rem", color: colors.slate }}>
                New to Self Craft Skills?{" "}
                <MuiLink
                    component={RouterLink}
                    to="/signup"
                    underline="hover"
                    sx={{ fontWeight: 700, color: colors.indigo }}
                >
                    Create an account
                </MuiLink>
            </Typography>
        </AuthLayout>
    );
};

export default LoginPage;
