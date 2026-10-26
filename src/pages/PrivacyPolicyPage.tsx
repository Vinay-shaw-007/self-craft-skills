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
                    our membership, or hire us for social media and YouTube
                    growth services under YGM — Your Growth Matters. Sections 1
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
                    This section applies if you hire us for social media or
                    YouTube growth work under YGM — Your Growth Matters. Running
                    a channel on your behalf means handling more of your data
                    than a course membership does, so it is set out separately
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
                        "Channel performance data from your YouTube Studio or platform dashboard, including views, watch time, click-through rate, retention, traffic sources and the aggregated audience reports the platform provides",
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
                    Access to your channel or accounts
                </Typography>
                <Typography paragraph color="text.secondary">
                    We work through delegated access only. For YouTube that means a Manager
                    or Editor role granted from your Brand Account, which you can withdraw at
                    any time from YouTube Studio under Settings and Permissions. We will never
                    ask for your Google password, and we do not use shared logins.
                </Typography>
                <Typography paragraph color="text.secondary">
                    While we hold that access, we do not:
                </Typography>
                <List>
                    {[
                        "View, change or download anything outside the channel you have given us access to",
                        "Open or alter your monetisation, AdSense or banking settings",
                        "Change your account recovery details, email address or password",
                        "Download, export or keep lists of your subscribers, commenters or members",
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
                    We do not use your channel data for advertising, we do not sell or rent
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
                        "The platform you have engaged us for, such as YouTube and Google, whose tools we use to publish and measure",
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
                    When an engagement ends, we ask you to remove our delegated access, and
                    you can remove it yourself at any point without telling us first. We keep
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
                        "Withdraw our channel access at any time, which takes effect immediately",
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
