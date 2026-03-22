import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import InstructorProfileImg from "../assets/instructor-profile.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const mentorLinkedInUrl = "https://www.linkedin.com/in/navinshaw21";

const MeetMentorSection = () => {
    return (
        <Box sx={{ py: { xs: 6, md: 8 } }}>
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    {/* Gradient border wrapper */}
                    <Box
                        sx={{
                            p: 0.5,
                            borderRadius: "24px",
                            background:
                                "linear-gradient(135deg, #6C5CE7, #0984E3, #00B894)",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                overflow: "hidden",
                                p: { xs: 3, md: 5 },
                                borderRadius: "21px",
                                background: "#0a0a0a",
                                color: "#fff",
                            }}
                            className="noise-overlay"
                        >
                            {/* Glow orb */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: -100,
                                    right: -100,
                                    width: 300,
                                    height: 300,
                                    borderRadius: "50%",
                                    background:
                                        "radial-gradient(circle, rgba(108, 92, 231, 0.15), transparent 70%)",
                                    filter: "blur(40px)",
                                }}
                            />

                            <Grid
                                container
                                spacing={{ xs: 4, md: 6 }}
                                alignItems="center"
                                sx={{ position: "relative", zIndex: 1 }}
                            >
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <Box
                                        sx={{
                                            borderRadius: "20px",
                                            overflow: "hidden",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={InstructorProfileImg}
                                            alt="Navin Shaw - Instructor"
                                            sx={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                    </Box>
                                </Grid>

                                <Grid size={{ xs: 12, md: 7 }}>
                                    <Typography
                                        sx={{
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            color: "rgba(255,255,255,0.4)",
                                        }}
                                    >
                                        Mentor Spotlight
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            mt: 1,
                                            fontSize: {
                                                xs: "1.8rem",
                                                md: "2.2rem",
                                            },
                                        }}
                                    >
                                        Meet Your Mentor
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1.5,
                                            fontFamily: '"Space Grotesk"',
                                            fontWeight: 700,
                                            fontSize: "1.2rem",
                                        }}
                                    >
                                        Navin Shaw
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "rgba(255,255,255,0.4)",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        Founder & Lead Instructor - Self-Craft
                                        Skills
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        flexWrap="wrap"
                                        useFlexGap
                                        sx={{ mt: 2 }}
                                    >
                                        {[
                                            "3+ Years Experience",
                                            "Creator Award 2024",
                                            "YouTube Growth Mentor",
                                        ].map((t) => (
                                            <Chip
                                                key={t}
                                                label={t}
                                                size="small"
                                                sx={{
                                                    borderRadius: "8px",
                                                    backgroundColor:
                                                        "rgba(255,255,255,0.06)",
                                                    color: "rgba(255,255,255,0.6)",
                                                    border: "1px solid rgba(255,255,255,0.08)",
                                                    fontWeight: 500,
                                                }}
                                            />
                                        ))}
                                    </Stack>

                                    <Typography
                                        sx={{
                                            mt: 2.5,
                                            color: "rgba(255,255,255,0.55)",
                                            lineHeight: 1.8,
                                            fontSize: "0.92rem",
                                        }}
                                    >
                                        Navin is an educator and content creator
                                        with over three years of experience in
                                        YouTube growth, online business, and
                                        productivity-driven learning. He founded
                                        Self-Craft Skills to help learners
                                        bridge the gap between traditional
                                        academics and the practical skills and
                                        growth mindset needed for success
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1.5,
                                            color: "rgba(255,255,255,0.55)",
                                            lineHeight: 1.8,
                                            fontSize: "0.92rem",
                                        }}
                                    >
                                        Navin firmly believes that learning is a
                                        lifelong journey. Once a learner, always
                                        a learner - the key is to grow by
                                        learning from every experience.
                                    </Typography>

                                    <Box
                                        sx={{
                                            mt: 3,
                                            pl: 2.5,
                                            borderLeft:
                                                "2px solid rgba(255,255,255,0.12)",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontStyle: "italic",
                                                color: "rgba(255,255,255,0.7)",
                                                lineHeight: 1.7,
                                                fontSize: "0.95rem",
                                            }}
                                        >
                                            "To empower you with future-ready
                                            skills that truly craft your life."
                                        </Typography>
                                        <Typography
                                            sx={{
                                                mt: 0.8,
                                                color: "rgba(255,255,255,0.3)",
                                                fontSize: "0.82rem",
                                            }}
                                        >
                                            - Navin Shaw
                                        </Typography>
                                    </Box>

                                    <Button
                                        startIcon={<LinkedInIcon />}
                                        endIcon={
                                            <ArrowOutwardRoundedIcon
                                                sx={{ fontSize: 16 }}
                                            />
                                        }
                                        href={mentorLinkedInUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            mt: 3,
                                            px: 3,
                                            py: 1.1,
                                            borderRadius: "12px",
                                            color: "#fff",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                            fontWeight: 600,
                                            "&:hover": {
                                                background:
                                                    "rgba(255,255,255,0.06)",
                                            },
                                        }}
                                    >
                                        View Mentor Profile
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default MeetMentorSection;
