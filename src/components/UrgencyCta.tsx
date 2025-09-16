// src/components/UrgencyCta.tsx
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const UrgencyCta = () => {
    return (
        <Container sx={{ py: { xs: 6, md: 10 }, position: "relative" }}>
            {/* Abstract curved shape */}
            {/* Top-left pink circle */}
<Box
    sx={{
        position: "absolute",
        top: { xs: -30, md: -50 },
        left: { xs: -30, md: -50 },
        width: { xs: 150, md: 300 },
        height: { xs: 150, md: 300 },
        background: "linear-gradient(135deg, #FF9A8B, #FF6A88)",
        borderRadius: "50%",
        opacity: { xs: 0.2, md: 0.2 },
        zIndex: 0,
    }}
/>

{/* Bottom-right yellow-orange circle */}
<Box
    sx={{
        position: "absolute",
        bottom: { xs: -20, md: -60 },
        right: { xs: -20, md: -40 },
        width: { xs: 100, md: 200 },
        height: { xs: 100, md: 200 },
        background: "linear-gradient(135deg, #FFD93D, #FF6B6B)",
        borderRadius: "50%",
        opacity: { xs: 0.2, md: 0.2 },
        zIndex: 0,
    }}
/>


            <Paper
                elevation={6}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: { xs: 4, md: 6 },
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, mb: { xs: 3, md: 0 } }}>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                            background: "linear-gradient(45deg, #D32F2F 10%, #E57373 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 2,
                        }}
                    >
                        Success comes to those who act today, not tomorrow.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        ⚡ Grab your seat and start building your future!
                    </Typography>
                </Box>

                <Box
    sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", sm: "flex-start" }, // Mobile = center, Desktop = left
        flexWrap: "nowrap", // force ek line
        gap: 2, // thoda space between text & button agar saath me use kare
    }}
>
    <Button
        component={RouterLink}
        to="/courses/ai-unlocked"
        variant="contained"
        startIcon={<RocketLaunchIcon />}
        sx={{
            borderRadius: "50px",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #FF6B6B, #FFD93D)",
            color: "#000",
            whiteSpace: "nowrap", // text wrap na ho
            boxShadow: "0 6px 20px rgba(255, 107, 107, 0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 25px rgba(255, 107, 107, 0.4)",
            },
            animation: "pulse 2s infinite alternate",
            "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "100%": { transform: "scale(1.05)" },
            },
        }}
    >
        Secure your spot now!
    </Button>
</Box>

            </Paper>
        </Container>
    );
};

export default UrgencyCta;
