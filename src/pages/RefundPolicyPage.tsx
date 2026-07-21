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
                    Effective Date: July 20, 2026
                </Typography>

                <Typography paragraph>
                    Thank you for subscribing to Self Craft Skills. Our all-access
                    membership is a monthly subscription that unlocks every course
                    on the platform. Please read this policy carefully before
                    subscribing.
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    1. Monthly Subscription
                </Typography>
                <Typography paragraph>
                    Membership is billed automatically each month through Razorpay
                    until you cancel. Each payment covers one month of access to
                    all courses and included resources.
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    2. Cancel Anytime
                </Typography>
                <Typography paragraph>
                    You can cancel your membership at any time from your Account
                    page. Cancellation stops all future charges. You keep full
                    access to your courses until the end of the billing period you
                    have already paid for — no partial-month charges apply after
                    that.
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    3. Refunds
                </Typography>
                <Typography paragraph>
                    If you are not satisfied, you may request a refund of your most
                    recent monthly payment within 7 days of that charge by emailing
                    us. Because the membership gives immediate access to digital
                    content, charges older than 7 days and renewals after the first
                    month are generally non-refundable — cancelling simply stops
                    future billing.
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    4. How to Request a Refund
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
                        <ListItemText primary="Razorpay Payment ID (from your payment receipt)" />
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Reason for refund (optional)" />
                    </ListItem>
                </List>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    5. Refund Processing
                </Typography>
                <Typography paragraph>
                    Approved refunds are processed to the original payment method
                    via Razorpay, typically within 3-5 business days depending on
                    bank processing times.
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
                    6. Important Notes
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
                    7. Contact Us
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
