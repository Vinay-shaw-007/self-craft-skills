// src/components/AuthLayout.tsx
// Minimal centered shell shared by the Login and Sign Up pages.
import { Box, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { ReactNode } from "react";
import Logo from "../assets/logo.png";
import { colors } from "../theme/colors";

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
    return (
        <Box sx={{
            minHeight: "calc(100vh - 76px)",
            background: "#F7F7FB",
            display: "flex",
            alignItems: "center",
            py: { xs: 6, md: 8 },
        }}>
            <Container maxWidth="xs">
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Box
                        component={RouterLink}
                        to="/"
                        sx={{ display: "inline-flex", alignItems: "center", gap: 1, textDecoration: "none", color: "inherit" }}
                    >
                        <Box component="img" src={Logo} alt="Self Craft Skills" sx={{ width: 40, height: 40 }} />
                    </Box>
                    <Typography variant="h4" sx={{
                        mt: 2,
                        fontFamily: '"Space Grotesk"',
                        fontWeight: 700,
                        fontSize: { xs: "1.6rem", md: "1.8rem" },
                        color: colors.ink,
                    }}>
                        {title}
                    </Typography>
                    <Typography sx={{ mt: 1, color: colors.slate, fontSize: "0.95rem", lineHeight: 1.6 }}>
                        {subtitle}
                    </Typography>
                </Box>

                <Box sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: "24px",
                    background: "#fff",
                    border: "1px solid rgba(18,19,43,0.06)",
                }}>
                    {children}
                </Box>
            </Container>
        </Box>
    );
};

export default AuthLayout;
