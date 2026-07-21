import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useLocation } from "react-router-dom";
import { useSubscription } from "../hooks/useSubscription";
import { colors } from "../theme/colors";

const BackToTopButton = () => {
    const location = useLocation();
    const { isSubscribed } = useSubscription();
    const isCourseDetailPage = /^\/courses\/[^/]+/.test(location.pathname);
    const isHome = location.pathname === "/";
    // Lift above the bottom sticky bar (shown to non-members on home / course pages).
    const raised = !isSubscribed && (isCourseDetailPage || isHome);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Zoom in={trigger}>
            <Fab
                size="small"
                aria-label="scroll back to top"
                onClick={scrollToTop}
                sx={{
                    position: "fixed",
                    bottom: { xs: raised ? (isCourseDetailPage ? 96 : 92) : 16, md: 16 },
                    right: 16,
                    zIndex: 1100,
                    backgroundColor: colors.indigo,
                    color: "#fff",
                    borderRadius: "14px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    "&:hover": {
                        backgroundColor: colors.indigoDark,
                        transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default BackToTopButton;
