import React, { useState } from "react";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box, Chip, Container, Grid, Stack, Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import FadeInOnScroll from "./FadeInOnScroll";

const faqData = [
    {
        category: "About the academy",
        emoji: "01",
        questions: [
            { q: "What is Self-Craft Skills?", a: "Self Craft Skills is a knowledge-sharing platform where you can learn about various fields. We aim to make learning simple, practical, and useful for learners." },
            { q: "Why should I choose Self-Craft Skills?", a: "We focus on application-based learning with live guidance and mentorship. Instead of just theory, you'll gain knowledge you can actually use in studies, work, and everyday life." },
            { q: "What is the vision of Self-Craft Skills?", a: "Our goal is to become a leading platform for modern and practical learning through our courses." },
        ],
    },
    {
        category: "Courses and learning",
        emoji: "02",
        questions: [
            { q: "Who can join the courses?", a: "Our programs are designed for both students and working professionals who want to improve productivity, communication, and career readiness." },
            { q: "What courses do you currently offer?", a: "We currently offer AI Unlocked: Zero to Hero, a 4-week beginner-friendly course on ChatGPT and AI productivity. Upcoming programs include Content Creation and Communication Skills." },
            { q: "How are classes conducted?", a: "Sessions are held live online and include interactive exercises, practical demonstrations, and group discussions. Learners also stay connected through our WhatsApp community." },
            { q: "Do I need prior experience to join?", a: "No. Our courses are beginner-friendly and structured step by step. All you need is interest and willingness to learn." },
            { q: "Will I get class recordings?", a: "Yes. Session recordings will be available for revision or if you miss a class." },
        ],
    },
    {
        category: "Registration and refund",
        emoji: "03",
        questions: [
            { q: "How do I register for a course?", a: 'You can register directly through our website via the "Enroll Now" button or via the WhatsApp registration link. Payments are processed securely.' },
            { q: "Is there a refund policy?", a: "Yes. A full refund is available before the course batch starts. Once classes begin, fees are non-refundable." },
            { q: "How can I claim my refund?", a: "Email selfcraftskills@gmail.com before the batch start date with your payment details. Refunds are processed back to the original payment method within 3 to 5 business days." },
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
                            color: "#111",
                        }}>
                            Common questions from{" "}
                            <Box component="span" sx={{
                                background: "linear-gradient(135deg, #6C5CE7, #0984E3)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>new learners</Box>.
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
                                            background: "#111",
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
                                                    border: isOpen ? "1px solid rgba(108, 92, 231, 0.15)" : "1px solid rgba(0,0,0,0.04)",
                                                    background: isOpen ? "#faf9ff" : "#fafafa",
                                                    "&:before": { display: "none" },
                                                    transition: "all 0.2s ease",
                                                }}>
                                                <AccordionSummary
                                                    expandIcon={isOpen
                                                        ? <RemoveRoundedIcon sx={{ fontSize: 18, color: "#6C5CE7" }} />
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
