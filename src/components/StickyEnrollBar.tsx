import { Box, Typography, Button } from "@mui/material";
import type { Course } from "./coursesData";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useSubscription } from "../hooks/useSubscription";
import { MONTHLY_PRICE_DISPLAY } from "../config/pricing";

interface StickyEnrollBarProps {
    course: Course | undefined;
}

const StickyEnrollBar = ({ course }: StickyEnrollBarProps) => {
    const { isSubscribed } = useSubscription();

    if (!course || course.status !== "Open for Enrollment" || isSubscribed) {
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
                bottom: { xs: 10, md: 22 },
                left: "50%",
                width: { xs: "calc(100% - 20px)", md: "min(860px, 88vw)" },
                zIndex: 1000,
                transform: "translateX(-50%)",
                animation: "slideUp 0.5s ease-out forwards",
                "@keyframes slideUp": {
                    from: { transform: "translateY(100%) translateX(-50%)" },
                    to: { transform: "translateY(0) translateX(-50%)" },
                },
            }}
        >
            {/* Price tag */}
            <Box sx={{
                position: "absolute",
                top: { xs: -30, md: -32 },
                left: "50%",
                transform: "translateX(-50%)",
                px: { xs: 1.3, md: 1.9 },
                py: 0.46,
                borderRadius: "8px 8px 0 0",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                borderBottom: 0,
                whiteSpace: "nowrap",
                zIndex: 1,
            }}>
                <Typography component="span" sx={{
                    fontFamily: '"Space Grotesk"',
                    fontSize: { xs: "0.9rem", md: "1.01rem" },
                    fontWeight: 700, color: "#111", lineHeight: 1,
                }}>
                    {MONTHLY_PRICE_DISPLAY}/mo
                </Typography>{" "}
                <Typography component="span" sx={{
                    fontSize: { xs: "0.68rem", md: "0.76rem" },
                    fontWeight: 700, color: "#4F46E5", lineHeight: 1,
                }}>
                    ALL COURSES
                </Typography>
            </Box>

            {/* Main bar */}
            <Box sx={{
                position: "relative", zIndex: 2,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "stretch", sm: "center" },
                justifyContent: "space-between",
                gap: { xs: 1.2, md: 2 },
                py: { xs: 1.2, md: 1.35 },
                px: { xs: 1.3, md: 1.9 },
                borderRadius: "16px",
                background: "#0a0a0a",
                color: "white",
                boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
            }}>
                <Box sx={{
                    display: "flex", alignItems: "center",
                    minWidth: 0, pr: { xs: 0, md: 1.5 },
                }}>
                    <Box sx={{ overflow: "hidden" }}>
                        <Typography fontWeight={700} sx={{
                            fontSize: { xs: "0.88rem", md: "1.08rem" },
                            lineHeight: 1.22,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: { xs: "normal", sm: "nowrap" },
                        }}>
                            {course.title}
                        </Typography>
                        <Typography variant="caption" sx={{
                            color: "rgba(255,255,255,0.4)",
                            display: { xs: "none", sm: "block" },
                            mt: 0.15,
                            fontSize: { sm: "0.76rem", md: "0.82rem" },
                        }}>
                            One membership unlocks this course and every other.
                        </Typography>
                    </Box>
                </Box>

                <Button
                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                    onClick={scrollToPricingPlans}
                    sx={{
                        borderRadius: "12px",
                        px: { xs: 2.2, md: 3.6 },
                        py: { xs: 0.68, md: 0.95 },
                        fontWeight: 700,
                        fontSize: { xs: "0.92rem", md: "1.02rem" },
                        minWidth: { xs: "100%", sm: "136px", md: "184px" },
                        color: "#111",
                        background: "#fff",
                        "&:hover": {
                            background: "#f0f0f0",
                            transform: "translateY(-1px)",
                        },
                        transition: "all 0.2s ease",
                    }}
                >
                    Subscribe Now
                </Button>
            </Box>
        </Box>
    );
};

export default StickyEnrollBar;
