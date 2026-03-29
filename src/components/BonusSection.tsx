import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import FadeInOnScroll from "./FadeInOnScroll";

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
    paymentLink: string;
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
        paymentLink: "https://rzp.io/rzp/stnplan",
        accent: "standard",
        icon: <SchoolRoundedIcon sx={{ fontSize: 22 }} />,
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
        paymentLink: "https://rzp.io/rzp/prmplan",
        accent: "premium",
        icon: <WorkspacePremiumRoundedIcon sx={{ fontSize: 22 }} />,
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
        <Box id="pricing-plans" sx={{ py: { xs: 8, md: 10 } }}>
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
                        <Typography sx={{
                            fontSize: "0.72rem", fontWeight: 600,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            color: "#999", mb: 1,
                        }}>
                            Investment
                        </Typography>
                        <Typography variant="h3" sx={{
                            fontSize: { xs: "2rem", md: "2.6rem" },
                            color: "#111",
                        }}>
                            Pricing Plans
                        </Typography>
                        <Typography sx={{
                            mt: 1.5, color: "#666",
                            maxWidth: 600, mx: "auto",
                            lineHeight: 1.7, fontSize: "0.95rem",
                        }}>
                            Pick the plan that matches your learning depth for{" "}
                            <Box component="span" sx={{ fontWeight: 600, color: "#111" }}>
                                {courseTitle}
                            </Box>
                            .
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                        gap: 2.5,
                        maxWidth: 800,
                        mx: "auto",
                    }}>
                        {pricingPlans.map((plan) => {
                            const isPremium = plan.accent === "premium";

                            return (
                                <Box key={plan.name} sx={{
                                    position: "relative",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    ...(isPremium ? {
                                        p: 0.5,
                                        background: "linear-gradient(135deg, #6C5CE7, #0984E3, #00B894)",
                                    } : {
                                        border: "1px solid rgba(0,0,0,0.06)",
                                    }),
                                }}>
                                    <Box sx={{
                                        p: { xs: 2.5, md: 3 },
                                        borderRadius: isPremium ? "17px" : "20px",
                                        background: isPremium ? "#0a0a0a" : "#fff",
                                        color: isPremium ? "#fff" : "#111",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                        {plan.bestValue && (
                                            <Box sx={{
                                                position: "absolute",
                                                top: 16, right: -36,
                                                width: 150,
                                                textAlign: "center",
                                                transform: "rotate(42deg)",
                                                background: "#fff",
                                                color: "#111",
                                                fontWeight: 700,
                                                fontSize: "0.68rem",
                                                letterSpacing: "0.08em",
                                                py: 0.4,
                                                zIndex: 2,
                                            }}>
                                                BEST VALUE
                                            </Box>
                                        )}

                                        <Stack direction="row" spacing={1.2} alignItems="center">
                                            <Box sx={{
                                                width: 40, height: 40,
                                                borderRadius: "12px",
                                                display: "grid", placeItems: "center",
                                                backgroundColor: isPremium
                                                    ? "rgba(255,255,255,0.08)"
                                                    : "#f3f1ff",
                                                color: isPremium ? "#fff" : "#6C5CE7",
                                            }}>
                                                {plan.icon}
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    fontFamily: '"Space Grotesk"',
                                                    fontWeight: 700,
                                                    fontSize: "1.05rem",
                                                    lineHeight: 1.2,
                                                }}>
                                                    {plan.name}
                                                </Typography>
                                                <Typography sx={{
                                                    mt: 0.3,
                                                    color: isPremium
                                                        ? "rgba(255,255,255,0.4)"
                                                        : "#999",
                                                    fontSize: "0.82rem",
                                                }}>
                                                    {plan.subtitle}
                                                </Typography>
                                            </Box>
                                        </Stack>

                                        <Typography sx={{
                                            mt: 2.5, mb: 0.5,
                                            fontFamily: '"Space Grotesk"',
                                            fontWeight: 800,
                                            fontSize: { xs: "2.2rem", md: "2.6rem" },
                                            lineHeight: 1,
                                        }}>
                                            {plan.amountDisplay}
                                        </Typography>

                                        <Stack spacing={0.8} sx={{ my: 2.5, flexGrow: 1 }}>
                                            {plan.features.map((feature) => (
                                                <Stack key={feature.label} direction="row" spacing={1} alignItems="center">
                                                    {feature.included ? (
                                                        <CheckRoundedIcon sx={{
                                                            color: isPremium ? "#00B894" : "#00B894",
                                                            fontSize: 18,
                                                        }} />
                                                    ) : (
                                                        <CloseRoundedIcon sx={{
                                                            color: isPremium
                                                                ? "rgba(255,255,255,0.2)"
                                                                : "#ccc",
                                                            fontSize: 18,
                                                        }} />
                                                    )}
                                                    <Typography sx={{
                                                        fontSize: "0.9rem",
                                                        lineHeight: 1.45,
                                                        textDecoration: feature.included ? "none" : "line-through",
                                                        color: isPremium
                                                            ? feature.included ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)"
                                                            : feature.included ? "#444" : "#bbb",
                                                    }}>
                                                        {feature.label}
                                                    </Typography>
                                                </Stack>
                                            ))}
                                        </Stack>

                                        <Button
                                            fullWidth
                                            component="a"
                                            href={plan.paymentLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                mt: 1, py: 1.3,
                                                borderRadius: "12px",
                                                fontWeight: 700,
                                                fontSize: "0.95rem",
                                                ...(isPremium ? {
                                                    color: "#111",
                                                    background: "#fff",
                                                    "&:hover": { background: "#f0f0f0" },
                                                } : {
                                                    color: "#fff",
                                                    background: "#111",
                                                    "&:hover": { background: "#222" },
                                                }),
                                            }}
                                        >
                                            Enroll Now
                                        </Button>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default PricingPlansSection;
