# Repository Guidelines

This document guides contributors working in this Next.js 15, TypeScript, App Router project. Keep changes focused, typed, and server-first by default.

## Project Structure & Module Organization
- `app/`: App Router pages, layouts, route handlers (server-first). Use `"use client"` only for interactive/stateful UI.
- `components/`: Reusable UI components (PascalCase). Keep presentational vs. container logic separate.
- `lib/`: Utilities, API clients, shared helpers. Place data access here.
- `hooks/`, `contexts/`: Custom hooks and providers.
- `types/`: Shared TypeScript types.
- `public/`: Static assets; reference as `/asset.png`.
- `styles/`: Global styles and Tailwind config.
- `supabase/`: Client/config and server helpers.
- Root: `middleware.ts`, `next.config.mjs`, `.env.local`, `vercel.json`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server.
- `npm run build`: Create production build in `.next/` (or static export per `next.config.mjs`).
- `npm start`: Run the production server.
- `npm run lint`: Lint with Next.js/ESLint.
- Tests: If added, run `npm test` (prefer Vitest + RTL).

## Coding Style & Naming Conventions
- Language: TypeScript; Next.js App Router.
- Formatting: ESLint via `next lint`; 2-space indent, semicolons optional, prefer single quotes.
- Components: PascalCase (`UserCard.tsx`), one per file when practical.
- Files/dirs: kebab-case for folders and non-component utilities.
- Styling: Tailwind CSS v4 utilities; use `class-variance-authority` for variants.

## Testing Guidelines
- Framework: Not configured by default; prefer Vitest + React Testing Library when adding tests.
- Location: Next to sources (`Component.test.tsx`) or under `__tests__/` mirroring structure.
- Focus: Critical-path coverage (routing, auth, data fetching); avoid flaky snapshots.

## Commit & Pull Request Guidelines
- Commits: Short, imperative, single-scope. Example: `Fix hydration mismatch in ClientOnly`.
- PRs: Provide description, repro steps, screenshots for UI, and linked issues.
- Checks: Ensure `npm run lint` passes and the app builds before review.

## Security & Configuration
- Secrets only in `.env.local` (never commit). Examples: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE` (server-only).
- Validate inputs; never expose server keys to client components.

## Architecture Notes
- Server-first rendering with route handlers and middleware.
- Keep data access in `lib/` and pass typed props to UI components.
