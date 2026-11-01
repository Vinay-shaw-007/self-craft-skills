import React, { useState } from "react";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box, Chip, Container, Grid, Link, Stack, Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";
import { colors } from "../theme/colors";
import { CONSULT_PRICE, ENTRY_AUDIT_PRICE, ENTRY_PRICE, TOP_PRICE } from "../data/servicesData";

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


// The services side of the business answers a different question than the
// membership does — "can you do it for me?" rather than "what will I learn?"
// — so it gets its own block below, instead of a fourth category card the
// three-column grid above has no room for.
const ygmFaq = [
    {
        q: "What is YGM?",
        a: "YGM \u2014 Your Growth Matters \u2014 is the services side of Self Craft Skills. Where the courses teach you to run your own channel, YGM runs it with you: channel management, content strategy, thumbnails, Shorts and editing, handled as a monthly service.",
    },
    {
        q: "Is YGM only for YouTube?",
        a: "No. There are separate monthly plans for YouTube, Instagram and LinkedIn \u2014 use the platform switch on the services page to see each one. They cover different work and are priced separately: uploads, metadata and thumbnails on YouTube, feed posts, carousels, Stories and Reels on Instagram, and ghostwritten posts and carousels on LinkedIn. Work spanning several platforms at once is quoted on scope.",
    },
    {
        q: "How is this different from the membership?",
        a: "They are separate. The membership is a monthly subscription that unlocks the courses so you can learn the skills yourself. YGM is freelance work billed per month or per project, where we do it for you. You can hire YGM without being a member, and being a member doesn't include any service work.",
    },
    {
        q: "What does it cost?",
        a: `Monthly management runs from ${ENTRY_PRICE} to ${TOP_PRICE} per month, depending on the platform and how much strategy and creative support you need. A one-time audit starts at ${ENTRY_AUDIT_PRICE} and a 60-minute consultation is ${CONSULT_PRICE}. Individual thumbnails, posts, carousels and edits are available on a published rate card.`,
    },
    {
        q: "Will you need my Google password?",
        a: "Never. We work through delegated access only \u2014 a Manager or Editor role granted from your Brand Account \u2014 which you can withdraw at any time from YouTube Studio under Settings and Permissions. We don't use shared logins, and we don't touch monetisation, banking or account recovery settings.",
    },
    {
        q: "Do you guarantee subscribers or views?",
        a: "No, and we won't pretend otherwise. Reach depends on your niche, your content and the platform's algorithm, none of which anyone controls. What we commit to is the work itself, done consistently and on time. We also never buy views, subscribers or engagement \u2014 it breaks platform rules and damages the channel it's meant to help.",
    },
    {
        q: "How do we start, and how do I stop?",
        a: "Message us on WhatsApp or email with your channel and what you need, and we'll talk through the right plan before anything is billed. Plans are paid monthly in advance on your signup date, and you can cancel with 15 days' written notice before a renewal date.",
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

                {/* Services block — same card language as the categories above,
                    kept visually part of this page rather than borrowing the
                    green YGM identity from /services. */}
                <FadeInOnScroll>
                    <Box sx={{
                        mt: 3,
                        p: { xs: 2.5, md: 3 },
                        borderRadius: "20px",
                        border: "1px solid rgba(0,0,0,0.06)",
                        background: "#fff",
                    }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
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
                                04
                            </Box>
                            <Typography sx={{
                                fontFamily: '"Space Grotesk"',
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                color: "#111",
                            }}>
                                Hiring us — YGM services
                            </Typography>
                        </Stack>
                        <Typography sx={{
                            mb: 2.5, color: "#666", fontSize: "0.86rem", lineHeight: 1.7,
                            maxWidth: 680,
                        }}>
                            Alongside the courses we take on social media and YouTube growth
                            as a done-for-you service, under the name YGM — Your Growth
                            Matters.
                        </Typography>

                        <Grid container spacing={{ xs: 0, md: 2 }}>
                            {[ygmFaq.slice(0, 4), ygmFaq.slice(4)].map((column, colIndex) => (
                                <Grid key={colIndex} size={{ xs: 12, md: 6 }}>
                                    {column.map((faq, fi) => {
                                        const panelId = `ygm-${colIndex}-${fi}`;
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
                                </Grid>
                            ))}
                        </Grid>

                        <Typography sx={{ mt: 2, fontSize: "0.84rem", color: "#666", lineHeight: 1.8 }}>
                            Full service list, plans and rate card on the{" "}
                            <Link component={RouterLink} to="/services" sx={{ color: colors.indigo, fontWeight: 600 }}>
                                services page
                            </Link>
                            , and the small print in the{" "}
                            <Link component={RouterLink} to="/ygm-terms" sx={{ color: colors.indigo, fontWeight: 600 }}>
                                YGM service terms
                            </Link>
                            .
                        </Typography>
                    </Box>
                </FadeInOnScroll>
            </Container>
        </Box>
    );
};

export default Faq;
