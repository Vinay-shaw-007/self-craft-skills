// src/components/Header.tsx
import { useEffect, useState } from "react";
import {
    AppBar, Box, Button, Container, Drawer, IconButton,
    Link, List, ListItemButton, Stack, Toolbar, Typography, Divider,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useSubscription } from "../hooks/useSubscription";
import { useAuth } from "../hooks/useAuth";
import { colors } from "../theme/colors";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/courses" },
    { label: "Pricing", href: "/pricing" },
    { label: "Free Resources", href: "/free-resources" },
    { label: "FAQs", href: "/faq" },
];

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isSubscribed } = useSubscription();
    const { user } = useAuth();
    const primaryCtaHref = isSubscribed ? "/dashboard" : "/pricing";
    const primaryCtaLabel = isSubscribed ? "Dashboard" : "Become a member";
    const secondaryCtaHref = user ? "/account" : "/login";
    const secondaryCtaLabel = user ? "Account" : "Login";
    // Members don't need the Pricing link — they're already subscribed.
    const visibleNav = isSubscribed ? navItems.filter((i) => i.href !== "/pricing") : navItems;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "transparent", color: colors.ink, boxShadow: "none" }}>
            <Box sx={{
                background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.75)",
                backdropFilter: "blur(20px) saturate(180%)",
                borderBottom: scrolled ? "1px solid rgba(18,19,43,0.06)" : "1px solid transparent",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ minHeight: { xs: 66, md: 76 }, justifyContent: "space-between" }}>
                        {/* Logo */}
                        <Box component={RouterLink} to="/" sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none", color: "inherit" }}>
                            <Box component="img" src={Logo} alt="Logo" sx={{ width: 34, height: 34 }} />
                            <Typography sx={{
                                fontFamily: '"Space Grotesk", sans-serif',
                                fontWeight: 800,
                                fontSize: "1.05rem",
                                letterSpacing: "-0.02em",
                            }}>
                                Self Craft Skills
                            </Typography>
                        </Box>

                        {/* Center nav */}
                        <Box sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            gap: 0.5,
                        }}>
                            {visibleNav.map((item) => (
                                <RouterNavLink key={item.label} to={item.href} style={{ textDecoration: "none" }}>
                                    {({ isActive }) => (
                                        <Link underline="none" sx={{
                                            px: 1.8, py: 0.9,
                                            borderRadius: "999px",
                                            fontSize: "0.9rem",
                                            fontWeight: 600,
                                            color: isActive ? colors.indigo : colors.slate,
                                            backgroundColor: isActive ? colors.lavenderSoft : "transparent",
                                            transition: "all 0.2s ease",
                                            "&:hover": { color: colors.indigo, backgroundColor: colors.lavenderSoft },
                                        }}>
                                            {item.label}
                                        </Link>
                                    )}
                                </RouterNavLink>
                            ))}
                        </Box>

                        {/* Right actions */}
                        <Stack direction="row" spacing={1.2} alignItems="center">
                            {/* Members reach Account from the dashboard profile menu,
                                so the marketing header only shows this when not subscribed. */}
                            {!isSubscribed && (
                                <Button
                                    component={RouterLink}
                                    to={secondaryCtaHref}
                                    sx={{
                                        display: { xs: "none", md: "inline-flex" },
                                        px: 2.6, py: 1,
                                        borderRadius: "999px",
                                        color: colors.ink,
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        border: "1px solid rgba(18,19,43,0.14)",
                                        "&:hover": { background: "rgba(18,19,43,0.04)" },
                                    }}
                                >
                                    {secondaryCtaLabel}
                                </Button>
                            )}
                            <Button
                                component={RouterLink}
                                to={primaryCtaHref}
                                sx={{
                                    display: { xs: "none", md: "inline-flex" },
                                    px: 2.8, py: 1,
                                    borderRadius: "999px",
                                    color: "#fff",
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                    background: colors.indigo,
                                    "&:hover": { background: colors.indigoDark },
                                }}
                            >
                                {primaryCtaLabel}
                            </Button>
                            <IconButton onClick={() => setDrawerOpen(true)} sx={{
                                display: { xs: "flex", md: "none" },
                                border: "1px solid rgba(18,19,43,0.1)",
                                borderRadius: "10px",
                                width: 40, height: 40,
                            }}>
                                <MenuRoundedIcon />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </Container>
            </Box>

            {/* Mobile drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 320, background: "#fff",
                        borderLeft: "none",
                    },
                }}>
                <Box sx={{ p: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                        <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700 }}>Menu</Typography>
                        <IconButton onClick={() => setDrawerOpen(false)}><CloseRoundedIcon /></IconButton>
                    </Stack>

                    {!isSubscribed && (
                        <Box sx={{
                            p: 2, mb: 3, borderRadius: "20px",
                            background: `linear-gradient(135deg, ${colors.indigo}, ${colors.indigoDark})`,
                            color: "#fff",
                        }}>
                            <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>
                                One membership
                            </Typography>
                            <Typography sx={{ mt: 0.5, fontWeight: 700, fontSize: "0.98rem" }}>
                                Every course, one monthly plan.
                            </Typography>
                        </Box>
                    )}

                    <List sx={{ py: 0 }}>
                        {visibleNav.map((item) => (
                            <ListItemButton key={item.label} component={RouterLink} to={item.href}
                                onClick={() => setDrawerOpen(false)}
                                sx={{ borderRadius: "12px", mb: 0.5, py: 1.5 }}>
                                <Typography fontWeight={600}>{item.label}</Typography>
                            </ListItemButton>
                        ))}
                        {!isSubscribed && (
                            <ListItemButton component={RouterLink} to={secondaryCtaHref}
                                onClick={() => setDrawerOpen(false)}
                                sx={{ borderRadius: "12px", mb: 0.5, py: 1.5 }}>
                                <Typography fontWeight={600}>{secondaryCtaLabel}</Typography>
                            </ListItemButton>
                        )}
                    </List>
                    <Divider sx={{ my: 2 }} />
                    <Button fullWidth component={RouterLink} to={primaryCtaHref}
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            py: 1.5, borderRadius: "999px", color: "#fff",
                            background: colors.indigo, fontWeight: 700,
                            "&:hover": { background: colors.indigoDark },
                        }}>
                        {primaryCtaLabel}
                    </Button>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;
