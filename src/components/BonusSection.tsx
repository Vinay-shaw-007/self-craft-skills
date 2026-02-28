import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import FadeInOnScroll from "./FadeInOnScroll";
import { startEnrollmentPayment } from "../utils/enrollmentPayment";

interface PricingPlansSectionProps {
    courseTitle: string;
}

interface PlanFeature {
    label: string;
    included: boolean;
}

interface PricingPlan {
    name: string;
    subtitle: string;
    amountDisplay: string;
    amountPaise: number;
    accent: "standard" | "premium";
    icon: React.ReactNode;
    features: PlanFeature[];
    bestValue?: boolean;
}

const pricingPlans: PricingPlan[] = [
    {
        name: "Standard Learning Plan",
        subtitle: "Strong foundation, essential access",
        amountDisplay: "\u20B9579/-",
        amountPaise: 57900,
        accent: "standard",
        icon: <SchoolRoundedIcon />,
        features: [
            { label: "Weekly Live Classes", included: true },
            { label: "Live QnA Sessions", included: true },
            { label: "PDF Course Notes", included: true },
            { label: "Course Video Recording", included: false },
            { label: "Bonus Prompts", included: false },
            { label: "Certification of Completion", included: true },
        ],
    },
    {
        name: "Premium Learning Plan",
        subtitle: "Complete access, faster execution",
        amountDisplay: "\u20B9699/-",
        amountPaise: 69900,
        accent: "premium",
        icon: <WorkspacePremiumRoundedIcon />,
        bestValue: true,
        features: [
            { label: "Weekly Live Classes", included: true },
            { label: "Live QnA Sessions", included: true },
            { label: "PDF Course Notes", included: true },
            { label: "Course Video Recording", included: true },
            { label: "Bonus Prompts", included: true },
            { label: "Certification of Completion", included: true },
        ],
    },
];

