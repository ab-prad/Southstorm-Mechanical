export type Locale = "en" | "es";

export const LOCALES: readonly Locale[] = ["en", "es"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    return "es";
  }
  return "en";
}

export function localizeUrl(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (locale === "en") {
    return normalized;
  }

  if (normalized === "/") {
    return "/es/";
  }
  return `/es${normalized}`;
}

export function getAlternateUrl(currentPath: string, currentLocale: Locale): string {
  const otherLocale: Locale = currentLocale === "en" ? "es" : "en";

  const pathWithoutLocale =
    currentLocale === "es"
      ? currentPath.replace(/^\/es\/?/, "/") || "/"
      : currentPath;

  return localizeUrl(pathWithoutLocale, otherLocale);
}
