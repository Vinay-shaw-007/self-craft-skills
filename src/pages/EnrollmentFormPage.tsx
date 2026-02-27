import { useEffect, useMemo, useRef } from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import {
    enrollmentMeta,
    getStoredEnrollmentPaymentId,
    storeEnrollmentPaymentId,
} from "../utils/enrollmentPayment";

const GOOGLE_FORM_VIEW_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScFHglJRuPu5QZOo6jkxxB7yX3L9NGnxJbhmZap2uD6EsA9Wg/viewform";
const PAYMENT_ID_ENTRY_KEY = "entry.1663560164";
const WHATSAPP_NUMBER = "917890041604";

const EnrollmentFormPage = () => {
    const [searchParams] = useSearchParams();
    const paymentIdFromQuery = searchParams.get("payment_id")?.trim() ?? "";
    const paymentId = paymentIdFromQuery || getStoredEnrollmentPaymentId();
    const iframeLoadsRef = useRef(0);
    const hasOpenedWhatsApp = useRef(false);

    useEffect(() => {
        if (paymentIdFromQuery) {
            storeEnrollmentPaymentId(paymentIdFromQuery);
        }
    }, [paymentIdFromQuery]);

    const whatsappUrl = useMemo(() => {
        const message = [
            "Hi Self Craft Skills 👋",
            `I've successfully enrolled in ${enrollmentMeta.courseName}`,
            `Payment ID: ${paymentId || "N/A"}`,
            "Please guide me for next steps.",
        ].join("\n");

        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }, [paymentId]);

    const formUrl = useMemo(() => {
        const url = new URL(GOOGLE_FORM_VIEW_URL);
        url.searchParams.set("embedded", "true");
        url.searchParams.set("usp", "pp_url");

        if (paymentId) {
            url.searchParams.set(PAYMENT_ID_ENTRY_KEY, paymentId);
        }

        return url.toString();
    }, [paymentId]);

    const handleIframeLoad = () => {
        iframeLoadsRef.current += 1;
        if (iframeLoadsRef.current >= 2 && !hasOpenedWhatsApp.current) {
            hasOpenedWhatsApp.current = true;
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        }
    };

    if (!paymentId) {
        return (
            <Container maxWidth="sm" sx={{ py: 8 }}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight={700}>
                        Payment ID missing
                    </Typography>
                    <Typography sx={{ mt: 1.5, color: "text.secondary" }}>
                        Please complete payment again from the Enroll Now button.
                    </Typography>
                </Paper>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Paper sx={{ p: { xs: 2, md: 3 }, borderRadius: "16px" }}>
                <Typography variant="h5" fontWeight={700}>
                    Complete Enrollment Form
                </Typography>
                <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Payment ID is already attached. Submit the form to continue.
                </Typography>
                <Typography sx={{ mt: 0.5, color: "text.secondary" }}>
                    Payment ID: {paymentId}
                </Typography>

                <Box
                    sx={{
                        mt: 2.5,
                        border: "1px solid #e5e7eb",
                        borderRadius: "12px",
                        overflow: "hidden",
                    }}
                >
                    <iframe
                        title="Enrollment Form"
                        src={formUrl}
                        width="100%"
                        height="1935"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        onLoad={handleIframeLoad}
                    >
                        Loading...
                    </iframe>
                </Box>

                <Typography sx={{ mt: 1.5, color: "text.secondary", fontSize: "0.9rem" }}>
                    If WhatsApp does not open automatically after submit, use the button
                    below.
                </Typography>
                <Button
                    component="a"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={{ mt: 1.2 }}
                >
                    Open WhatsApp
                </Button>
            </Paper>
        </Container>
    );
};

export default EnrollmentFormPage;
