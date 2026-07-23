// src/lib/authErrors.ts
// Supabase returns technical auth errors ("Invalid login credentials").
// Translate the common ones into something a learner can act on.
export const friendlyAuthError = (raw: string): string => {
    const msg = raw.toLowerCase();

    if (msg.includes("invalid login credentials")) {
        return "That email or password doesn't match. Try again, or reset your password below.";
    }
    if (msg.includes("email not confirmed")) {
        return "Please confirm your email first — check your inbox (and spam folder) for the link.";
    }
    if (msg.includes("user already registered") || msg.includes("already been registered")) {
        return "An account with this email already exists. Try logging in instead.";
    }
    if (msg.includes("password should be at least")) {
        return "Please choose a password with at least 6 characters.";
    }
    if (msg.includes("unable to validate email") || msg.includes("invalid email")) {
        return "That doesn't look like a valid email address.";
    }
    if (msg.includes("rate limit") || msg.includes("too many requests")) {
        return "Too many attempts just now. Please wait a minute and try again.";
    }
    if (msg.includes("for security purposes")) {
        return "Please wait a few seconds before trying again.";
    }

    // Unknown error — show it rather than hiding a real problem.
    return raw;
};
