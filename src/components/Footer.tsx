// src/components/Footer.tsx
import {
    Box,
    Container,
    Typography,
    Link,
    Grid,
    Stack,
    Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // 1. This import is crucial
import Logo from "../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(45deg, #1f2937 30%, #111827 90%)",
                color: "white",
                py: { xs: 6, md: 8 },
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    {/* Column 1: Brand Info */}
                    <Grid size={10}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <img
                                src={Logo}
                                alt="Self-Craft Skills Logo"
                                style={{ height: "50px" }}
                            />
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ ml: 2 }}
                            >
                                Self Craft Skills
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
                            Learn skills that craft your life. Our mission is to
                            empower you with practical, growth-driven skills
                            that shape your future.
                        </Typography>
                    </Grid>

                    {/* Column 2: Quick Links */}
                    <Grid size={6}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Explore
                        </Typography>
                        <Stack spacing={1}>
                            {/* 2. Each link must use component={RouterLink} and the 'to' prop */}
                            <Link
                                component={RouterLink}
                                to="/#hero"
                                color="inherit"
                                underline="hover"
                                variant="body2"
                                sx={{ color: "#bdbdbd" }}
                            >
                                Home
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/#about"
                                color="inherit"
                                underline="hover"
                                variant="body2"
                                sx={{ color: "#bdbdbd" }}
                            >
                                About
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/courses"
                                color="inherit"
                                underline="hover"
                                variant="body2"
                                sx={{ color: "#bdbdbd" }}
                            >
                                Courses
                            </Link>
                        </Stack>
                    </Grid>

                    {/* Column 3: More Links */}
                    <Grid size={6}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Information
                        </Typography>
                        <Stack spacing={1}>
                            <Link
                                component={RouterLink}
                                to="/courses#how-it-works"
                                color="inherit"
                                underline="hover"
                                variant="body2"
                                sx={{ color: "#bdbdbd" }}
                            >
                                How It Works
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/faq"
                                color="inherit"
                                underline="hover"
                                variant="body2"
                                sx={{ color: "#bdbdbd" }}
                            >
                                FAQs
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/refund-policy"
                                color="inherit"
                                underline="hover"
                                variant="body2"
                                sx={{ color: "#bdbdbd" }}
                            >
                                Refund Policy
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/terms-and-conditions"
                                color="inherit"
                                underline="hover"
                                variant="body2"
                                sx={{ color: "#bdbdbd" }}
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/privacy-policy"
                                color="inherit"
                                underline="hover"
                                variant="body2"
                                sx={{ color: "#bdbdbd" }}
                            >
                                Privacy Policy
                            </Link>
                        </Stack>
                    </Grid>

                    {/* Column 4: Contact */}
                    <Grid size={2}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Contact Us
                        </Typography>
                        <Link
                            href="mailto:support@selfcraftskills.com"
                            color="inherit"
                            underline="hover"
                            variant="body2"
                            sx={{ color: "#bdbdbd" }}
                        >
                            support@selfcraftskills.com
                        </Link>
                    </Grid>
                </Grid>

                <Divider
                    sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }}
                />

                {/* Bottom Bar: Copyright and Social Icons */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column-reverse", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
                        © {new Date().getFullYear()} Self-Craft Skills. All
                        Rights Reserved.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Link
                            href="https://www.facebook.com/share/1Ccous7Nsr/"
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ "&:hover": { color: "primary.main" } }}
                        >
                            <FacebookIcon />
                        </Link>
                        <Link
                            href="https://www.instagram.com/selfcraftskills?igsh=MTRmMTJqanU0NXp0YQ=="
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ "&:hover": { color: "primary.main" } }}
                        >
                            <InstagramIcon />
                        </Link>
                        <Link
                            href="https://wa.me/message/4NYE3ABSMTN5K1"
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ "&:hover": { color: "primary.main" } }}
                        >
                            <WhatsAppIcon />
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
