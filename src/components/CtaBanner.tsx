import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const CtaBanner = () => {
    return (
        <Box sx={{ py: { xs: 4, md: 6 } }}>
            <Container maxWidth="md">
                <FadeInOnScroll>
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
                            textAlign: "center",
                        }} className="noise-overlay">
                            {/* Glow orbs */}
                            <Box sx={{
                                position: "absolute", top: -80, right: -80,
                                width: 250, height: 250, borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(108, 92, 231, 0.15), transparent 70%)",
                                filter: "blur(40px)",
                            }} />
                            <Box sx={{
                                position: "absolute", bottom: -60, left: -60,
                                width: 200, height: 200, borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(253, 121, 168, 0.1), transparent 70%)",
                                filter: "blur(40px)",
                            }} />

                            <Box sx={{ position: "relative", zIndex: 1 }}>
                                <Typography sx={{
                                    fontSize: "0.72rem", fontWeight: 600,
                                    letterSpacing: "0.12em", textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.4)", mb: 1,
                                }}>
                                    Don't wait
                                </Typography>
                                <Typography variant="h3" sx={{
                                    fontSize: { xs: "1.8rem", md: "2.6rem" },
                                    mb: 2,
                                }}>
                                    The Future Will Not Wait. Why Should You?
                                </Typography>

                                <Typography sx={{
                                    color: "rgba(255,255,255,0.5)",
                                    maxWidth: 580, mx: "auto",
                                    mb: 3, lineHeight: 1.7,
                                }}>
                                    Upgrade your career and personal growth with <strong style={{ color: "rgba(255,255,255,0.8)" }}>Self-Craft Skills</strong> live programs.
                                </Typography>

                                {/* Urgency card */}
                                <Box sx={{
                                    maxWidth: 400, mx: "auto", mb: 3.5,
                                    p: 2, borderRadius: "14px",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    background: "rgba(255,255,255,0.04)",
                                }}>
                                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                                        <BoltRoundedIcon sx={{ color: "#FDCB6E", fontSize: 20 }} />
                                        <Typography sx={{
                                            fontFamily: '"Space Grotesk"',
                                            fontWeight: 700, fontSize: "1.1rem",
                                            background: "linear-gradient(135deg, #FDCB6E, #E17055)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}>
                                            Only 30 Seats are Available
                                        </Typography>
                                    </Stack>
                                    <Typography sx={{
                                        color: "rgba(255,255,255,0.35)",
                                        fontSize: "0.82rem", mt: 0.8,
                                    }}>
                                        Enroll now to secure your seat.
                                    </Typography>
                                </Box>

                                <Button
                                    component={RouterLink}
                                    to="/courses"
                                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                    sx={{
                                        px: 3.5, py: 1.4,
                                        borderRadius: "14px",
                                        color: "#111",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                        background: "#fff",
                                        "&:hover": { background: "#f0f0f0", transform: "translateY(-2px)" },
                                        transition: "all 0.2s ease",
                                        boxShadow: "0 8px 32px rgba(255,255,255,0.1)",
                                    }}
                                >
                                    Get Started Today
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default CtaBanner;