const PricingPlansSection = ({ courseTitle }: PricingPlansSectionProps) => {
    return (
        <Box id="pricing-plans" sx={{ py: { xs: 7, md: 10 } }}>
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 3.5, md: 5 } }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                color: "#0b1f4a",
                                fontSize: { xs: "2rem", md: "2.65rem" },
                            }}
                        >
                            Pricing Plans
                        </Typography>
                        <Box
                            sx={{
                                width: 122,
                                height: 4,
                                borderRadius: "999px",
                                mx: "auto",
                                mt: 1.2,
                                background:
                                    "linear-gradient(90deg, #0ea5e9 0%, #1d4ed8 100%)",
                            }}
                        />
                        <Typography
                            sx={{
                                mt: 1.6,
                                color: "#475569",
                                maxWidth: 680,
                                mx: "auto",
                                lineHeight: 1.7,
                                fontSize: { xs: "0.95rem", md: "1rem" },
                            }}
                        >
                            Pick the plan that matches your learning depth for{" "}
                            <Box component="span" sx={{ fontWeight: 600 }}>
                                {courseTitle}
                            </Box>
                            .
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "repeat(2, minmax(0, 1fr))",
                            },
                            gap: { xs: 2.2, md: 3.2 },
                        }}
                    >
                        {pricingPlans.map((plan) => {
                            const isPremium = plan.accent === "premium";

                            return (
                                <Paper
                                    key={plan.name}
                                    elevation={0}
                                    sx={{
                                        position: "relative",
                                        p: { xs: 2.2, md: 3 },
                                        borderRadius: "22px",
                                        overflow: "hidden",
                                        border: isPremium
                                            ? "1px solid rgba(79, 149, 255, 0.55)"
                                            : "1px solid #d9e0ef",
                                        background: isPremium
                                            ? "linear-gradient(165deg, #03143a 0%, #062a74 52%, #0a3aa0 100%)"
                                            : "linear-gradient(180deg, #fbfdff 0%, #f4f7ff 100%)",
                                        color: isPremium ? "#f8fbff" : "#0f172a",
                                        boxShadow: isPremium
                                            ? "0 20px 44px rgba(8, 35, 98, 0.42)"
                                            : "0 12px 30px rgba(15, 23, 42, 0.11)",
                                        animation: isPremium
                                            ? "premiumBreath 3.8s ease-in-out infinite"
                                            : "none",
                                        "@keyframes premiumBreath": {
                                            "0%, 100%": {
                                                transform:
                                                    "translateY(0px) scale(1)",
                                                boxShadow:
                                                    "0 18px 42px rgba(8, 35, 98, 0.35)",
                                            },
                                            "50%": {
                                                transform:
                                                    "translateY(-5px) scale(1.014)",
                                                boxShadow:
                                                    "0 28px 54px rgba(8, 35, 98, 0.48)",
                                            },
                                        },
                                        ...(isPremium
                                            ? {
                                                "&::before": {
                                                    content: '""',
                                                    position: "absolute",
                                                    top: -120,
                                                    left: -250,
                                                    width: 220,
                                                    height: "160%",
                                                    background:
                                                        "linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 52%, rgba(255,255,255,0) 100%)",
                                                    transform: "rotate(16deg)",
                                                    animation:
                                                        "premiumShine 3.2s linear infinite",
                                                    pointerEvents: "none",
                                                },
                                                "@keyframes premiumShine": {
                                                    "0%": {
                                                        transform:
                                                            "translateX(-130%) rotate(16deg)",
                                                    },
                                                    "100%": {
                                                        transform:
                                                            "translateX(430%) rotate(16deg)",
                                                    },
                                                },
                                            }
                                            : {}),
                                    }}
                                >
                                    {plan.bestValue ? (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 18,
                                                right: -42,
                                                width: 170,
                                                textAlign: "center",
                                                transform: "rotate(42deg)",
                                                background:
                                                    "linear-gradient(90deg, #5b8cff 0%, #7ba5ff 100%)",
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: "0.72rem",
                                                letterSpacing: "0.08em",
                                                py: 0.45,
                                                boxShadow:
                                                    "0 10px 22px rgba(51, 102, 255, 0.38)",
                                                zIndex: 2,
                                            }}
                                        >
                                            BEST VALUE
                                        </Box>
                                    ) : null}

                                    <Stack
                                        direction="row"
                                        spacing={1.2}
                                        alignItems="center"
                                    >
                                        <Box
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: isPremium
                                                    ? "rgba(130, 184, 255, 0.24)"
                                                    : "#dbeafe",
                                                color: isPremium
                                                    ? "#dbeafe"
                                                    : "#1d4ed8",
                                            }}
                                        >
                                            {plan.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    lineHeight: 1.2,
                                                    fontSize: {
                                                        xs: "1.18rem",
                                                        md: "1.38rem",
                                                    },
                                                }}
                                            >
                                                {plan.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    mt: 0.35,
                                                    color: isPremium
                                                        ? "rgba(224, 237, 255, 0.82)"
                                                        : "#64748b",
                                                }}
                                            >
                                                {plan.subtitle}
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    <Typography
                                        sx={{
                                            mt: 2.2,
                                            mb: 0.4,
                                            fontWeight: 300,
                                            fontSize: { xs: "2.15rem", md: "2.65rem" },
                                            letterSpacing: "0.02em",
                                            lineHeight: 1.08,
                                        }}
                                    >
                                        {plan.amountDisplay}
                                    </Typography>

                                    <Stack spacing={1.05} sx={{ my: 2.3 }}>
                                        {plan.features.map((feature) => (
                                            <Stack
                                                key={feature.label}
                                                direction="row"
                                                spacing={1}
                                                alignItems="center"
                                            >
                                                {feature.included ? (
                                                    <CheckCircleRoundedIcon
                                                        sx={{
                                                            color: isPremium
                                                                ? "#93c5fd"
                                                                : "#2563eb",
                                                            fontSize: "1.1rem",
                                                        }}
                                                    />
                                                ) : (
                                                    <CloseRoundedIcon
                                                        sx={{
                                                            color: isPremium
                                                                ? "rgba(191, 210, 244, 0.85)"
                                                                : "#94a3b8",
                                                            fontSize: "1.1rem",
                                                        }}
                                                    />
                                                )}
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.96rem",
                                                        lineHeight: 1.45,
                                                        textDecoration:
                                                            feature.included
                                                                ? "none"
                                                                : "line-through",
                                                        textDecorationThickness:
                                                            feature.included
                                                                ? "0px"
                                                                : "1.6px",
                                                        color: isPremium
                                                            ? feature.included
                                                                ? "#eef6ff"
                                                                : "rgba(207, 225, 251, 0.75)"
                                                            : feature.included
                                                                ? "#0f172a"
                                                                : "#64748b",
                                                    }}
                                                >
                                                    {feature.label}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => {
                                            void startEnrollmentPayment({
                                                amountPaise: plan.amountPaise,
                                                planName: plan.name,
                                            });
                                        }}
                                        sx={{
                                            mt: 1,
                                            borderRadius: "999px",
                                            py: 1.1,
                                            textTransform: "none",
                                            fontWeight: 700,
                                            fontSize: "1rem",
                                            color: "#fff",
                                            background: isPremium
                                                ? "linear-gradient(90deg, #4a74ff 0%, #5e88ff 100%)"
                                                : "linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)",
                                            boxShadow: isPremium
                                                ? "0 10px 22px rgba(76, 124, 255, 0.4)"
                                                : "0 9px 20px rgba(37, 99, 235, 0.3)",
                                            "&:hover": {
                                                background: isPremium
                                                    ? "linear-gradient(90deg, #3f67eb 0%, #5278e0 100%)"
                                                    : "linear-gradient(90deg, #1d4ed8 0%, #2563eb 100%)",
                                            },
                                        }}
                                    >
                                        Enroll Now
                                    </Button>
                                </Paper>
                            );
                        })}
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default PricingPlansSection;
