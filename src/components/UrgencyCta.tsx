import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import { Link as RouterLink } from "react-router-dom";
import { coursesData } from "./coursesData";

const enrollmentCourse = coursesData.find((c) => c.status === "Open for Enrollment");

const UrgencyCta = () => {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            {/* Gradient border wrapper */}
            <Box sx={{
                p: 0.5,
                borderRadius: "24px",
                background: "linear-gradient(135deg, #6C5CE7, #0984E3, #00B894, #FD79A8)",
            }}>
                <Box sx={{
                    position: "relative",
                    overflow: "hidden",
                    p: { xs: 4, md: 6 },
                    borderRadius: "21px",
                    background: "#0a0a0a",
                    color: "#fff",
                }} className="noise-overlay">
                    {/* Glow orbs */}
                    <Box sx={{
                        position: "absolute", top: -100, right: -100,
                        width: 300, height: 300, borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(108, 92, 231, 0.2), transparent 70%)",
                        filter: "blur(40px)",
                    }} />
                    <Box sx={{
                        position: "absolute", bottom: -80, left: -80,
                        width: 250, height: 250, borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(253, 121, 168, 0.15), transparent 70%)",
                        filter: "blur(40px)",
                    }} />

                    <Stack direction={{ xs: "column", md: "row" }} spacing={4}
                        alignItems="center" justifyContent="space-between"
                        sx={{ position: "relative", zIndex: 1 }}>
                        <Box sx={{ maxWidth: 700, textAlign: { xs: "center", md: "left" } }}>
                            <Typography sx={{
                                fontSize: "0.72rem", fontWeight: 600,
                                letterSpacing: "0.12em", textTransform: "uppercase",
                                color: "rgba(255,255,255,0.4)", mb: 1,
                            }}>
                                Next cohort admissions
                            </Typography>
                            <Typography variant="h3" sx={{
                                fontSize: { xs: "1.8rem", md: "2.6rem" },
                            }}>
                                Join a live cohort before the next batch closes.
                            </Typography>

                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap
                                justifyContent={{ xs: "center", md: "flex-start" }}
                                sx={{ mt: 2.5 }}>
                                {["Mentor-led classes", "Beginner-friendly curriculum", "Support through WhatsApp"].map((t) => (
                                    <Box key={t} sx={{
                                        px: 1.5, py: 0.6, borderRadius: "8px",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        background: "rgba(255,255,255,0.04)",
                                        fontSize: "0.82rem", color: "rgba(255,255,255,0.5)",
                                        fontWeight: 500,
                                    }}>{t}</Box>
                                ))}
                            </Stack>
                        </Box>

                        <Button component={RouterLink}
                            to={enrollmentCourse ? `/courses/${enrollmentCourse.id}` : "/courses"}
                            startIcon={<BoltRoundedIcon />}
                            endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                            sx={{
                                flexShrink: 0, px: 3.5, py: 1.5,
                                borderRadius: "14px",
                                color: "#111", fontWeight: 700,
                                fontSize: "0.95rem",
                                background: "#fff",
                                "&:hover": { background: "#f0f0f0", transform: "translateY(-2px)" },
                                transition: "all 0.2s ease",
                                boxShadow: "0 8px 32px rgba(255,255,255,0.1)",
                            }}>
                            Secure your seat
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
};

export default UrgencyCta;
