// src/components/CategoriesSection.tsx
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import StairsRoundedIcon from "@mui/icons-material/StairsRounded";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";
import { colors } from "../theme/colors";

const topics = [
    { label: "AI & Productivity", icon: <AutoAwesomeRoundedIcon sx={{ fontSize: 18 }} /> },
    { label: "Prompt Engineering", icon: <ChatBubbleOutlineRoundedIcon sx={{ fontSize: 18 }} /> },
    { label: "Content Creation", icon: <VideoLibraryRoundedIcon sx={{ fontSize: 18 }} /> },
    { label: "Personal Branding", icon: <CampaignRoundedIcon sx={{ fontSize: 18 }} /> },
    { label: "Communication", icon: <RecordVoiceOverRoundedIcon sx={{ fontSize: 18 }} /> },
    { label: "Public Speaking", icon: <ForumRoundedIcon sx={{ fontSize: 18 }} /> },
    { label: "Career Growth", icon: <TrendingUpRoundedIcon sx={{ fontSize: 18 }} /> },
    { label: "Beginner Friendly", icon: <StairsRoundedIcon sx={{ fontSize: 18 }} /> },
];

const CategoriesSection = () => {
    return (
        <Box sx={{ py: { xs: 9, md: 12 }, background: "#F7F7FB" }}>
            <Container maxWidth="md">
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>
                            <Box component="span" sx={{ color: colors.indigo }}>Browse</Box>{" "}
                            <Box component="span" sx={{ color: colors.ink }}>by topic.</Box>
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap justifyContent="center" sx={{ mb: 5 }}>
                        {topics.map((t) => (
                            <Stack key={t.label} direction="row" spacing={0.8} alignItems="center" sx={{
                                px: 2, py: 1.1,
                                borderRadius: "999px",
                                background: "#fff",
                                border: "1px solid rgba(18,19,43,0.08)",
                                color: colors.ink,
                            }}>
                                <Box sx={{ color: colors.indigo, display: "flex" }}>{t.icon}</Box>
                                <Typography sx={{ fontSize: "0.88rem", fontWeight: 600 }}>{t.label}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                </FadeInOnScroll>

                <FadeInOnScroll>
                    <Box sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: "24px",
                        background: `linear-gradient(135deg, ${colors.indigoDeep}, ${colors.indigo})`,
                        color: "#fff",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { sm: "center" },
                        justifyContent: "space-between",
                        gap: 2.5,
                        textAlign: { xs: "center", sm: "left" },
                    }}>
                        <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: { xs: "1.2rem", md: "1.4rem" } }}>
                            Unlock every topic with a single membership.
                        </Typography>
                        <Button component={RouterLink} to="/pricing"
                            sx={{
                                px: 3, py: 1.2, borderRadius: "999px",
                                color: colors.indigoDeep, fontWeight: 700,
                                background: "#fff", whiteSpace: "nowrap",
                                "&:hover": { background: "#f0f0f0" },
                            }}>
                            Become a member
                        </Button>
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default CategoriesSection;
