// src/components/EditProfileCard.tsx
// Lets a member update their display name and WhatsApp number from the
// Account page. Writes to both auth metadata and the profiles row.
import { useState } from "react";
import { Alert, Box, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { friendlyAuthError } from "../lib/authErrors";
import { colors } from "../theme/colors";

const fieldSx = { "& .MuiOutlinedInput-root": { borderRadius: "14px", background: "#fff" } };

const EditProfileCard = () => {
    const { user, updateProfile } = useAuth();

    const [fullName, setFullName] = useState(
        (user?.user_metadata?.full_name as string | undefined) ?? "",
    );
    const [phone, setPhone] = useState(
        (user?.user_metadata?.phone as string | undefined) ?? "",
    );
    const [error, setError] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);
    const [busy, setBusy] = useState(false);

    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
        setSaved(false);

        const cleanedPhone = phone.replace(/\s+/g, "");
        if (cleanedPhone && !/^\+?\d{10,15}$/.test(cleanedPhone)) {
            setError("Please enter a valid WhatsApp number with country code, e.g. +91XXXXXXXXXX.");
            return;
        }

        setBusy(true);
        const result = await updateProfile({ fullName, phone: cleanedPhone });
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
                p: { xs: 3, md: 3.5 },
                mb: 2.5,
                borderRadius: "24px",
                border: "1px solid rgba(18,19,43,0.08)",
                background: "#fff",
            }}
        >
            <Typography sx={{ fontWeight: 700, color: colors.ink, mb: 0.5 }}>
                Your details
            </Typography>
            <Typography sx={{ color: colors.slate, fontSize: "0.85rem", mb: 2 }}>
                Keep these up to date so we can reach you about your courses.
            </Typography>

            <Stack spacing={2}>
                <TextField
                    fullWidth label="Full name" size="small"
                    value={fullName} onChange={(e) => setFullName(e.target.value)} sx={fieldSx}
                />
                <TextField
                    fullWidth label="WhatsApp number" size="small" type="tel"
                    placeholder="+91XXXXXXXXXX"
                    value={phone} onChange={(e) => setPhone(e.target.value)} sx={fieldSx}
                />
                <TextField
                    fullWidth label="Email" size="small" disabled
                    value={user?.email ?? ""}
                    helperText="Contact us if you need to change your email"
                    sx={fieldSx}
                />
            </Stack>

            <Button
                type="submit"
                disabled={busy}
                sx={{
                    mt: 2.5, px: 3, py: 1.1,
                    borderRadius: "999px", fontWeight: 700,
                    color: "#fff", background: colors.indigo,
                    "&:hover": { background: colors.indigoDark },
                    "&.Mui-disabled": { background: colors.lavenderSoft },
                }}
            >
                {busy ? <CircularProgress size={20} sx={{ color: colors.indigo }} /> : "Save changes"}
            </Button>

            {error && <Alert severity="error" sx={{ mt: 2, borderRadius: "14px" }}>{error}</Alert>}
            {saved && <Alert severity="success" sx={{ mt: 2, borderRadius: "14px" }}>Details updated.</Alert>}
        </Box>
    );
};

export default EditProfileCard;
