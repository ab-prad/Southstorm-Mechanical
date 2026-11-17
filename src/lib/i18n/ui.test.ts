import { describe, expect, it } from "vitest";
import { LOCALES } from "./routing";
import { t, ui } from "./ui";

const REQUIRED_KEYS = [
  "nav.home",
  "nav.services",
  "nav.faq",
  "nav.contact",
  "nav.call",
  "hero.eyebrow",
  "hero.title",
  "hero.lead",
  "hero.promo",
  "hero.cta.call",
  "hero.cta.book",
  "trust.spanish",
  "trust.brands",
  "trust.emergency",
  "trust.area",
  "services.eyebrow",
  "services.title",
  "service.repair.title",
  "service.repair.desc",
  "service.maintenance.title",
  "service.maintenance.desc",
  "service.emergency.title",
  "service.emergency.desc",
  "faq.eyebrow",
  "faq.title",
  "faq.q1",
  "faq.a1",
  "faq.q2",
  "faq.a2",
  "faq.q3",
  "faq.a3",
  "faq.q4",
  "faq.a4",
  "form.eyebrow",
  "form.title",
  "form.lead",
  "form.firstName",
  "form.lastName",
  "form.email",
  "form.message",
  "form.submit",
  "form.required",
  "form.honeypot",
  "thanks.title",
  "thanks.lead",
  "footer.tagline",
  "footer.rights",
] as const;

describe("i18n dictionary", () => {
  it("keeps an identical key set in both locales without empty strings", () => {
    const enKeys = Object.keys(ui.en).sort();
    const esKeys = Object.keys(ui.es).sort();
    expect(esKeys).toEqual(enKeys);

    for (const locale of LOCALES) {
      const strings = ui[locale] as Record<string, string>;
      for (const key of enKeys) {
        expect(strings[key].length, `${locale} empty "${key}"`).toBeGreaterThan(0);
      }
    }
  });

  it("covers every key the UI relies on", () => {
    const en = ui.en as Record<string, string>;
    for (const key of REQUIRED_KEYS) {
      expect(en[key], `missing "${key}"`).toBeTypeOf("string");
    }
  });

  it("t() returns the translated string for the requested locale", () => {
    expect(t("hero.cta.call", "en")).toBe("Call now");
    expect(t("hero.cta.call", "es")).toBe("Llámanos");
  });

  it("t() throws on unknown keys instead of silently rendering them", () => {
    // @ts-expect-error deliberate runtime check
    expect(() => t("does.not.exist", "en")).toThrow(/Unknown i18n key/);
  });
});
