// src/pages/LoginPage.tsx
import { useState } from "react";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Link as MuiLink,
    TextField,
    Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth";
import { colors } from "../theme/colors";

const fieldSx = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "14px",
        background: "#fff",
    },
};

const LoginPage = () => {
    const { signIn, isConfigured } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
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
        const result = await signIn(email, password);
        setBusy(false);

        if (result.error) {
            setError(result.error);
            return;
        }
        navigate("/dashboard");
    };

    return (
        <AuthLayout
            title="Welcome back"
            subtitle="Log in to continue watching your courses."
        >
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth margin="normal" label="Email address" type="email" required
                    value={email} onChange={(e) => setEmail(e.target.value)} sx={fieldSx}
                />
                <TextField
                    fullWidth margin="normal" label="Password" type="password" required
                    value={password} onChange={(e) => setPassword(e.target.value)} sx={fieldSx}
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
