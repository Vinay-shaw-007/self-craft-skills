import { useEffect, useState } from "react";
import {
    AppBar, Box, Button, Container, Drawer, IconButton,
    Link, List, ListItemButton, Stack, Toolbar, Typography, Divider,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { coursesData } from "./coursesData";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/courses" },
    { label: "Free Resources", href: "/free-resources" },
    { label: "FAQs", href: "/faq" },
];

const enrollmentCourse = coursesData.find((c) => c.status === "Open for Enrollment");
const enrollmentHref = enrollmentCourse ? `/courses/${enrollmentCourse.id}` : "/courses";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "transparent", color: "#111", boxShadow: "none" }}>
            {/* Marquee announcement */}
            <Box sx={{
                background: "#111",
                color: "#fff",
                overflow: "hidden",
                py: 0.8,
            }}>
                <Box sx={{
                    display: "flex",
                    animation: "ticker 25s linear infinite",
                    whiteSpace: "nowrap",
                    width: "fit-content",
                }}>
                    {[...Array(4)].map((_, i) => (
                        <Typography key={i} component="span" sx={{
                            fontSize: "0.78rem",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            mx: 4,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1.5,
                        }}>
                            <Box component="span" sx={{ color: "#6C5CE7" }}>●</Box>
                            AI Course is live now for students, professionals, and creators
                            <Box component="span" sx={{ color: "#FD79A8" }}>●</Box>
                            Open for enrollment — Limited seats
                        </Typography>
                    ))}
                </Box>
            </Box>

            {/* Main nav */}
            <Box sx={{
                background: scrolled ? "rgba(250, 250, 250, 0.85)" : "rgba(250, 250, 250, 0.6)",
                backdropFilter: "blur(24px) saturate(180%)",
                borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, justifyContent: "space-between" }}>
                        {/* Logo */}
                        <Box component={RouterLink} to="/" sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none", color: "inherit" }}>
                            <Box component="img" src={Logo} alt="Logo" sx={{ width: 36, height: 36 }} />
                            <Typography sx={{
                                fontFamily: '"Space Grotesk", sans-serif',
                                fontWeight: 700,
                                fontSize: "1rem",
                                letterSpacing: "-0.02em",
                            }}>
                                SELF CRAFT SKILLS
                            </Typography>
                        </Box>

                        {/* Center nav */}
                        <Box sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            gap: 0.5,
                            p: 0.5,
                            borderRadius: "14px",
                            border: "1px solid rgba(0,0,0,0.06)",
                            background: "rgba(255,255,255,0.7)",
                        }}>
                            {navItems.map((item) => (
                                <RouterNavLink key={item.label} to={item.href} style={{ textDecoration: "none" }}>
                                    {({ isActive }) => (
                                        <Link underline="none" sx={{
                                            px: 2, py: 0.8,
                                            borderRadius: "10px",
                                            fontSize: "0.88rem",
                                            fontWeight: 500,
                                            color: isActive ? "#111" : "#666",
                                            backgroundColor: isActive ? "#fff" : "transparent",
                                            boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                                            transition: "all 0.2s ease",
                                            "&:hover": { color: "#111", backgroundColor: isActive ? "#fff" : "rgba(0,0,0,0.03)" },
                                        }}>
                                            {item.label}
                                        </Link>
                                    )}
                                </RouterNavLink>
                            ))}
                        </Box>

                        {/* Right actions */}
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Button
                                component={RouterLink}
                                to={enrollmentHref}
                                sx={{
                                    display: { xs: "none", md: "inline-flex" },
                                    px: 2.5, py: 1,
                                    borderRadius: "12px",
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: "0.88rem",
                                    background: "#111",
                                    "&:hover": { background: "#222" },
                                }}
                            >
                                Enroll now
                                <ArrowOutwardRoundedIcon sx={{ ml: 0.5, fontSize: 16 }} />
                            </Button>
                            <Box sx={{
                                display: { xs: "flex", md: "none" },
                                flexDirection: "column",
                                alignItems: "center",
                                position: "relative",
                            }}>
                                <IconButton onClick={() => setDrawerOpen(true)} sx={{
                                    border: "1px solid rgba(0,0,0,0.08)",
                                    borderRadius: "10px",
                                    width: 40, height: 40,
                                    zIndex: 1,
                                }}>
                                    <MenuRoundedIcon />
                                </IconButton>
                                {/* Hanging "FREE" tag */}
                                <Box
                                    component={RouterLink}
                                    to="/free-resources"
                                    sx={{
                                        position: "absolute",
                                        top: 38,
                                        textDecoration: "none",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        animation: "swing 3s ease-in-out infinite",
                                        transformOrigin: "top center",
                                        "@keyframes swing": {
                                            "0%, 100%": { transform: "rotate(3deg)" },
                                            "50%": { transform: "rotate(-3deg)" },
                                        },
                                    }}
                                >
                                    {/* String */}
                                    <Box sx={{
                                        width: "1px",
                                        height: 14,
                                        background: "linear-gradient(to bottom, rgba(0,0,0,0.15), #6C5CE7)",
                                    }} />
                                    {/* Tag */}
                                    <Box sx={{
                                        px: 0.8,
                                        py: 0.3,
                                        borderRadius: "5px",
                                        background: "linear-gradient(135deg, #6C5CE7, #0984E3)",
                                        color: "#fff",
                                        fontSize: "0.55rem",
                                        fontWeight: 800,
                                        letterSpacing: "0.08em",
                                        lineHeight: 1,
                                        boxShadow: "0 2px 8px rgba(108, 92, 231, 0.3)",
                                    }}>
                                        FREE
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    </Toolbar>
                </Container>
            </Box>

            {/* Mobile drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 320, background: "#fafafa",
                        borderLeft: "none",
                    },
                }}>
                <Box sx={{ p: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                        <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700 }}>Menu</Typography>
                        <IconButton onClick={() => setDrawerOpen(false)}><CloseRoundedIcon /></IconButton>
                    </Stack>

                    <Box sx={{
                        p: 2, mb: 3, borderRadius: "16px",
                        background: "linear-gradient(135deg, #6C5CE7, #0984E3)",
                        color: "#fff",
                    }}>
                        <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>
                            Now enrolling
                        </Typography>
                        <Typography sx={{ mt: 0.5, fontWeight: 600, fontSize: "0.95rem" }}>
                            Join the next live cohort before seats fill up.
                        </Typography>
                    </Box>

                    <List sx={{ py: 0 }}>
                        {navItems.map((item) => (
                            <ListItemButton key={item.label} component={RouterLink} to={item.href}
                                onClick={() => setDrawerOpen(false)}
                                sx={{ borderRadius: "12px", mb: 0.5, py: 1.5 }}>
                                <Typography fontWeight={600}>{item.label}</Typography>
                            </ListItemButton>
                        ))}
                    </List>
                    <Divider sx={{ my: 2 }} />
                    <Button fullWidth component={RouterLink} to={enrollmentHref}
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            py: 1.4, borderRadius: "12px", color: "#fff",
                            background: "#111", fontWeight: 600,
                            "&:hover": { background: "#222" },
                        }}>
                        Enroll now <ArrowOutwardRoundedIcon sx={{ ml: 0.5, fontSize: 16 }} />
                    </Button>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;
