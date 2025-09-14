// src/components/Header.tsx
import { useState, useEffect } from "react";
import { NavLink as RouterNavLink, Link as RouterLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Link,
    Stack,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Container,
    Divider,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.png";

// 1. "Support" has been added to the navigation list for the drawer
const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "FAQs", href: "/faq" },
];

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", width: 250 }}
        >
            <img
                src={Logo}
                alt="Self-Craft Skills Logo"
                style={{ height: "40px", margin: "16px 0" }}
            />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <Link
                            component={RouterLink}
                            to={item.href}
                            underline="none"
                            sx={{
                                color: "#333",
                                width: "100%",
                                padding: "8px 16px",
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </Link>
                    </ListItem>
                ))}
            </List>
            {/* 2. Added a prominent "Enroll Now" button to the bottom of the drawer */}
            <Divider sx={{ my: 1 }} />
            <Box sx={{ columnGap: 2, rowGap: 2, p: 1 }}>
                <Button
                    component="a"
                    href="https://forms.gle/HnFrNt84kW8cibSZ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    fullWidth
                    sx={{
                        borderRadius: "50px",
                        fontWeight: "bold",
                        my: 1,
                        background:
                            "linear-gradient(45deg, #D32F2F 30%, #E57373 90%)",
                    }}
                >
                    Enroll Now
                </Button>
                <Button
                    variant="contained"
                    component={RouterLink}
                    to="/#support"
                    startIcon={<SupportAgentIcon />}
                    fullWidth
                    sx={{
                        borderRadius: "50px",
                        textTransform: "none",
                        // display: { xs: "none", md: "inline-flex" },
                        background:
                            "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                        color: "white",
                        boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                        transition: "transform 0.2s",
                        "&:hover": { transform: "translateY(-2px)" },
                    }}
                >
                    Support
                </Button>
            </Box>
        </Box>
    );

    // Style for active NavLink
    const activeLinkStyle = {
        color: "#D32F2F", // Your primary brand red
        fontWeight: "bold",
    };

    return (
        <AppBar
            component="nav"
            position="sticky"
            elevation={0}
            sx={{
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: isScrolled
                    ? "rgba(255, 255, 255, 0.9)"
                    : "transparent",
                backdropFilter: isScrolled ? "blur(10px)" : "none",
                boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
                borderBottom: isScrolled
                    ? "1px solid #eee"
                    : "1px solid transparent",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: "space-between" }}
                >
                    <Box
                        component={RouterNavLink}
                        to="/#hero"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Self-Craft Skills Logo"
                            style={{ height: "50px", marginRight: "12px" }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            fontWeight="medium"
                            sx={{ color: "#333" }}
                        >
                            Self Craft Skills
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                        {navItems.map((item) => (
                            <RouterNavLink
                                key={item.label}
                                to={item.href}
                                style={{ textDecoration: "none" }}
                            >
                                {({ isActive }) => (
                                    <Link
                                        underline="none"
                                        sx={{
                                            whiteSpace: "nowrap",
                                            fontSize: "1rem",

                                            transition: "color 0.2s",
                                            "&:hover": {
                                                color: "primary.main",
                                            },
                                            ...(isActive
                                                ? activeLinkStyle
                                                : { color: "#333" }),
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </RouterNavLink>
                        ))}
                    </Box>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Button
                            variant="contained"
                            component={RouterLink}
                            to="/#support"
                            startIcon={<SupportAgentIcon />}
                            sx={{
                                borderRadius: "50px",
                                textTransform: "none",
                                display: { xs: "none", md: "inline-flex" },
                                background:
                                    "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                color: "white",
                                boxShadow:
                                    "0 3px 5px 2px rgba(33, 203, 243, .3)",
                                transition: "transform 0.2s",
                                "&:hover": { transform: "translateY(-2px)" },
                            }}
                        >
                            Support
                        </Button>
                        {/* <Button
                            variant="contained"
                            href="https://forms.gle/HnFrNt84kW8cibSZ9"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                borderRadius: "50px",
                                textTransform: "none",
                                fontWeight: "bold",
                                display: { xs: "none", md: "inline-flex" },
                                background:
                                    "linear-gradient(45deg, #D32F2F 30%, #E57373 90%)",
                                color: "white",
                                boxShadow: "0 4px 15px rgba(211, 47, 47, 0.4)",
                                transition: "transform 0.2s",
                                "&:hover": { transform: "translateY(-2px)" },
                            }}
                        >
                            Enroll Now
                        </Button> */}
                        <IconButton
                            color="inherit"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: "none" }, color: "#333" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 250,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </AppBar>
    );
};

export default Header;
