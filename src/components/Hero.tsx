// src/components/Hero.tsx
import { Box, Button, Grid, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import AllInclusiveRoundedIcon from "@mui/icons-material/AllInclusiveRounded";
import EventRepeatRoundedIcon from "@mui/icons-material/EventRepeatRounded";
import NewReleasesRoundedIcon from "@mui/icons-material/NewReleasesRounded";
import { Link as RouterLink } from "react-router-dom";
import HomeImage from "../assets/home.svg";
import { colors } from "../theme/colors";
import { ygm } from "../theme/ygmColors";
import { useSubscription } from "../hooks/useSubscription";

const heroPoints = [
    { icon: <AllInclusiveRoundedIcon sx={{ fontSize: 20 }} />, label: "Every course included" },
    { icon: <EventRepeatRoundedIcon sx={{ fontSize: 20 }} />, label: "Cancel anytime" },
    { icon: <NewReleasesRoundedIcon sx={{ fontSize: 20 }} />, label: "New lessons added regularly" },
];

const Hero = () => {
    const { isSubscribed } = useSubscription();
    return (
        <Box sx={{
            position: "relative",
            overflow: "hidden",
            background: `linear-gradient(160deg, ${colors.indigoDeeper} 0%, ${colors.indigoDeep} 55%, ${colors.indigo} 130%)`,
            pt: { xs: 7, md: 8 },
            pb: { xs: 8, md: 10 },
        }}>
            {/* Glow orbs */}
            <Box sx={{
                position: "absolute", top: "0%", right: "5%",
                width: { xs: 260, md: 480 }, height: { xs: 260, md: 480 },
                borderRadius: "50%",
                background: `radial-gradient(circle, rgba(${colors.lavenderRgb}, 0.28), transparent 70%)`,
                filter: "blur(80px)",
            }} />
            <Box sx={{
                position: "absolute", bottom: "-10%", left: "0%",
                width: { xs: 220, md: 400 }, height: { xs: 220, md: 400 },
                borderRadius: "50%",
                background: `radial-gradient(circle, rgba(${colors.indigoRgb}, 0.35), transparent 70%)`,
                filter: "blur(80px)",
            }} />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                            {["Beginner-friendly", "Mentor-built courses"].map((t) => (
                                <Box key={t} sx={{
                                    px: 1.6, py: 0.6,
                                    borderRadius: "999px",
                                    border: "1px solid rgba(255,255,255,0.18)",
                                    background: "rgba(255,255,255,0.06)",
                                    fontSize: "0.8rem", fontWeight: 600,
                                    color: "rgba(255,255,255,0.75)",
                                }}>
                                    {t}
                                </Box>
                            ))}
                        </Stack>

                        <Typography variant="h1" sx={{
                            fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.8rem" },
                            lineHeight: 1.04,
                            color: "#fff",
                        }}>
                            <Box component="span" sx={{ color: colors.lavender }}>One membership.</Box>
                            <br />
                            Every skill, unlocked.
                        </Typography>

                        <Typography sx={{
                            mt: 3,
                            maxWidth: 480,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            lineHeight: 1.7,
                            color: "rgba(255,255,255,0.65)",
                        }}>
                            {isSubscribed
                                ? "You're all set — pick up where you left off, or explore everything included in your membership."
                                : "One minimal monthly plan unlocks every course on Self Craft Skills — AI, content creation, communication, and everything we build next."}
                        </Typography>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
                            <Button component={RouterLink} to={isSubscribed ? "/dashboard" : "/pricing"}
                                endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} />}
                                sx={{
                                    px: 3.6, py: 1.5,
                                    borderRadius: "999px",
                                    color: "#fff", fontWeight: 700,
                                    fontSize: "0.98rem",
                                    background: colors.indigo,
                                    "&:hover": { background: colors.indigoDark },
                                }}>
                                {isSubscribed ? "Go to dashboard" : "Become a member"}
                            </Button>
                            <Button component={RouterLink} to="/courses"
                                sx={{
                                    px: 3.2, py: 1.5,
                                    borderRadius: "999px",
                                    color: "#fff",
                                    fontSize: "0.98rem", fontWeight: 600,
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    "&:hover": { background: "rgba(255,255,255,0.08)" },
                                }}>
                                Explore courses
                            </Button>
                        </Stack>

                        {/* The freelance side of the business is easy to miss on a
                            course-selling hero, so it gets its own pointer. The green
                            accent is the YGM brand colour, hinting that /services is a
                            different offering rather than another membership page. */}
                        <Box component={RouterLink} to="/services" sx={{
                            mt: 3.5,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1.2,
                            px: 2, py: 1.1,
                            borderRadius: { xs: "16px", sm: "999px" },
                            textDecoration: "none",
                            border: "1px solid rgba(255,255,255,0.16)",
                            background: "rgba(255,255,255,0.06)",
                            transition: "background 0.2s ease, border-color 0.2s ease",
                            "&:hover": {
                                background: "rgba(255,255,255,0.11)",
                                borderColor: `rgba(${ygm.greenRgb}, 0.55)`,
                            },
                            "&:hover .svc-arrow": { transform: "translate(2px, -2px)" },
                        }}>
                            <Box sx={{
                                width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                                background: ygm.greenBright,
                                boxShadow: `0 0 10px ${ygm.greenBright}`,
                            }} />
                            <Typography sx={{
                                fontSize: { xs: "0.8rem", md: "0.86rem" },
                                fontWeight: 600, lineHeight: 1.5,
                                color: "rgba(255,255,255,0.78)",
                            }}>
                                We also grow creators{"\u2019"} channels{" \u2014 "}
                                <Box component="span" sx={{ color: ygm.greenBright }}>
                                    see YGM services
                                </Box>
                            </Typography>
                            <ArrowOutwardRoundedIcon className="svc-arrow" sx={{
                                fontSize: 15, flexShrink: 0, color: ygm.greenBright,
                                transition: "transform 0.2s ease",
                            }} />
                        </Box>

                        <Stack direction="row" spacing={{ xs: 2, sm: 3 }} flexWrap="wrap" useFlexGap sx={{ mt: 4 }}>
                            {heroPoints.map((p) => (
                                <Stack key={p.label} direction="row" spacing={1} alignItems="center">
                                    <Box sx={{ color: colors.lavender, display: "flex" }}>{p.icon}</Box>
                                    <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.86rem", fontWeight: 500 }}>
                                        {p.label}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Illustration */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                            <Box sx={{
                                position: "absolute", inset: "8%",
                                borderRadius: "32px",
                                background: `linear-gradient(135deg, rgba(${colors.lavenderRgb}, 0.35), rgba(${colors.indigoRgb}, 0.25))`,
                                filter: "blur(50px)",
                            }} />
                            <Box sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: 440,
                                borderRadius: "28px",
                                overflow: "hidden",
                                border: "1px solid rgba(255,255,255,0.12)",
                                background: "rgba(255,255,255,0.05)",
                                p: 2,
                            }}>
                                <Box component="img" src={HomeImage}
                                    alt="Learners studying on Self Craft Skills"
                                    sx={{ width: "100%", display: "block", borderRadius: "18px" }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
