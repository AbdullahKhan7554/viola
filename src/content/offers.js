/**
 * Bridal & event packages + the pre-wedding glow timeline (PRD F7 / Phase 2).
 * Data-driven so packages and seasonal offers can be edited without touching
 * the page. Pricing stays consultation-based (Open Decision A5).
 */

export const bridalTimeline = [
  {
    when: "6 months before",
    title: "Foundation & assessment",
    detail:
      "A skin consultation with Dr. Beenish sets your plan. We treat the deeper work first — texture, scarring, pigmentation — while there's time for skin to renew.",
    treatments: ["Skin consultation", "Microneedling", "Chemical peels"],
  },
  {
    when: "3 months before",
    title: "Build your glow",
    detail:
      "Regular HydraFacials and targeted treatments deepen radiance and even your tone, so your skin keeps improving month on month.",
    treatments: ["HydraFacial course", "Pigmentation care", "Laser (if planned)"],
  },
  {
    when: "1 month before",
    title: "Refine & perfect",
    detail:
      "We focus on luminosity and an even, camera-ready finish — fine-tuning rather than introducing anything new.",
    treatments: ["HydraFacial", "BB Glow", "Dermaplaning"],
  },
  {
    when: "Wedding week",
    title: "The final glow",
    detail:
      "A gentle, hydrating finishing treatment a few days before — never something new on the day — so you walk in glowing and confident.",
    treatments: ["Hydrating facial", "Final BB Glow touch-up"],
  },
];

export const packages = [
  {
    slug: "bridal-glow-journey",
    name: "The Bridal Glow Journey",
    tagline: "Your signature 3–6 month plan to your best-ever skin",
    forWho: "Brides who want visibly transformed, camera-ready skin",
    duration: "3–6 months",
    icon: "flower",
    featured: true,
    includes: [
      "Personal consultation & skin plan with Dr. Beenish",
      "A tailored course of HydraFacials",
      "Microneedling, peels or laser as your skin needs",
      "A BB Glow finale for an even, luminous finish",
      "An event-ready glow treatment before the big day",
    ],
  },
  {
    slug: "bride-to-be-express",
    name: "Bride-to-Be Express",
    tagline: "A focused 6–8 week glow-up",
    forWho: "Brides with less time who still want a real difference",
    duration: "6–8 weeks",
    icon: "sparkle",
    featured: false,
    includes: [
      "Skin consultation & rapid plan",
      "A short course of HydraFacials",
      "BB Glow for an even, radiant finish",
      "Pre-event finishing treatment",
    ],
  },
  {
    slug: "event-ready-glow",
    name: "Event-Ready Glow",
    tagline: "One session, instant radiance",
    forWho: "Engagements, mehndi, parties & shoots",
    duration: "Single session",
    icon: "glow",
    featured: false,
    includes: [
      "Signature HydraFacial for an instant glow",
      "Optional dermaplaning for a flawless makeup base",
      "Zero downtime — glowing the same day",
    ],
  },
  {
    slug: "groom-and-couple",
    name: "Groom & Couple Glow",
    tagline: "Because the groom should glow too",
    forWho: "Grooms and couples preparing together",
    duration: "Flexible",
    icon: "heart",
    featured: false,
    includes: [
      "Deep-cleansing HydraFacial for the groom",
      "Couple's pre-wedding glow sessions",
      "Tailored plans for both of you",
    ],
  },
];

export const bridalFaqs = [
  {
    question: "When should a bride start skin treatments before the wedding?",
    answer:
      "Ideally 3 to 6 months before. Starting early gives time to treat deeper concerns like texture, scarring and pigmentation, and to build a lasting glow gradually — rather than rushing intensive treatments close to the day.",
  },
  {
    question: "Which treatments are best for bridal glow?",
    answer:
      "A combination usually works best: HydraFacials for radiance, microneedling or peels for texture and tone, pigmentation care where needed, and BB Glow for an even, luminous finish. Dr. Beenish tailors the mix to your skin.",
  },
  {
    question: "Is it safe to have treatments close to the wedding?",
    answer:
      "We never introduce a new or intensive treatment right before the day. In the final week we only do gentle, hydrating finishing treatments your skin already knows — so there are no surprises, just glow.",
  },
  {
    question: "Do you offer packages for grooms and couples?",
    answer:
      "Yes. Grooms and couples are very welcome — we build flexible plans so you can both look and feel your best on the day.",
  },
  {
    question: "How much do bridal packages cost?",
    answer:
      "Each package is tailored to your skin and timeline, so pricing is confirmed at your consultation. Message us on WhatsApp and we'll put together a plan and quote for you.",
  },
];
