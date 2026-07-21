// src/hooks/useAuth.tsx
// Auth state for the whole app, backed by Supabase Auth. When Supabase
// isn't configured yet (no env vars), user is always null and the auth
// pages explain that accounts aren't live — nothing crashes.
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

interface AuthResult {
    error: string | null;
    /** True when signup succeeded but Supabase requires email confirmation first. */
    needsEmailConfirmation?: boolean;
}

interface AuthContextValue {
    user: User | null;
    session: Session | null;
    /** True while the initial session is being restored on page load. */
    loading: boolean;
    isConfigured: boolean;
    signUp: (email: string, password: string, fullName: string, phone: string) => Promise<AuthResult>;
    signIn: (email: string, password: string) => Promise<AuthResult>;
    signOut: () => Promise<void>;
    /** Sends a password-reset email with a link back to /reset-password. */
    requestPasswordReset: (email: string) => Promise<AuthResult>;
    /** Sets a new password for the user in the current (recovery) session. */
    updatePassword: (password: string) => Promise<AuthResult>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(isSupabaseConfigured);

    useEffect(() => {
        if (!supabase) return;

        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
            setLoading(false);
        });

        const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
            setSession(newSession);
        });
        return () => listener.subscription.unsubscribe();
    }, []);

    const value = useMemo<AuthContextValue>(() => ({
        user: session?.user ?? null,
        session,
        loading,
        isConfigured: isSupabaseConfigured,

        signUp: async (email, password, fullName, phone) => {
            if (!supabase) return { error: "Accounts aren't live yet." };
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: { data: { full_name: fullName, phone } },
            });
            if (error) return { error: error.message };
            // Session is null when Supabase is set to require email confirmation.
            return { error: null, needsEmailConfirmation: !data.session };
        },

        signIn: async (email, password) => {
            if (!supabase) return { error: "Accounts aren't live yet." };
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            return { error: error ? error.message : null };
        },

        signOut: async () => {
            await supabase?.auth.signOut();
        },

        requestPasswordReset: async (email) => {
            if (!supabase) return { error: "Accounts aren't live yet." };
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });
            return { error: error ? error.message : null };
        },

        updatePassword: async (password) => {
            if (!supabase) return { error: "Accounts aren't live yet." };
            const { error } = await supabase.auth.updateUser({ password });
            return { error: error ? error.message : null };
        },
    }), [session, loading]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components -- provider + hook stay in one file on purpose
export const useAuth = (): AuthContextValue => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
};
