import { useEffect, useRef } from "react";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const COURSE_NAME = "AI Unlocked: Zero to Hero";

const GROUP_LINKS: Record<string, string> = {
    standard: "https://chat.whatsapp.com/DbGfQfQRW7a4HhDeWX4wmh?mode=gi_t",
    premium: "https://chat.whatsapp.com/DtGBut6puSu5EGXtBa4Vf1?mode=gi_t",
};

const PLAN_LABELS: Record<string, string> = {
    standard: "Standard Learning Plan",
    premium: "Premium Learning Plan",
};

const EnrollmentFormPage = () => {
    const [searchParams] = useSearchParams();
    const plan = searchParams.get("plan")?.toLowerCase() ?? "";
    const groupLink = GROUP_LINKS[plan] || GROUP_LINKS.standard;
    const planLabel = PLAN_LABELS[plan] || "";
    const hasOpened = useRef(false);

    useEffect(() => {
        if (!hasOpened.current) {
            hasOpened.current = true;
            window.open(groupLink, "_blank", "noopener,noreferrer");
        }
    }, [groupLink]);

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
                    {planLabel && <> — <strong>{planLabel}</strong></>}.
                </Typography>

                <Typography sx={{ color: "#999", fontSize: "0.88rem", lineHeight: 1.7, mb: 3 }}>
                    Your WhatsApp group should open automatically.
                    If it didn't, use the button below to join.
                </Typography>

                <Stack spacing={1.5}>
                    <Button
                        component="a"
                        href={groupLink}
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
