import {
    Box, Button, Chip, Container, Grid, Stack, Typography,
} from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";
import { coursesData } from "./coursesData";
import FadeInOnScroll from "./FadeInOnScroll";

const getFeatureIcon = (featureText: string) => {
    if (featureText.includes("Live")) return <LiveTvIcon sx={{ color: "#0984E3", fontSize: 16 }} />;
    if (featureText.includes("Beginner")) return <PersonOutlineIcon sx={{ color: "#00B894", fontSize: 16 }} />;
    if (featureText.includes("Q&A")) return <QuestionAnswerIcon sx={{ color: "#6C5CE7", fontSize: 16 }} />;
    return <WorkspacePremiumIcon sx={{ color: "#FDCB6E", fontSize: 16 }} />;
};

const Courses = () => {
    return (
        <Box sx={{ py: { xs: 10, md: 14 } }}>
            <Container maxWidth="lg">
                {/* Section heading */}
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
                        <Typography variant="h2" sx={{
                            fontSize: { xs: "2rem", md: "2.8rem" },
                            color: "#111",
                            maxWidth: 700,
                            mx: "auto",
                        }}>
                            Choose the learning path that matches your next goal.
                        </Typography>
                    </Box>

                    {/* Enrollment banner */}
                    <Box sx={{
                        maxWidth: 860,
                        mx: "auto",
                        mb: { xs: 5, md: 6 },
                        p: 0.6,
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, #6C5CE7, #0984E3, #00B894)",
                    }}>
                        <Box sx={{
                            borderRadius: "17px",
                            px: { xs: 2.5, md: 3.5 },
                            py: { xs: 2, md: 2.5 },
                            background: "rgba(0,0,0,0.85)",
                            backdropFilter: "blur(20px)",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { xs: "flex-start", md: "center" },
                            justifyContent: "space-between",
                            gap: 2,
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: "rgba(255,255,255,0.5)",
                                    fontWeight: 600, fontSize: "0.72rem",
                                    letterSpacing: "0.1em", textTransform: "uppercase",
                                }}>
                                    Fresh batch starting soon
                                </Typography>
                                <Typography sx={{
                                    mt: 0.5, color: "#fff", fontWeight: 600,
                                    fontSize: { xs: "1rem", md: "1.15rem" },
                                }}>
                                    Reserve your place early and join the next live cohort.
                                </Typography>
                            </Box>
                            <Box sx={{
                                px: 2, py: 0.8, borderRadius: "10px",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "rgba(255,255,255,0.7)",
                                fontWeight: 600, fontSize: "0.84rem",
                                whiteSpace: "nowrap",
                            }}>
                                Seats are limited
                            </Box>
                        </Box>
                    </Box>
                </FadeInOnScroll>

                {/* Course cards */}
                <Grid container spacing={2.5}>
                    {coursesData.map((course) => {
                        const isOpen = course.status === "Open for Enrollment";
                        const featureList = course.details.keyFeatures?.slice(0, 4) ?? [];

                        return (
                            <Grid key={course.id} size={{ xs: 12, md: 4 }}>
                                <FadeInOnScroll>
                                    <Box sx={{
                                        height: "100%",
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        border: isOpen ? "1px solid rgba(108, 92, 231, 0.2)" : "1px solid rgba(0,0,0,0.06)",
                                        background: "#fff",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: isOpen
                                                ? "0 20px 48px rgba(108, 92, 231, 0.12)"
                                                : "0 20px 48px rgba(0,0,0,0.06)",
                                        },
                                    }}>
                                        {/* Image */}
                                        <Box sx={{
                                            position: "relative",
                                            overflow: "hidden",
                                        }}>
                                            <Box component="img" src={course.image} alt={course.title}
                                                sx={{
                                                    width: "100%", height: 220,
                                                    objectFit: "cover", display: "block",
                                                }}
                                            />
                                            {isOpen && (
                                                <Box sx={{
                                                    position: "absolute", top: 12, left: 12,
                                                    px: 1.2, py: 0.4,
                                                    borderRadius: "8px",
                                                    background: "rgba(0,0,0,0.65)",
                                                    backdropFilter: "blur(8px)",
                                                    color: "#fff",
                                                    fontSize: "0.72rem",
                                                    fontWeight: 600,
                                                    display: "flex", alignItems: "center", gap: 0.5,
                                                }}>
                                                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#00B894" }} />
                                                    Live
                                                </Box>
                                            )}
                                        </Box>

                                        {/* Content */}
                                        <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 1.5 }}>
                                                <Chip label={course.status} size="small" sx={{
                                                    borderRadius: "6px",
                                                    backgroundColor: isOpen ? "rgba(108, 92, 231, 0.08)" : "#f5f5f5",
                                                    color: isOpen ? "#6C5CE7" : "#999",
                                                    fontWeight: 600,
                                                    border: isOpen ? "1px solid rgba(108, 92, 231, 0.15)" : "none",
                                                }} />
                                                {course.details.duration && (
                                                    <Chip label={course.details.duration} size="small" sx={{
                                                        borderRadius: "6px", backgroundColor: "#f5f5f5",
                                                        color: "#666", fontWeight: 500,
                                                    }} />
                                                )}
                                            </Stack>

                                            <Typography sx={{
                                                fontFamily: '"Space Grotesk"',
                                                fontWeight: 700,
                                                fontSize: "1.15rem",
                                                color: "#111",
                                                mb: 1,
                                                minHeight: 56,
                                                display: "flex",
                                                alignItems: "center",
                                            }}>
                                                {course.title}
                                            </Typography>

                                            <Typography sx={{
                                                color: "#666", lineHeight: 1.7,
                                                fontSize: "0.88rem", mb: 2,
                                            }}>
                                                {course.details.summary}
                                            </Typography>

                                            <Box sx={{ flexGrow: 1 }}>
                                                {featureList.length > 0 ? (
                                                    <Stack spacing={0.8}>
                                                        {featureList.map((f) => (
                                                            <Stack key={f} direction="row" spacing={0.8} alignItems="center">
                                                                {getFeatureIcon(f)}
                                                                <Typography sx={{ color: "#444", fontSize: "0.84rem" }}>
                                                                    {f}
                                                                </Typography>
                                                            </Stack>
                                                        ))}
                                                    </Stack>
                                                ) : (
                                                    <Box sx={{
                                                        p: 1.5, borderRadius: "12px",
                                                        background: "#f8f8f8",
                                                    }}>
                                                        <Typography sx={{ color: "#999", fontSize: "0.86rem" }}>
                                                            Upcoming details and syllabus will be shared soon.
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>

                                            <Button
                                                component={RouterLink}
                                                to={isOpen ? `/courses/${course.id}` : "/courses"}
                                                disabled={!isOpen}
                                                fullWidth
                                                endIcon={isOpen ? <ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} /> : undefined}
                                                sx={{
                                                    mt: 2.5, py: 1.2,
                                                    borderRadius: "12px",
                                                    fontWeight: 600,
                                                    fontSize: "0.9rem",
                                                    ...(isOpen ? {
                                                        color: "#fff",
                                                        background: "#111",
                                                        "&:hover": { background: "#222" },
                                                    } : {
                                                        color: "#999",
                                                        border: "1px solid rgba(0,0,0,0.06)",
                                                        background: "#fafafa",
                                                    }),
                                                }}>
                                                {isOpen ? "View full details" : "Coming soon"}
                                            </Button>
                                        </Box>
                                    </Box>
                                </FadeInOnScroll>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default Courses;
