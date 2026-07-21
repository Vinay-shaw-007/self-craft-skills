// src/components/MeetMentorSection.tsx
import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import InstructorProfileImg from "../assets/instructor-profile.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { colors } from "../theme/colors";
const mentorLinkedInUrl = "https://www.linkedin.com/in/navinshaw21";

const MeetMentorSection = () => {
    return (
        <Box sx={{ py: { xs: 9, md: 12 } }}>
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>
                            <Box component="span" sx={{ color: colors.ink }}>Taught by a</Box>{" "}
                            <Box component="span" sx={{ color: colors.indigo }}>Learner.</Box>
                        </Typography>
                    </Box>

                    <Box sx={{
                        position: "relative",
                        overflow: "hidden",
                        p: { xs: 3, md: 5 },
                        borderRadius: "28px",
                        background: colors.indigoDeeper,
                        color: "#fff",
                    }}>
                        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                            <Grid size={{ xs: 12, md: 5 }}>
                                <Box sx={{ borderRadius: "20px", overflow: "hidden" }}>
                                    <Box component="img" src={InstructorProfileImg} alt="Navin Shaw - Instructor"
                                        sx={{ width: "100%", display: "block" }} />
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 12, md: 7 }}>
                                <Typography sx={{
                                    fontSize: "0.72rem", fontWeight: 700,
                                    letterSpacing: "0.12em", textTransform: "uppercase",
                                    color: colors.lavender,
                                }}>
                                    Mentor spotlight
                                </Typography>
                                <Typography sx={{ mt: 1, fontFamily: '"Space Grotesk"', fontWeight: 800, fontSize: "1.5rem" }}>
                                    Navin Shaw
                                </Typography>
                                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
                                    Founder & Lead Instructor — Self Craft Skills
                                </Typography>

                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                                    {["3+ Years Experience", "Creator Award 2024", "YouTube Growth Mentor"].map((t) => (
                                        <Chip key={t} label={t} size="small" sx={{
                                            borderRadius: "999px",
                                            backgroundColor: "rgba(255,255,255,0.08)",
                                            color: "rgba(255,255,255,0.7)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            fontWeight: 500,
                                        }} />
                                    ))}
                                </Stack>

                                <Typography sx={{ mt: 2.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "0.92rem" }}>
                                    Navin is an educator and content creator with over three years
                                    of experience in YouTube growth, online business, and
                                    productivity-driven learning. He founded Self Craft Skills to
                                    help learners bridge the gap between traditional academics and
                                    the practical skills and growth mindset needed for success.
                                </Typography>

                                <Box sx={{ mt: 3, pl: 2.5, borderLeft: `2px solid ${colors.indigo}` }}>
                                    <Typography sx={{ fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                                        "To empower you with future-ready skills that truly craft your life."
                                    </Typography>
                                    <Typography sx={{ mt: 0.8, color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>
                                        — Navin Shaw
                                    </Typography>
                                </Box>

                                <Button
                                    startIcon={<LinkedInIcon />}
                                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                    href={mentorLinkedInUrl}
                                    target="_blank" rel="noopener noreferrer"
                                    sx={{
                                        mt: 3, px: 3, py: 1.1,
                                        borderRadius: "999px",
                                        color: "#fff",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        fontWeight: 600,
                                        "&:hover": { background: "rgba(255,255,255,0.08)" },
                                    }}>
                                    View mentor profile
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default MeetMentorSection;
