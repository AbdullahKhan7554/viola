/**
 * Treatments content (PRD F2). Data-driven so a CMS can replace this
 * module in Phase 2 without touching components. Each treatment carries
 * everything a detail page needs: SEO meta, benefits, process, sessions,
 * aftercare, and FAQ (which also powers FAQPage schema).
 *
 * Pricing is intentionally "On consultation" (Open Decision A5) — no
 * invented prices per the no-placeholder rule.
 */

export const treatments = [
  {
    slug: "hydrafacial",
    name: "HydraFacial",
    category: "Facials & Glow",
    image: "/images/treatments/hydrafacial.webp",
    imageAlt:
      "HydraFacial treatment giving a client a deep-cleansing glow at Voila, Wapda Town, Lahore",
    seoTitle: "HydraFacial in Lahore | Glow Facial by Dr. Beenish",
    seoDescription:
      "Medical-grade HydraFacial in Wapda Town, Lahore — deep cleanse, hydrate & instant glow with zero downtime, by Dr. Beenish. 5.0★. Book on WhatsApp.",
    pricingFactors: [
      "A single glow session vs. a monthly maintenance course",
      "Add-on boosters and targeted serums",
      "The skin concerns being addressed",
    ],
    duration: "45–60 minutes",
    sessions: "Single session; monthly for maintenance",
    downtime: "None — return to your day immediately",
    priceNote: "On consultation",
    icon: "droplet",
    featured: true,
    summary:
      "A medical-grade, multi-step facial that cleanses, exfoliates, extracts and deeply hydrates for an instant, luminous glow.",
    description:
      "Our signature HydraFacial uses patented vortex technology to deeply cleanse and gently resurface the skin while infusing nourishing serums of antioxidants, peptides and hyaluronic acid. It's a calm, comfortable treatment that delivers visible radiance with zero downtime — ideal before an event or as a monthly skin ritual.",
    benefits: [
      "Instant radiance and a smoother, plumper texture",
      "Deep yet gentle cleansing and painless extractions",
      "Hydration that lasts, with refined-looking pores",
      "Suitable for all skin types, including sensitive skin",
      "No downtime — makeup-ready straight away",
    ],
    process: [
      {
        title: "Consultation & cleanse",
        detail:
          "Dr. Beenish assesses your skin and concerns, then deeply cleanses to prepare the surface.",
      },
      {
        title: "Exfoliate & resurface",
        detail:
          "A gentle acid blend loosens debris and dead cells without irritation.",
      },
      {
        title: "Extract & hydrate",
        detail:
          "Painless vortex suction clears pores while infusing intensive hydration.",
      },
      {
        title: "Infuse & protect",
        detail:
          "Antioxidant and peptide serums are sealed in, finishing with SPF guidance.",
      },
    ],
    aftercare: [
      "Avoid direct sun and use SPF 30+ for 48 hours",
      "Skip exfoliants and retinoids for 24–48 hours",
      "Stay hydrated to prolong your glow",
      "Makeup can be applied the same day if desired",
    ],
    faqs: [
      {
        question: "How much does a HydraFacial cost in Lahore?",
        answer:
          "HydraFacial pricing in Lahore varies by clinic and what's included. At Voila your price is confirmed during consultation and depends on whether it's a one-off glow session or a monthly course, plus any add-on serums. Message us on WhatsApp for current pricing.",
      },
      {
        question: "Is a HydraFacial painful?",
        answer:
          "Not at all. Most clients describe it as relaxing — the extractions use gentle suction rather than manual squeezing, so there's no discomfort.",
      },
      {
        question: "How often should I get a HydraFacial?",
        answer:
          "For a one-off glow, a single session is perfect before an event. For lasting skin health, we recommend a session every 3–4 weeks.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "None. Your skin may look slightly flushed for an hour, after which you're left with a clean, radiant finish — you can wear makeup the same day.",
      },
    ],
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Laser",
    image: "/images/treatments/laser-hair-removal.webp",
    imageAlt:
      "Nd:YAG laser hair removal performed on a client's skin at Voila, Wapda Town, Lahore",
    seoTitle: "Laser Hair Removal in Lahore | Safe & Effective",
    seoDescription:
      "Doctor-supervised laser hair removal in Wapda Town, Lahore. Safe for South-Asian skin, visible results, minimal discomfort. 5.0★. Book a patch test.",
    pricingFactors: [
      "The area(s) being treated — from underarms to full body",
      "The number of sessions in your plan",
      "Your hair density and skin type",
    ],
    duration: "15–60 minutes (by area)",
    sessions: "6–8 sessions, 4–6 weeks apart",
    downtime: "Minimal — slight redness for a few hours",
    priceNote: "On consultation",
    icon: "sparkle",
    featured: true,
    summary:
      "Safe, effective laser hair reduction for smooth, low-maintenance skin — performed with clinical precision under medical supervision.",
    description:
      "Our laser hair removal targets the hair follicle with controlled light energy to progressively reduce regrowth, leaving skin smooth and even. Treatments are tailored to your skin tone and hair type for safety and results, and many clients notice a visible difference after the very first session.",
    benefits: [
      "Long-term reduction in unwanted hair",
      "Smoother skin with no ingrown hairs or stubble",
      "Precise, medically supervised and hygienic",
      "Suitable for face and body areas",
      "Saves time and cost versus waxing or threading",
    ],
    process: [
      {
        title: "Patch test & consultation",
        detail:
          "We assess skin tone and hair type and perform a patch test to set safe, effective parameters.",
      },
      {
        title: "Prep the area",
        detail:
          "The treatment area is cleansed and a cooling gel is applied for comfort.",
      },
      {
        title: "Laser application",
        detail:
          "Pulses of light target follicles with integrated skin cooling to protect the surface.",
      },
      {
        title: "Soothe & advise",
        detail:
          "We apply a calming serum and share aftercare to maximise results between sessions.",
      },
    ],
    aftercare: [
      "Avoid sun exposure and tanning for 2 weeks",
      "Use SPF 30+ daily on treated areas",
      "No hot baths, saunas or gym for 24–48 hours",
      "Do not wax or pluck between sessions — shaving is fine",
    ],
    faqs: [
      {
        question: "How much does laser hair removal cost in Lahore?",
        answer:
          "Laser hair removal pricing depends on the area treated and the number of sessions in your plan — underarms cost far less than full body. At Voila we confirm your price at consultation after a patch test. Message us on WhatsApp for a tailored quote.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Most areas need 6–8 sessions spaced 4–6 weeks apart, because hair grows in cycles. Many clients see visible reduction after the first session.",
      },
      {
        question: "Is laser hair removal safe?",
        answer:
          "Yes. Treatments are doctor-supervised, with a patch test first and settings tailored to your skin tone and hair type for both safety and results.",
      },
      {
        question: "Does it hurt?",
        answer:
          "There's a mild snapping sensation, eased by integrated cooling. Most clients find it very tolerable, especially compared to waxing.",
      },
    ],
  },
  {
    slug: "bb-glow",
    name: "BB Glow",
    category: "Facials & Glow",
    image: "/images/treatments/bb-glow.webp",
    imageAlt:
      "Radiant, even skin after a BB Glow treatment at Voila, Wapda Town, Lahore",
    seoTitle: "BB Glow Treatment in Lahore | Natural Glow",
    seoDescription:
      "Semi-permanent BB Glow in Wapda Town, Lahore for an even, luminous, no-makeup glow — perfect for brides & events. By Dr. Beenish. 5.0★. Book now.",
    pricingFactors: [
      "The number of sessions in your course",
      "Add-on skin-brightening boosters",
      "Whether it's part of a bridal/event package",
    ],
    duration: "60 minutes",
    sessions: "3–4 sessions for best results",
    downtime: "Little to none",
    priceNote: "On consultation",
    icon: "glow",
    featured: false,
    summary:
      "A semi-permanent treatment that evens skin tone and adds a soft, luminous, foundation-like finish.",
    description:
      "BB Glow uses fine micro-infusion to deposit a tinted, nutrient-rich serum into the upper layer of the skin, helping to even tone, reduce the look of pigmentation and create a naturally radiant, 'no-makeup' glow. It's a favourite for brides and event-goers who want camera-ready skin.",
    benefits: [
      "Evens skin tone and brightens dullness",
      "Softens the look of pigmentation and redness",
      "A natural, luminous, foundation-like finish",
      "Hydrates and nourishes with infused serums",
      "Beautiful for brides and special occasions",
    ],
    process: [
      {
        title: "Cleanse & assess",
        detail:
          "Skin is cleansed and tone is assessed to select the right serum shade.",
      },
      {
        title: "Prep & soothe",
        detail: "A gentle prep readies the skin and maximises comfort.",
      },
      {
        title: "Micro-infusion",
        detail:
          "The tinted serum is infused evenly across the skin for a soft, radiant veil.",
      },
      {
        title: "Finish & protect",
        detail: "A calming mask and SPF guidance complete the glow.",
      },
    ],
    aftercare: [
      "Avoid water on the face for 12–24 hours",
      "No makeup for 24 hours to let serums settle",
      "Use SPF 30+ daily to protect results",
      "Avoid sweating, saunas and pools for 48 hours",
    ],
    faqs: [
      {
        question: "How long does BB Glow last?",
        answer:
          "Results are semi-permanent and typically last several weeks to a few months, building with a course of 3–4 sessions.",
      },
      {
        question: "Is BB Glow suitable for my skin tone?",
        answer:
          "Yes — Dr. Beenish selects and blends the serum shade to complement your natural tone for a believable, even finish.",
      },
    ],
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    category: "Skin Rejuvenation",
    image: "/images/treatments/microneedling.webp",
    imageAlt:
      "Microneedling pen with serum applied to a client's face at Voila, Wapda Town, Lahore",
    seoTitle: "Microneedling in Lahore | Acne Scars & Texture",
    seoDescription:
      "Collagen-boosting microneedling in Wapda Town, Lahore — softens acne scars, fine lines & refines texture. Doctor-led by Dr. Beenish. 5.0★. Book now.",
    pricingFactors: [
      "The number of sessions in your plan",
      "Treatment area and needle depth",
      "Serums or boosters added to the session",
    ],
    duration: "45–60 minutes",
    sessions: "3–6 sessions, 4 weeks apart",
    downtime: "1–2 days of mild redness",
    priceNote: "On consultation",
    icon: "needle",
    featured: false,
    summary:
      "Collagen-induction therapy that refines texture, softens scars and fine lines, and renews skin from within.",
    description:
      "Microneedling creates controlled micro-channels that trigger your skin's natural healing and collagen production. Over a course of treatments it visibly refines texture, softens acne scarring and fine lines, and improves overall firmness and tone — a powerhouse for genuine skin renewal.",
    benefits: [
      "Smoother texture and refined pores",
      "Softens acne scars and fine lines",
      "Boosts natural collagen and firmness",
      "Improves product absorption and radiance",
      "Targeted, doctor-led treatment plans",
    ],
    process: [
      {
        title: "Consultation",
        detail:
          "We map your concerns and tailor needle depth and serums to your skin.",
      },
      {
        title: "Numbing & prep",
        detail:
          "A topical numbing cream ensures the treatment is comfortable.",
      },
      {
        title: "Micro-channelling",
        detail:
          "Fine needles create controlled micro-injuries to stimulate collagen.",
      },
      {
        title: "Soothe & recover",
        detail:
          "Calming, reparative serums are applied with recovery guidance.",
      },
    ],
    aftercare: [
      "Expect mild redness for 24–48 hours",
      "Avoid makeup for 24 hours",
      "No sun, saunas or strenuous exercise for 48 hours",
      "Use gentle, fragrance-free products and SPF 30+",
    ],
    faqs: [
      {
        question: "Is microneedling painful?",
        answer:
          "A numbing cream is applied first, so most clients feel only light pressure or vibration during treatment.",
      },
      {
        question: "When will I see results?",
        answer:
          "Skin looks fresher within a week, with collagen-driven improvements building over a course of 3–6 monthly sessions.",
      },
      {
        question: "Can it be combined with other treatments?",
        answer:
          "Yes. Dr. Beenish may recommend pairing microneedling with serums or other treatments for enhanced results, tailored to your skin.",
      },
    ],
  },
  {
    slug: "prp-hair-restoration",
    name: "PRP Hair Restoration",
    category: "Hair & Scalp",
    image: "/images/treatments/prp-hair-restoration.webp",
    imageAlt:
      "PRP hair restoration scalp treatment in progress at Voila, Wapda Town, Lahore",
    seoTitle: "PRP Hair Treatment in Lahore | Hair Restoration",
    seoDescription:
      "PRP hair restoration in Wapda Town, Lahore using your own growth factors to strengthen hair & reduce shedding. Discreet, doctor-led. 5.0★. Book now.",
    pricingFactors: [
      "The number of sessions and maintenance plan",
      "Treatment area and scalp condition",
      "Whether combined with other hair therapies",
    ],
    duration: "45–60 minutes",
    sessions: "3–4 sessions, 4 weeks apart, then maintenance",
    downtime: "Minimal",
    priceNote: "On consultation",
    icon: "leaf",
    featured: false,
    summary:
      "Platelet-rich plasma therapy that uses your body's own growth factors to strengthen hair and encourage regrowth.",
    description:
      "PRP (platelet-rich plasma) harnesses growth factors from a small sample of your own blood to nourish hair follicles, improve thickness and stimulate regrowth. It's a discreet, natural and effective option for thinning hair, delivered with privacy and clinical care.",
    benefits: [
      "Uses your body's own growth factors — natural",
      "Strengthens follicles and reduces shedding",
      "Encourages thicker, healthier hair over time",
      "Discreet, private and doctor-administered",
      "Minimal downtime",
    ],
    process: [
      {
        title: "Consultation",
        detail:
          "We assess your scalp and hair goals and confirm suitability.",
      },
      {
        title: "Blood draw",
        detail:
          "A small blood sample is taken, just like a routine test.",
      },
      {
        title: "Plasma preparation",
        detail:
          "The sample is spun to concentrate platelet-rich plasma and growth factors.",
      },
      {
        title: "Targeted application",
        detail:
          "PRP is precisely delivered into the treatment areas of the scalp.",
      },
    ],
    aftercare: [
      "Avoid washing hair for 24 hours",
      "No saunas, swimming or heavy exercise for 48 hours",
      "Avoid hair products and dyes for 48 hours",
      "Some scalp tenderness is normal and settles quickly",
    ],
    faqs: [
      {
        question: "Is PRP safe?",
        answer:
          "Yes. Because PRP is derived from your own blood, the risk of reaction is very low. It's prepared and administered under medical supervision.",
      },
      {
        question: "How soon will I notice results?",
        answer:
          "Reduced shedding often comes first, with visible thickness building over a course of sessions and ongoing maintenance.",
      },
      {
        question: "Is the treatment private?",
        answer:
          "Absolutely. We understand discretion matters — your consultation and treatment are handled with full privacy and care.",
      },
    ],
  },
  {
    slug: "custom-facials",
    name: "Custom Facials",
    category: "Facials & Glow",
    image: "/images/treatments/custom-facials.webp",
    imageAlt:
      "Relaxing custom facial tailored to a client's skin at Voila, Wapda Town, Lahore",
    seoTitle: "Custom Facials in Lahore | Tailored Skincare",
    seoDescription:
      "Bespoke facials in Wapda Town, Lahore, tailored to your skin on the day — deep cleanse, brighten & hydrate. Doctor-led by Dr. Beenish. 5.0★. Book now.",
    pricingFactors: [
      "The actives, masks and serums chosen for your skin",
      "Add-on treatments (extractions, peels, boosters)",
      "Single visit vs. a monthly skin plan",
    ],
    duration: "60 minutes",
    sessions: "As needed; monthly recommended",
    downtime: "None",
    priceNote: "On consultation",
    icon: "flower",
    featured: false,
    summary:
      "Bespoke facials designed around your skin's needs on the day — from deep cleansing to brightening and calming rituals.",
    description:
      "No two skins are the same, so our custom facials are built around you. After assessing your skin, Dr. Beenish tailors cleansing, exfoliation, masks and serums to your concerns — whether that's congestion, dryness, dullness or sensitivity — in a relaxing, restorative experience.",
    benefits: [
      "Fully personalised to your skin on the day",
      "Targets congestion, dryness, dullness or sensitivity",
      "Relaxing, restorative and deeply hydrating",
      "Expert product selection for your skin type",
      "A perfect monthly self-care ritual",
    ],
    process: [
      {
        title: "Skin analysis",
        detail:
          "We assess your skin's condition and concerns to design the session.",
      },
      {
        title: "Cleanse & exfoliate",
        detail:
          "Double cleanse and tailored exfoliation prepare the skin.",
      },
      {
        title: "Treat & mask",
        detail:
          "Targeted serums and masks address your specific needs.",
      },
      {
        title: "Hydrate & protect",
        detail:
          "Finishing moisture and SPF leave skin glowing and protected.",
      },
    ],
    aftercare: [
      "Keep skincare gentle for 24 hours",
      "Use SPF 30+ daily",
      "Stay hydrated to maintain results",
      "Book monthly to keep skin at its best",
    ],
    faqs: [
      {
        question: "How is a custom facial different from a standard one?",
        answer:
          "Every step — exfoliation, masks and serums — is chosen for your skin on the day, rather than a fixed routine, so it's far more effective for your specific concerns.",
      },
      {
        question: "How often should I come?",
        answer:
          "A monthly facial keeps skin balanced and radiant, though we'll recommend a cadence based on your skin and goals.",
      },
    ],
  },
  {
    slug: "chemical-peel",
    name: "Chemical Peel",
    category: "Skin Rejuvenation",
    image: "/images/treatments/chemical-peel.webp",
    imageAlt:
      "Chemical peel applied during a skin-resurfacing treatment at Voila, Wapda Town, Lahore",
    seoTitle: "Chemical Peel in Lahore | Brighter, Even Skin",
    seoDescription:
      "Medical-grade chemical peels in Wapda Town, Lahore to brighten, smooth & fade pigmentation. Tailored strength, doctor-led. 5.0★. Book a consultation.",
    pricingFactors: [
      "Peel strength and the number in your course",
      "The concern being treated (pigmentation, texture, acne)",
      "Whether paired with a facial or microneedling",
    ],
    duration: "30–45 minutes",
    sessions: "Course of 3–6, 2–4 weeks apart",
    downtime: "Mild flaking for a few days",
    priceNote: "On consultation",
    icon: "droplet",
    featured: false,
    summary:
      "A medical-grade exfoliating peel that resurfaces dull, uneven skin to reveal a brighter, smoother, more even complexion.",
    description:
      "Our chemical peels use carefully selected acid blends to gently dissolve dead surface cells and stimulate renewal. Tailored in strength to your skin and concerns, they brighten dullness, soften fine lines, refine texture and fade pigmentation — for a fresh, luminous glow that builds with a course of treatments.",
    benefits: [
      "Brightens dull, tired-looking skin",
      "Refines texture and minimises pores",
      "Softens fine lines and uneven tone",
      "Helps fade pigmentation and sun damage",
      "Customised strength for your skin type",
    ],
    process: [
      {
        title: "Consultation & prep",
        detail:
          "Dr. Beenish assesses your skin and selects the right peel strength, then cleanses thoroughly.",
      },
      {
        title: "Peel application",
        detail:
          "The solution is applied evenly and timed precisely for a controlled, comfortable exfoliation.",
      },
      {
        title: "Neutralise & soothe",
        detail:
          "The peel is neutralised and calming, hydrating serums are applied.",
      },
      {
        title: "Protect",
        detail: "We finish with SPF and share aftercare to protect your results.",
      },
    ],
    aftercare: [
      "Use SPF 30+ daily — skin is more sun-sensitive",
      "Do not pick or peel flaking skin",
      "Avoid retinoids and exfoliants for 5–7 days",
      "Keep skin hydrated with gentle products",
    ],
    faqs: [
      {
        question: "Will my skin peel a lot?",
        answer:
          "It depends on the peel strength. Lighter peels cause minimal, barely-noticeable flaking, while stronger peels may peel more visibly over a few days. We tailor the strength to your comfort and goals.",
      },
      {
        question: "How many peels will I need?",
        answer:
          "Most concerns respond best to a course of 3–6 peels spaced a few weeks apart, with results building progressively.",
      },
    ],
  },
  {
    slug: "dermaplaning",
    name: "Dermaplaning",
    category: "Facials & Glow",
    image: "/images/treatments/dermaplaning.webp",
    imageAlt:
      "Dermaplaning facial exfoliation treatment at Voila, Wapda Town, Lahore",
    seoTitle: "Dermaplaning in Lahore | Smooth, Glowing Skin",
    seoDescription:
      "Dermaplaning in Wapda Town, Lahore for instantly smoother, brighter, makeup-ready skin with zero downtime. Doctor-led by Dr. Beenish. 5.0★. Book now.",
    pricingFactors: [
      "A single visit vs. a regular upkeep plan",
      "Whether combined with a facial or peel",
      "Add-on masks or boosters",
    ],
    duration: "30–45 minutes",
    sessions: "Every 3–4 weeks for upkeep",
    downtime: "None",
    priceNote: "On consultation",
    icon: "sparkle",
    featured: false,
    summary:
      "A gentle physical exfoliation that removes dead skin and fine facial hair for instantly smoother, brighter, makeup-ready skin.",
    description:
      "Dermaplaning uses a sterile, precision blade to gently sweep away dead surface cells and soft vellus hair (peach fuzz). The result is immediately smoother, more radiant skin, a flawless canvas for makeup, and better absorption of your skincare — all with zero downtime.",
    benefits: [
      "Instantly smoother, brighter skin",
      "Removes peach fuzz and dead cells",
      "Flawless base for makeup",
      "Boosts skincare absorption",
      "Gentle, painless and no downtime",
    ],
    process: [
      {
        title: "Cleanse",
        detail: "Skin is double-cleansed and dried to prepare the surface.",
      },
      {
        title: "Dermaplane",
        detail:
          "A sterile blade is gently glided across the skin at a precise angle to exfoliate.",
      },
      {
        title: "Treat",
        detail:
          "A nourishing mask or serum is applied to soothe and hydrate.",
      },
      {
        title: "Protect",
        detail: "We finish with moisturiser and SPF for a radiant glow.",
      },
    ],
    aftercare: [
      "Use SPF 30+ — fresh skin is sun-sensitive",
      "Avoid exfoliants for 2–3 days",
      "Keep skin hydrated",
      "Avoid heavy sweating for 24 hours",
    ],
    faqs: [
      {
        question: "Will my hair grow back thicker?",
        answer:
          "No — this is a myth. Dermaplaning removes fine vellus hair, which grows back exactly the same as before. It does not change the texture or thickness of your hair.",
      },
      {
        question: "Is dermaplaning suitable for all skin types?",
        answer:
          "It suits most skin types, though we may advise against it for active acne or very sensitive skin. Dr. Beenish will confirm suitability during your consultation.",
      },
    ],
  },
  {
    slug: "skin-tightening",
    name: "Skin Tightening",
    category: "Skin Rejuvenation",
    image: "/images/treatments/skin-tightening.webp",
    imageAlt:
      "Non-surgical skin tightening treatment at Voila, Wapda Town, Lahore",
    seoTitle: "Skin Tightening in Lahore | Non-Surgical Lift",
    seoDescription:
      "Non-surgical skin tightening in Wapda Town, Lahore — firms & lifts by boosting collagen, with no downtime. Doctor-led by Dr. Beenish. 5.0★. Book now.",
    pricingFactors: [
      "The number of sessions for your goal",
      "The area(s) being treated",
      "Whether combined with microneedling or facials",
    ],
    duration: "45–60 minutes",
    sessions: "Course of 4–6 for best results",
    downtime: "None to minimal",
    priceNote: "On consultation",
    icon: "glow",
    featured: false,
    summary:
      "Non-invasive energy-based tightening that firms, lifts and rejuvenates the skin by stimulating your natural collagen.",
    description:
      "Our skin tightening treatment uses controlled energy to gently heat the deeper layers of the skin, stimulating fresh collagen and elastin. Over a course of sessions it visibly firms and lifts lax skin, softens fine lines and restores a more youthful contour — all without surgery or downtime.",
    benefits: [
      "Firmer, lifted, more youthful-looking skin",
      "Stimulates natural collagen production",
      "Softens fine lines and laxity",
      "Non-invasive with little to no downtime",
      "Gradual, natural-looking results",
    ],
    process: [
      {
        title: "Consultation",
        detail:
          "We assess your skin laxity and goals and map the treatment areas.",
      },
      {
        title: "Prepare",
        detail: "Skin is cleansed and a gliding gel applied for comfort.",
      },
      {
        title: "Energy treatment",
        detail:
          "Controlled energy gently heats the deeper layers to trigger collagen renewal.",
      },
      {
        title: "Soothe",
        detail: "Calming, hydrating serums and SPF complete the session.",
      },
    ],
    aftercare: [
      "Stay hydrated to support collagen renewal",
      "Use SPF 30+ daily",
      "Avoid very hot baths or saunas for 24 hours",
      "Results build gradually over several weeks",
    ],
    faqs: [
      {
        question: "When will I see results?",
        answer:
          "Some skin tightening is visible soon after treatment, but the most significant firming builds over the following weeks as new collagen forms, improving across a course of sessions.",
      },
      {
        question: "Is the treatment comfortable?",
        answer:
          "Yes — most clients describe a warm, comfortable sensation. There's no downtime, so you can return to your day straight away.",
      },
    ],
  },
  {
    slug: "pigmentation",
    name: "Pigmentation Treatment",
    category: "Skin Rejuvenation",
    image: "/images/treatments/pigmentation.webp",
    imageAlt:
      "Bright, even skin after pigmentation and melasma treatment at Voila, Wapda Town, Lahore",
    seoTitle: "Pigmentation & Melasma Treatment in Lahore",
    seoDescription:
      "Targeted pigmentation & melasma treatment in Wapda Town, Lahore to fade dark spots & even tone. Doctor-led, tailored plans. 5.0★. Book a consultation.",
    pricingFactors: [
      "The type and depth of pigmentation",
      "The combination of treatments in your plan",
      "Length of the course and home-care products",
    ],
    duration: "45 minutes",
    sessions: "Course tailored to your skin",
    downtime: "Minimal",
    priceNote: "On consultation",
    icon: "flower",
    featured: false,
    summary:
      "Targeted treatments that fade dark spots, melasma and uneven tone for a brighter, clearer and more even complexion.",
    description:
      "Pigmentation can be stubborn — so we take a tailored, doctor-led approach combining the right treatments and active ingredients to break down excess melanin, fade dark spots and even out your skin tone. Whether it's sun damage, melasma or post-acne marks, we build a plan designed for visible, lasting brightness.",
    benefits: [
      "Fades dark spots and sun damage",
      "Evens out skin tone and melasma",
      "Brightens a dull, uneven complexion",
      "Doctor-led, personalised plan",
      "Pairs well with facials and peels",
    ],
    process: [
      {
        title: "Skin analysis",
        detail:
          "We identify the type and depth of pigmentation to design the right plan.",
      },
      {
        title: "Targeted treatment",
        detail:
          "Brightening actives and treatments are applied to break down excess melanin.",
      },
      {
        title: "Nourish",
        detail: "Soothing, antioxidant-rich serums calm and protect the skin.",
      },
      {
        title: "Protect & maintain",
        detail:
          "SPF and a home-care plan lock in results and prevent recurrence.",
      },
    ],
    aftercare: [
      "Daily SPF 30+ is essential to maintain results",
      "Avoid direct sun and tanning",
      "Follow the recommended home-care routine",
      "Be patient — pigmentation fades gradually",
    ],
    faqs: [
      {
        question: "Can pigmentation come back?",
        answer:
          "It can, especially with sun exposure or hormonal triggers like melasma. Diligent daily SPF and a maintenance routine are key to keeping results long-term.",
      },
      {
        question: "How long until I see a difference?",
        answer:
          "Many clients notice gradual brightening over a few weeks, with the best results building across a tailored course of treatments.",
      },
    ],
  },
  {
    slug: "acne-treatment",
    name: "Acne & Scar Treatment",
    category: "Skin Rejuvenation",
    image: "/images/treatments/acne-treatment.webp",
    imageAlt:
      "Acne and acne-scar skin treatment at Voila, Wapda Town, Lahore",
    seoTitle: "Acne & Acne Scar Treatment in Lahore",
    seoDescription:
      "Doctor-led acne & acne-scar treatment in Wapda Town, Lahore — calms breakouts & softens scarring for clearer skin. 5.0★. Book a consultation.",
    pricingFactors: [
      "Whether treating active acne, scarring, or both",
      "The number of sessions and treatment mix",
      "Home-care products in your plan",
    ],
    duration: "45–60 minutes",
    sessions: "Course tailored to your skin",
    downtime: "Minimal",
    priceNote: "On consultation",
    icon: "leaf",
    featured: false,
    summary:
      "A doctor-led programme to calm active breakouts and visibly soften acne scarring for clearer, healthier, more confident skin.",
    description:
      "Acne and the marks it leaves behind need a considered, medical approach. We combine deep-cleansing treatments, targeted actives and resurfacing techniques to reduce active breakouts, control oil and inflammation, and gradually soften acne scarring and post-acne marks — restoring clearer, smoother and more even skin.",
    benefits: [
      "Calms active breakouts and inflammation",
      "Helps control excess oil and congestion",
      "Softens acne scars and post-acne marks",
      "Improves overall skin clarity and texture",
      "Personalised, doctor-led treatment plan",
    ],
    process: [
      {
        title: "Consultation",
        detail:
          "Dr. Beenish assesses your acne type, severity and scarring to plan treatment.",
      },
      {
        title: "Deep cleanse",
        detail:
          "Gentle cleansing and extractions clear congestion and calm the skin.",
      },
      {
        title: "Targeted treatment",
        detail:
          "Actives and resurfacing techniques address breakouts and scarring.",
      },
      {
        title: "Soothe & protect",
        detail:
          "Calming serums and SPF finish, with a tailored home-care plan.",
      },
    ],
    aftercare: [
      "Follow the prescribed home-care routine consistently",
      "Use SPF 30+ daily, especially after resurfacing",
      "Avoid picking or squeezing breakouts",
      "Keep skincare gentle and non-comedogenic",
    ],
    faqs: [
      {
        question: "Can you treat both active acne and old scars?",
        answer:
          "Yes. We first focus on calming and controlling active breakouts, then work on softening scarring and marks — often as a phased, tailored plan for the best long-term outcome.",
      },
      {
        question: "How long does it take to see clearer skin?",
        answer:
          "Active breakouts often improve within a few weeks, while scar softening builds gradually over a course of treatments. Consistency with your plan makes a big difference.",
      },
    ],
  },
];

export const treatmentSlugs = treatments.map((t) => t.slug);

export function getTreatment(slug) {
  return treatments.find((t) => t.slug === slug);
}

export function getFeaturedTreatments() {
  return treatments.filter((t) => t.featured);
}

export function getRelatedTreatments(slug, limit = 3) {
  const current = getTreatment(slug);
  if (!current) return treatments.slice(0, limit);
  const sameCategory = treatments.filter(
    (t) => t.slug !== slug && t.category === current.category
  );
  const others = treatments.filter(
    (t) => t.slug !== slug && t.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
