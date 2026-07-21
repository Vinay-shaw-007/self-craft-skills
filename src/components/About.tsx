// src/components/About.tsx
import { Box, Container, Grid, Typography } from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import AllInclusiveRoundedIcon from "@mui/icons-material/AllInclusiveRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import { colors } from "../theme/colors";

const overviewCards = [
    {
        title: "Every course, one plan",
        description: "New courses added over time across AI, content creation, and communication — all included in your membership.",
        icon: <AllInclusiveRoundedIcon sx={{ fontSize: 36 }} />,
    },
    {
        title: "Learn at your pace",
        description: "Recorded lessons you can rewatch anytime, structured into clear weekly paths from beginner to confident.",
        icon: <PlayCircleRoundedIcon sx={{ fontSize: 36 }} />,
    },
    {
        title: "Real mentor support",
        description: "Live Q&A sessions and a learner community to keep you unstuck when you're working through a lesson.",
        icon: <ForumRoundedIcon sx={{ fontSize: 36 }} />,
    },
];

const About = () => {
    return (
        <Box sx={{ py: { xs: 9, md: 12 } }}>
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
                        <Typography sx={{
                            fontSize: "0.72rem", fontWeight: 700,
                            letterSpacing: "0.14em", textTransform: "uppercase",
                            color: colors.indigo, mb: 1.5,
                        }}>
                            The membership
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: { xs: "2.1rem", md: "3rem" },
                            lineHeight: 1.1,
                        }}>
                            <Box component="span" sx={{ color: colors.indigo }}>One subscription.</Box>{" "}
                            <Box component="span" sx={{ color: colors.ink }}>Every course included.</Box>
                        </Typography>
                    </Box>
                </FadeInOnScroll>

                <Grid container spacing={3}>
                    {overviewCards.map((card) => (
                        <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                            <FadeInOnScroll>
                                <Box sx={{
                                    p: 3.5,
                                    height: "100%",
                                    borderRadius: "24px",
                                    background: "#fff",
                                    border: "1px solid rgba(18,19,43,0.06)",
                                }}>
                                    <Box sx={{
                                        width: 68, height: 68,
                                        borderRadius: "18px",
                                        display: "grid", placeItems: "center",
                                        background: colors.lavenderSoft,
                                        color: colors.indigo,
                                        mb: 2.5,
                                    }}>
                                        {card.icon}
                                    </Box>
                                    <Typography sx={{
                                        fontFamily: '"Space Grotesk"',
                                        fontWeight: 700,
                                        fontSize: "1.15rem",
                                        color: colors.ink,
                                    }}>
                                        {card.title}
                                    </Typography>
                                    <Typography sx={{
                                        mt: 1, color: colors.slate,
                                        lineHeight: 1.7, fontSize: "0.92rem",
                                    }}>
                                        {card.description}
                                    </Typography>
                                </Box>
                            </FadeInOnScroll>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
