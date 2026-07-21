// src/App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
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
import CustomCursor from "./components/CustomCursor";
import CourseDetailPage from "./pages/CourseDetailPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import FreeResourcesPage from "./pages/FreeResourcesPage";
import PricingPage from "./pages/PricingPage";
import DashboardPage from "./pages/DashboardPage";
import CoursePlayerPage from "./pages/CoursePlayerPage";
import AccountPage from "./pages/AccountPage";
import SubscriptionSuccessPage from "./pages/SubscriptionSuccessPage";
import RequireSubscription from "./components/RequireSubscription";
import SubscriptionDevToggle from "./components/SubscriptionDevToggle";
import AppHeader from "./components/app/AppHeader";
import { SubscriptionProvider } from "./hooks/useSubscription";
import { AuthProvider } from "./hooks/useAuth";
import { ProgressProvider } from "./hooks/useProgress";

function App() {
    const { pathname } = useLocation();
    // The member "app" routes get their own chrome, not the marketing site's.
    const isPlayer = pathname.startsWith("/learn");
    const isDashboard = pathname.startsWith("/dashboard");
    const isAppShell = isPlayer || isDashboard;

    return (
        <AuthProvider>
        <SubscriptionProvider>
        <ProgressProvider>
            <Box>
                {!isAppShell && <CustomCursor />}
                {!isAppShell && <Header />}
                {isDashboard && <AppHeader />}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/courses/:courseId" element={<CourseDetailPage />} />
                    <Route path="/free-resources" element={<FreeResourcesPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms-and-conditions" element={<TermsPage />} />
                    <Route path="/refund-policy" element={<RefundPolicyPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/reset-password" element={<ResetPasswordPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/subscribe/success" element={<SubscriptionSuccessPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RequireSubscription>
                                <DashboardPage />
                            </RequireSubscription>
                        }
                    />
                    <Route
                        path="/learn/:courseId"
                        element={
                            <RequireSubscription>
                                <CoursePlayerPage />
                            </RequireSubscription>
                        }
                    />
                </Routes>
                {!isAppShell && <Footer />}
                {!isAppShell && <BackToTopButton />}
                {/* Hide the floating chat on the focused player so it can't cover the lesson list */}
                {!isPlayer && <WhatsAppButton />}
                <SubscriptionDevToggle />
            </Box>
        </ProgressProvider>
        </SubscriptionProvider>
        </AuthProvider>
    );
}

export default App;
