// src/components/SubscriptionDevToggle.tsx
// DEV-ONLY widget so subscribed/unsubscribed states can be clicked through
// before the real backend exists. Renders only in `vite dev` (import.meta.env.DEV
// is false in production builds), so it never ships. Safe to delete once
// real auth + subscription checks land.
import { Box, Chip, Stack, Typography } from "@mui/material";
import { useSubscription } from "../hooks/useSubscription";

const SubscriptionDevToggle = () => {
    const { status, setMockStatus, isMockMode } = useSubscription();

    // Only in `vite dev`, and only while running on mock data — once real
    // Supabase credentials exist, status comes from the API and this hides.
    if (!import.meta.env.DEV || !isMockMode) return null;

    const options: { label: string; value: typeof status }[] = [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
        { label: "Cancelled", value: "cancelled" },
    ];

    return (
        <Box sx={{
            position: "fixed",
            bottom: 16,
            left: 16,
            zIndex: 2000,
            p: 1.2,
            borderRadius: "12px",
            background: "#12132B",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
        }}>
            <Typography sx={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                mb: 0.6,
            }}>
                Dev: mock subscription
            </Typography>
            <Stack direction="row" spacing={0.6}>
                {options.map((opt) => (
                    <Chip
                        key={opt.value}
                        label={opt.label}
                        size="small"
                        onClick={() => setMockStatus(opt.value)}
                        sx={{
                            fontWeight: 600,
                            color: status === opt.value ? "#12132B" : "rgba(255,255,255,0.6)",
                            background: status === opt.value ? "#fff" : "rgba(255,255,255,0.08)",
                            "&:hover": { background: status === opt.value ? "#fff" : "rgba(255,255,255,0.16)" },
                        }}
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default SubscriptionDevToggle;
