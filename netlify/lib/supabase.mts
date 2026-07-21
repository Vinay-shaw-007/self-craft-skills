// netlify/lib/supabase.mts
// Server-side Supabase helpers shared by the Netlify functions.
// Uses the SERVICE ROLE key — never expose this to the frontend.
import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";

let cachedAdmin: SupabaseClient | null = null;

export const supabaseAdmin = (): SupabaseClient => {
    if (cachedAdmin) return cachedAdmin;

    const url = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceKey) {
        throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env var");
    }

    cachedAdmin = createClient(url, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
    });
    return cachedAdmin;
};

/**
 * Resolves the logged-in user from the request's Authorization header
 * (a Supabase access token sent by the frontend as `Bearer <jwt>`).
 * Returns null when the token is missing or invalid.
 */
export const getUserFromRequest = async (req: Request): Promise<User | null> => {
    const authHeader = req.headers.get("authorization") ?? "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
    if (!token) return null;

    const { data, error } = await supabaseAdmin().auth.getUser(token);
    if (error || !data.user) return null;
    return data.user;
};

export const json = (body: unknown, status = 200): Response =>
    new Response(JSON.stringify(body), {
        status,
        headers: { "content-type": "application/json" },
    });
