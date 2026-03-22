import { Fab, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
    const location = useLocation();
    const isCourseDetailPage = /^\/courses\/[^/]+/.test(location.pathname);

    return (
        <Fab
            variant="extended"
            component="a"
            href="https://wa.me/message/4NYE3ABSMTN5K1"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                position: "fixed",
                bottom: { xs: isCourseDetailPage ? 96 : 16, md: 16 },
                left: 16,
                backgroundColor: "#111",
                color: "white",
                textTransform: "none",
                fontWeight: 600,
                zIndex: 1100,
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                "&:hover": {
                    backgroundColor: "#222",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
                },
                transition: "all 0.2s ease",
            }}
        >
            <WhatsAppIcon sx={{ color: "#25D366" }} />
            <Typography
                sx={{ ml: 1, display: { xs: "none", md: "inline-flex" }, fontSize: "0.86rem" }}
            >
                Chat on WhatsApp
            </Typography>
        </Fab>
    );
};

export default WhatsAppButton;
