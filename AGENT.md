# AGENT.md - Fast Orientation For LLM Contributors

This file documents the non-obvious rules and architecture patterns that matter most when editing this repo.

## 1) Stack and Runtime Reality

- Runtime is Vite + React + TypeScript + React Router.
- Scripts in `package.json`: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.
- Global providers are mounted in `src/main.tsx` (HelmetProvider + i18n init + index.css).

## 2) Source of Truth For Styling

- Color tokens are defined in `src/index.css` as CSS variables.
- Tailwind color names (`paper`, `ink`, `steel`, `coral`, and the numbered
  `primary-*` / `accent-*` ramps) are mapped in `tailwind.config.js` to those
  variables.
- Reusable semantic utilities are in `src/styles/theme.css` (imported by
  `src/index.css`). Prefer them over ad hoc utility mixes.
- **There is only one utility system: `cia-*`.** A parallel `theme-*` set used
  to sit alongside it; 23 of its rules were dead and the rest were one-line
  aliases for a single Tailwind utility, so it was folded in. Do not start a
  second namespace.
- **Only declare a token something uses.** The ramps were pruned to the steps
  actually referenced, and parallel `neutral` / `info` / `success` / `warning`
  ramps were removed entirely. Add a step because a rule needs it, not to
  round out a scale.

Important current brand convention:

- Page ground = warm paper (`paper`), copy = deep ink (`ink`).
- Structure = logo steel-blue (`steel` / `primary-*`).
- Live markers and the single primary CTA = logo coral (`coral` / `accent-*`).
- Do not reintroduce a Tailwind colour named `base`: it collides with Tailwind's built-in `text-base` font-size utility.
- Do not put `scroll-behavior: smooth` on `html`. It also captures the
  `window.scrollTo(0, 0)` in `ScrollToTop`, so every route change slow-scrolls
  the newly mounted page instead of jumping. Callers that want a smooth scroll
  use `scrollBehavior()` from `src/hooks/useMotion.ts`, which also respects
  `prefers-reduced-motion`.

## 3) Routing + Layout

- All routes are declared in `src/App.tsx`.
- Global layout order: `cia-page-bg` wrapper -> `Navbar` -> `<main>` holding
  the page routes -> `Footer` -> `ScrollToTopButton`.
- `Navbar`, `Footer` and the `<main>` landmark are shared; route pages should
  not duplicate those concerns (in particular, no page-level `role="main"`).
- `public/sitemap.xml` mirrors this route list. Adding a route means adding it
  there too — the sitemap advertised three deleted pages for a long time.

## 4) i18n Rules (Critical)

- i18n is configured in `src/i18n.ts` with `en` + `fr`, `fallbackLng: "en"`.
- Every new user-facing string should be added in both:
  - `src/locales/en/translation.json`
  - `src/locales/fr/translation.json`
- The two files are currently **key-for-key symmetric** (518 leaves each) and
  every referenced key resolves in both. Keep it that way — a key added to one
  file only is the failure mode this repo has hit most.
- Where a key resolves to an **array** (`itemsKey`, `skillsKey`), EN and FR
  must hold the same number of entries: the renderer indexes them positionally.
- Deleting a page means deleting its namespace. 240 orphaned keys had built up
  from pages that were removed long before.

## 5) Where Data Lives

Content is data under `src/data/`, never arrays built inside a component:

| File                   | Holds                                                              |
| ---------------------- | ------------------------------------------------------------------ |
| `data/projects.ts`     | The project index. Home and Projects both render from it.          |
| `data/projectPages.ts` | The block vocabulary (`ProjectPageSpec`) for detail pages.         |
| `data/pages/*.ts`      | One spec per project page — layout only, every string an i18n key. |
| `data/team.ts`         | The executive roster and the alumni list.                          |
| `data/gallery.ts`      | Gallery images, flat, with `category` on each row.                 |
| `data/partners.ts`     | Partner logos — one list, used by Home _and_ Collaboration.        |

- Roles and blurbs are stored as **i18n keys** (`roleKey`, `missionKey`), or as
  literals (`role`) where the text names a project and is not translated.
  `projects.ts` uses the same split (`defaultTitle` plus
  `home.projects.<key>.title`).
- Gallery badge labels come from `gallery.categoryLabels.<category>`.

