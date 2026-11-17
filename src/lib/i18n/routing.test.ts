import { describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  LOCALES,
  getAlternateUrl,
  getLocaleFromPath,
  localizeUrl,
} from "./routing";

describe("i18n routing", () => {
  it("exposes en as the default locale and supports en + es", () => {
    expect(DEFAULT_LOCALE).toBe("en");
    expect([...LOCALES]).toEqual(["en", "es"]);
  });

  it("detects the Spanish locale from /es and /es/ paths", () => {
    expect(getLocaleFromPath("/es")).toBe("es");
    expect(getLocaleFromPath("/es/")).toBe("es");
    expect(getLocaleFromPath("/es/contact")).toBe("es");
  });

  it("treats root and any other path as English", () => {
    expect(getLocaleFromPath("/")).toBe("en");
    expect(getLocaleFromPath("/contact")).toBe("en");
    expect(getLocaleFromPath("/gracias")).toBe("en");
  });

  it("localizes English paths without a prefix", () => {
    expect(localizeUrl("/", "en")).toBe("/");
    expect(localizeUrl("/services", "en")).toBe("/services");
  });

  it("prefixes Spanish paths with /es", () => {
    expect(localizeUrl("/", "es")).toBe("/es/");
    expect(localizeUrl("/services", "es")).toBe("/es/services");
    expect(localizeUrl("services", "es")).toBe("/es/services");
  });

  it("returns the opposite locale URL for both sides", () => {
    expect(getAlternateUrl("/", "en")).toBe("/es/");
    expect(getAlternateUrl("/es/", "es")).toBe("/");
    expect(getAlternateUrl("/services", "en")).toBe("/es/services");
    expect(getAlternateUrl("/es/services", "es")).toBe("/services");
  });
});
