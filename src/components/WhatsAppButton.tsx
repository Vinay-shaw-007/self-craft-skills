// src/components/WhatsAppButton.tsx
import { Fab, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
    const whatsappGreen = "#25D366";
    const location = useLocation();
    const isCourseDetailPage = /^\/courses\/[^/]+/.test(location.pathname);

    return (
        <Fab
            variant="extended"
            component="a" // Makes the button act as a link
            href="https://wa.me/message/4NYE3ABSMTN5K1"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                position: "fixed",
                bottom: { xs: isCourseDetailPage ? 96 : 16, md: 16 },
                left: 16,
                backgroundColor: whatsappGreen,
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                zIndex: 1100,
                "&:hover": {
                    backgroundColor: "#1EAE54", // A slightly darker green for hover
                },
            }}
        >
            <WhatsAppIcon />
            <Typography
                sx={{ ml: 1, display: { xs: "none", md: "inline-flex" } }}
            >
                Chat on WhatsApp
            </Typography>
        </Fab>
    );
};

export default WhatsAppButton;
