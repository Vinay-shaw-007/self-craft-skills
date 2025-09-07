// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

// Import Pages and Components
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import FaqPage from "./pages/FaqPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";
import CourseDetailPage from "./pages/CourseDetailPage";

function App() {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: "#FFFFFF" }}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route
                        path="/courses/:courseId"
                        element={<CourseDetailPage />}
                    />{" "}
                    {/* New Route */}
                    <Route path="/faq" element={<FaqPage />} />
                    <Route
                        path="/privacy-policy"
                        element={<PrivacyPolicyPage />}
                    />
                    <Route
                        path="/terms-and-conditions"
                        element={<TermsPage />}
                    />
                    <Route
                        path="/refund-policy"
                        element={<RefundPolicyPage />}
                    />
                </Routes>
                <Box id="support">
                    <Footer />
                </Box>
                <BackToTopButton />
                <WhatsAppButton />
            </Box>
        </BrowserRouter>
    );
}

export default App;
