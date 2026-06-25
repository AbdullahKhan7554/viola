/**
 * Single source of truth for brand & contact facts (PRD source table).
 * Update here once; consumed across UI, SEO schema, and metadata.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://voilaaesthetics.com";

export const BUSINESS = {
  name: "Voila's Luxury Skincare Aesthetics",
  shortName: "Voila",
  wordmark: "VOILÁ",
  tagline: "Luxury Skincare Aesthetics",
  practitioner: "Dr. Beenish Jahangir",
  // Doctor-led, luxury aesthetic clinic
  description:
    "Doctor-led luxury skincare clinic in Wapda Town, Lahore. HydraFacial, laser hair removal, BB Glow, microneedling & PRP by Dr. Beenish Jahangir. Rated 5.0★.",
  address: {
    street: "10 Wapda, Block K1, Wapda Town Phase 1",
    city: "Lahore",
    region: "Punjab",
    postalCode: "54770",
    country: "PK",
    countryName: "Pakistan",
  },
  geo: {
    // Approx. Wapda Town Phase 1, Lahore — refine with exact pin pre-launch.
    latitude: 31.4181,
    longitude: 74.2329,
  },
  phoneDisplay: "0328 0671191",
  phoneIntl: "+92 328 0671191",
  phoneE164: "923280671191", // for wa.me & tel:
  email: "hello@voilaaesthetics.com",
  instagram: "voilaluxuryskincareaesthetics",
  instagramUrl:
    "https://instagram.com/voilaluxuryskincareaesthetics",
  googleMapsUrl: "https://maps.google.com/?q=Voila+Luxury+Skincare+Aesthetics+Wapda+Town+Lahore",
  googleReviewsUrl: "https://www.google.com/search?q=Voila+Luxury+Skincare+Aesthetics+Lahore+reviews",
  rating: { value: 5.0, count: 113 },
  priceRange: "$$$",
  // Afternoon / evening clinic — opens 4:00 PM daily (PRD).
  hours: {
    opens: "16:00",
    closes: "22:00",
    displayShort: "Opens 4:00 PM daily",
    displayLong: "Open daily — 4:00 PM to 10:00 PM",
  },
};

/** Prefilled WhatsApp click-to-chat link (PRD F21). */
export function whatsappLink(message) {
  const text =
    message ||
    `Hi Voila! I'd like to book a consultation. Please share availability.`;
  return `https://wa.me/${BUSINESS.phoneE164}?text=${encodeURIComponent(text)}`;
}

export function telLink() {
  return `tel:+${BUSINESS.phoneE164}`;
}

/** Primary navigation (PRD §10.2). */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Bridal", href: "/bridal" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
