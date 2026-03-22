import { Box, Container, Typography } from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import BoltIcon from "@mui/icons-material/Bolt";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const stats = [
    { metric: "4 Weeks", label: "Course Duration", icon: <AccessTimeIcon sx={{ fontSize: 24 }} />, color: "#6C5CE7", bg: "#f3f1ff" },
    { metric: "30 Seats", label: "Per Cohort", icon: <PeopleIcon sx={{ fontSize: 24 }} />, color: "#00B894", bg: "#e6f9f3" },
    { metric: "1000+", label: "Bonus Prompts", icon: <BoltIcon sx={{ fontSize: 24 }} />, color: "#0984E3", bg: "#e8f4fd" },
    { metric: "Live", label: "Q&A Sessions", icon: <LiveTvIcon sx={{ fontSize: 24 }} />, color: "#FD79A8", bg: "#fce4ec" },
];

const StatsBanner = () => {
    return (
        <Box sx={{ py: { xs: 6, md: 8 } }}>
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
                        gap: 2,
                    }}>
                        {stats.map((stat) => (
                            <Box key={stat.label} sx={{
                                p: 3,
                                textAlign: "center",
                                borderRadius: "20px",
                                border: "1px solid rgba(0,0,0,0.06)",
                                background: "#fff",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: `0 16px 40px ${stat.color}12`,
                                    borderColor: `${stat.color}20`,
                                },
                            }}>
                                <Box sx={{
                                    width: 52, height: 52,
                                    borderRadius: "14px",
                                    display: "grid", placeItems: "center",
                                    backgroundColor: stat.bg,
                                    color: stat.color,
                                    mx: "auto", mb: 2,
                                }}>
                                    {stat.icon}
                                </Box>
                                <Typography sx={{
                                    fontFamily: '"Space Grotesk"',
                                    fontWeight: 800,
                                    fontSize: { xs: "1.4rem", md: "1.6rem" },
                                    color: "#111",
                                }}>
                                    {stat.metric}
                                </Typography>
                                <Typography sx={{
                                    color: "#999", mt: 0.3,
                                    fontSize: "0.84rem",
                                }}>
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default StatsBanner;
