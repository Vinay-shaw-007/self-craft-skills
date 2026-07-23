// src/components/CompleteProfilePrompt.tsx
// Google sign-in skips our signup form, so those members arrive without a
// WhatsApp number. This nudges them to add it once, from the dashboard.
// Dismissible — never blocks access to the courses they paid for.
import { useState } from "react";
import { Alert, Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useAuth } from "../hooks/useAuth";
import { friendlyAuthError } from "../lib/authErrors";
import { colors } from "../theme/colors";

const DISMISS_KEY = "scs_profile_prompt_dismissed";

const CompleteProfilePrompt = () => {
    const { user, updateProfile } = useAuth();
    const existingPhone = user?.user_metadata?.phone as string | undefined;

    const [dismissed, setDismissed] = useState(
        () => typeof window !== "undefined" && window.localStorage.getItem(DISMISS_KEY) === "1",
    );
    const [phone, setPhone] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);
    const [busy, setBusy] = useState(false);

    // Nothing to ask for if they already gave us a number, or they've dismissed it.
    if (!user || existingPhone || dismissed || saved) return null;

    const handleDismiss = () => {
        window.localStorage.setItem(DISMISS_KEY, "1");
        setDismissed(true);
    };

    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        const cleaned = phone.replace(/\s+/g, "");
        if (!/^\+?\d{10,15}$/.test(cleaned)) {
            setError("Please enter a valid number with country code, e.g. +91XXXXXXXXXX.");
            return;
        }

        setBusy(true);
        const result = await updateProfile({ phone: cleaned });
        setBusy(false);

        if (result.error) {
            setError(friendlyAuthError(result.error));
            return;
        }
        setSaved(true);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSave}
            sx={{
                position: "relative",
                p: { xs: 2.5, md: 3 },
                mb: 3,
                borderRadius: "20px",
                background: colors.lavenderSoft,
                border: `1px solid rgba(${colors.indigoRgb}, 0.2)`,
            }}
        >
            <IconButton
                onClick={handleDismiss}
                aria-label="Dismiss"
                size="small"
                sx={{ position: "absolute", top: 8, right: 8, color: colors.slate }}
            >
                <CloseRoundedIcon fontSize="small" />
            </IconButton>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                <WhatsAppIcon sx={{ color: "#25D366", fontSize: 20 }} />
                <Typography sx={{ fontWeight: 700, color: colors.ink }}>
                    Add your WhatsApp number
                </Typography>
            </Stack>
            <Typography sx={{ color: colors.slate, fontSize: "0.88rem", mb: 2, pr: 3 }}>
                So we can send you course updates and new lesson announcements. Optional —
                you can skip this.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="flex-start">
                <TextField
                    size="small" type="tel" placeholder="+91XXXXXXXXXX"
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                    sx={{
                        flexGrow: 1, width: { xs: "100%", sm: "auto" },
                        "& .MuiOutlinedInput-root": { borderRadius: "12px", background: "#fff" },
                    }}
                />
                <Button
                    type="submit"
                    disabled={busy}
                    sx={{
                        px: 3, py: 1, flexShrink: 0,
                        width: { xs: "100%", sm: "auto" },
                        borderRadius: "999px", fontWeight: 700,
                        color: "#fff", background: colors.indigo,
                        "&:hover": { background: colors.indigoDark },
                        "&.Mui-disabled": { background: "rgba(79,70,229,0.4)" },
                    }}
                >
                    {busy ? "Saving..." : "Save"}
                </Button>
            </Stack>

            {error && <Alert severity="error" sx={{ mt: 1.5, borderRadius: "12px" }}>{error}</Alert>}
        </Box>
    );
};

export default CompleteProfilePrompt;
