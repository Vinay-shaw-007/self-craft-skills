import {
    Box, Button, Chip, Container, Grid, Stack, Typography,
} from "@mui/material";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";
import AboutImage from "../assets/Aboutimg.svg";

const valueCards = [
    {
        title: "Structured learning",
        description: "Clear roadmaps, weekly direction, and lessons that move in an intentional order.",
        icon: <AutoStoriesRoundedIcon sx={{ fontSize: 24 }} />,
        color: "#6C5CE7",
        bg: "#f3f1ff",
    },
    {
        title: "Live doubt solving",
        description: "Sessions stay interactive so learners can ask, clarify, and apply concepts in real time.",
        icon: <ForumRoundedIcon sx={{ fontSize: 24 }} />,
        color: "#0984E3",
        bg: "#e8f4fd",
    },
    {
        title: "Practical execution",
        description: "Assignments, examples, and project work are designed to build usable skills quickly.",
        icon: <InsightsRoundedIcon sx={{ fontSize: 24 }} />,
        color: "#E17055",
        bg: "#fef0ec",
    },
    {
        title: "Proof of learning",
        description: "Completion certificates and portfolio-ready work help learners show real progress.",
        icon: <WorkspacePremiumRoundedIcon sx={{ fontSize: 24 }} />,
        color: "#00B894",
        bg: "#e6f9f3",
    },
];

const About = () => {
    return (
        <Box sx={{ py: { xs: 10, md: 14 } }}>
            <Container maxWidth="lg">
                {/* Top section: image + text */}
                <FadeInOnScroll>
                    <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box sx={{
                                position: "relative",
                                borderRadius: "24px",
                                overflow: "hidden",
                                background: "#f5f5f5",
                                border: "1px solid rgba(0,0,0,0.06)",
                            }}>
                                <Box component="img" src={AboutImage}
                                    alt="Self Craft Skills learning experience"
                                    sx={{ width: "100%", display: "block" }}
                                />
                                {/* Overlay badge */}
                                <Box sx={{
                                    position: "absolute",
                                    bottom: 16, left: 16,
                                    px: 2, py: 1,
                                    borderRadius: "12px",
                                    background: "rgba(0,0,0,0.7)",
                                    backdropFilter: "blur(10px)",
                                    color: "#fff",
                                    display: "flex", alignItems: "center", gap: 1,
                                }}>
                                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#00B894" }} />
                                    <Typography sx={{ fontSize: "0.78rem", fontWeight: 600 }}>
                                        Live cohorts running
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 7 }}>
                            <Stack spacing={2.5} sx={{ textAlign: { xs: "center", md: "left" } }}>
                                <Chip label="Why Learners Choose Us" sx={{
                                    alignSelf: { xs: "center", md: "flex-start" },
                                    backgroundColor: "#f3f1ff",
                                    color: "#6C5CE7",
                                    fontWeight: 600,
                                    borderRadius: "8px",
                                    border: "1px solid rgba(108, 92, 231, 0.15)",
                                }} />

                                <Typography variant="h2" sx={{
                                    fontSize: { xs: "2rem", md: "2.8rem", lg: "3.2rem" },
                                    color: "#111",
                                }}>
                                    A more modern learning experience than random tutorials.
                                </Typography>

                                <Typography sx={{
                                    color: "#666",
                                    fontSize: { xs: "1rem", md: "1.08rem" },
                                    lineHeight: 1.8,
                                    maxWidth: 600,
                                    mx: { xs: "auto", md: 0 },
                                }}>
                                    Self Craft Skills is built for people who want more
                                    than scattered information. Programs are shaped like
                                    guided learning journeys, with live teaching,
                                    practical outcomes, and a clear path from lesson to execution.
                                </Typography>

                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap
                                    justifyContent={{ xs: "center", md: "flex-start" }}>
                                    {["Clear weekly progression", "Assignments that build confidence", "Community and support access"].map((t) => (
                                        <Box key={t} sx={{
                                            px: 1.5, py: 0.6,
                                            borderRadius: "8px",
                                            border: "1px solid rgba(0,0,0,0.06)",
                                            background: "#f5f5f5",
                                            fontSize: "0.84rem",
                                            color: "#444",
                                            fontWeight: 500,
                                        }}>{t}</Box>
                                    ))}
                                </Stack>

                                <Box>
                                    <Button component={RouterLink} to="/courses"
                                        endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                        sx={{
                                            px: 3, py: 1.2,
                                            borderRadius: "12px",
                                            color: "#111",
                                            border: "1px solid rgba(0,0,0,0.12)",
                                            fontWeight: 600,
                                            "&:hover": { background: "#f5f5f5" },
                                        }}>
                                        Browse current programs
                                    </Button>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </FadeInOnScroll>

                {/* Bento value cards */}
                <Box sx={{
                    mt: { xs: 8, md: 10 },
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
                    gap: 2,
                }}>
                    {valueCards.map((card, i) => (
                        <FadeInOnScroll key={card.title}>
                            <Box sx={{
                                p: 3,
                                borderRadius: "20px",
                                border: "1px solid rgba(0,0,0,0.06)",
                                background: "#fff",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                cursor: "default",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: `0 20px 40px ${card.color}15`,
                                    borderColor: `${card.color}25`,
                                },
                                // First card spans 2 rows on desktop
                                ...(i === 0 ? { gridRow: { md: "span 1" } } : {}),
                            }}>
                                <Box sx={{
                                    width: 48, height: 48,
                                    borderRadius: "14px",
                                    display: "grid", placeItems: "center",
                                    color: card.color,
                                    backgroundColor: card.bg,
                                    mb: 2,
                                }}>
                                    {card.icon}
                                </Box>
                                <Typography sx={{
                                    fontFamily: '"Space Grotesk"',
                                    fontWeight: 600,
                                    fontSize: "1.05rem",
                                    color: "#111",
                                    mb: 1,
                                }}>
                                    {card.title}
                                </Typography>
                                <Typography sx={{
                                    color: "#666",
                                    lineHeight: 1.65,
                                    fontSize: "0.88rem",
                                }}>
                                    {card.description}
                                </Typography>
                            </Box>
                        </FadeInOnScroll>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default About;
