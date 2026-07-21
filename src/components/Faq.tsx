import React, { useState } from "react";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box, Chip, Container, Grid, Stack, Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import FadeInOnScroll from "./FadeInOnScroll";
import { colors } from "../theme/colors";

const faqData = [
    {
        category: "About the membership",
        emoji: "01",
        questions: [
            { q: "What is Self Craft Skills?", a: "Self Craft Skills is an online learning membership. One simple monthly subscription unlocks every course on the platform, so you can learn practical, real-world skills at your own pace." },
            { q: "How does the subscription work?", a: "You pay one low monthly price and get unlimited access to every course. It's billed monthly and you can cancel anytime — there's no lock-in and no per-course payments." },
            { q: "What do I get with my membership?", a: "Unlimited access to all courses, new courses added regularly, downloadable resources and templates, a certificate of completion for each course, and access to our learner community." },
        ],
    },
    {
        category: "Courses and learning",
        emoji: "02",
        questions: [
            { q: "Who is this for?", a: "Students, working professionals, creators, and lifelong learners who want to build practical AI, content, and communication skills — whether you're starting from zero or levelling up." },
            { q: "What courses do you currently offer?", a: "We currently offer AI Unlocked: Zero to Hero, a beginner-friendly course on ChatGPT and AI productivity, with Content Creation and Communication Skills courses on the way. Everything is included in your membership." },
            { q: "How are courses delivered?", a: "Courses are 100% recorded video lessons you can watch on demand, anytime, from any device — organised into clear modules so you always know what to learn next." },
            { q: "Do I need prior experience to join?", a: "No. Our courses are beginner-friendly and structured step by step. All you need is interest and willingness to learn." },
            { q: "Can I learn at my own pace?", a: "Yes. Every lesson is recorded and available on demand, so you can watch, pause, and rewatch whenever it suits you — and pick up right where you left off." },
        ],
    },
    {
        category: "Billing and refunds",
        emoji: "03",
        questions: [
            { q: "How do I become a member?", a: "Create an account, choose the membership on our pricing page, and pay securely through Razorpay. Access is unlocked automatically the moment your payment succeeds." },
            { q: "Can I cancel anytime?", a: "Yes. You can cancel from your Account page at any time. Cancelling stops all future charges, and you keep access until the end of the period you've already paid for." },
            { q: "What is your refund policy?", a: "If you're not satisfied, you can request a refund of your most recent monthly payment within 7 days by emailing selfcraftskills@gmail.com. Refunds are processed to your original payment method within 3 to 5 business days." },
        ],
    },
];

const Faq = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_e: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ py: { xs: 10, md: 14 } }}>
            <Container maxWidth="lg">
                <FadeInOnScroll>
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
                        <Chip label="FAQ" sx={{
                            backgroundColor: "#f5f5f5", color: "#666",
                            fontWeight: 600, borderRadius: "8px",
                            border: "1px solid rgba(0,0,0,0.06)",
                            mb: 2,
                        }} />
                        <Typography variant="h2" sx={{
                            fontSize: { xs: "2rem", md: "2.8rem" },
                        }}>
                            <Box component="span" sx={{ color: colors.ink }}>Common questions,</Box>{" "}
                            <Box component="span" sx={{ color: colors.indigo }}>answered.</Box>
                        </Typography>
                    </Box>
                </FadeInOnScroll>

                <Grid container spacing={3}>
                    {faqData.map((category, ci) => (
                        <Grid key={category.category} size={{ xs: 12, md: 4 }}>
                            <FadeInOnScroll>
                                <Box sx={{
                                    p: 3,
                                    borderRadius: "20px",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    background: "#fff",
                                    height: "100%",
                                }}>
                                    {/* Category header */}
                                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
                                        <Box sx={{
                                            width: 36, height: 36,
                                            borderRadius: "10px",
                                            background: colors.indigo,
                                            color: "#fff",
                                            display: "grid", placeItems: "center",
                                            fontSize: "0.78rem",
                                            fontWeight: 700,
                                            fontFamily: '"Space Grotesk"',
                                        }}>
                                            {category.emoji}
                                        </Box>
                                        <Typography sx={{
                                            fontFamily: '"Space Grotesk"',
                                            fontWeight: 600,
                                            fontSize: "0.95rem",
                                            color: "#111",
                                        }}>
                                            {category.category}
                                        </Typography>
                                    </Stack>

                                    {/* Questions */}
                                    {category.questions.map((faq, fi) => {
                                        const panelId = `p${ci}-${fi}`;
                                        const isOpen = expanded === panelId;
                                        return (
                                            <Accordion key={panelId}
                                                expanded={isOpen}
                                                onChange={handleChange(panelId)}
                                                disableGutters elevation={0}
                                                sx={{
                                                    mb: 1,
                                                    borderRadius: "12px !important",
                                                    overflow: "hidden",
                                                    border: isOpen ? `1px solid rgba(${colors.indigoRgb}, 0.25)` : "1px solid rgba(0,0,0,0.04)",
                                                    background: isOpen ? colors.lavenderSoft : "#fafafa",
                                                    "&:before": { display: "none" },
                                                    transition: "all 0.2s ease",
                                                }}>
                                                <AccordionSummary
                                                    expandIcon={isOpen
                                                        ? <RemoveRoundedIcon sx={{ fontSize: 18, color: colors.indigo }} />
                                                        : <AddRoundedIcon sx={{ fontSize: 18, color: "#999" }} />
                                                    }
                                                    sx={{ minHeight: 48, px: 2, "& .MuiAccordionSummary-content": { my: 1 } }}>
                                                    <Typography sx={{
                                                        fontWeight: 600, fontSize: "0.86rem",
                                                        color: isOpen ? "#111" : "#444",
                                                        lineHeight: 1.4,
                                                    }}>
                                                        {faq.q}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails sx={{ px: 2, pb: 2 }}>
                                                    <Typography sx={{
                                                        color: "#666", lineHeight: 1.7,
                                                        fontSize: "0.84rem",
                                                    }}>
                                                        {faq.a}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        );
                                    })}
                                </Box>
                            </FadeInOnScroll>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Faq;
