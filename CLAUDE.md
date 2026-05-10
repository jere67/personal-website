# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint (next/core-web-vitals rules)
```

There are no tests in this project.

## Architecture

This is a Next.js 14 App Router personal portfolio site for Jeremy Moon, deployed on Vercel.

**Pages (app router):**
- `/` — main single-page portfolio with Hero, Grid, Experience, Projects, Education, Skills, Footer sections, all wrapped in a `TracingBeam` scroll indicator
- `/about` — About page with image carousel
- `/projects` — full projects page with expandable cards organized by category
- `/api/spotify` — proxies Spotify "now playing" API using OAuth refresh token
- `/api/wakatime` — proxies WakaTime all-time coding hours API

**Key architectural patterns:**
- All site content/data lives in `data/index.ts` (nav items, grid items, project cards, skill lists, social links). The projects page has its own extended data at `app/projects/data/index.ts`.
- `components/ui/` contains Aceternity UI-derived components (Globe, TracingBeam, CardSpotlight, CanvasRevealEffect, etc.) — these are heavily customized and use `@react-three/fiber` + `three.js` for 3D elements.
- `components/` (top-level) contains the actual page section components that compose the UI components.
- The `cn()` utility (`utils/cn.ts`) merges Tailwind classes using `clsx` + `tailwind-merge` — use it for conditional class names.
- AOS (Animate on Scroll) is initialized globally in `app/provider.tsx` and used via `data-aos` attributes.
- `next-themes` provides dark/light theming; the site defaults to dark mode. `StarsCanvas` (animated background) is rendered at the root layout level.

**Environment variables required** (in `.env.local`):
- `WAKATIME_API_KEY`
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`

**Tailwind customizations** (`tailwind.config.ts`): Extended `black` palette (`#000319`, rgba variants), `white` variants, custom `purple` (`#CBACF9`), and CSS variable-based semantic colors (`background`, `foreground`, etc.).