## 5b) Shared Building Blocks — Check Here Before Writing A New One

| Need                                | Use                                           |
| ----------------------------------- | --------------------------------------------- |
| Page `<head>` / SEO / JSON-LD       | `components/Seo.tsx` — never a raw `<Helmet>` |
| Club name, URLs, socials, Discord   | `lib/site.ts` (`SITE`, `ORGANIZATION_LD`, …)  |
| Modal focus trap + scroll lock      | `hooks/useDialog.ts`                          |
| Reduced-motion check outside render | `scrollBehavior()` in `hooks/useMotion.ts`    |
| Card surfaces                       | `components/ui/minimal-card.tsx`              |
| Discord glyph                       | `components/DiscordIcon.tsx`                  |

Each of these exists because the same code had been written two or three times
over and the copies had already drifted apart.

## 6) Known Pitfalls

- The `primary-*` / `accent-*` ramps are inverted relative to Tailwind's
  convention: low numbers are dark. Prefer the semantic `paper` / `ink` /
  `steel` / `coral` names in new work.
- Border/text color conflicts can happen because of utility precedence. Prefer the semantic `cia-*` component utilities before reaching for `!important` modifiers.
- A project with no picture carries `image: ''`, not `undefined`. Fall back
  with `||`, not `??` — `??` lets the empty string through and it reaches
  `og:image` as a bare origin.
- `@vitejs/plugin-react` is pinned at **v1.3.2** while Vite is v6. The build
  works, but the plugin is several majors behind and Fast Refresh is not what
  it should be. Bumping it wants a dev-server smoke test.

## 7) Motion (Read Before Adding Any Animation)

- `src/hooks/useMotion.ts` is the only source of motion values. It exports the
  tokens (`EASE`, `DUR`, `SPRING`, `DIST`) and the `useMotion()` vocabulary.
- The budget is deliberate and small: **3 durations, 2 easings, 1 spring,
  2 distances**. If something needs a value that isn't there, use the nearest
  token. Do not add a fourth duration.
- The CSS half of the system lives in `tailwind.config.js` under
  `transitionDuration` / `transitionTimingFunction` and carries the same
  numbers. Use `duration-quick` / `duration-base`, never `duration-300`.
  Tailwind's `ease-out` and `ease-in-out` are overridden to the system curves,
  so the stock utilities are safe.

Hierarchy — what is allowed to move:

| Tier   | What                                                | How                                            |
| ------ | --------------------------------------------------- | ---------------------------------------------- |
| HIGH   | one display heading per page; cover matter; figures | `m.write`, `m.rise`, `m.reveal`                |
| MEDIUM | modals, disclosure, gallery continuity              | `m.overlay`, `m.panel`, `m.expand`, `m.shared` |
| LOW    | hover/press feedback                                | CSS utilities only — no JS                     |
| NONE   | body copy, lists, grids, cards, section wrappers    | nothing                                        |

Rules that were expensive to learn:

- **Sections do not fade up on scroll.** Every project section used to, which
  meant the page never held still while being read. `ProjectBlock`'s `wrap()`
  renders a plain `<section>` on purpose.
- **Do not stagger lists or grids.** Card grids, role lists, link lists and
  rosters render at once. A numbered badge communicates sequence better than a
  100ms offset does.
- **`m.write` is once per page**, on the main display heading. It is the only
  place `DUR.signature` is spent.
- **Motion does not inherit the CSS reduced-motion block.** The
  `@media (prefers-reduced-motion)` rules in `theme.css` only reach CSS
  transitions and animations; Motion writes inline styles via rAF and ignores
  them. Anything animated in JS must go through `useMotion()`, which returns
  inert variants when `reduce` is set. `layoutId` is a special case — withhold
  the id entirely under reduced motion, because a zero-duration layout
  transition still runs projection.

## 8) Practical Editing Guidelines

- Preserve existing route paths and translation key namespaces; many components assume current names.
- Keep visual language consistent:
  - blue for structure/primary emphasis,
  - orange for CTAs/secondary emphasis.
- For quick validation, prefer file diagnostics/lint for touched files before broad build runs.

## 9) Add Content to this file in case of non obvious patterns and good-to-knows

- Your help will be much appreciated for future agents
