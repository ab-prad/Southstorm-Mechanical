import type { Locale } from "./routing";

type TranslationKey = keyof (typeof ui)["en"];

/**
 * UI copy for both locales. Technical artifacts stay in English; these strings
 * are the only user-facing product copy and are intentionally translated.
 */
export const ui = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.call": "Call now",
    "nav.portal": "Client Portal",
    "nav.language": "Language",
    "nav.menu": "Menu",
    "nav.closeMenu": "Close menu",

    "hero.eyebrow": "Residential HVAC · South Florida",
    "hero.title": "Complete climate equipment care",
    "hero.lead":
      "Repair, maintenance and emergency service for home climate systems. All brands, straightforward pricing, and attention to every detail.",
    "hero.promo": "Diagnostic fee always waived with a paid repair.",
    "hero.cta.call": "Call now",
    "hero.cta.book": "Book a visit",
    "hero.imageAlt":
      "Outdoor heat pump units next to a white building, surrounded by decorative stone and grass.",

    "trust.spanish": "Hablamos español",
    "trust.brands": "All brands serviced",
    "trust.emergency": "Emergency service",
    "trust.area": "South Florida · East Coast",

    "services.eyebrow": "What we do",
    "services.title": "Professional services",
    "service.repair.title": "Repair",
    "service.repair.desc":
      "We repair home climate equipment of all brands across South Florida's East Coast.",
    "service.maintenance.title": "Maintenance",
    "service.maintenance.desc":
      "We apply routine checks that extend the service life of your climate equipment.",
    "service.emergency.title": "Emergency",
    "service.emergency.desc":
      "We show up on time when your climate system cannot wait.",

    "faq.eyebrow": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "What services do you offer?",
    "faq.a1":
      "We offer in-home repair, maintenance and emergency service for climate equipment. We service all brands.",
    "faq.q2": "Do you charge for diagnostics?",
    "faq.a2":
      "The diagnostic fee is always waived when you go ahead with a paid repair.",
    "faq.q3": "How can I contact you?",
    "faq.a3":
      "Call 561-788-4360, message us on WhatsApp, or send the proposal form below.",
    "faq.q4": "What is it like to work with you?",
    "faq.a4":
      "We treat every customer like family: competitive pricing, attention to detail and a fast response.",

    "form.eyebrow": "Get in touch",
    "form.title": "Request a personalized proposal",
    "form.lead":
      "Complete the form and a specialist will contact you within 24 hours to assess your needs.",
    "form.firstName": "First name",
    "form.lastName": "Last name",
    "form.email": "Email address",
    "form.message": "Message",
    "form.submit": "Send",
    "form.required": "required",
    "form.honeypot": "Leave this field empty",
    "form.successTitle": "Request received",
    "form.successLead": "Thanks — we will get back to you shortly.",

    "thanks.title": "Thank you",
    "thanks.lead": "Your request was received. A specialist will contact you soon.",
    "thanks.home": "Back to home",

    "footer.tagline": "Better result, better outcome, less money.",
    "footer.services": "Repair · Maintenance · Emergency service",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Astro",

    "meta.title":
      "Southstorm Mechanical | Residential HVAC Repair & Maintenance in South Florida",
    "meta.description":
      "Residential HVAC repair, maintenance and emergency service across South Florida's East Coast. All brands. Call 561-788-4360.",
  },
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.call": "Llámanos",
    "nav.portal": "Portal de Cliente",
    "nav.language": "Idioma",
    "nav.menu": "Menú",
    "nav.closeMenu": "Cerrar menú",

    "hero.eyebrow": "Climatización residencial · Sur de Florida",
    "hero.title": "Mantenimiento integral de equipos de clima",
    "hero.lead":
      "Reparación, mantenimiento y emergencias para sistemas de clima del hogar. Todas las marcas, precios claros y atención al detalle.",
    "hero.promo": "Diagnóstico siempre exento con reparación pagada.",
    "hero.cta.call": "Llámanos",
    "hero.cta.book": "Agendar visita",
    "hero.imageAlt":
      "Unidades exteriores de bombas de calor junto a un edificio blanco, rodeadas de piedras decorativas y césped.",

    "trust.spanish": "Hablamos español",
    "trust.brands": "Atendemos todas las marcas",
    "trust.emergency": "Servicio de emergencias",
    "trust.area": "Sur de Florida · Costa Este",

    "services.eyebrow": "Lo que hacemos",
    "services.title": "Servicios profesionales",
    "service.repair.title": "Reparación",
    "service.repair.desc":
      "Reparamos equipos de clima de todas las marcas en hogares del sur de Florida.",
    "service.maintenance.title": "Mantenimiento",
    "service.maintenance.desc":
      "Aplicamos rutinas periódicas que prolongan la vida útil de equipos de clima.",
    "service.emergency.title": "Emergencias",
    "service.emergency.desc":
      "Acudimos en tiempo ante situaciones que no pueden esperar.",

    "faq.eyebrow": "Conviene saberlo",
    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿Qué servicios ofrecen?",
    "faq.a1":
      "Ofrecemos reparación, mantenimiento y servicio de emergencias de equipos de clima a domicilio. Atendemos todas las marcas.",
    "faq.q2": "¿Cobran la detección?",
    "faq.a2":
      "El cargo por diagnóstico siempre se exime cuando se realiza la reparación pagada.",
    "faq.q3": "¿Cómo puedo contactarlos?",
    "faq.a3":
      "Llámanos al 561-788-4360, escríbenos por WhatsApp o completa el formulario de propuesta.",
    "faq.q4": "¿Cómo es trabajar con ustedes?",
    "faq.a4":
      "Tratamos a cada cliente como parte de la familia: precios competitivos, atención al detalle y respuesta rápida.",

    "form.eyebrow": "Escríbenos",
    "form.title": "Solicitar propuesta personalizada",
    "form.lead":
      "Completa el formulario y un especialista se pondrá en contacto en menos de 24 horas para evaluar tus necesidades.",
    "form.firstName": "Nombre",
    "form.lastName": "Apellido",
    "form.email": "Correo electrónico",
    "form.message": "Mensaje",
    "form.submit": "Enviar",
    "form.required": "obligatorio",
    "form.honeypot": "Deja este campo vacío",
    "form.successTitle": "Solicitud recibida",
    "form.successLead": "Gracias: nos pondremos en contacto contigo pronto.",

    "thanks.title": "Gracias",
    "thanks.lead": "Recibimos tu solicitud. Un especialista se contactará contigo pronto.",
    "thanks.home": "Volver al inicio",

    "footer.tagline": "Mejor resultado, mejor desenlace, menos dinero.",
    "footer.services": "Reparación · Mantenimiento · Servicio de emergencias",
    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Hecho con Astro",

    "meta.title":
      "Southstorm Mechanical | Reparación y mantenimiento HVAC en el sur de Florida",
    "meta.description":
      "Reparación, mantenimiento y emergencias de climatización residencial en la Costa Este del sur de Florida. Todas las marcas. Llama al 561-788-4360.",
  },
} as const;

export type { TranslationKey };

export function t(key: TranslationKey, locale: Locale): string {
  const value = (ui[locale] as Record<string, string>)[key];
  if (value === undefined) {
    throw new Error(`Unknown i18n key: ${key}`);
  }
  return value;
}
