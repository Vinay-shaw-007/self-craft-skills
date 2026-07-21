// src/components/PricingTeaser.tsx
// A per-day price breakdown, in the spirit of "what would you pay to invest
// in yourself" anchoring copy — but built from our real monthly price.
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";
import { colors } from "../theme/colors";
import { MONTHLY_PRICE_DISPLAY, MONTHLY_PRICE_RUPEES } from "../config/pricing";

const perDay = Math.round(MONTHLY_PRICE_RUPEES / 30);

const anchors = [
    { price: "₹100", reaction: "That's more than we charge" },
    { price: "₹50", reaction: "Still more than we charge" },
    { price: "₹30", reaction: "Getting closer..." },
];

const PricingTeaser = () => {
    return (
        <Box sx={{ py: { xs: 9, md: 12 } }}>
            <Container maxWidth="sm">
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: 5 }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" }, lineHeight: 1.2 }}>
                            What would you{" "}
                            <Box component="span" sx={{ color: colors.indigo }}>pay per day</Box>{" "}
                            to keep learning?
                        </Typography>
                    </Box>
                </FadeInOnScroll>

                <Stack spacing={1.2}>
                    {anchors.map((a) => (
                        <FadeInOnScroll key={a.price}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{
                                p: 2, borderRadius: "16px",
                                background: "#F7F7FB",
                            }}>
                                <Typography sx={{ color: colors.slate, fontSize: "0.95rem" }}>
                                    How about <strong style={{ color: colors.ink }}>{a.price}/day</strong>?
                                </Typography>
                                <Box sx={{
                                    px: 1.6, py: 0.6, borderRadius: "999px",
                                    background: "#fff", border: "1px solid rgba(18,19,43,0.1)",
                                    fontSize: "0.82rem", fontWeight: 600, color: colors.slate,
                                }}>
                                    {a.reaction}
                                </Box>
                            </Stack>
                        </FadeInOnScroll>
                    ))}

                    <FadeInOnScroll>
                        <Box sx={{
                            mt: 1.5, p: { xs: 2.5, md: 3 },
                            borderRadius: "20px",
                            background: `linear-gradient(135deg, ${colors.indigo}, ${colors.indigoDark})`,
                            color: "#fff",
                        }}>
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }} justifyContent="space-between">
                                <Box>
                                    <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 800, fontSize: "1.6rem" }}>
                                        Just ₹{perDay}/day
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", mt: 0.3 }}>
                                        {MONTHLY_PRICE_DISPLAY}/month, billed monthly — cancel anytime.
                                    </Typography>
                                </Box>
                                <Button component={RouterLink} to="/pricing"
                                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                    sx={{
                                        px: 3, py: 1.2, borderRadius: "999px",
                                        color: colors.indigoDeep, fontWeight: 700,
                                        background: "#fff", whiteSpace: "nowrap",
                                        "&:hover": { background: "#f0f0f0" },
                                    }}>
                                    Let's do it
                                </Button>
                            </Stack>
                        </Box>
                    </FadeInOnScroll>
                </Stack>
            </Container>
        </Box>
    );
};

export default PricingTeaser;
