// src/components/BackToTopButton.tsx
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTopButton = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100, // Show button after scrolling 100px
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
                color="primary"
                size="small"
                aria-label="scroll back to top"
                onClick={scrollToTop}
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default BackToTopButton;
