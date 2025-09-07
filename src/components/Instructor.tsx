// src/components/Instructor.tsx
import { Box, Container, Typography, Grid } from "@mui/material";
import InstructorProfileImg from "../assets/instructor-profile.jpg";
import FadeInOnScroll from "./FadeInOnScroll";

const Instructor = () => {
    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                background: "linear-gradient(45deg, #0a192f 30%, #1a237e 90%)",
                color: "white",
            }}
        >
            <Container>
                <FadeInOnScroll>
                    <Typography
                        variant="h4"
                        component="h2"
                        align="center"
                        fontWeight="bold"
                        gutterBottom
                    >
                        Meet the Mentor
                    </Typography>
                </FadeInOnScroll>
                <Grid container spacing={6} sx={{ mt: 4 }} alignItems="center">
                    {/* --- Image Column with Hover Effect --- */}
                    <Grid
                        size={{xs: 12, md: 5}}
                    >
                        <FadeInOnScroll>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "fit-content",
                                    mx: "auto",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "-15px",
                                        left: "-15px",
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
                                        maxWidth: "350px",
                                        display: "block",
                                        borderRadius: "12px",
                                        boxShadow:
                                            "0 10px 30px rgba(0,0,0,0.3)",
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                />
                            </Box>
                        </FadeInOnScroll>
                    </Grid>
                    {/* --- Content Column with Hover Effect --- */}
                    <Grid
                        size={{xs: 12, md: 7}}
                    >
                        <FadeInOnScroll>
                            <Box sx={{ p: { xs: 0, md: 2 } }}>
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    fontWeight="bold"
                                >
                                    Navin Shaw
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ color: "#bdbdbd", mb: 2 }}
                                    gutterBottom
                                >
                                    Founder & Lead Instructor – Self-Craft
                                    Skills
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ my: 2, color: "#e0e0e0" }}
                                >
                                    Navin is an educator, content creator, and
                                    entrepreneur, officially selected to attend
                                    the National Creator Award 2024 by the
                                    Government of India. With over 3 years of
                                    experience in YouTube growth, online
                                    business, and productivity-driven learning,
                                    he founded Self-Craft Skills to help
                                    learners gain the practical skills and
                                    growth mindset often missing in academics.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ my: 2, color: "#e0e0e0" }}
                                >
                                    Navin firmly believes that learning is a
                                    lifelong journey. Once a learner, always a
                                    learner — the key is to grow by learning
                                    from every experience.
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
                                        sx={{ color: "#f5f5f5" }}
                                    >
                                        “To empower you with future-ready skills
                                        that truly craft your life.”
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
                            </Box>
                        </FadeInOnScroll>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Instructor;
