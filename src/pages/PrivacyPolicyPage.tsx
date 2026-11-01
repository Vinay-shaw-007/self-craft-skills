// src/pages/PrivacyPolicyPage.tsx
import { useEffect } from "react";
import {
    Container,
    Typography,
    Box,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const PrivacyPolicyPage = () => {
    // This hook scrolls the page to the top when it loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F8F9FA" }}>
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    component="h1"
                    fontWeight="bold"
                    gutterBottom
                >
                    Privacy Policy
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Effective Date: July 20, 2026 · Last updated: October 26,
                    2026
                </Typography>

                <Typography paragraph color="text.secondary">
                    At Self Craft Skills, we respect your privacy and are
                    committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, and safeguard
                    your data when you interact with our website, subscribe to
                    our membership, or hire us for YouTube, Instagram or
                    LinkedIn growth services under YGM — Your Growth Matters. Sections 1
                    to 4 apply to everyone; section 5 applies additionally to
                    service clients.
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2 }}
                >
                    1. Information We Collect
                </Typography>
                <Typography paragraph color="text.secondary">
                    When you create an account, subscribe, or contact us, we may
                    collect the following information:
                </Typography>
                <List>
                    {[
                        "Full Name",
                        "Email Address",
                        "Phone Number / WhatsApp Number",
                        "Age (for course eligibility, if applicable)",
                    ].map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemIcon>
                                <CheckCircleOutlineIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2 }}
                >
                    2. How We Use Your Information
                </Typography>
                <Typography paragraph color="text.secondary">
                    Your information is used strictly for:
                </Typography>
                <List>
                    {[
                        "Creating and managing your membership account",
                        "Sending course updates, reminders, and learning resources",
                        "Providing customer support and responding to queries",
                        "Sharing important announcements related to Self Craft Skills",
                    ].map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemIcon>
                                <CheckCircleOutlineIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                <Typography paragraph sx={{ mt: 2 }} color="text.secondary">
                    We do not sell, rent, or share your personal data with
                    third-party marketers.
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2 }}
                >
                    3. Payments & Data Security
                </Typography>
                <Typography paragraph color="text.secondary">
                    Payments are processed securely through trusted third-party
                    payment gateways such as Razorpay.
                </Typography>
                <Typography paragraph color="text.secondary">
                    We do not store or process sensitive payment information such
                    as card details, UPI credentials, or banking data.
                </Typography>
                <Typography paragraph color="text.secondary">
                    Reasonable security measures are taken to protect your
                    personal information from unauthorized access.
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2 }}
                >
                    4. Your Rights
                </Typography>
                <Typography paragraph color="text.secondary">
                    You have the right to:
                </Typography>
                <List>
                    {[
                        "Request access to the personal data we hold about you",
                        "Request corrections to inaccurate or incomplete information",
                        "Request deletion of your personal data after course completion, subject to legal and operational requirements",
                    ].map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemIcon>
                                <CheckCircleOutlineIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 5, mb: 2 }}
                >
                    5. YGM Service Clients
                </Typography>
                <Typography paragraph color="text.secondary">
                    This section applies if you hire us for YouTube, Instagram or
                    LinkedIn growth work under YGM — Your Growth Matters. Working on
                    a channel or profile on your behalf means handling more of your
                    data than a course membership does, so it is set out separately
                    here. The commercial side of that relationship is covered by
                    our{" "}
                    <Link component={RouterLink} to="/ygm-terms">
                        YGM Service Terms
                    </Link>
                    .
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mt: 3, mb: 1 }}
                >
                    What we collect from service clients
                </Typography>
                <List>
                    {[
                        "Your name, brand or business name, email address and WhatsApp or phone number",
                        "Billing details needed to raise invoices and record payments",
                        "Links to your channel and social profiles, and the goals and context you share with us during onboarding",
                        "Content and assets you give us to work with, such as raw footage, scripts, notes, logos and brand guidelines",
                        "Performance data for the account we work on — from YouTube Studio, from Instagram Insights, or from the analytics export you share with us on LinkedIn — including views, reach, impressions, watch time, click-through rate, retention, traffic sources and the aggregated audience reports the platform provides",
                        "Comments and direct messages sent to your account, where your plan includes community management",
                    ].map((item) => (
                        <ListItem key={item} disablePadding alignItems="flex-start">
                            <ListItemIcon sx={{ mt: 0.5 }}>
                                <CheckCircleOutlineIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                <Typography paragraph color="text.secondary">
                    We only ask for what the work requires. If you send us something we do
                    not need, we will tell you and delete it.
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mt: 3, mb: 1 }}
                >
                    Access to your channels and accounts
                </Typography>
                <Typography paragraph color="text.secondary">
                    We work through each platform's own delegated-access system, or through
                    no access at all. Which of those applies depends on the platform, because
                    they do not all work the same way:
                </Typography>
                <List>
                    {[
                        "YouTube — a Manager or Editor role granted from your Brand Account, which you can withdraw at any time in YouTube Studio under Settings and Permissions",
                        "Instagram — a task-scoped invitation through Meta Business Suite, which you can withdraw at any time in Business Settings under People. If you do not use Meta Business Suite, we deliver finished posts for you to publish instead",
                        "LinkedIn — no access at all. LinkedIn does not offer delegated access to a personal profile, so we write and you publish. If you would rather we published for you, you connect your own account to a scheduling tool and give us a seat on that tool, never on LinkedIn itself",
                    ].map((item) => (
                        <ListItem key={item} disablePadding alignItems="flex-start">
                            <ListItemIcon sx={{ mt: 0.5 }}>
                                <CheckCircleOutlineIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                <Typography paragraph color="text.secondary">
                    <strong>
                        We will never ask for your Google, Instagram or LinkedIn password,
                        or for a one-time code,
                    </strong>{" "}
                    and we do not use shared logins.
                </Typography>
                <Typography paragraph color="text.secondary">
                    Where you have granted us access, we do not:
                </Typography>
                <List>
                    {[
                        "View, change or download anything outside the channel, profile or account you have given us access to",
                        "Open or alter your monetisation, AdSense, ad account or payout settings",
                        "Change your account recovery details, email address or password",
                        "Download, export or keep lists of your subscribers, followers, connections, commenters or members",
                    ].map((item) => (
                        <ListItem key={item} disablePadding alignItems="flex-start">
                            <ListItemIcon sx={{ mt: 0.5 }}>
                                <CheckCircleOutlineIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                <Typography paragraph color="text.secondary">
                    Audience information reaches us only as the aggregated reports the
                    platform itself shows — age bands, countries, traffic sources and similar.
                    We cannot see, and do not try to see, the identity of individual viewers.
                    On LinkedIn, where we hold no access at all, performance data reaches us
                    only in the export you choose to share.
                </Typography>
                <Typography paragraph color="text.secondary">
                    Where your plan includes community management, we read the comments and
                    direct messages sent to your account and reply to them from your account.
                    Those messages often contain other people's personal information. We use
                    them only to reply and to flag anything that needs you, we do not export
                    them or build lists from them, and what they tell us about your business
                    is confidential in the same way the rest of your work is. We never
                    initiate contact with your followers on your behalf unless your plan says
                    so in writing.
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mt: 3, mb: 1 }}
                >
                    How we use it
                </Typography>
                <List>
                    {[
                        "Delivering the services you have engaged us for, such as uploads, metadata, thumbnails, scheduling and editing",
                        "Preparing the reports, audits and recommendations included in your plan",
                        "Planning content and researching your niche and competitors",
                        "Invoicing, record-keeping and communicating with you about the work",
                    ].map((item) => (
                        <ListItem key={item} disablePadding alignItems="flex-start">
                            <ListItemIcon sx={{ mt: 0.5 }}>
                                <CheckCircleOutlineIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                <Typography paragraph color="text.secondary">
                    We do not use your data for advertising, we do not sell or rent
                    it, and we do not use one client's data to benefit another.
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mt: 3, mb: 1 }}
                >
                    Who else may see it
                </Typography>
                <Typography paragraph color="text.secondary">
                    Your data stays with the people doing your work. Beyond that, it is
                    handled only by the services we need to deliver the work, each under its
                    own privacy terms:
                </Typography>
                <List>
                    {[
                        "The platform you have engaged us for — YouTube and Google, Meta for Instagram, or LinkedIn — whose tools we use to publish and measure",
                        "Cloud storage and file transfer services used to receive and keep your working files",
                        "Design, editing, scheduling and analytics tools used to produce deliverables",
                        "Email and WhatsApp, which carry our communication with you",
                        "Payment gateways and our accountant, for invoices and statutory records",
                    ].map((item) => (
                        <ListItem key={item} disablePadding alignItems="flex-start">
                            <ListItemIcon sx={{ mt: 0.5 }}>
                                <CheckCircleOutlineIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                <Typography paragraph color="text.secondary">
                    If we bring in a collaborator or subcontractor for part of your work,
                    they are bound by the same confidentiality obligations we are, and they
                    get only the access that specific task needs.
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mt: 3, mb: 1 }}
                >
                    Confidentiality of unpublished work
                </Typography>
                <Typography paragraph color="text.secondary">
                    Unreleased videos, drafts, scripts, strategy documents and performance
                    figures are treated as confidential. We will not disclose them, and we
                    will not publish your analytics screenshots or numbers without your
                    written permission. Published work — videos, thumbnails and graphics that
                    are already live — may appear in our portfolio as described in the YGM
                    Service Terms, and you can opt out of that in writing at any time.
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mt: 3, mb: 1 }}
                >
                    How long we keep it
                </Typography>
                <Typography paragraph color="text.secondary">
                    When an engagement ends, we ask you to remove any access you granted us,
                    and you can remove it yourself at any point without telling us first. We keep
                    your working files for ninety days after the final deliverable, so that
                    anything you need can still be recovered, and then delete them. We will
                    delete them sooner if you ask. Invoices and payment records are kept for
                    as long as Indian tax and accounting law requires us to keep them.
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mt: 3, mb: 1 }}
                >
                    Your choices
                </Typography>
                <List>
                    {[
                        "Withdraw any access you have granted us at any time, which takes effect immediately",
                        "Ask for a copy of the files and reports we hold for you",
                        "Ask us to delete your working files, subject to the records we must keep by law",
                        "Opt out of portfolio use of your published work, in writing",
                        "Tell us to stop using a particular tool, though this may limit what we can deliver",
                    ].map((item) => (
                        <ListItem key={item} disablePadding alignItems="flex-start">
                            <ListItemIcon sx={{ mt: 0.5 }}>
                                <CheckCircleOutlineIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                <Typography paragraph color="text.secondary">
                    Requests can be sent to the contact details below and we will respond
                    within thirty days.
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 5, mb: 2 }}
                >
                    6. Contact Us
                </Typography>
                <Typography paragraph color="text.secondary">
                    If you have any questions about this Privacy Policy or wish
                    to update or delete your information, please contact us at:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon color="action" />
                        </ListItemIcon>
                        <ListItemText primary="selfcraftskills@gmail.com" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon color="action" />
                        </ListItemIcon>
                        <ListItemText primary="+91 7890041604" />
                    </ListItem>
                </List>
            </Container>
        </Box>
    );
};

export default PrivacyPolicyPage;
