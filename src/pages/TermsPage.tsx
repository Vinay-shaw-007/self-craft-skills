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
                    Effective Date: September 6, 2025
                </Typography>

                <Typography paragraph color="text.secondary">
                    Welcome to Self-Craft Skills. By registering for our courses
                    or using our services, you agree to the following terms and
                    conditions.
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 2 }}
                >
                    1. Course Enrollment
                </Typography>
                <List>
                    {[
                        "Enrollment is confirmed only after completing the registration form and making payment.",
                        "Course access details will be shared via email/WhatsApp after confirmation.",
                        "Each registration is personal and non-transferable.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={{ mb: 1 }}>
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
                    2. Course Delivery
                </Typography>
                <List>
                    {[
                        "Courses are delivered online via platforms such as Zoom, WhatsApp, and email.",
                        "Learners are responsible for having a stable internet connection and required devices.",
                        "Recordings, if provided, are for personal use only and may not be shared or distributed.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={{ mb: 1 }}>
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
                    3. Code of Conduct
                </Typography>
                <List>
                    {[
                        "Learners are expected to maintain respectful behavior during classes and group discussions.",
                        "Misuse, abusive language, or disruptive activities may result in removal without refund.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={{ mb: 1 }}>
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
                    4. Intellectual Property
                </Typography>
                <List>
                    {[
                        "All course materials (PDFs, videos, presentations, etc.) are the property of Self-Craft Skills.",
                        "Learners may use materials for personal learning but may not copy, distribute, or resell them.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={{ mb: 1 }}>
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
                    5. Communications
                </Typography>
                <List>
                    {[
                        "By registering, you agree to receive important updates via email/WhatsApp.",
                        "We will not spam or share your contact details with third-party marketers.",
                    ].map((item) => (
                        <ListItem key={item} disablePadding sx={{ mb: 1 }}>
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
            </Container>
        </Box>
    );
};

export default TermsPage;
