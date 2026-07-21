// src/components/StickyConversionBar.tsx
// Persistent bottom bar on the homepage, hidden once already subscribed.
import { Box, Button, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";
import { useSubscription } from "../hooks/useSubscription";
import { colors } from "../theme/colors";

const StickyConversionBar = () => {
    const { isSubscribed } = useSubscription();
    if (isSubscribed) return null;

    return (
        <Box sx={{
            position: "fixed",
            bottom: { xs: 12, md: 20 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "calc(100% - 24px)", md: "min(720px, 90vw)" },
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            px: { xs: 2, md: 3 },
            py: 1.4,
            borderRadius: "999px",
            background: `linear-gradient(90deg, ${colors.indigoDeep}, ${colors.indigo})`,
            boxShadow: "0 16px 40px rgba(22,15,61,0.35)",
        }}>
            <Typography sx={{
                color: "#fff", fontWeight: 600,
                fontSize: { xs: "0.82rem", md: "0.92rem" },
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>
                Get access to every course, one membership
            </Typography>
            <Button component={RouterLink} to="/pricing"
                endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 15 }} />}
                sx={{
                    flexShrink: 0,
                    px: { xs: 2, md: 2.6 }, py: 0.8,
                    borderRadius: "999px",
                    color: colors.indigoDeep, fontWeight: 700,
                    fontSize: { xs: "0.8rem", md: "0.86rem" },
                    background: "#fff",
                    whiteSpace: "nowrap",
                    "&:hover": { background: "#f0f0f0" },
                }}>
                Become a member
            </Button>
        </Box>
    );
};

export default StickyConversionBar;
