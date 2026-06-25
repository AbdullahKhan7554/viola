/**
 * JSON-LD structured data builders (PRD §11.4).
 * Output is injected via <script type="application/ld+json"> in pages.
 */
import { BUSINESS, SITE_URL } from "./constants";
import { absoluteUrl } from "./utils";

const ID = `${SITE_URL}/#business`;

/** MedicalBusiness + BeautySalon for the clinic (LocalBusiness). */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "BeautySalon"],
    "@id": ID,
    name: BUSINESS.name,
    url: SITE_URL,
    image: absoluteUrl("/images/voila-reception.webp"),
    logo: absoluteUrl("/images/voila-signage.webp"),
    telephone: BUSINESS.phoneIntl,
    priceRange: BUSINESS.priceRange,
    description: BUSINESS.description,
    founder: { "@type": "Person", name: BUSINESS.practitioner },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: BUSINESS.hours.opens,
      closes: BUSINESS.hours.closes,
    },
    sameAs: [BUSINESS.instagramUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: 5,
    },
  };
}

/** Person schema for the lead practitioner (EEAT signal). */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: BUSINESS.practitioner,
    jobTitle: "Lead Aesthetic Practitioner & Founder",
    url: absoluteUrl("/about"),
    image: absoluteUrl("/images/treatment-room-1.webp"),
    worksFor: { "@id": ID },
    knowsAbout: [
      "HydraFacial",
      "Laser hair removal",
      "BB Glow",
      "Microneedling",
      "PRP hair restoration",
      "Chemical peels",
      "Pigmentation and melasma treatment",
      "Acne and acne-scar treatment",
      "Skin rejuvenation",
    ],
  };
}

/** Service schema for a single treatment. */
export function serviceSchema(treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: treatment.name,
    serviceType: treatment.name,
    description: treatment.summary,
    url: absoluteUrl(`/treatments/${treatment.slug}`),
    image: absoluteUrl(treatment.image),
    areaServed: { "@type": "City", name: "Lahore" },
    provider: { "@id": ID },
  };
}

/** FAQPage schema from a list of {question, answer}. */
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** BlogPosting / Article schema for a Skin Journal guide. */
export function blogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Person",
      name: BUSINESS.practitioner,
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/favicon.svg") },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    keywords: (post.keywords || []).join(", "),
  };
}

/** BreadcrumbList schema from [{name, path}]. */
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Aggregate Review snippets for the reviews page. */
export function reviewsSchema(reviews) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ID,
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: 5,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating || 5,
        bestRating: 5,
      },
      reviewBody: r.quote,
    })),
  };
}

/** Helper to serialize schema safely for dangerouslySetInnerHTML. */
export function jsonLd(data) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
