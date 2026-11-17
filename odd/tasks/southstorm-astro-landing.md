# Southstorm Mechanical — Astro Landing (Netlify)

## Objective
Replace the Squarespace site with a self-owned Astro landing page hosted on Netlify, reusing the architecture patterns from the personal portfolio project, preserving the current site's content with corrected copy, and adding full ES/EN i18n plus a Netlify Forms contact flow.

## Problem and rationale
The owner does not want to keep paying for / rely on Squarespace. The current site content is a partially wrong template: the "Repair" and "Maintenance" descriptions are swapped, one FAQ answer is empty, and the copy does not reflect the confirmed brand (gray + navy, call-first, residential HVAC in South Florida). Moving to a static Astro build on Netlify removes the CMS dependency and enables i18n and a native form.

## Decisions (approved by owner 2026-11-17)
- **Fidelity:** same sections and content, own design. Palette corrected twice by the owner: first away from navy-dominant, then from beige to **white-first**. Final palette: white #FFFFFF base, light gray #F7F8FA for alternate sections, navy #0B1B33 only for headings/badges/accents (never a full-section background), electric blue #2F6BFF only for buttons and micro-details. Type: Barlow Condensed display + Manrope body + JetBrains Mono labels.
- **Logo constraint:** `logo.png` is navy on transparent and must sit on light backgrounds. `logo-full.png` is white and is now unused (no dark sections remain); both header and footer use `logo.png`.
- **Languages:** full ES + EN with a language selector (same i18n pattern as the portfolio). Default locale `en` at `/`, Spanish at `/es/`.
- **Form:** Netlify Forms + email notification to `support@southstormmechanical.com`. Keep the 4 existing fields (Nombre, Apellido, Correo, Mensaje).
- **Approach:** Option 1 — static Astro + Tailwind 4 (Vite plugin) + i18n dictionary + Netlify Forms. No SSR adapter.

## Scope and constraints
- Confirmed facts only: residential repair, maintenance, emergency service; all brands; no installation; South Florida East Coast; call-first CTA 561-788-4360; "Hablamos español"; diagnostic fee waived with paid fix; "Better result, better outcome, less money."
- Correct the swapped service descriptions instead of copying the error.
- Do NOT invent cities, warranty terms, licenses, reviews, hours, or offer exclusions.
- Keep Housecall Pro links (booking + client portal) and WhatsApp (wa.me/+15617884360) from the current site.
- Netlify: `netlify.toml` with `pnpm build` and publish `dist`.
- Technical artifacts stay in English; UI copy is translated per locale.

## Tasks
- [x] SSM-A1 Scaffold Astro project config (package.json, astro.config.mjs, tsconfig.json, netlify.toml, .gitignore) and install dependencies. — `feeeb2d`
- [x] SSM-A2 Implement i18n core with tests-first (src/lib/i18n/routing.ts, ui.ts, LangDetect.astro) — RED → GREEN → REFACTOR. — `4017f67`
- [x] SSM-A3 Build design system: global.css theme tokens, fonts, and UI primitives (Eyebrow, SectionHeading, button styles). — `f7d35cf`
- [x] SSM-A4 Build layout components: BaseHead (SEO/hreflang/JSON-LD), BaseLayout, Header, Footer, Motion. — `f7d35cf`
- [x] SSM-A5 Build home sections: Hero, TrustBar, Services (corrected copy), FAQ (answered), ContactForm (Netlify Forms). — `597c295`
- [x] SSM-A6 Assemble EN/ES pages, 404, thanks pages, favicon, logo and hero assets. — `597c295`
- [x] SSM-A7 Verify: astro check, vitest, pnpm build, and read back generated HTML (form, hreflang, phone). — see Progress.

## Acceptance criteria
- `pnpm build` produces a static `dist/` deployable to Netlify with `/` (EN) and `/es/` (ES).
- Both locales render all sections with a working language selector that persists the choice.
- Contact form posts to Netlify Forms with `form-name`, honeypot, and thanks redirect; notification email documented.
- Phone CTA, WhatsApp, Housecall Pro links, and "Hablamos español" are present.
- Service descriptions are no longer swapped; all four FAQ questions have answers; no unsupported claims.
- SEO: canonical, hreflang, OG, and LocalBusiness JSON-LD present in built HTML.
- Checks: astro check clean, vitest green, build green.

## Verification
- `pnpm check`, `pnpm test`, `pnpm build`.
- Read back `dist/index.html` and `dist/es/index.html` for form-name, hreflang, tel:, and corrected copy.
- Confirm each task closes with a work-unit commit on the feature branch.

## Progress
- 2026-11-17: Design presented and approved by owner; approach, fidelity, language and form decisions recorded.
- 2026-11-17: Squarespace content extracted read-only via Playwright; swapped descriptions and empty FAQ answer confirmed; hero photo and logo sourced from the live site.
- 2026-11-17: Runtime constraints confirmed — subagents denied, Engram degraded, gentle-ai CLI blocked by Application Control. Consequence: direct inline implementation, no RDD review, Engram mirror pending.
- Route: direct inline (delegation unavailable; documented, not a silent skip).
- 2026-11-17: TDD on i18n — RED observed (2 test files failed, modules missing), GREEN with 10 passing tests, then REFACTOR (derived key parity from the dictionary itself).
- 2026-11-17: Verification evidence — `pnpm check` 0 errors, `pnpm test` 10/10, `pnpm build` 5 pages + sitemap. Built HTML checked via UTF-8 reads: form-name, tel:+15617884360, hreflang en/es, HVACBusiness JSON-LD, corrected service descriptions and all FAQ answers present in both locales. Static serve smoke test: `/` and `/es/` both HTTP 200.
- 2026-11-17: Five work-unit commits on `feat/astro-landing`; working tree clean. RDD review not run (CLI blocked); delivery/push/PR remain the owner's decision.
- 2026-11-17: Palette correction (owner feedback, two rounds). Sampled logos with canvas: `logo.png` = #001D3C navy on transparent, `logo-full.png` = #fefefe white. Original design had the navy logo on a navy header and navy-dominant sections. First pass moved to warm beige; owner then chose white and no full-navy blocks. Final: white-first tokens (`--color-paper`, `--color-surface` #F7F8FA), navy headings/accents only, light footer with `logo.png`, electric blue limited to buttons and 3px details. Verified via computed styles in the browser: header/hero/services/FAQ white, trust bar/contact/footer #F7F8FA, headings navy, no navy section backgrounds in either locale. `pnpm check` 0 errors, `pnpm test` 10/10, `pnpm build` 5 pages.

## Outstanding before launch
- Confirm the production domain and replace `SITE` in `astro.config.mjs` (current placeholder: southstormmechanical.netlify.app).
- Configure Netlify Forms notification email in the Netlify UI or via `NOTIFICATION_EMAIL`.
- Review the waived-diagnostic wording and the "Better result..." tagline with the owner before publishing (flagged in brand-discovery.md as unconfirmed phrasing).

## Notes
- Supersedes `odd/tasks/southstorm-hvac-homepage.md` (Squarespace editing plan, no longer applicable).
- Engram mirror `odd/southstorm-astro-landing/tasks`: pending (provider degraded).
