# Southstorm Mechanical — Astro Landing (Netlify)

## Objective
Replace the Squarespace site with a self-owned Astro landing page hosted on Netlify, reusing the architecture patterns from the personal portfolio project, preserving the current site's content with corrected copy, and adding full ES/EN i18n plus a Netlify Forms contact flow.

## Problem and rationale
The owner does not want to keep paying for / rely on Squarespace. The current site content is a partially wrong template: the "Repair" and "Maintenance" descriptions are swapped, one FAQ answer is empty, and the copy does not reflect the confirmed brand (gray + navy, call-first, residential HVAC in South Florida). Moving to a static Astro build on Netlify removes the CMS dependency and enables i18n and a native form.

## Decisions (approved by owner 2026-11-17)
- **Fidelity:** same sections and content, own design ("Precision Industrial": navy #0B1B33 dominant, slate gray, off-white #F4F6F8, electric-blue accent #2F6BFF; Barlow Condensed display + Manrope body + JetBrains Mono labels).
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
- [ ] SSM-A1 Scaffold Astro project config (package.json, astro.config.mjs, tsconfig.json, netlify.toml, .gitignore) and install dependencies.
- [ ] SSM-A2 Implement i18n core with tests-first (src/lib/i18n/routing.ts, ui.ts, LangDetect.astro) — RED → GREEN → REFACTOR.
- [ ] SSM-A3 Build design system: global.css theme tokens, fonts, and UI primitives (Button, Eyebrow, SectionHeading).
- [ ] SSM-A4 Build layout components: BaseHead (SEO/hreflang/JSON-LD), BaseLayout, Header, Footer, Motion.
- [ ] SSM-A5 Build home sections: Hero, TrustBar, Services (corrected copy), FAQ (answered), ContactForm (Netlify Forms).
- [ ] SSM-A6 Assemble EN/ES pages, 404, favicon, logo assets, and thank-you page.
- [ ] SSM-A7 Verify: astro check, vitest, pnpm build, and read back generated HTML (form, hreflang, phone).

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
- 2026-11-17: Squarespace content extracted read-only via Playwright; swapped descriptions and empty FAQ answer confirmed.
- 2026-11-17: Runtime constraints confirmed — subagents denied, Engram degraded, gentle-ai CLI blocked by Application Control. Consequence: direct inline implementation, no RDD review, Engram mirror pending.
- Route: direct inline (delegation unavailable; documented, not a silent skip).

## Notes
- Supersedes `odd/tasks/southstorm-hvac-homepage.md` (Squarespace editing plan, no longer applicable).
- Engram mirror `odd/southstorm-astro-landing/tasks`: pending (provider degraded).
