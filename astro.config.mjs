// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` seeds canonical, hreflang and sitemap URLs. Netlify sets
// PUBLIC_SITE_URL at build time; the fallback is the real Netlify subdomain.
const SITE = process.env.PUBLIC_SITE_URL || 'https://southstorm-mechanical.netlify.app';

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-ES' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
