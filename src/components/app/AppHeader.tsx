// src/components/app/AppHeader.tsx
// Top bar for the logged-in member app (Dashboard). Deliberately distinct
// from the marketing Header: a compact tab bar (only "Courses" for now) and
// a profile menu. This is the "you're inside the product" chrome.
import { useState } from "react";
import {
    AppBar, Avatar, Box, Container, Divider, IconButton,
    ListItemIcon, Menu, MenuItem, Toolbar, Typography,
} from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link as RouterLink, NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useAuth } from "../../hooks/useAuth";
import { colors } from "../../theme/colors";

const AppHeader = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const fullName = (user?.user_metadata?.full_name as string | undefined) ?? "Member";
    const email = user?.email ?? "";
    const initial = fullName.trim().charAt(0).toUpperCase() || "M";

    const handleLogout = async () => {
        setAnchorEl(null);
        await signOut();
        navigate("/");
    };

    return (
        <AppBar position="sticky" elevation={0} sx={{
            background: "#fff",
            color: colors.ink,
            borderBottom: "1px solid rgba(18,19,43,0.07)",
        }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ minHeight: { xs: 60, md: 68 }, gap: 2 }}>
                    {/* Logo */}
                    <Box component={RouterLink} to="/dashboard" sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none", color: "inherit" }}>
                        <Box component="img" src={Logo} alt="Self Craft Skills" sx={{ width: 32, height: 32 }} />
                        <Typography sx={{
                            display: { xs: "none", sm: "block" },
                            fontFamily: '"Space Grotesk"', fontWeight: 800, fontSize: "1rem",
                        }}>
                            Self Craft Skills
                        </Typography>
                    </Box>

                    {/* Center tabs */}
                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                        <RouterNavLink to="/dashboard" style={{ textDecoration: "none" }}>
                            {({ isActive }) => (
                                <Box sx={{
                                    display: "flex", flexDirection: "column", alignItems: "center",
                                    px: 2, py: 0.5, cursor: "pointer",
                                    color: isActive ? colors.indigo : colors.slate,
                                    borderBottom: isActive ? `2px solid ${colors.indigo}` : "2px solid transparent",
                                }}>
                                    <MenuBookRoundedIcon sx={{ fontSize: 22 }} />
                                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, mt: 0.2 }}>
                                        Courses
                                    </Typography>
                                </Box>
                            )}
                        </RouterNavLink>
                    </Box>

                    {/* Profile */}
                    <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ p: 0.4 }}>
                        <Avatar sx={{ width: 38, height: 38, bgcolor: colors.indigo, fontSize: "1rem", fontWeight: 700 }}>
                            {initial}
                        </Avatar>
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        transformOrigin={{ vertical: "top", horizontal: "right" }}
                        slotProps={{ paper: { sx: { mt: 1, minWidth: 240, borderRadius: "16px", boxShadow: "0 12px 40px rgba(18,19,43,0.14)" } } }}
                    >
                        <Box sx={{ px: 2, py: 1.5, display: "flex", alignItems: "center", gap: 1.5 }}>
                            <Avatar sx={{ width: 40, height: 40, bgcolor: colors.indigo, fontWeight: 700 }}>{initial}</Avatar>
                            <Box sx={{ minWidth: 0 }}>
                                <Typography sx={{ fontWeight: 700, fontSize: "0.92rem", lineHeight: 1.2 }} noWrap>{fullName}</Typography>
                                {email && <Typography sx={{ fontSize: "0.78rem", color: colors.slate }} noWrap>{email}</Typography>}
                            </Box>
                        </Box>
                        <Divider />
                        <MenuItem component={RouterLink} to="/account" onClick={() => setAnchorEl(null)} sx={{ py: 1.2 }}>
                            <ListItemIcon><PersonOutlineRoundedIcon fontSize="small" /></ListItemIcon>
                            My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleLogout} sx={{ py: 1.2, color: "#c0492f" }}>
                            <ListItemIcon><LogoutRoundedIcon fontSize="small" sx={{ color: "#c0492f" }} /></ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppHeader;
