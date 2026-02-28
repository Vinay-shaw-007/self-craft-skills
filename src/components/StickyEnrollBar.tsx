// src/components/StickyEnrollBar.tsx
import { Box, Typography, Button } from "@mui/material";
import type { Course } from "./coursesData";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface StickyEnrollBarProps {
    course: Course | undefined;
}

const StickyEnrollBar = ({ course }: StickyEnrollBarProps) => {
    if (!course || course.status !== "Open for Enrollment") {
        return null;
    }

    const scrollToPricingPlans = () => {
        const section = document.getElementById("pricing-plans");
        if (!section) {
            window.location.hash = "pricing-plans";
            return;
        }

        const headerOffset = 92;
        const targetTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: Math.max(targetTop - headerOffset, 0),
            behavior: "smooth",
        });
    };

    return (
        <Box
            component="footer"
            sx={{
                position: "fixed",
                bottom: { xs: 14, md: 22 },
                left: "50%",
                width: { xs: "94%", md: "min(860px, 88vw)" },
                zIndex: 1000,
                transform: "translateX(-50%)",
                animation: "slideUp 0.5s ease-out forwards",
                "@keyframes slideUp": {
                    from: { transform: "translateY(100%) translateX(-50%)" },
                    to: { transform: "translateY(0) translateX(-50%)" },
                },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: -30, md: -32 },
                    left: "50%",
                    transform: "translateX(-50%)",
                    px: { xs: 1.3, md: 1.9 },
                    py: 0.46,
                    borderRadius: "7px 7px 0 0",
                    background: "linear-gradient(90deg, #4a73ef 0%, #5f88ff 100%)",
                    border: "1px solid rgba(154, 189, 255, 0.95)",
                    borderBottom: 0,
                    whiteSpace: "nowrap",
                    zIndex: 1,
                }}
            >
                <Typography
                    component="span"
                    sx={{
                        fontSize: { xs: "0.74rem", md: "0.86rem" },
                        fontWeight: 700,
                        letterSpacing: "0.03em",
                        color: "#f8fbff",
                        lineHeight: 1,
                    }}
                >
                    Starting From
                </Typography>{" "}
                <Typography
                    component="span"
                    sx={{
                        fontSize: { xs: "0.9rem", md: "1.01rem" },
                        fontWeight: 700,
                        letterSpacing: "0.01em",
                        color: "#f8fbff",
                        lineHeight: 1,
                    }}
                >
                    {"\u20B9579/-"}
                </Typography>
            </Box>

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: { xs: 1.2, md: 2 },
                    py: { xs: 1.2, md: 1.35 },
                    px: { xs: 1.3, md: 1.9 },
                    borderRadius: "16px",
                    background:
                        "linear-gradient(110deg, #041b45 0%, #052455 55%, #082b62 100%)",
                    color: "white",
                    boxShadow: "0 12px 28px rgba(3, 12, 31, 0.36)",
                    border: "1px solid rgba(146, 184, 255, 0.24)",
                    backdropFilter: "blur(6px)",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        minWidth: 0,
                        pr: { xs: 0.8, md: 1.5 },
                    }}
                >
                    <Box
                        sx={{
                            overflow: "hidden",
                        }}
                    >
                        <Typography
                            fontWeight={700}
                            sx={{
                                fontSize: { xs: "0.95rem", md: "1.1rem" },
                                lineHeight: 1.22,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                color: "#f1f6ff",
                            }}
                        >
                            {course.title}
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "rgba(207, 223, 247, 0.92)",
                                display: { xs: "none", sm: "block" },
                                mt: 0.15,
                                fontSize: { sm: "0.76rem", md: "0.82rem" },
                            }}
                        >
                            Start your journey by choosing your learning plan.
                        </Typography>
                    </Box>
                </Box>

                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={scrollToPricingPlans}
                    sx={{
                        borderRadius: "999px",
                        px: { xs: 2.2, md: 3.6 },
                        py: { xs: 0.68, md: 0.95 },
                        fontWeight: 700,
                        fontSize: { xs: "0.92rem", md: "1.02rem" },
                        minWidth: { xs: "136px", md: "184px" },
                        textTransform: "none",
                        color: "#f8fbff",
                        background:
                            "linear-gradient(90deg, #4a74f4 0%, #5d85ff 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
                        "&:hover": {
                            background:
                                "linear-gradient(90deg, #3f65d8 0%, #5376e4 100%)",
                            transform: "translateY(-1px)",
                        },
                    }}
                >
                    Enroll Now
                </Button>
            </Box>
        </Box>
    );
};

export default StickyEnrollBar;
