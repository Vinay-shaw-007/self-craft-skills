// src/components/UrgencyCta.tsx
// Mid-page conversion banner — "everything included" pitch for the
// all-access membership.
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../theme/colors";
import { MONTHLY_PRICE_DISPLAY } from "../config/pricing";

const included = [
    { label: "Courses", icon: <SchoolRoundedIcon sx={{ fontSize: 18 }} /> },
    { label: "Community", icon: <ForumRoundedIcon sx={{ fontSize: 18 }} /> },
    { label: "Certificates", icon: <WorkspacePremiumRoundedIcon sx={{ fontSize: 18 }} /> },
];

const UrgencyCta = () => {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
            <Box sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 4, md: 6 },
                borderRadius: "28px",
                background: `linear-gradient(135deg, ${colors.indigoDeep}, ${colors.indigo})`,
                color: "#fff",
            }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4}
                    alignItems="center" justifyContent="space-between">
                    <Box sx={{ maxWidth: 520, textAlign: { xs: "center", md: "left" } }}>
                        <Typography variant="h3" sx={{
                            fontSize: { xs: "1.7rem", md: "2.3rem" },
                            lineHeight: 1.2,
                        }}>
                            Get access to every course for {MONTHLY_PRICE_DISPLAY}/month.
                        </Typography>
                        <Typography sx={{ mt: 1.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                            No per-course payments, no upsells — one membership covers
                            everything, and you can cancel whenever you like.
                        </Typography>
                    </Box>

                    <Stack spacing={1.5} sx={{ flexShrink: 0 }}>
                        <Stack direction="row" spacing={1.2} justifyContent="center">
                            {included.map((item) => (
                                <Stack key={item.label} direction="row" spacing={0.7} alignItems="center" sx={{
                                    px: 1.6, py: 0.8,
                                    borderRadius: "999px",
                                    border: "1px solid rgba(255,255,255,0.18)",
                                    background: "rgba(255,255,255,0.08)",
                                }}>
                                    {item.icon}
                                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>{item.label}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                        <Button component={RouterLink} to="/pricing"
                            endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                            sx={{
                                px: 3.5, py: 1.4,
                                borderRadius: "999px",
                                color: colors.indigoDeep, fontWeight: 700,
                                fontSize: "0.95rem",
                                background: "#fff",
                                "&:hover": { background: "#f0f0f0" },
                            }}>
                            Become a member
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
};

export default UrgencyCta;
