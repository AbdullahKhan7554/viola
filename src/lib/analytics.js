/**
 * Thin GA4 event wrapper (PRD §16). Safe no-op when GA isn't configured
 * or when running on the server. Tracks the key conversion events:
 * WhatsApp click, call click, form submit, treatment views, gallery opens.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/* Named helpers for the conversion-critical actions. */
export const track = {
  whatsappClick: (location) =>
    trackEvent("whatsapp_click", { location, conversion: true }),
  callClick: (location) =>
    trackEvent("call_click", { location, conversion: true }),
  formSubmit: (treatment) =>
    trackEvent("lead_form_submit", { treatment, conversion: true }),
  treatmentView: (slug) => trackEvent("treatment_view", { slug }),
  galleryOpen: (index) => trackEvent("gallery_open", { index }),
  faqExpand: (question) => trackEvent("faq_expand", { question }),
  ctaClick: (label, location) => trackEvent("cta_click", { label, location }),
};
