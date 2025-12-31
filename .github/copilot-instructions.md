# Copilot / AI Agent instructions for this repo

## Quick context

- Simple single-page React app built with Vite + TailwindCSS. No router library: navigation is implemented with anchor ids and a small header component that uses IntersectionObserver and history.replaceState (see `src/Components/TopBar.jsx` & `src/Components/NavData.js`).
- UI uses Tailwind utility classes and a small set of custom CSS variables & classes defined in `src/App.css` (e.g., `--color-primary`, `.bg-card`, `.active`, `.portfoli-card`, `.tab-content`).
- Images live in `src/assets/img/*` and are generally imported into components (e.g., `PortfolioSection.jsx` imports `portfolio-1.webp`).

## Local dev & checks (must know)

- Install: `npm install`
- Start dev server: `npm run dev` (Vite, HMR)
- Build: `npm run build` (Vite)
- Preview production build: `npm run preview`
- Lint: `npm run lint` (ESLint; config at `eslint.config.js`).
- Note: No test runner or CI workflows are present in repo (nothing to run/test automatically).

## Architectural/Code conventions

- App entry: `src/Index.jsx` mounts sections in page order. Sections are separate components under `src/Components/Sections/` and are included directly; keep the order in `Index.jsx` if section appearance in the page matters.
- Navigation: `src/Components/NavData.js` defines the nav items (label + id). If you add or rename a section id, update `NavData.js` and the corresponding section `id` attribute (e.g. `id="portfolio"` in `PortfolioSection.jsx`).
- No router dependency: TopBar uses `document.getElementById`, `scrollIntoView` and `history.replaceState` to set the path to `/{id}`. Avoid introducing a heavy router unless refactoring intentionally.
- Styling: Tailwind utilities are used everywhere. Project uses additional custom tokens/classes in `src/App.css` — update both Tailwind usage and these CSS variables when adjusting themes/colors.
- Files & exports: Components are typically default or named exports (see `TopBar` default export vs many named exports in sections). Keep exported names aligned with component filenames for clarity.

## Implementation patterns & gotchas (examples)

- IntersectionObserver: `TopBar.jsx` observes sections with `threshold: 0.6` and a `rootMargin` to account for the fixed header. If changing header height, update `rootMargin` accordingly.
- Active nav state: Active nav is represented by adding an `active` class to the element (CSS rule in `src/App.css` uses `--color-primary`). Use that same class to preserve consistent behavior.
- Portfolio tabs: `PortfolioSection.jsx` uses a local `tabs` array and client-side filtering. The project data is hard-coded arrays in components (no backend). If data is moved to JSON, update the filtering logic to use the new source.
- Contact form: `ContactSection.jsx` contains placeholder inputs with empty value/onChange placeholders—no submit handler exists. When adding actual form handling, implement state and a send method in that component or separate hook.

## Editing & PR guidance for AI agents

- Always run `npm run dev` and visually verify interactive behaviors that rely on DOM APIs (scrolling, IntersectionObserver, hover reveals like `.portfoli-card .tab-content`).
- Run `npm run lint` and fix any ESLint violations. Note: rule `'no-unused-vars'` is configured to ignore vars that start with uppercase or underscore (see `eslint.config.js`).
- Keep CSS variable names and custom class names unchanged unless intentionally refactoring the theme across files (`App.css`, component classes, and Tailwind usage must stay in sync).
- When changing navigation ids or names, update `src/Components/NavData.js`, the `id` attribute on the section component, and any tests/docs referencing the path (e.g., code that relies on `history.replaceState` path formatting).

## Files worth reading first

- `src/Index.jsx` — page composition (order of sections)
- `src/Components/TopBar.jsx` — navigation behavior, IntersectionObserver, and history management
- `src/Components/NavData.js` — canonical list of nav items
- `src/Components/Sections/*` — where page content lives (Portfolio, Services, Resume, About, Contact)
- `src/App.css` — theme tokens and a few imperative CSS class behaviours (hover reveals, `.active`)
- `vite.config.js` & `package.json` — build/dev scripts and Tailwind plugin usage

---

If anything looks unclear or you want me to expand a section (e.g., add example PR checklist items, or include code snippets for common edits), tell me which area and I'll iterate. Thanks!
