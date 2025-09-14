// src/components/BonusSection.tsx
import { Box, Container, Typography, Paper, Grid, Chip } from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion"; // A great icon for prompts

const BonusSection = () => {
    return (
        <Box
            sx={{
                py: { xs: 6, md: 8 },
            //     backgroundColor: "#ffffffff",
            //     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23dbe9f6' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
        >
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    {/* 1. The main card container */}
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: "24px",
                            background:
                                "linear-gradient(135deg, #fffbe6 0%, #ffffff 100%)", // Subtle yellow-to-white gradient
                            border: "1px solid #eee",
                            transition:
                                "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-8px)",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                            },
                        }}
                    >
                        <Grid
                            container
                            alignItems="center"
                            sx={{ p: { xs: 3, md: 5 } }}
                        >
                            {/* 2. Left Column: Text Content */}
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Chip
                                    label="EXCLUSIVE BONUS"
                                    color="warning"
                                    sx={{ fontWeight: "bold", mb: 2 }}
                                />
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    1000+ Ready-to-Use Prompts
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="text.secondary"
                                    sx={{ mb: 1 }}
                                >
                                    Unlock your creativity and boost
                                    productivity with our curated library,
                                    included for free.
                                </Typography>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    sx={{ mt: 2 }}
                                >
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#9e9e9e",
                                            marginRight: "8px",
                                        }}
                                    >
                                        ₹4999
                                    </span>
                                    <span>Free!</span>
                                </Typography>
                            </Grid>
                            {/* 3. Right Column: Visual Icon */}
                            <Grid
                                size={{ xs: 12, md: 5 }}
                                sx={{
                                    textAlign: "center",
                                    mt: { xs: 4, md: 0 },
                                }}
                            >
                                <AutoAwesomeMotionIcon
                                    sx={{
                                        fontSize: { xs: 150, md: 200 },
                                        color: "#facc15",
                                        opacity: 0.8,
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
