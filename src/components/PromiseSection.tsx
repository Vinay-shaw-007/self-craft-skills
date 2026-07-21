// src/components/PromiseSection.tsx
import { Box, Container, Stack, Typography } from "@mui/material";
import AllInclusiveRoundedIcon from "@mui/icons-material/AllInclusiveRounded";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import EventRepeatRoundedIcon from "@mui/icons-material/EventRepeatRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import FadeInOnScroll from "./FadeInOnScroll";
import { colors } from "../theme/colors";

const promises = [
    {
        title: "One Subscription. Every Course.",
        description: "Pay once a month and unlock the entire course library — no separate purchases, ever.",
        icon: <AllInclusiveRoundedIcon sx={{ fontSize: 26 }} />,
    },
    {
        title: "No Upsells. No Surprises.",
        description: "What you see is what you pay. No hidden fees, no surprise add-ons after you join.",
        icon: <BlockRoundedIcon sx={{ fontSize: 26 }} />,
    },
    {
        title: "Cancel Anytime. No Lock-in.",
        description: "It's a monthly plan, not a contract. Cancel whenever you like from your account page.",
        icon: <EventRepeatRoundedIcon sx={{ fontSize: 26 }} />,
    },
];

const PromiseSection = () => {
    return (
        <Box sx={{
            py: { xs: 9, md: 12 },
            background: `linear-gradient(180deg, ${colors.indigoDeeper}, ${colors.indigoDeep})`,
            color: "#fff",
        }}>
            <Container maxWidth="md">
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
                        <Stack direction="row" spacing={0.8} alignItems="center" justifyContent="center" sx={{
                            display: "inline-flex", px: 2, py: 0.7, mb: 2.5,
                            borderRadius: "999px",
                            border: "1px solid rgba(255,255,255,0.15)",
                            background: "rgba(255,255,255,0.06)",
                        }}>
                            <VerifiedRoundedIcon sx={{ fontSize: 16, color: colors.lavender }} />
                            <Typography sx={{ fontSize: "0.78rem", fontWeight: 700 }}>Straightforward pricing</Typography>
                        </Stack>
                        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, lineHeight: 1.15 }}>
                            The{" "}
                            <Box component="span" sx={{ color: colors.lavender }}>Self Craft Skills</Box>{" "}
                            Promise.
                        </Typography>
                    </Box>
                </FadeInOnScroll>

                <Stack spacing={2}>
                    {promises.map((item) => (
                        <FadeInOnScroll key={item.title}>
                            <Stack direction="row" spacing={2.5} alignItems="flex-start" sx={{
                                p: { xs: 2.5, md: 3 },
                                borderRadius: "20px",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                            }}>
                                <Box sx={{
                                    width: 48, height: 48, flexShrink: 0,
                                    borderRadius: "14px",
                                    display: "grid", placeItems: "center",
                                    background: "rgba(255,255,255,0.08)",
                                    color: colors.lavender,
                                }}>
                                    {item.icon}
                                </Box>
                                <Box>
                                    <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: "1.05rem" }}>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ mt: 0.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontSize: "0.92rem" }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Stack>
                        </FadeInOnScroll>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default PromiseSection;
