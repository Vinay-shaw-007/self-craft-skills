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
                    Effective Date: 6 September 2025
                </Typography>

                <Typography paragraph color="text.secondary">
                    At Self-Craft Skills, we value your trust and are committed
                    to protecting your privacy. This Privacy Policy explains how
                    we collect, use, and safeguard your personal information
                    when you interact with our website, register for our
                    courses, or communicate with us.
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2 }}
                >
                    Information We Collect
                </Typography>
                <Typography paragraph color="text.secondary">
                    When you register or contact us, we may collect the
                    following information:
                </Typography>
                <List>
                    {[
                        "Full Name",
                        "Email Address",
                        "Phone Number / WhatsApp Number",
                        "Age (for course eligibility)",
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
                    How We Use Your Information
                </Typography>
                <Typography paragraph color="text.secondary">
                    We use your information for:
                </Typography>
                <List>
                    {[
                        "Course registration and enrollment",
                        "Sending course updates, reminders, and resources",
                        "Providing customer support and answering your queries",
                        "Sharing important announcements related to Self-Craft Skills",
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
                    We do not sell, rent, or share your information with third
                    parties for marketing purposes.
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2 }}
                >
                    Data Security
                </Typography>
                <Typography paragraph color="text.secondary">
                    We take reasonable measures to protect your personal
                    information. Payments are processed securely through trusted
                    third-party providers (Google Forms/UPI/QR), and we do not
                    store sensitive payment details.
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2 }}
                >
                    Your Rights
                </Typography>
                <Typography paragraph color="text.secondary">
                    You have the right to:
                </Typography>
                <List>
                    {[
                        "Request access to the personal information we hold about you",
                        "Ask for corrections if your information is inaccurate",
                        "Request deletion of your data after course completion",
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
                    Contact Us
                </Typography>
                <Typography paragraph color="text.secondary">
                    If you have any questions about this Privacy Policy or wish
                    to update/delete your information, you can reach us at:
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
