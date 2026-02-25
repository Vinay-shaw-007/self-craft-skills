// src/pages/PrivacyPolicyPage.tsx
import { useEffect } from "react";
import {
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
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
                    Effective Date: February 26, 2026
                </Typography>

                <Typography paragraph color="text.secondary">
                    At Self Craft Skills, we respect your privacy and are
                    committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, and safeguard
                    your data when you interact with our website or enroll in
                    our courses.
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2 }}
                >
                    1. Information We Collect
                </Typography>
                <Typography paragraph color="text.secondary">
                    When you register, enroll, or contact us, we may collect the
                    following information:
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
                        "Course registration and enrollment",
                        "Sending class updates, reminders, and learning resources",
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
                    sx={{ mt: 4, mb: 2 }}
                >
                    5. Contact Us
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
