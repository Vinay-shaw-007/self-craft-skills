import {
    Box, Button, Container, Divider, Grid, Link, Stack, Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const socialLinks = [
    { href: "https://www.facebook.com/share/1Ccous7Nsr/", icon: <FacebookIcon sx={{ fontSize: 18 }} />, label: "Facebook" },
    { href: "https://www.instagram.com/selfcraftskills?igsh=MTRmMTJqanU0NXp0YQ==", icon: <InstagramIcon sx={{ fontSize: 18 }} />, label: "Instagram" },
    { href: "https://wa.me/message/4NYE3ABSMTN5K1", icon: <WhatsAppIcon sx={{ fontSize: 18 }} />, label: "WhatsApp" },
    { href: "https://linkedin.com/company/selfcraftskills", icon: <LinkedInIcon sx={{ fontSize: 18 }} />, label: "LinkedIn" },
    { href: "https://www.youtube.com/@SelfCraftSkills/", icon: <YouTubeIcon sx={{ fontSize: 18 }} />, label: "YouTube" },
];

const linkSx = {
    color: "rgba(255,255,255,0.45)",
    fontSize: "0.86rem",
    transition: "color 0.2s",
    "&:hover": { color: "#fff" },
};

const Footer = () => {
    return (
        <Box sx={{
            position: "relative", overflow: "hidden",
            background: "#0a0a0a", color: "#fff",
            pt: { xs: 8, md: 10 }, pb: { xs: 4, md: 5 },
        }} className="noise-overlay">

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                {/* Support CTA card */}
                <Box id="support" sx={{
                    p: { xs: 3, md: 5 }, mb: { xs: 6, md: 8 },
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.03)",
                }}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography sx={{
                                fontSize: "0.72rem", fontWeight: 600,
                                letterSpacing: "0.12em", textTransform: "uppercase",
                                color: "rgba(255,255,255,0.3)",
                            }}>learner support</Typography>
                            <Typography variant="h3" sx={{
                                mt: 1, fontSize: { xs: "1.8rem", md: "2.4rem" },
                            }}>
                                Need help choosing the right course or plan?
                            </Typography>
                            <Typography sx={{
                                mt: 1.5, color: "rgba(255,255,255,0.4)",
                                maxWidth: 600, lineHeight: 1.7,
                            }}>
                                Reach out for guidance on the live cohort, payment
                                process, timing, or course fit. We keep the
                                conversation practical and learner-first.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Stack spacing={1.2} sx={{ alignItems: { xs: "stretch", md: "flex-end" } }}>
                                <Button href="mailto:selfcraftskills@gmail.com"
                                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                                    sx={{
                                        px: 3, py: 1.2, borderRadius: "12px",
                                        color: "#111", fontWeight: 600,
                                        background: "#fff",
                                        "&:hover": { background: "#f0f0f0" },
                                    }}>
                                    Email support
                                </Button>
                                <Button href="https://wa.me/message/4NYE3ABSMTN5K1"
                                    target="_blank" rel="noopener noreferrer"
                                    sx={{
                                        px: 3, py: 1.1, borderRadius: "12px",
                                        color: "rgba(255,255,255,0.6)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        "&:hover": { background: "rgba(255,255,255,0.04)", color: "#fff" },
                                    }}>
                                    Message on WhatsApp
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

                {/* Footer links grid */}
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack direction="row" spacing={1.2} alignItems="center">
                            <Box component="img" src={Logo} alt="Logo" sx={{ width: 40, height: 40 }} />
                            <Typography sx={{
                                fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: "1.05rem",
                            }}>Self Craft Skills</Typography>
                        </Stack>
                        <Typography sx={{
                            mt: 1.5, color: "rgba(255,255,255,0.35)",
                            maxWidth: 360, lineHeight: 1.7, fontSize: "0.88rem",
                        }}>
                            Learn skills that craft your life. Our mission is to empower you with practical, growth-driven skills that shape your future.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "0.86rem", mb: 1.5, color: "rgba(255,255,255,0.7)" }}>Explore</Typography>
                        <Stack spacing={1}>
                            <Link component={RouterLink} to="/" underline="hover" sx={linkSx}>Home</Link>
                            <Link component={RouterLink} to="/courses" underline="hover" sx={linkSx}>Programs</Link>
                            <Link component={RouterLink} to="/free-resources" underline="hover" sx={linkSx}>Free Resources</Link>
                            <Link component={RouterLink} to="/faq" underline="hover" sx={linkSx}>FAQs</Link>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "0.86rem", mb: 1.5, color: "rgba(255,255,255,0.7)" }}>Policies</Typography>
                        <Stack spacing={1}>
                            <Link component={RouterLink} to="/privacy-policy" underline="hover" sx={linkSx}>Privacy Policy</Link>
                            <Link component={RouterLink} to="/terms-and-conditions" underline="hover" sx={linkSx}>Terms & Conditions</Link>
                            <Link component={RouterLink} to="/refund-policy" underline="hover" sx={linkSx}>Refund Policy</Link>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "0.86rem", mb: 1.5, color: "rgba(255,255,255,0.7)" }}>Contact</Typography>
                        <Stack spacing={1}>
                            <Link href="mailto:selfcraftskills@gmail.com" underline="hover" sx={linkSx}>
                                selfcraftskills@gmail.com
                            </Link>
                            <Typography sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem" }}>
                                Live support available through email and WhatsApp.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.06)" }} />

                <Box sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "center" },
                    justifyContent: "space-between", gap: 2,
                }}>
                    <Typography sx={{ color: "rgba(255,255,255,0.25)", fontSize: "0.82rem" }}>
                        {"\u00A9"} {new Date().getFullYear()} Self Craft Skills. All rights reserved.
                    </Typography>
                    <Stack direction="row" spacing={0.8}>
                        {socialLinks.map((item) => (
                            <Link key={item.label} href={item.href}
                                target="_blank" rel="noopener noreferrer" aria-label={item.label}
                                sx={{
                                    width: 36, height: 36,
                                    borderRadius: "10px",
                                    display: "grid", placeItems: "center",
                                    color: "rgba(255,255,255,0.35)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        color: "#fff",
                                        background: "rgba(255,255,255,0.06)",
                                        transform: "translateY(-2px)",
                                    },
                                }}>
                                {item.icon}
                            </Link>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
