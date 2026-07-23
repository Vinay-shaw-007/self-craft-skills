// src/components/RequireSubscription.tsx
// Route guard for subscriber-only pages (Dashboard, player). Reads status
// exclusively through useSubscription() — never gate on frontend-only
// state beyond this hook. Note this is UX-level gating only: the real
// enforcement is the backend refusing to serve video URLs to
// non-subscribers.
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useSubscription } from "../hooks/useSubscription";
import { useAuth } from "../hooks/useAuth";
import { colors } from "../theme/colors";

const RequireSubscription = ({ children }: { children: ReactNode }) => {
    const { isSubscribed, loading: subLoading } = useSubscription();
    const { user, loading: authLoading, isConfigured } = useAuth();
    const location = useLocation();

    // Don't bounce anyone while we're still resolving session/status.
    if (authLoading || subLoading) {
        return (
            <Box sx={{ minHeight: "50vh", display: "grid", placeItems: "center" }}>
                <CircularProgress sx={{ color: colors.indigo }} />
            </Box>
        );
    }

    // Not logged in → send to login, remembering where they were headed so
    // we can drop them right back there afterwards.
    if (isConfigured && !user) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />;
    }

    // Logged in but no active membership → pricing.
    if (!isSubscribed) {
        return <Navigate to="/pricing" replace />;
    }

    return <>{children}</>;
};

export default RequireSubscription;
