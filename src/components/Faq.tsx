// src/components/Faq.tsx
import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FadeInOnScroll from "./FadeInOnScroll";

const faqData = [
    {
        category: "🏫 About the Academy",
        questions: [
            {
                q: "What is Self-Craft Skills?",
                a: "Self-Craft Skills is an online learning academy that focuses on real-world knowledge and personal growth. Our programs blend skill development with mindset training to prepare learners for future opportunities.",
            },
            {
                q: "Why should I choose Self-Craft Skills?",
                a: "We focus on application-based learning with live guidance and mentorship. Instead of just theory, you’ll gain knowledge you can actually use in studies, work, and everyday life.",
            },
            {
                q: "What’s the vision of Self-Craft Skills?",
                a: "Our goal is to become a leading platform for modern & practical learning, through our courses",
            },
        ],
    },
    {
        category: "📚 Courses & Learning",
        questions: [
            {
                q: "Who can join the courses?",
                a: "Our programs are designed for both students and working professionals who want to improve productivity, communication, and career readiness.",
            },
            {
                q: "What courses do you currently offer?",
                a: "We currently offer AI Unlocked: Zero to Hero, a 6-week beginner-friendly course on ChatGPT and AI productivity. Upcoming programs include Content Creation and Communication Skills.",
            },
            {
                q: "How are classes conducted?",
                a: "Sessions are held live online (via Zoom) and include interactive exercises, practical demonstrations, and group discussions. Learners also stay connected through our WhatsApp community.",
            },
            {
                q: "Do I need prior experience to join?",
                a: "No. Our courses are beginner-friendly and structured step by step. All you need is interest and willingness to learn.",
            },
            {
                q: "Will I get class recordings?",
                a: "Yes. Session recordings will be available for revision or if you miss a class.",
            },
            {
                q: "Do I receive a certificate after completion?",
                a: "Yes. A certificate of completion is provided at the end of the course.",
            },
        ],
    },
    {
        category: "📝 Registration, Payments & Refund",
        questions: [
            {
                q: "How do I register for a course?",
                a: 'You can register directly through our website via the "Enroll Now" button or via the WhatsApp registration link. Payments are processed securely.',
            },
            {
                q: "Is there a refund policy?",
                a: "Yes. A full refund is available before the course batch starts. Once classes begin, fees are non-refundable.",
            },
            {
                q: "How to claim your refund?",
                a: "• A refund can be requested before the batch start date. • Once the batch has started, no refund will be issued. To claim “no-question-asked” refund, please follow the steps below: 1. Drop an email on: selfcraftskills+support@gmail.com with a subject line: “Online course refund | Registered email id”. 2. Attach your payment details (transaction ID / screenshot).   3. Refunds will be processed to the original payment method within 3–5 business days.",
            },
        ],
    },
    {
        category: "🎥 Learning vs Free Content",
        questions: [
            {
                q: "How is this different from free YouTube tutorials?",
                a: "Free videos often lack structure. Our programs are organized step by step, include live mentorship, and give you direct support throughout your journey.",
            },
        ],
    },
];

const Faq = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box
            // sx={{
            //     py: { xs: 6, md: 10 },
            //     backgroundColor: "#ffffffff",
            // }}
            sx={{
            //     py: { xs: 6, md: 10 },
            // backgroundColor: "white",
            // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23dbe9f6' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,          
           background: "linear-gradient(180deg, #EDF5FD 0%, #FFFFFF 70%)",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='none' stroke='%23e5e5e5' stroke-width='1'%3E%3Cpath d='M 40 0 L 0 0 0 40'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "25px 25px",
                backgroundRepeat: "repeat",
        }}
            
        >
            <Container maxWidth="md">
                <FadeInOnScroll>
                    <Typography
                        variant="h4"
                        component="h2"
                        align="center"
                        fontWeight="bold"
                        fontFamily={"revert-layer"}
                        gutterBottom
                    >
                        ❓ Frequently Asked Questions
                    </Typography>

                    {faqData.map((category, categoryIndex) => (
                        <Box key={categoryIndex} sx={{ mt: 4 }}>
                            <Typography
                                variant="h5"
                                component="h3"
                                fontWeight={500}
                                sx={{ mb: 2 }}
                            >
                                {category.category}
                            </Typography>
                            <FadeInOnScroll>
                                {category.questions.map((faq, faqIndex) => {
                                    const panelId = `panel${categoryIndex}-${faqIndex}`;
                                    return (
                                        <Accordion
                                            key={panelId}
                                            expanded={expanded === panelId}
                                            onChange={handleChange(panelId)}
                                            elevation={1}
                                            sx={{
                                                py: 1,
                                                mb: 1.5, // Add margin between accordions
                                                borderRadius: "12px",
                                                "&:before": { display: "none" },
                                                // Add the transition and hover effects
                                                transition:
                                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                                "&:hover": {
                                                    transform:
                                                        "translateY(-8px)",
                                                    boxShadow:
                                                        "0 12px 30px rgba(0,0,0,0.1)",
                                                },
                                            }} // Removes the top border line
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`${panelId}-content`}
                                                id={`${panelId}-header`}
                                            >
                                                <Typography fontWeight={500}>
                                                    {faq.q}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography color="text.secondary">
                                                    {faq.a}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                })}
                            </FadeInOnScroll>
                        </Box>
                    ))}
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default Faq;
