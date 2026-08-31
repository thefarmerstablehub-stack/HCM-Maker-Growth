# HCM Maker Growth

HCM Maker Growth is a portable, client-first prototype of a recurring monthly growth system for independent makers. It is intentionally structured as an ordinary React/Vite application so the source repository can be owned on GitHub, deployed on Vercel, and connected to Supabase without depending on a proprietary runtime.

## Current prototype scope

The prototype makes the core retention loop usable: business check, score, 30-day start, monthly plan, actions, campaign planning, editable content drafts, customer follow-ups, results, review, and next-month planning. The experience begins with a furnished Oak & Grain Furniture workspace; local browser storage preserves simulated work during testing.

## Production transition

| Prototype concern | Production replacement |
| --- | --- |
| Demo profile and session | Supabase Auth and a `profiles` record |
| In-browser data repository | Supabase Postgres protected by RLS |
| Browser persistence | Tables for businesses, plans, actions, campaigns, customers, content, metrics, and reviews |
| Rule-based suggested copy | Secure Supabase Edge Functions calling the selected AI provider |
| Simulated membership | A payment provider webhook plus subscription records |

The browser must use only the Supabase anonymous key. Any credentialed AI, billing, scoring, monthly-plan generation, or outbound follow-up operation belongs in an Edge Function using server-side secrets.

## Local development

```bash
pnpm install
pnpm dev
```

Use `pnpm check` for TypeScript verification and `pnpm build` before deployment.

## Vercel deployment

Create a GitHub repository from this project, import the repository into Vercel, and set the build command to `pnpm build` with output directory `dist/public`. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel once the Supabase project exists. The included rewrite supports client-side routes after deployment.

## Supabase implementation order

Start with Auth, `profiles`, `businesses`, and `business_members`, then introduce the maker-owned growth data. Enable RLS on every business data table and use membership policies that restrict rows to the authenticated user's business. Keep all privileged functions and secrets out of Vercel's client bundle; deploy protected operations as Supabase Edge Functions.

This initial build does not include payment processing or automatic publishing. Those should follow retained-user testing and require the relevant production integrations.

For the complete production transition order, security boundary, Supabase entity plan, and Edge Function responsibilities, see [the production handoff](docs/PRODUCTION_HANDOFF.md).
