// src/components/ServicesTeaser.tsx
// Homepage pointer to the freelance side of the business. The site sells
// courses, so visitors have no reason to guess that done-for-you channel
// work exists — this band says it plainly and sends them to /services.
// It wears the YGM green rather than the site indigo: a separate surface
// for a separate brand, so it reads as "a different offering" rather
// than another membership pitch.
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";
import YgmLogoSrc from "../assets/YGM.png";
import { oneTimeServices, ygmPlans } from "../data/servicesData";
import { ygm } from "../theme/ygmColors";

const DOT_MASK = "radial-gradient(ellipse 80% 70% at 30% 40%, #000 20%, transparent 85%)";

/** What the done-for-you work actually covers, in the visitor's words. */
const offerings = [
    "Channel management",
    "Content strategy",
    "Thumbnails & branding",
    "Shorts & Reels",
];

const ServicesTeaser = () => {
    // Prices come from the catalogue so the teaser can't drift from /services.
    const from = ygmPlans[0].now;
    const auditPrice = oneTimeServices.find((s) => s.id === "audit")?.price;

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
            <Box sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3.5, md: 6 },
                borderRadius: "28px",
                background: `linear-gradient(135deg, ${ygm.forestDeep}, ${ygm.forest})`,
                color: "#fff",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1.2px, transparent 1.2px)",
                    backgroundSize: "22px 22px",
                    WebkitMaskImage: DOT_MASK,
                    maskImage: DOT_MASK,
                    pointerEvents: "none",
                },
            }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3.5, md: 5 }}
                    alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between"
                    sx={{ position: "relative", zIndex: 1 }}>

                    <Box sx={{ maxWidth: 580 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <Box sx={{
                                width: 44, height: 44, borderRadius: "22%",
                                overflow: "hidden", flexShrink: 0,
                                boxShadow: "0 10px 24px rgba(0,0,0,0.3)",
                            }}>
                                <Box component="img" src={YgmLogoSrc} alt=""
                                    sx={{ width: "100%", height: "100%", display: "block", transform: "scale(1.08)" }} />
                            </Box>
                            <Typography sx={{
                                fontSize: "0.72rem", fontWeight: 700,
                                letterSpacing: "0.12em", textTransform: "uppercase",
                                color: ygm.greenBright,
                            }}>
                                YGM — Your Growth Matters
                            </Typography>
                        </Stack>

                        <Typography variant="h3" sx={{
                            mt: 2, fontSize: { xs: "1.7rem", md: "2.3rem" }, lineHeight: 1.2,
                        }}>
                            Would you rather we{" "}
                            <Box component="span" sx={{ color: ygm.greenBright }}>ran it for you?</Box>
                        </Typography>
                        <Typography sx={{ mt: 1.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
                            Alongside the courses, we take on social media and YouTube growth
                            as a done-for-you service — uploads, SEO, thumbnails and strategy
                            handled, so you can stay on camera instead of in the dashboard.
                        </Typography>

                        <Stack direction="row" useFlexGap flexWrap="wrap" gap={1} sx={{ mt: 2.5 }}>
                            {offerings.map((label) => (
                                <Box key={label} sx={{
                                    px: 1.6, py: 0.6, borderRadius: "999px",
                                    fontSize: "0.8rem", fontWeight: 600,
                                    color: "rgba(255,255,255,0.85)",
                                    background: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                }}>
                                    {label}
                                </Box>
                            ))}
                        </Stack>
                    </Box>

                    <Stack spacing={1.2} sx={{
                        flexShrink: 0,
                        width: { xs: "100%", md: "auto" },
                        alignItems: { xs: "stretch", md: "flex-end" },
                    }}>
                        <Button component={RouterLink} to="/services"
                            endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                            sx={{
                                px: 3.5, py: 1.4, borderRadius: "999px",
                                fontWeight: 700, fontSize: "0.98rem",
                                color: ygm.forestDeep, background: "#fff",
                                whiteSpace: "nowrap",
                                "&:hover": { background: ygm.mint },
                            }}>
                            See services & pricing
                        </Button>
                        <Typography sx={{
                            fontSize: "0.82rem", color: "rgba(255,255,255,0.5)",
                            textAlign: { xs: "center", md: "right" },
                        }}>
                            Monthly plans from {from}{auditPrice ? ` · audits from ${auditPrice}` : ""}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
};

export default ServicesTeaser;
