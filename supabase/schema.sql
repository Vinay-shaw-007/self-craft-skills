-- Supabase schema for Self Craft Skills subscriptions.
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query)
-- after creating the project. Safe to re-run: uses IF NOT EXISTS / OR REPLACE.

-- ─── Profiles ────────────────────────────────────────────────────────────────
-- One row per auth user. Created automatically by the trigger below whenever
-- someone signs up through Supabase Auth.

create table if not exists public.profiles (
    id uuid primary key references auth.users (id) on delete cascade,
    email text,
    full_name text,
    phone text,
    created_at timestamptz not null default now()
);

-- If the table already existed without a phone column, add it.
alter table public.profiles add column if not exists phone text;

alter table public.profiles enable row level security;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
    on public.profiles for select
    using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
    on public.profiles for update
    using (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
    insert into public.profiles (id, email, full_name, phone)
    values (
        new.id,
        new.email,
        new.raw_user_meta_data ->> 'full_name',
        new.raw_user_meta_data ->> 'phone'
    )
    on conflict (id) do nothing;
    return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_user();

-- ─── Subscriptions ───────────────────────────────────────────────────────────
-- Kept current by the Razorpay webhook function. Status values mirror
-- Razorpay subscription statuses, plus 'past_due' which we set ourselves
-- on payment.failed.

create table if not exists public.subscriptions (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references auth.users (id) on delete cascade,
    razorpay_subscription_id text unique,
    status text not null default 'created' check (status in (
        'created', 'authenticated', 'active', 'past_due',
        'halted', 'cancelled', 'paused', 'completed', 'expired'
    )),
    current_period_end timestamptz,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists subscriptions_user_id_idx on public.subscriptions (user_id);

alter table public.subscriptions enable row level security;

-- Users may read their own subscription rows. All writes happen through the
-- Netlify functions using the service-role key, which bypasses RLS — there is
-- deliberately no insert/update policy for regular users.
drop policy if exists "Users can read own subscriptions" on public.subscriptions;
create policy "Users can read own subscriptions"
    on public.subscriptions for select
    using (auth.uid() = user_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists subscriptions_set_updated_at on public.subscriptions;
create trigger subscriptions_set_updated_at
    before update on public.subscriptions
    for each row execute function public.set_updated_at();

-- ─── Videos (metadata only) ──────────────────────────────────────────────────
-- Replaces src/data/videosData.ts once real videos are uploaded. The
-- playback_ref column holds the video host's id (e.g. Cloudflare Stream uid);
-- actual playback URLs are minted per-request by a function after a
-- subscription check, so this table stays safe to read.

create table if not exists public.videos (
    id uuid primary key default gen_random_uuid(),
    course_id text not null,
    title text not null,
    duration_minutes integer,
    position integer not null default 0,
    playback_ref text,
    created_at timestamptz not null default now()
);

create index if not exists videos_course_id_idx on public.videos (course_id, position);

alter table public.videos enable row level security;

-- Lesson titles/durations are shown to everyone (locked list on course pages),
-- so metadata is world-readable. playback_ref is only useful with a signed
-- URL from the backend, which checks the subscription first.
drop policy if exists "Video metadata is public" on public.videos;
create policy "Video metadata is public"
    on public.videos for select
    using (true);
