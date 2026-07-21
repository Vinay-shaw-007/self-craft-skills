// src/lib/supabaseClient.ts
// Frontend Supabase client. Uses the public anon key (safe to expose —
// Row Level Security protects the data). When the env vars aren't set
// (local dev before setup), the client is null and the app falls back
// to mock subscription mode — see useSubscription.tsx.
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
    ? createClient(url!, anonKey!)
    : null;
