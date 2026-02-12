// src/components/MeetMentorSection.tsx
import { Box, Container, Typography, Paper, Button, Chip, Stack } from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import InstructorProfileImg from "../assets/instructor-profile.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const mentorLinkedInUrl = "https://www.linkedin.com/in/navinshaw21";

const MeetMentorSection = () => {
    return (
        <Box sx={{ py: { xs: 6, md: 8 } }}>
            <Container>
                <FadeInOnScroll>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: "24px",
                            background:
                                "linear-gradient(45deg, #0a192f 30%, #1a237e 90%)",
                            border: "1px solid rgba(255,255,255,0.14)",
                            transition:
                                "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 16px 32px rgba(10, 25, 47, 0.35)",
                            },
                            p: { xs: 3, md: 5 },
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                        }}
                    >
                        <Box
                            sx={{
                                flex: { xs: "0 0 auto", md: "0 0 40%" },
                                textAlign: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "inline-block",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "-10px",
                                        left: "-10px",
                                        width: "100%",
                                        height: "100%",
                                        background: (theme) =>
                                            theme.palette.secondary.main,
                                        borderRadius: "12px",
                                        transform: "rotate(-4deg)",
                                        zIndex: 1,
                                    }}
                                />
                                <Box
                                    component="img"
                                    src={InstructorProfileImg}
                                    alt="Navin Shaw - Instructor"
                                    sx={{
                                        width: "100%",
                                        maxWidth: "320px",
                                        borderRadius: "12px",
                                        boxShadow:
                                            "0 10px 30px rgba(0,0,0,0.3)",
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#93c5fd",
                                    letterSpacing: "0.14em",
                                    fontWeight: 600,
                                }}
                            >
                                Mentor Spotlight
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                sx={{
                                    color: "#fff",
                                    mt: 0.5,
                                    mb: 1.6,
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                Meet Your Mentor
                            </Typography>

                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{
                                    color: "#fff",
                                    mb: 1,
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                Navin Shaw
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#bdbdbd",
                                    mb: 2,
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                Founder & Lead Instructor - Self-Craft Skills
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    mb: 2.2,
                                    justifyContent: { xs: "center", md: "flex-start" },
                                    flexWrap: "wrap",
                                    rowGap: 1,
                                }}
                            >
                                <Chip
                                    label="3+ Years Experience"
                                    size="small"
                                    sx={{
                                        backgroundColor: "rgba(255,255,255,0.12)",
                                        color: "#e5e7eb",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                    }}
                                />
                                <Chip
                                    label="Creator Award 2024"
                                    size="small"
                                    sx={{
                                        backgroundColor: "rgba(255,255,255,0.12)",
                                        color: "#e5e7eb",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                    }}
                                />
                                <Chip
                                    label="YouTube Growth Mentor"
                                    size="small"
                                    sx={{
                                        backgroundColor: "rgba(255,255,255,0.12)",
                                        color: "#e5e7eb",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                    }}
                                />
                            </Stack>

                            <Typography
                                variant="body1"
                                sx={{ my: 2, color: "#fff", lineHeight: 1.75 }}
                            >
                                Navin is an educator, content creator, and
                                entrepreneur, officially selected to attend the
                                National Creator Award 2024 by the Government of
                                India. With over 3 years of experience in
                                YouTube growth, online business, and
                                productivity-driven learning, he founded
                                Self-Craft Skills to help learners gain the
                                practical skills and growth mindset often
                                missing in academics.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ my: 2, color: "#fff", lineHeight: 1.75 }}
                            >
                                Navin firmly believes that learning is a
                                lifelong journey. Once a learner, always a
                                learner - the key is to grow by learning from
                                every experience.
                            </Typography>

                            <Box
                                sx={{
                                    mt: 3,
                                    pl: 2,
                                    borderLeft: "3px solid",
                                    borderColor: "primary.main",
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    fontStyle="italic"
                                    sx={{ color: "#f5f5f5", lineHeight: 1.7 }}
                                >
                                    "To empower you with future-ready skills
                                    that truly craft your life."
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        display: "block",
                                        mt: 1,
                                        color: "#bdbdbd",
                                    }}
                                >
                                    - Navin Shaw
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    mt: 3,
                                    display: "flex",
                                    justifyContent: { xs: "center", md: "flex-start" },
                                }}
                            >
                                <Button
                                    variant="contained"
                                    startIcon={<LinkedInIcon />}
                                    href={mentorLinkedInUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        borderRadius: "999px",
                                        px: 3,
                                        py: 1,
                                        fontWeight: 600,
                                        textTransform: "none",
                                        background:
                                            "linear-gradient(45deg, #D32F2F 30%, #E57373 90%)",
                                        boxShadow: "0 8px 20px rgba(211, 47, 47, 0.35)",
                                        "&:hover": {
                                            transform: "translateY(-2px)",
                                            boxShadow:
                                                "0 12px 24px rgba(211, 47, 47, 0.42)",
                                        },
                                    }}
                                >
                                    View Mentor Profile
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default MeetMentorSection;
