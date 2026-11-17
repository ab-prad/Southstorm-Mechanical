import type { Locale } from "../i18n/routing";

export interface PageMeta {
  title: string;
  description: string;
  locale: Locale;
  pathname: string;
}

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

function normalizePath(pathname: string): string {
  return pathname.replace(/\/$/, "") || "/";
}

function withoutLocale(pathname: string, locale: Locale): string {
  if (locale === "es") {
    return normalizePath(pathname.replace(/^\/es\/?/, "/")) || "/";
  }
  return normalizePath(pathname);
}

export function getHreflang(meta: PageMeta, siteOrigin: string): HreflangEntry[] {
  const base = withoutLocale(meta.pathname, meta.locale);
  const enPath = base === "/" ? "/" : base;
  const esPath = base === "/" ? "/es/" : `/es${base}/`;

  return [
    { hreflang: "en", href: `${siteOrigin}${enPath}` },
    { hreflang: "es", href: `${siteOrigin}${esPath}` },
    { hreflang: "x-default", href: `${siteOrigin}${enPath}` },
  ];
}

export function getLocalBusinessJsonLd(siteOrigin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Southstorm Mechanical",
    description:
      "Residential HVAC repair, maintenance and emergency service across South Florida's East Coast. All brands.",
    telephone: "+1-561-788-4360",
    email: "support@southstormmechanical.com",
    url: siteOrigin,
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
    availableLanguage: ["en", "es"],
  };
}
