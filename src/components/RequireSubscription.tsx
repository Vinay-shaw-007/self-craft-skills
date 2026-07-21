// src/components/RequireSubscription.tsx
// Route guard for subscriber-only pages (Dashboard, etc). Reads status
// exclusively through useSubscription() — never gate on frontend-only
// state beyond this hook. Note this is UX-level gating only: the real
// enforcement is the backend refusing to serve video URLs to
// non-subscribers.
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useSubscription } from "../hooks/useSubscription";
import { colors } from "../theme/colors";

const RequireSubscription = ({ children }: { children: ReactNode }) => {
    const { isSubscribed, loading } = useSubscription();

    // Don't bounce to /pricing while the first status check is in flight.
    if (loading) {
        return (
            <Box sx={{ minHeight: "50vh", display: "grid", placeItems: "center" }}>
                <CircularProgress sx={{ color: colors.indigo }} />
            </Box>
        );
    }

    if (!isSubscribed) {
        return <Navigate to="/pricing" replace />;
    }

    return <>{children}</>;
};

export default RequireSubscription;
