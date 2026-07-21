# Self Craft Skills — Subscription Launch Checklist

Everything the code needs but can't set up for you. Work top to bottom;
each step tells you which env var it produces. Until these are done, the
site runs in **mock mode** (fake subscription toggle, no real login) —
which is also how you develop locally without touching real services.

---

## 1. Supabase (accounts + database)

1. Create a project at [supabase.com](https://supabase.com) (free tier is fine).
2. **SQL Editor → New query** → paste the whole of [`supabase/schema.sql`](supabase/schema.sql) → Run.
   Safe to re-run later; it never drops data.
3. **Authentication → Providers → Email**: leave Email enabled.
   - "Confirm email" ON = users must click a link before logging in (recommended).
4. **Authentication → URL Configuration**: set Site URL to `https://selfcraftskills.com`
   (and add `http://localhost:5173` to additional redirect URLs for local testing).
5. **Project Settings → API** — copy these values:

   | Value | Env var | Used by |
   |---|---|---|
   | Project URL | `SUPABASE_URL` **and** `VITE_SUPABASE_URL` | backend + frontend |
   | `anon` `public` key | `VITE_SUPABASE_ANON_KEY` | frontend (safe to expose) |
   | `service_role` key | `SUPABASE_SERVICE_ROLE_KEY` | backend only — **never** in frontend/git |

## 2. Razorpay (recurring billing)

1. In the [Razorpay dashboard](https://dashboard.razorpay.com), make sure
   **Subscriptions** is enabled for your account (Settings → ask support if missing).
2. **Subscriptions → Plans → Create plan**:
   - Billing cycle: **Monthly**
   - Amount: your real monthly price — must match `MONTHLY_PRICE_RUPEES`
     in [`src/config/pricing.ts`](src/config/pricing.ts) (currently ₹499; edit that file if different)
   - Copy the plan id → `RAZORPAY_PLAN_ID`
3. **Settings → API Keys → Generate key** → `RAZORPAY_KEY_ID` + `RAZORPAY_KEY_SECRET`.
   (Test-mode keys first; regenerate live keys when you go live.)
4. **Settings → Webhooks → Add webhook** (do this *after* first Netlify deploy so the URL exists):
   - URL: `https://selfcraftskills.com/api/razorpay-webhook`
   - Secret: any long random string → `RAZORPAY_WEBHOOK_SECRET`
   - Events to enable:
     `subscription.activated`, `subscription.charged`, `subscription.cancelled`,
     `subscription.halted`, `subscription.paused`, `subscription.resumed`,
     `subscription.completed`, `payment.failed`

## 3. Netlify (hosting + backend functions)

1. **Site settings → Environment variables** — add all of:
   ```
   SUPABASE_URL
   SUPABASE_SERVICE_ROLE_KEY
   RAZORPAY_KEY_ID
   RAZORPAY_KEY_SECRET
   RAZORPAY_PLAN_ID
   RAZORPAY_WEBHOOK_SECRET
   VITE_SUPABASE_URL
   VITE_SUPABASE_ANON_KEY
   ```
   (`.env.example` documents each one. For local dev, copy it to `.env` —
   it's gitignored.)
2. Deploy (git push). [`netlify.toml`](netlify.toml) already configures the
   build and the `/api/*` → functions routing; no dashboard changes needed.
3. Now go back and register the Razorpay webhook (step 2.4).

## 4. End-to-end test (Razorpay test mode)

1. Open the deployed site → Sign up → confirm email → log in.
2. Pricing page → **Become a member** → pay with a
   [Razorpay test card](https://razorpay.com/docs/payments/payments/test-card-details/)
   (e.g. 4111 1111 1111 1111, any future expiry, any CVV).
3. Within a few seconds the success page should confirm, `/dashboard`
   should open, and the Supabase `subscriptions` row should show `active`.
4. Account page → **Cancel membership** → status flips to `cancelled`,
   access remains until period end.
5. Razorpay dashboard → Webhooks → check deliveries are all 2xx.
6. When everything passes: switch Razorpay to live keys, update the four
   Razorpay env vars in Netlify, create the webhook again in live mode,
   and redeploy.

## 5. Video hosting (Cloudflare Stream) — the remaining build step

Not yet wired up (lessons currently play a placeholder). When you're ready:
1. Create a Cloudflare account → enable **Stream** (paid per storage + delivery).
2. Upload course videos; put each video's UID into the `videos` table
   (`playback_ref` column) with its course id, title, duration, position.
3. Then we add one more function (`get-video-url`) that checks the
   subscription and returns a short-lived signed playback URL, plus swap
   the placeholder player for the Stream player. Ask me when you get here.

## Notes

- **Prices**: shown price lives in `src/config/pricing.ts`; charged price
  lives in the Razorpay plan. Change both together.
- **Refund/terms pages** still describe per-course purchases — update the
  copy in `public/*.html` and the policy pages before launch.
- The old Razorpay **payment links** (`rzp.io/rzp/stnplan`, `prmplan`)
  are no longer used anywhere — consider deactivating them in the
  dashboard so nobody pays through a stale link.
