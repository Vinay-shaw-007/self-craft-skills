// src/components/BonusSection.tsx
import { Box, Container, Typography, Paper, Grid, Chip } from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

const BonusSection = () => {
    return (
        <Box
            sx={{
                py: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: "24px",
                            background:
                                "linear-gradient(135deg, #fffdf2 0%, #ffffff 100%)",
                            border: "1px solid #f1e8d8",
                            transition:
                                "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 16px 32px rgba(15, 23, 42, 0.1)",
                            },
                        }}
                    >
                        <Grid container alignItems="center" sx={{ p: { xs: 3, md: 5 } }}>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Chip
                                    label="EXCLUSIVE BONUS"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,
                                        color: "#fff",
                                        background:
                                            "linear-gradient(45deg, #f59e0b 20%, #f97316 100%)",
                                    }}
                                />
                                <Typography
                                    variant="h3"
                                    fontWeight={700}
                                    gutterBottom
                                    sx={{ color: "#111827" }}
                                >
                                    1000+ Ready-to-Use Prompts
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="text.secondary"
                                    sx={{ mb: 1, lineHeight: 1.6 }}
                                >
                                    Unlock your creativity and boost productivity
                                    with our curated library, included for free.
                                </Typography>
                                <Typography
                                    variant="h5"
                                    fontWeight={700}
                                    sx={{ mt: 2, color: "#111827" }}
                                >
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#9e9e9e",
                                            marginRight: "8px",
                                        }}
                                    >
                                        {"\u20B94999"}
                                    </span>
                                    <span>Free!</span>
                                </Typography>
                            </Grid>

                            <Grid
                                size={{ xs: 12, md: 5 }}
                                sx={{
                                    textAlign: "center",
                                    mt: { xs: 4, md: 0 },
                                }}
                            >
                                <AutoAwesomeMotionIcon
                                    sx={{
                                        fontSize: { xs: 140, md: 180 },
                                        color: "#facc15",
                                        opacity: 0.85,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default BonusSection;
