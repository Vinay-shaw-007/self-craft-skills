// src/components/Courses.tsx
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import { Link as RouterLink } from "react-router-dom";
import { coursesData } from "./coursesData";
import FadeInOnScroll from "./FadeInOnScroll";
import { colors } from "../theme/colors";

const Courses = () => {
    return (
        <Box sx={{ py: { xs: 9, md: 12 }, background: "#F7F7FB" }}>
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
                        <Typography sx={{
                            fontSize: "0.72rem", fontWeight: 700,
                            letterSpacing: "0.14em", textTransform: "uppercase",
                            color: colors.indigo, mb: 1.5,
                        }}>
                            Catalog
                        </Typography>
                        <Typography variant="h2" sx={{ fontSize: { xs: "2.1rem", md: "3rem" }, lineHeight: 1.1 }}>
                            <Box component="span" sx={{ color: colors.indigo }}>Explore</Box>{" "}
                            <Box component="span" sx={{ color: colors.ink }}>the courses.</Box>
                        </Typography>
                    </Box>
                </FadeInOnScroll>

                <Grid container spacing={2.5}>
                    {coursesData.map((course) => {
                        const isOpen = course.status === "Open for Enrollment";

                        return (
                            <Grid key={course.id} size={{ xs: 12, md: 4 }}>
                                <FadeInOnScroll>
                                    <Box
                                        component={RouterLink}
                                        to={isOpen ? `/courses/${course.id}` : "/courses"}
                                        sx={{
                                            display: "block",
                                            position: "relative",
                                            height: 320,
                                            borderRadius: "24px",
                                            overflow: "hidden",
                                            textDecoration: "none",
                                            cursor: isOpen ? "pointer" : "default",
                                            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                            "&:hover": isOpen ? { transform: "translateY(-6px)" } : undefined,
                                        }}
                                    >
                                        <Box component="img" src={course.image} alt={course.title}
                                            sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                                        <Box sx={{
                                            position: "absolute", inset: 0,
                                            background: `linear-gradient(180deg, rgba(22,15,61,0.1) 0%, rgba(22,15,61,0.9) 85%)`,
                                        }} />

                                        <Box sx={{
                                            position: "absolute", top: 14, left: 14,
                                            px: 1.4, py: 0.5,
                                            borderRadius: "999px",
                                            background: isOpen ? colors.indigo : "rgba(255,255,255,0.15)",
                                            backdropFilter: "blur(8px)",
                                            color: "#fff",
                                            fontSize: "0.72rem", fontWeight: 700,
                                        }}>
                                            {isOpen ? "Available now" : "Coming soon"}
                                        </Box>

                                        <Box sx={{
                                            position: "absolute", bottom: 0, left: 0, right: 0,
                                            p: 2.5,
                                        }}>
                                            <Typography sx={{
                                                fontFamily: '"Space Grotesk"',
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                lineHeight: 1.15,
                                                color: "#fff",
                                                textTransform: "uppercase",
                                            }}>
                                                {course.title}
                                            </Typography>
                                            {course.details.duration && (
                                                <Stack direction="row" spacing={0.7} alignItems="center" sx={{ mt: 1 }}>
                                                    <ScheduleRoundedIcon sx={{ fontSize: 15, color: "rgba(255,255,255,0.6)" }} />
                                                    <Typography sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>
                                                        {course.details.duration}
                                                    </Typography>
                                                </Stack>
                                            )}
                                        </Box>
                                    </Box>
                                </FadeInOnScroll>
                            </Grid>
                        );
                    })}
                </Grid>

                <Box sx={{ textAlign: "center", mt: 5 }}>
                    <Button component={RouterLink} to="/courses"
                        endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                        sx={{
                            px: 3, py: 1.2,
                            borderRadius: "999px",
                            color: colors.ink, fontWeight: 700,
                            fontSize: "0.9rem",
                            border: "1px solid rgba(18,19,43,0.14)",
                            "&:hover": { background: "rgba(18,19,43,0.04)" },
                        }}>
                        View all courses
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Courses;
