// src/pages/RefundPolicyPage.tsx
import {
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import useScrollToHash from "../hooks/useScrollToHash.ts";

const RefundPolicyPage = () => {
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
                    Refund Policy
                </Typography>

                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Effective Date: February 26, 2026
                </Typography>

                <Typography paragraph>
                    Thank you for enrolling in courses offered by Self Craft
                    Skills. We aim to provide high-quality digital learning
                    experiences. Please read our refund policy carefully before
                    making a purchase.
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    1. Refund Eligibility
                </Typography>
                <Typography paragraph>
                    A refund request can be made before the official batch start
                    date of the course.
                </Typography>
                <Typography paragraph>
                    Once the batch has started, no refunds will be issued, as the
                    course is a digital learning program with limited seats and
                    live access.
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    2. How to Request a Refund
                </Typography>
                <Typography paragraph>
                    To request a refund, please email us at:
                    <br />
                    selfcraftskills@gmail.com
                </Typography>
                <Typography paragraph>Include the following details:</Typography>
                <List sx={{ listStyleType: "disc", pl: 4 }}>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Full Name" />
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Registered Email ID" />
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Course Name" />
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Razorpay Payment ID" />
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Reason for refund (optional)" />
                    </ListItem>
                </List>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    3. Refund Processing
                </Typography>
                <Typography paragraph>
                    Approved refunds will be processed to the original payment
                    method used at checkout via Razorpay.
                </Typography>
                <Typography paragraph>
                    Refunds are typically completed within 3-5 business days,
                    depending on bank processing times.
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    4. Important Notes
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 4 }}>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Refunds, once processed, cannot be reversed." />
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Any payment gateway or bank processing delays are outside our control." />
                    </ListItem>
                </List>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    5. Contact Us
                </Typography>
                <Typography paragraph>
                    If you have any questions regarding this policy, please contact
                    us at:
                    <br />
                    selfcraftskills@gmail.com
                </Typography>
            </Container>
        </Box>
    );
};

export default RefundPolicyPage;
