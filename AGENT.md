# AGENT.md - Fast Orientation For LLM Contributors

This file documents the non-obvious rules and architecture patterns that matter most when editing this repo.

## 1) Stack and Runtime Reality

- Runtime is Vite + React + TypeScript + React Router.
- Scripts in `package.json`: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.
- `next`/`next-i18next` are present in dependencies but the app is not a Next.js app.
- Global providers are mounted in `src/main.tsx` (HelmetProvider + i18n init + Bootstrap CSS + index.css).

## 2) Source of Truth For Styling

- Color tokens are defined in `src/index.css` as CSS variables.
- Tailwind color names (`primary-*`, `accent-*`, `base`, etc.) are mapped in `tailwind.config.js` to those variables.
- Reusable semantic utilities are in `src/styles/theme.css` (imported by `src/index.css`).
- Prefer semantic classes from `theme.css` when possible instead of ad hoc utility mixes.

Important current brand convention:

- Primary color = blue (`primary-*`).
- Secondary/accent color = orange (`accent-*`).
- CTAs and borders should be orange (secondary color).
- IMPORTANT! Due to stupid ass practices, you might need to use !important
  especially on borders, something prevents the correct behavior.

## 3) Routing + Layout

- All routes are declared in `src/App.tsx`.
- Global layout order: `theme-page-bg` wrapper -> `Navbar` -> page routes -> `Footer` -> `ScrollToTopButton`.
- `Navbar` and `Footer` are shared; route pages should not duplicate those concerns.

## 4) i18n Rules (Critical)

- i18n is configured in `src/i18n.ts` with `en` + `fr`, `fallbackLng: "en"`.
- Every new user-facing string should be added in both:
  - `src/locales/en/translation.json`
  - `src/locales/fr/translation.json`
- Many pages use translation keys for meta/SEO tags too, not just visible text.
- For card-specific short text on homepage, use `homeDescription` keys (not long `description` blocks).

## 5) Data Shapes By Page (Non-obvious)

- `src/pages/Projects.tsx`:
  - Uses a local `projects` array with `key`, `link`, optional `github`, fallback FR text.
  - UI text should come from `home.projects.<key>.*` keys when available.
- `src/pages/Gallery.tsx`:
  - Filter/category logic depends on `images` object keys matching `categories` ids.
  - Badge labels come from `gallery.categoryLabels.<category>`.
- `src/pages/Management.tsx`:
  - Team/member data is hardcoded arrays inside component (not fetched from API/CMS).
  - Card rendering is centralized in `renderCards` helper.

## 6) Known Pitfalls

- `Management.tsx` currently imports Bootstrap CSS directly, while Bootstrap CSS is already imported in `main.tsx`.
  - This can trigger type-check/compile noise for side-effect CSS imports.
  - Avoid adding more page-level Bootstrap CSS imports.
- Border/text color conflicts can happen because of utility precedence.
  - Use `!` modifiers when visual regressions appear (already common in this codebase).

## 7) Practical Editing Guidelines

- Preserve existing route paths and translation key namespaces; many components assume current names.
- Keep visual language consistent:
  - blue for structure/primary emphasis,
  - orange for CTAs/secondary emphasis.
- For quick validation, prefer file diagnostics/lint for touched files before broad build runs.

## 8) Add Content to this file in case of non obvious patterns and good-to-knows

- Your help will be much appreciated for future agents
