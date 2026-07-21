// src/pages/SignUpPage.tsx
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

const SignUpPage = () => {
    const { signUp, isConfigured } = useAuth();
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [notConfigured, setNotConfigured] = useState(false);
    const [confirmationSent, setConfirmationSent] = useState(false);
    const [busy, setBusy] = useState(false);

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
            setError(result.error);
            return;
        }
        if (result.needsEmailConfirmation) {
            setConfirmationSent(true);
            return;
        }
        navigate("/pricing");
    };

    return (
        <AuthLayout
            title="Create your account"
            subtitle="One membership unlocks every course. Start here."
        >
            {confirmationSent ? (
                <Alert severity="success" sx={{ borderRadius: "14px" }}>
                    Almost there — we've sent a confirmation link to{" "}
                    <strong>{email}</strong>. Click it, then log in.
                </Alert>
            ) : (
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
                        fullWidth margin="normal" label="Password" type="password" required
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        helperText="At least 6 characters" sx={fieldSx}
                    />

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
