import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Link as RouterLink } from "react-router-dom";
import HomeImage from "../assets/home.svg";
import { coursesData } from "./coursesData";

const openCourse = coursesData.find((c) => c.status === "Open for Enrollment");

const bentoStats = [
    { value: "4", unit: "Weeks", sub: "Program duration", color: "#6C5CE7" },
    { value: "12", unit: "Classes", sub: "Live mentor sessions", color: "#0984E3" },
    { value: "30", unit: "Seats", sub: "Per cohort batch", color: "#00B894" },
];

const Hero = () => {
    return (
        <Box sx={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(180deg, #0a0a0a 0%, #111 60%, #1a1a2e 100%)",
            color: "#fff",
            pb: { xs: 8, md: 10 },
            pt: { xs: 6, md: 8 },
        }} className="noise-overlay">
            {/* Gradient mesh orbs */}
            <Box sx={{
                position: "absolute", top: "5%", left: "15%",
                width: { xs: 250, md: 500 }, height: { xs: 250, md: 500 },
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(108, 92, 231, 0.25), transparent 70%)",
                filter: "blur(80px)",
            }} />
            <Box sx={{
                position: "absolute", top: "20%", right: "10%",
                width: { xs: 200, md: 400 }, height: { xs: 200, md: 400 },
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(9, 132, 227, 0.2), transparent 70%)",
                filter: "blur(80px)",
            }} />
            <Box sx={{
                position: "absolute", bottom: "0%", left: "40%",
                width: { xs: 200, md: 350 }, height: { xs: 200, md: 350 },
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(253, 121, 168, 0.15), transparent 70%)",
                filter: "blur(80px)",
            }} />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
                        <Stack spacing={3}>
                            {/* Pill badge */}
                            <Chip label="Beginner-Friendly Learning Programs" sx={{
                                alignSelf: "flex-start",
                                backgroundColor: "rgba(108, 92, 231, 0.15)",
                                color: "#a29bfe",
                                border: "1px solid rgba(108, 92, 231, 0.25)",
                                fontWeight: 600,
                                borderRadius: "8px",
                                fontSize: "0.8rem",
                            }} />

                            {/* Headline */}
                            <Typography variant="h1" sx={{
                                fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4.2rem", lg: "4.8rem" },
                                maxWidth: 700,
                            }}>
                                Build future-ready{" "}
                                <Box component="span" sx={{
                                    position: "relative",
                                    display: "inline",
                                    background: "linear-gradient(135deg, #6C5CE7 0%, #a29bfe 40%, #0984E3 100%)",
                                    backgroundSize: "200% 200%",
                                    animation: "gradientShift 4s ease infinite",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}>
                                    skills
                                </Box>
                                {" "}with a live cohort experience.
                            </Typography>

                            {/* Subtitle */}
                            <Typography sx={{
                                maxWidth: 540,
                                fontSize: { xs: "1rem", md: "1.12rem" },
                                lineHeight: 1.7,
                                color: "rgba(255,255,255,0.55)",
                            }}>
                                Self Craft Skills combines structured teaching,
                                guided practice, and mentor support so learners can
                                move from curiosity to confident execution.
                            </Typography>

                            {/* Tags */}
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {["Live mentor-led cohorts", "Beginner-friendly structure", "Practical assignments"].map((t) => (
                                    <Box key={t} sx={{
                                        px: 1.5, py: 0.6,
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        background: "rgba(255,255,255,0.04)",
                                        fontSize: "0.82rem",
                                        color: "rgba(255,255,255,0.65)",
                                    }}>
                                        {t}
                                    </Box>
                                ))}
                            </Stack>

                            {/* CTAs */}
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                                <Button component={RouterLink} to="/courses" sx={{
                                    px: 3.5, py: 1.5,
                                    borderRadius: "14px",
                                    color: "#111",
                                    fontWeight: 700,
                                    fontSize: "0.95rem",
                                    background: "#fff",
                                    "&:hover": { background: "#f0f0f0", transform: "translateY(-1px)" },
                                    transition: "all 0.2s ease",
                                    boxShadow: "0 8px 32px rgba(255,255,255,0.1)",
                                }}>
                                    Explore programs
                                    <ArrowOutwardRoundedIcon sx={{ ml: 0.5, fontSize: 18 }} />
                                </Button>
                                <Button component={RouterLink}
                                    to={openCourse ? `/courses/${openCourse.id}` : "/courses"}
                                    startIcon={<PlayArrowRoundedIcon />}
                                    sx={{
                                        px: 3, py: 1.5,
                                        borderRadius: "14px",
                                        color: "#fff",
                                        fontSize: "0.95rem",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        background: "rgba(255,255,255,0.05)",
                                        "&:hover": { background: "rgba(255,255,255,0.1)" },
                                    }}>
                                    See flagship course
                                </Button>
                            </Stack>

                            {/* Bento stats */}
                            <Grid container spacing={1.5} sx={{ pt: 1 }}>
                                {bentoStats.map((s) => (
                                    <Grid key={s.sub} size={{ xs: 4 }}>
                                        <Box sx={{
                                            p: { xs: 1.5, md: 2 },
                                            borderRadius: "16px",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            background: "rgba(255,255,255,0.03)",
                                            backdropFilter: "blur(10px)",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                background: "rgba(255,255,255,0.06)",
                                                borderColor: `${s.color}40`,
                                            },
                                        }}>
                                            <Stack direction="row" alignItems="baseline" spacing={0.5}>
                                                <Typography sx={{
                                                    fontFamily: '"Space Grotesk"',
                                                    fontWeight: 700,
                                                    fontSize: { xs: "1.6rem", md: "2rem" },
                                                    color: s.color,
                                                    lineHeight: 1,
                                                }}>
                                                    {s.value}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: { xs: "0.72rem", md: "0.82rem" },
                                                    fontWeight: 600,
                                                    color: "rgba(255,255,255,0.5)",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.05em",
                                                }}>
                                                    {s.unit}
                                                </Typography>
                                            </Stack>
                                            <Typography sx={{
                                                mt: 0.5,
                                                fontSize: { xs: "0.7rem", md: "0.78rem" },
                                                color: "rgba(255,255,255,0.35)",
                                            }}>
                                                {s.sub}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                    </Grid>

                    {/* Hero image */}
                    <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 2 } }}>
                        <Box sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            {/* Glow behind image */}
                            <Box sx={{
                                position: "absolute",
                                inset: "10%",
                                borderRadius: "30px",
                                background: "linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(9, 132, 227, 0.2))",
                                filter: "blur(50px)",
                            }} />
                            <Box sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: { xs: 380, md: 460 },
                                borderRadius: "24px",
                                overflow: "hidden",
                                border: "1px solid rgba(255,255,255,0.08)",
                                background: "rgba(255,255,255,0.03)",
                                p: 1,
                            }}>
                                <Box component="img" src={HomeImage}
                                    alt="Students learning on Self Craft Skills"
                                    sx={{
                                        width: "100%", display: "block",
                                        borderRadius: "20px",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Bottom fade to white */}
            <Box sx={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: 120,
                background: "linear-gradient(to bottom, transparent, #fafafa)",
            }} />
        </Box>
    );
};

export default Hero;
