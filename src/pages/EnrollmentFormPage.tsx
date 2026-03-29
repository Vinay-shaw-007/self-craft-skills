import { useEffect, useRef } from "react";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

const COURSE_NAME = "AI Unlocked: Zero to Hero";

// Obscure reference codes — not guessable from one to the other
const PLAN_MAP: Record<string, { label: string; group: string }> = {
    "s7k2xq": {
        label: "Standard Learning Plan",
        group: "https://chat.whatsapp.com/DbGfQfQRW7a4HhDeWX4wmh?mode=gi_t",
    },
    "p9m4vr": {
        label: "Premium Learning Plan",
        group: "https://chat.whatsapp.com/DtGBut6puSu5EGXtBa4Vf1?mode=gi_t",
    },
};

const EnrollmentFormPage = () => {
    const [searchParams] = useSearchParams();
    const hasOpened = useRef(false);

    const ref = searchParams.get("ref") ?? "";
    const planData = PLAN_MAP[ref];

    useEffect(() => {
        if (planData && !hasOpened.current) {
            hasOpened.current = true;
            window.open(planData.group, "_blank", "noopener,noreferrer");
        }
    }, [planData]);

    if (!planData) {
        return (
            <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 } }}>
                <Paper sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: "20px",
                    textAlign: "center",
                    border: "1px solid rgba(211, 47, 47, 0.2)",
                }}>
                    <ErrorOutlineRoundedIcon sx={{ fontSize: 56, color: "#d32f2f", mb: 2 }} />

                    <Typography variant="h5" sx={{
                        fontFamily: '"Space Grotesk"',
                        fontWeight: 700,
                        color: "#111",
                        mb: 1,
                    }}>
                        Invalid or Missing Payment
                    </Typography>

                    <Typography sx={{ color: "#666", lineHeight: 1.7, mb: 3 }}>
                        We couldn't verify your payment. Please complete payment
                        from the course page to access your WhatsApp group.
                    </Typography>

                    <Button
                        component="a"
                        href="/courses/ai-unlocked#pricing-plans"
                        fullWidth
                        sx={{
                            py: 1.3,
                            borderRadius: "12px",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            color: "#fff",
                            background: "#111",
                            "&:hover": { background: "#222" },
                        }}
                    >
                        Go to Pricing Plans
                    </Button>
                </Paper>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 } }}>
            <Paper sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                textAlign: "center",
                border: "1px solid rgba(0,184,148,0.2)",
            }}>
                <CheckCircleRoundedIcon sx={{ fontSize: 56, color: "#00B894", mb: 2 }} />

                <Typography variant="h5" sx={{
                    fontFamily: '"Space Grotesk"',
                    fontWeight: 700,
                    color: "#111",
                    mb: 1,
                }}>
                    Enrollment Successful!
                </Typography>

                <Typography sx={{ color: "#666", lineHeight: 1.7, mb: 1 }}>
                    Thank you for enrolling in <strong>{COURSE_NAME}</strong>
                     — <strong>{planData.label}</strong>.
                </Typography>

                <Typography sx={{ color: "#999", fontSize: "0.88rem", lineHeight: 1.7, mb: 3 }}>
                    Your WhatsApp group should open automatically.
                    If it didn't, use the button below to join.
                </Typography>

                <Stack spacing={1.5}>
                    <Button
                        component="a"
                        href={planData.group}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        sx={{
                            py: 1.3,
                            borderRadius: "12px",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            color: "#fff",
                            background: "#25D366",
                            "&:hover": { background: "#1fb855" },
                        }}
                    >
                        Join WhatsApp Group
                    </Button>

                    <Button
                        component="a"
                        href="/courses/ai-unlocked"
                        fullWidth
                        sx={{
                            py: 1.3,
                            borderRadius: "12px",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            color: "#666",
                            border: "1px solid rgba(0,0,0,0.1)",
                            "&:hover": { background: "#f5f5f5" },
                        }}
                    >
                        Back to Course
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
};

export default EnrollmentFormPage;
