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
                    Effective Date: September 6, 2025
                </Typography>
                <Typography paragraph sx={{ mt: 4 }}>
                    • A refund can be requested before the batch start date.
                    <br />• Once the batch has started, no refund will be
                    issued.
                </Typography>
                <Typography paragraph sx={{ mt: 2 }}>
                    To claim a “no-question-asked” refund, please follow the
                    steps below:
                </Typography>
                <List sx={{ listStyleType: "decimal", pl: 4 }}>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Drop an email on: selfcraftskills+support@gmail.com with a subject line: “Online course refund | Registered email id”." />
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Attach your payment details (transaction ID / screenshot)." />
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Refunds will be processed to the original payment method within 3–5 business days." />
                    </ListItem>
                </List>
            </Container>
        </Box>
    );
};
export default RefundPolicyPage;
