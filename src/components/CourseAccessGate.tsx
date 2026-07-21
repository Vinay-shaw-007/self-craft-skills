// src/components/CourseAccessGate.tsx
// Renders inside a course detail page: either a "subscribe to watch" CTA
// or the recorded lesson list, depending on useSubscription(). This is
// the only place course pages decide what to show — it always reads
// through the shared hook, never its own access logic.
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useSubscription } from "../hooks/useSubscription";
import { getCourseContent } from "../data/courseContent";
import { MONTHLY_PRICE_DISPLAY } from "../config/pricing";
import { colors } from "../theme/colors";

interface CourseAccessGateProps {
    courseId: string;
    courseTitle: string;
}

const CourseAccessGate = ({ courseId, courseTitle }: CourseAccessGateProps) => {
    const { isSubscribed } = useSubscription();
    const hasContent = Boolean(getCourseContent(courseId));

    return (
        <Box id="pricing-plans" sx={{ py: { xs: 8, md: 10 } }}>
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
                <Typography sx={{
                    fontSize: "0.72rem", fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: colors.indigo, mb: 1,
                }}>
                    {isSubscribed ? "You're a member" : "Access"}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: colors.ink }}>
                    {isSubscribed ? `Watch ${courseTitle}` : "Subscribe to watch"}
                </Typography>
            </Box>

            {isSubscribed ? (
                <Box sx={{ maxWidth: 480, mx: "auto", textAlign: "center" }}>
                    {hasContent ? (
                        <Button
                            component={RouterLink}
                            to={`/learn/${courseId}`}
                            startIcon={<PlayArrowRoundedIcon />}
                            sx={{
                                px: 4, py: 1.4,
                                borderRadius: "999px",
                                color: "#fff", fontWeight: 700, fontSize: "0.98rem",
                                background: colors.indigo,
                                "&:hover": { background: colors.indigoDark },
                            }}
                        >
                            Open course player
                        </Button>
                    ) : (
                        <Typography sx={{ color: "#999" }}>
                            Lessons for this course are coming soon.
                        </Typography>
                    )}
                </Box>
            ) : (
                <Box sx={{
                    maxWidth: 480, mx: "auto",
                    p: { xs: 3, md: 4 },
                    borderRadius: "24px",
                    textAlign: "center",
                    background: `linear-gradient(135deg, ${colors.indigoDeeper}, ${colors.indigoDeep})`,
                    color: "#fff",
                }}>
                    <LockRoundedIcon sx={{ fontSize: 36, color: colors.lavender, mb: 1.5 }} />
                    <Typography sx={{ fontWeight: 700, fontSize: "1.15rem" }}>
                        This course is part of your all-access membership
                    </Typography>
                    <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                        Subscribe for {MONTHLY_PRICE_DISPLAY}/month to unlock every course,
                        including {courseTitle}. Cancel anytime.
                    </Typography>
                    <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
                        <Button
                            component={RouterLink}
                            to="/pricing"
                            endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                            sx={{
                                px: 3.2, py: 1.3,
                                borderRadius: "999px",
                                color: colors.indigoDeep, fontWeight: 700,
                                background: "#fff",
                                "&:hover": { background: "#f0f0f0" },
                            }}
                        >
                            Become a member
                        </Button>
                    </Stack>
                </Box>
            )}
        </Box>
    );
};

export default CourseAccessGate;
