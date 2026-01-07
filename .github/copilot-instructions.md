# GitHub Copilot / AI Agent Instructions for H&A (h-and-a)

Purpose: Short, actionable guidance to make AI coding agents productive quickly in this repo.

## Quick facts
- Stack: React + TypeScript + Vite. UI: Chakra UI + custom primitives in `src/components/ui`. Routing: `react-router-dom`.
- Dev commands (use yarn in this repo):
  - Start dev server: `yarn dev` (runs `vite`)
  - Build for production: `yarn build` (`tsc -b && vite build`) — *tsc -b is required before Vite build*
  - Preview build: `yarn preview`
  - Lint: `yarn lint` (ESLint configured in `eslint.config.js`)

## Big-picture architecture
- Entry: `src/main.tsx` — wraps `<App />` with `Provider` (Chakra + color mode) and `BrowserRouter`.
- Routes: `src/App.tsx`
  - Root route `/` → `src/app/pages/landing/index.tsx`.
  - Dynamic program routes are generated from `src/app/data/pageData.ts` (keys become slugs: `/data-analytics`, `/blockchain-tech`, ...). To add a program page, add a new key to `pageData` and put images in `public/images/dynamic-pages/`.
- Component layers:
  - Page-level components: `src/app/pages/*` and `src/app/components/*` (page-specific composition).
  - Shared UI primitives: `src/components/ui/*` (Provider, Color Mode, Buttons, Input, etc.). Prefer adding reusable small components here.
- Assets: `public/images/*` (referenced in code by absolute paths like `/images/...`).

## Conventions and patterns (project-specific)
- Path alias: imports use `@/` which maps to `./src/*` (see `tsconfig.app.json` and `vite` plugin `vite-tsconfig-paths`). Use `@/` for imports within the repo.
- Dynamic pages: never hardcode program routes — update `src/app/data/pageData.ts`; `App.tsx` maps entries to routes automatically.
- Styling & theme: Chakra provider is in `src/components/ui/provider.tsx`; color-mode is handled by `src/components/ui/color-mode.tsx` (uses `next-themes`). Use `ColorModeButton` and `useColorModeValue` helpers when working on UI.
- CSS/third-party imports: some CSS imports are `// @ts-ignore` (fonts, Swiper CSS) in `App.tsx` — preserve these patterns unless you understand the reason.
- Naming patterns: files often use kebab-case for page resources (e.g., `dynamic-pages/data-analytics-img-1.png`) and components under `app` tend to be page-specific.

## TypeScript & lint notes
- Type checking is strict (`strict: true` in `tsconfig.app.json`). The build runs `tsc -b` and fails if type errors exist; run `yarn build` to validate changes.
- ESLint is configured in `eslint.config.js`. The project intentionally disables a few TypeScript rules (e.g., `no-explicit-any`, `ban-ts-comment`) — be conservative when changing these.

## Dependencies & integrations
- UI: `@chakra-ui/react`, `next-themes`, `react-icons`
- Carousel: `swiper` (CSS is imported manually)
- Deployment: `netlify-cli` exists in dependencies (project may be deployed to Netlify); there is no Netlify config in repo — check project owner for deploy specifics before automating deploy changes.
- External content: several registration links use Google Forms stored in code (`pageData` / utils). Treat these as content changes, not code logic.

## Typical changes and how to do them (examples)
- Add a program page: add a key/value to `src/app/data/pageData.ts` (match existing shape: `hero`, `learning`, `why`, `regLink`), place images under `public/images/dynamic-pages/`, then `yarn dev` and verify route (e.g., `/new-program`).
- Add shared UI component: create file under `src/components/ui/`, export it, and use via `@/components/ui/my-component`.
- Fix styling/theme regressions: prefer fixes inside `src/components/ui/provider.tsx` or `src/components/ui/color-mode.tsx` rather than sprinkling theme logic throughout pages.

## Safety & scope
- There are no tests or CI scripts in repository — do not add heavy infra (e.g., full test framework) without project owner approval.
- Avoid adding new runtime dependencies without confirmation; small dev-only tooling is more acceptable but still confirm.

## Checks before opening a PR
- Run `yarn build` and `yarn lint`.  The build step includes `tsc -b` which will catch type issues.
- Verify any new images are referenced from `public/images/` and paths use `/images/...`.
- For UI changes, verify both light and dark modes (color-mode) where applicable.

## Files worth inspecting when changing behavior
- `src/App.tsx` (routing & global imports)
- `src/main.tsx` (Provider / Router setup)
- `src/app/data/pageData.ts` (dynamic program pages — canonical content source)
- `src/app/pages/landing/index.tsx` and `src/app/components/*` (page layout & composition)
- `src/components/ui/*` (shared primitives and providers)
- `eslint.config.js`, `tsconfig.app.json`, `package.json` (build/lint workflows)

---
If anything in the above is unclear or you want additional examples (e.g., the exact shape of a new `pageData` entry or a code snippet for a new UI component), tell me which area to expand and I will iterate.