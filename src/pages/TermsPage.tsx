// src/pages/TermsPage.tsx
import {
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import useScrollToHash from "../hooks/useScrollToHash";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TermsPage = () => {
    useScrollToHash();

    const bulletSx = { mb: 1 };

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F8F9FA" }}>
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    component="h1"
                    fontWeight="bold"
                    gutterBottom
                >
                    Terms & Conditions
                </Typography>

                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Effective Date: February 26, 2026
                </Typography>

                <Typography paragraph color="text.secondary">
                    Welcome to Self Craft Skills. By accessing our website,
                    enrolling in our courses, or making a payment, you agree to
                    be bound by the following Terms & Conditions. Please read
                    them carefully.
                </Typography>

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
                    1. Course Enrollment
                </Typography>
                <List>
                    {[
                        "Enrollment is confirmed only after successful payment and submission of the registration details.",
                        "Course access details, class links, and updates will be shared via email and/or WhatsApp after confirmation.",
                        "Each course enrollment is personal and non-transferable.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={bulletSx}>
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

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
                    2. Course Delivery
                </Typography>
                <List>
                    {[
                        "Courses are delivered online through platforms such as Zoom, WhatsApp, email, or other digital tools.",
                        "Learners are responsible for having a stable internet connection and suitable devices.",
                        "Any recordings or digital materials provided are strictly for personal learning use only and must not be shared, copied, or distributed.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={bulletSx}>
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

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
                    3. Code of Conduct
                </Typography>
                <List>
                    {[
                        "Learners are expected to maintain respectful and professional behavior during live sessions and community discussions.",
                        "Any form of misconduct, abuse, or disruptive behavior may result in removal from the course without eligibility for a refund.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={bulletSx}>
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

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
                    4. Intellectual Property
                </Typography>
                <List>
                    {[
                        "All course content, including videos, PDFs, presentations, worksheets, and other materials, are the intellectual property of Self Craft Skills.",
                        "Learners may use the materials only for personal learning purposes.",
                        "Reproduction, resale, distribution, or commercial use of any content without written permission is strictly prohibited.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={bulletSx}>
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

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
                    5. Payments & Refunds
                </Typography>
                <List>
                    {[
                        "All payments are processed securely via Razorpay or other approved payment methods displayed on the website.",
                        "Refunds and cancellations are governed by our Refund Policy, available on the website.",
                        "By enrolling, you acknowledge that you have read and agreed to the Refund Policy.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={bulletSx}>
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

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
                    6. Communications
                </Typography>
                <List>
                    {[
                        "By registering, you consent to receive important course-related communications via email and/or WhatsApp.",
                        "We do not engage in spam and do not share your contact details with third-party marketers.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={bulletSx}>
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

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
                    7. Governing Law
                </Typography>
                <List>
                    {[
                        "These Terms & Conditions are governed by the laws of India.",
                        "Any disputes shall be subject to the jurisdiction of Indian courts.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={bulletSx}>
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

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
                    8. Contact Us
                </Typography>
                <Typography paragraph>
                    For any questions regarding these Terms & Conditions, contact
                    us at:
                    <br />
                    selfcraftskills@gmail.com
                </Typography>
            </Container>
        </Box>
    );
};

export default TermsPage;
