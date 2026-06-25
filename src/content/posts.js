/**
 * Skin Journal (blog) content — data-driven so a CMS can replace this module
 * in Phase 2 (PRD F8). Each post is structured into a snippet-ready `lead`,
 * `sections` (H2 + paragraphs / bullets / optional table), and `faqs` (which
 * power FAQPage schema). Authored & medically reviewed by Dr. Beenish for EEAT.
 *
 * Section block shape:
 *   { heading, paras: [], bullets: [], ordered?: bool, table?: { headers, rows } }
 */

export const posts = [
  {
    slug: "how-many-laser-hair-removal-sessions",
    title: "How Many Laser Hair Removal Sessions Do You Really Need?",
    seoTitle: "How Many Laser Hair Removal Sessions? | Voila Lahore",
    seoDescription:
      "Most people need 6–8 laser hair removal sessions, 4–6 weeks apart. A doctor-led guide to how many sessions you'll need and what affects it — Voila, Lahore.",
    excerpt:
      "Six to eight is the honest answer — but the real number depends on your hair, your skin and your patience. Here's exactly why, from a doctor-led clinic.",
    category: "Laser Hair Removal",
    datePublished: "2026-06-12",
    dateModified: "2026-06-25",
    readingTime: "6 min read",
    image: "/images/treatments/laser-hair-removal.webp",
    imageAlt:
      "Nd:YAG laser hair removal performed on a client's skin at Voila, Wapda Town, Lahore",
    keywords: [
      "how many laser hair removal sessions",
      "laser hair removal sessions Lahore",
      "laser hair removal for brown skin",
      "is laser hair removal permanent",
    ],
    relatedTreatments: ["laser-hair-removal", "skin-tightening"],
    lead: "Most people need 6 to 8 laser hair removal sessions, spaced about 4 to 6 weeks apart, to see lasting smoothness. The exact number depends on the treatment area, your hair colour and thickness, your skin tone, and hormonal factors — which is why every plan should start with a consultation and a patch test.",
    sections: [
      {
        heading: "Why laser hair removal takes more than one session",
        paras: [
          "Laser works by targeting the pigment in a hair follicle and disabling its ability to regrow. The catch is that it can only do this effectively while a hair is in its active growth phase — and at any given moment, only a portion of your hair is actually in that phase.",
          "Your hair grows in three cycles: growing (anagen), transitional (catagen) and resting (telogen). A single session treats the follicles that happen to be growing that day. The rest are caught in later sessions as they enter their growth phase — which is exactly why a course, not a one-off, is what delivers results.",
        ],
      },
      {
        heading: "How many sessions you'll typically need",
        paras: [
          "As a guide, most areas respond well to a course of 6 to 8 sessions, with many clients noticing a visible reduction after the very first one. Coarser, denser areas often need the full course, while finer areas can need fewer.",
        ],
        bullets: [
          "Underarms & bikini: often 6–8 sessions",
          "Arms & legs: typically 6–8 sessions",
          "Face & upper lip: sometimes more, as facial hair is hormonally driven",
          "Maintenance: an occasional top-up once or twice a year keeps results smooth",
        ],
      },
      {
        heading: "What affects the number of sessions you'll need",
        paras: [
          "No two people need exactly the same plan. The biggest factors are:",
        ],
        bullets: [
          "Hair colour & thickness — dark, coarse hair responds best; very fine or light hair is harder to target",
          "Skin tone — settings are tailored to treat you safely and effectively (more on South-Asian skin below)",
          "Treatment area — hormonally active zones like the face can need more sessions",
          "Hormones — conditions such as PCOS can mean extra or ongoing sessions",
          "Consistency — keeping to your schedule is the single biggest factor in great results",
        ],
      },
      {
        heading: "Why the spacing between sessions matters",
        paras: [
          "Sessions are usually spaced 4 to 6 weeks apart, and that gap is intentional — it lets the next batch of follicles enter their growth phase so the laser can catch them. Coming too soon means treating follicles that aren't ready; leaving it too long means missing the window. Sticking to the recommended interval is how you get the most from every session.",
        ],
      },
      {
        heading: "Is laser hair removal safe for brown and South-Asian skin?",
        paras: [
          "Yes — when the right technology and settings are used. Darker skin tones (Fitzpatrick IV–V, common across Pakistan) have more pigment in the skin itself, so older or poorly calibrated lasers can risk burns or pigmentation. A suitable laser and careful, doctor-supervised settings make treatment both safe and effective.",
          "At Voila, every plan begins with a patch test so we can set parameters tailored to your skin and hair — safety first, always. This is also why we'd gently steer you away from any clinic offering bargain prices without explaining which laser they use.",
        ],
      },
      {
        heading: "Getting the most from your sessions",
        paras: ["A few simple habits protect your results between visits:"],
        bullets: [
          "Shave (don't wax or pluck) between sessions — the root needs to stay intact for the laser to target it",
          "Avoid sun and tanning for two weeks before and after, and use SPF 30+ daily",
          "Skip hot baths, saunas and the gym for 24–48 hours after each session",
          "Keep to your appointment schedule for consistent progress",
        ],
      },
    ],
    faqs: [
      {
        question: "Is laser hair removal permanent?",
        answer:
          "Laser delivers long-term hair reduction rather than a guaranteed permanent result. After a full course most hair is gone for good, though occasional maintenance sessions keep things smooth — especially in hormonally active areas like the face.",
      },
      {
        question: "Does laser hair removal hurt?",
        answer:
          "Most clients describe a mild snapping sensation, eased by the device's integrated cooling. It's very tolerable and far more comfortable than waxing or threading.",
      },
      {
        question: "Can I shave between sessions?",
        answer:
          "Yes — shaving is encouraged, as it leaves the follicle root intact for the next session. Just avoid waxing, plucking or epilating, which remove the root the laser needs to target.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "Many people notice less regrowth and finer hair after the first session, with the most dramatic reduction building across the full course.",
      },
    ],
  },
  {
    slug: "hydrafacial-vs-regular-facial",
    title: "HydraFacial vs a Regular Facial: What's the Difference?",
    seoTitle: "HydraFacial vs Facial: What's the Difference? | Voila",
    seoDescription:
      "HydraFacial is a medical-grade device facial that cleanses, exfoliates, extracts and hydrates in one — with no downtime. Here's how it compares to a regular facial.",
    excerpt:
      "They sound similar, but one is a manual spa treatment and the other is a medical-grade device facial. Here's how to know which your skin actually needs.",
    category: "Facials & Glow",
    datePublished: "2026-06-18",
    dateModified: "2026-06-25",
    readingTime: "5 min read",
    image: "/images/treatments/hydrafacial.webp",
    imageAlt:
      "HydraFacial treatment giving a client a deep-cleansing glow at Voila, Wapda Town, Lahore",
    keywords: [
      "hydrafacial vs facial",
      "difference between hydrafacial and facial",
      "is hydrafacial worth it",
      "hydrafacial Lahore",
    ],
    relatedTreatments: ["hydrafacial", "custom-facials", "chemical-peel"],
    lead: "A HydraFacial is a medical-grade treatment that uses patented vortex technology to cleanse, exfoliate, extract and deeply hydrate the skin in a single session — with consistent, measurable results and no downtime. A regular facial is a more manual, relaxation-focused treatment whose results depend largely on the therapist's technique.",
    sections: [
      {
        heading: "What is a HydraFacial?",
        paras: [
          "A HydraFacial is a non-invasive, device-driven facial. Instead of relying on hands and steam, it uses a vortex tip to simultaneously loosen debris and vacuum it away painlessly, while infusing the skin with antioxidants, peptides and hyaluronic acid. Because the steps are standardised and the serums are sealed in, the glow is reliable, visible and immediate — which is why it's a favourite before events.",
        ],
      },
      {
        heading: "What is a regular facial?",
        paras: [
          "A traditional facial is a manual treatment — cleansing, steaming, exfoliation, manual extractions, a mask and massage. It's deeply relaxing and can be lovely for general upkeep, but its depth and results vary with the products used and the therapist's skill, and manual extractions can leave skin red.",
        ],
      },
      {
        heading: "HydraFacial vs facial: the key differences",
        paras: [
          "Both cleanse and refresh the skin. The difference is in depth, consistency and results:",
        ],
        table: {
          headers: ["", "HydraFacial", "Regular facial"],
          rows: [
            ["Method", "Medical-grade device (vortex)", "Manual, hands & steam"],
            ["Extractions", "Painless suction", "Manual squeezing"],
            ["Results", "Consistent, immediate glow", "Varies by therapist"],
            ["Downtime", "None — makeup-ready", "Possible redness"],
            ["Hydration", "Serums infused & sealed in", "Surface-level"],
            ["Best for", "Visible, reliable glow", "Relaxation & upkeep"],
          ],
        },
      },
      {
        heading: "Which one is right for you?",
        paras: ["It comes down to your goal on the day:"],
        bullets: [
          "Choose a HydraFacial if you want a reliable, event-ready glow, deeper cleansing, or visible results with zero downtime",
          "Choose a custom facial if you want a relaxing ritual, or a treatment fully tailored to a specific concern on the day",
          "Many clients alternate — a monthly HydraFacial for results, with tailored facials in between",
        ],
      },
      {
        heading: "How often should you have each?",
        paras: [
          "For lasting skin health, a HydraFacial every 3–4 weeks keeps skin clear and radiant. A relaxing custom facial works beautifully on a monthly rhythm too. The right cadence depends on your skin, which is why we'll recommend a plan rather than a one-size-fits-all schedule.",
        ],
      },
      {
        heading: "The Voila approach",
        paras: [
          "Because Voila is doctor-led, your facial — HydraFacial or custom — begins with a genuine assessment of your skin by Dr. Beenish, not a fixed menu. That means the exfoliation level, serums and add-ons are chosen for your skin on the day, in a calm, hygienic, unhurried setting.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a HydraFacial better than a regular facial?",
        answer:
          "Neither is universally 'better' — they serve different goals. A HydraFacial gives deeper, more consistent, downtime-free results, while a traditional facial is a relaxing ritual for general upkeep. The best choice depends on your skin and what you want that day.",
      },
      {
        question: "Can I get a HydraFacial and a facial?",
        answer:
          "Absolutely. Many clients use a monthly HydraFacial for results and enjoy tailored facials in between. We'll help you build a simple rhythm that suits your skin and schedule.",
      },
      {
        question: "Is a HydraFacial worth it?",
        answer:
          "If you want visible radiance, refined pores and deep hydration with no downtime — especially before an event — most clients find it well worth it. Results are immediate and build with a regular course.",
      },
      {
        question: "Is there any downtime after a HydraFacial?",
        answer:
          "None. Skin may look slightly flushed for an hour, then you're left with a clean, radiant finish. You can wear makeup the same day.",
      },
    ],
  },
  {
    slug: "best-treatments-for-acne-scars-lahore",
    title: "The Best Treatments for Acne Scars in Lahore",
    seoTitle: "Best Treatments for Acne Scars in Lahore | Voila",
    seoDescription:
      "Microneedling, chemical peels and tailored medical plans are the most effective treatments for acne scars. A doctor-led guide by Dr. Beenish, Lahore.",
    excerpt:
      "Not all acne scars are the same — and neither are the treatments. Here's what actually works for each type, from a doctor-led clinic in Lahore.",
    category: "Skin Rejuvenation",
    datePublished: "2026-06-22",
    dateModified: "2026-06-25",
    readingTime: "7 min read",
    image: "/images/treatments/microneedling.webp",
    imageAlt:
      "Microneedling treatment for acne scars at Voila, Wapda Town, Lahore",
    keywords: [
      "best treatments for acne scars in lahore",
      "acne scar treatment lahore",
      "microneedling for acne scars",
      "acne scar removal lahore",
    ],
    relatedTreatments: ["microneedling", "acne-treatment", "chemical-peel"],
    lead: "The most effective treatments for acne scars are microneedling (collagen-induction therapy), chemical peels, and tailored combination plans — with the right choice depending on your scar type. True scars need to be rebuilt with collagen over a course of sessions, while flat dark or red marks respond to resurfacing and pigmentation care. A doctor-led assessment is the best first step.",
    sections: [
      {
        heading: "First, what kind of acne scars do you have?",
        paras: [
          "The single most important step is correctly identifying what you're treating — because \"acne scars\" actually covers two very different things. Many marks people call scars are not scars at all, but flat discolouration that fades with the right care. True (atrophic) scars are textural changes in the skin that need collagen rebuilding.",
        ],
        bullets: [
          "Rolling scars — broad, shallow, wave-like depressions",
          "Boxcar scars — wider dips with sharper edges",
          "Ice-pick scars — small, deep, pinpoint marks (the most stubborn)",
          "Post-acne marks — flat red (PIE) or brown (PIH) spots, not true scars",
        ],
      },
      {
        heading: "Matching the treatment to the scar",
        paras: [
          "Here's a simple guide to what tends to work best for each — though most real plans combine treatments for the strongest result:",
        ],
        table: {
          headers: ["Scar type", "What it looks like", "Best approach"],
          rows: [
            ["Rolling", "Broad, shallow depressions", "Microneedling (a course)"],
            ["Boxcar", "Wider, sharp-edged dips", "Microneedling + peels"],
            ["Ice-pick", "Small, deep pinpoints", "Combination, doctor-led plan"],
            ["Post-acne marks", "Flat red or brown spots", "Peels, pigmentation care + SPF"],
          ],
        },
      },
      {
        heading: "The most effective treatments, explained",
        paras: [
          "Microneedling is the workhorse for textural acne scarring. By creating controlled micro-channels, it triggers your skin's own collagen and gradually fills and smooths depressed scars over a course of sessions. It's well suited to South-Asian skin when performed carefully.",
          "Chemical peels resurface the skin, refine texture and are excellent for fading post-acne marks and brightening overall tone — often paired with microneedling for a layered effect. Strength is tailored to your skin and concern.",
          "For deeper or mixed scarring, a combination plan — microneedling, peels and targeted care, sequenced over time — consistently outperforms any single treatment used alone.",
        ],
      },
      {
        heading: "Treating post-acne marks (the dark or red spots)",
        paras: [
          "If your \"scars\" are flat and just discoloured, you likely have post-inflammatory pigmentation (brown) or erythema (red). These respond well to gentle resurfacing, pigmentation treatment, and — crucially — daily SPF, since sun exposure deepens and prolongs them. Many marks fade significantly with consistency and protection alone.",
        ],
      },
      {
        heading: "What results to expect — and the timeline",
        paras: [
          "Be wary of any clinic promising to erase scars in one session. Realistically, textural scars improve gradually across a course of 3–6 treatments spaced about four weeks apart, with collagen continuing to build for months afterward. Most clients see meaningful, lasting improvement — smoother texture and softer scars — rather than a flawless overnight result. Honesty here is part of good care.",
        ],
      },
      {
        heading: "Protecting your results",
        paras: ["Whatever the treatment, a few habits make a big difference:"],
        bullets: [
          "Daily SPF 30+ — the single most important step for any pigmentation",
          "Don't pick or squeeze active breakouts (it creates new scars)",
          "Keep skincare gentle and non-comedogenic between sessions",
          "Stay consistent with your plan — scarring rewards patience",
        ],
      },
    ],
    faqs: [
      {
        question: "Can acne scars be removed completely?",
        answer:
          "Most acne scars can be dramatically improved rather than erased entirely. A doctor-led course of microneedling and peels typically smooths texture and softens scars significantly, while flat post-acne marks often fade almost completely with treatment and daily SPF.",
      },
      {
        question: "Is microneedling good for acne scars?",
        answer:
          "Yes — microneedling is one of the most effective treatments for depressed acne scars. It stimulates new collagen to gradually fill and smooth the scar over a course of sessions, and is well suited to South-Asian skin when done carefully.",
      },
      {
        question: "How many sessions will I need for acne scars?",
        answer:
          "Most people need a course of 3–6 sessions, spaced about four weeks apart, with results continuing to build for months as collagen forms. Deeper or mixed scarring may need a longer, combination plan.",
      },
      {
        question: "What's the best treatment for ice-pick scars?",
        answer:
          "Ice-pick scars are the most stubborn and usually need a tailored, doctor-led combination approach rather than a single treatment. Dr. Beenish will assess your skin and build the right plan during consultation.",
      },
    ],
  },
  {
    slug: "melasma-treatment-pakistani-skin",
    title: "Melasma in Pakistani Skin: What Actually Works",
    seoTitle: "Melasma Treatment for Pakistani Skin | Voila Lahore",
    seoDescription:
      "Melasma is managed, not cured — with sun protection, gentle actives and careful in-clinic care. A doctor-led guide for South-Asian skin by Dr. Beenish, Lahore.",
    excerpt:
      "Melasma is one of the most stubborn — and most misunderstood — skin concerns in South-Asian skin. Here's an honest, doctor-led guide to what genuinely helps.",
    category: "Skin Rejuvenation",
    datePublished: "2026-06-24",
    dateModified: "2026-06-25",
    readingTime: "7 min read",
    image: "/images/treatments/pigmentation.webp",
    imageAlt:
      "Pigmentation and melasma treatment for Pakistani skin at Voila, Wapda Town, Lahore",
    keywords: [
      "melasma treatment pakistani skin",
      "melasma treatment lahore",
      "pigmentation treatment lahore",
      "melasma in brown skin",
    ],
    relatedTreatments: ["pigmentation", "chemical-peel", "custom-facials"],
    lead: "Melasma is a chronic, hormone- and sun-driven pigmentation that is especially common in Pakistani and South-Asian skin. It can't be permanently \"cured\" — but it can be faded and controlled with daily sun protection, gentle targeted actives, carefully chosen in-clinic treatments, and consistency. Aggressive treatments often make it worse, which is why a conservative, doctor-led approach matters.",
    sections: [
      {
        heading: "What is melasma — and why is it so common in Pakistani skin?",
        paras: [
          "Melasma shows up as symmetrical brown or grey-brown patches, usually on the cheeks, forehead, upper lip and bridge of the nose. It's driven by a combination of sun exposure, heat, hormones (pregnancy and birth control are common triggers) and genetics.",
          "Pakistani and South-Asian skin (Fitzpatrick III–V) has more active pigment cells, which makes it both more prone to melasma and more reactive to harsh treatment. Add intense sun and heat, and it's easy to see why melasma is one of the most frequent concerns we're asked about.",
        ],
      },
      {
        heading: "Why melasma is different from ordinary pigmentation",
        paras: [
          "Unlike a single sunspot or a post-acne mark, melasma is deeper, more diffuse, and prone to coming back. Crucially, it is easily aggravated — strong lasers, harsh peels or over-treatment can trigger a rebound that leaves the skin darker than before. Treating melasma well is as much about restraint as it is about active ingredients.",
        ],
      },
      {
        heading: "What actually works: a layered, patient approach",
        paras: [
          "There's no single magic treatment. The results come from combining the right elements consistently over time:",
        ],
        bullets: [
          "Daily sun protection — broad-spectrum SPF 30–50, reapplied, is non-negotiable and does the heaviest lifting",
          "Targeted topical actives — gentle, evidence-based brighteners suited to your skin",
          "Gentle in-clinic treatments — mild peels and supportive facials, chosen conservatively",
          "Consistency & maintenance — melasma is managed long-term, not fixed once",
        ],
      },
      {
        heading: "What to avoid",
        paras: [
          "Just as important as what helps is what harms. Two mistakes make melasma dramatically worse in our climate:",
        ],
        bullets: [
          "Aggressive lasers or strong peels on untreated melasma — high risk of rebound darkening",
          "Unregulated \"whitening\" creams — many contain hidden steroids or high-strength hydroquinone that damage skin and worsen pigmentation over time",
          "Skipping SPF — even brief daily sun undoes months of progress",
          "Chasing a quick fix — patience genuinely outperforms intensity here",
        ],
      },
      {
        heading: "Realistic expectations & timeline",
        paras: [
          "With a careful plan, most people see melasma visibly lighten and become far easier to control over a few months — but it requires ongoing maintenance, especially through summer. Think of it as managing a sensitive, recurring condition rather than removing a stain. Set up properly, results are very rewarding and sustainable.",
        ],
      },
      {
        heading: "How Voila approaches melasma",
        paras: [
          "Because Voila is doctor-led, we treat melasma conservatively and individually. Dr. Beenish assesses how deep and reactive your pigmentation is, builds a layered plan around sun protection and gentle actives, and only introduces in-clinic treatments at a pace your skin can tolerate — protecting you from the rebound that aggressive clinics risk.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can melasma be cured permanently?",
        answer:
          "Melasma can't be permanently cured, but it can be significantly faded and kept under control. With daily SPF, the right actives and gentle in-clinic care, most people achieve clearer, more even skin and manage flare-ups long-term.",
      },
      {
        question: "Does laser help melasma?",
        answer:
          "Laser must be used with great caution for melasma. Aggressive lasers can trigger rebound darkening and make it worse, especially in South-Asian skin. We favour conservative, layered treatment and only consider gentle options when appropriate, under medical supervision.",
      },
      {
        question: "Why does my melasma keep coming back?",
        answer:
          "Melasma is chronic and driven by sun, heat and hormones, so it naturally recurs — particularly without daily SPF. Ongoing sun protection and maintenance are what keep it controlled long-term.",
      },
      {
        question: "Is sunscreen really that important for melasma?",
        answer:
          "Yes — daily broad-spectrum SPF is the single most important part of any melasma plan. Even short, everyday sun exposure deepens pigmentation and undoes treatment progress, so consistent protection is essential.",
      },
    ],
  },
  {
    slug: "pre-wedding-skin-timeline",
    title: "Pre-Wedding Skin Timeline: 6 Months to Glowing",
    seoTitle: "Pre-Wedding Skin Timeline: 6 Months to Glow | Voila",
    seoDescription:
      "A doctor-led, month-by-month pre-wedding skincare timeline — when to start, which treatments, and what to avoid before the big day. By Dr. Beenish, Lahore.",
    excerpt:
      "The most radiant bridal skin is planned, not rushed. Here's exactly what to do and when — counting down from six months to your wedding day.",
    category: "Bridal",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    readingTime: "6 min read",
    image: "/images/treatments/bb-glow.webp",
    imageAlt:
      "Radiant, camera-ready bridal skin after a pre-wedding glow plan at Voila, Wapda Town, Lahore",
    keywords: [
      "pre-wedding skin timeline",
      "bridal skin treatment lahore",
      "how to prepare skin for wedding",
      "bridal skincare routine",
    ],
    relatedTreatments: ["hydrafacial", "bb-glow", "microneedling"],
    relatedLink: { href: "/bridal", label: "Explore our bridal packages" },
    lead: "For your best-ever wedding skin, start about six months out. That window lets you treat deeper concerns first — texture, scarring, pigmentation — then build radiance month by month, so your skin peaks exactly on the day. The golden rule: never try anything new in the final week.",
    sections: [
      {
        heading: "6 months before: lay the foundation",
        paras: [
          "This is when the real, lasting work happens. Begin with a consultation so your plan is built around your skin, then prioritise the deeper concerns that need time to improve — uneven texture, acne scarring and stubborn pigmentation respond best when there's room for skin to renew between sessions.",
        ],
        bullets: [
          "Book a skin consultation and agree your plan",
          "Start microneedling and/or peels for texture and scarring",
          "Begin treating pigmentation, and commit to daily SPF",
        ],
      },
      {
        heading: "3 months before: build your glow",
        paras: [
          "With the groundwork laid, shift focus to radiance and even tone. Regular HydraFacials keep skin deeply clean and luminous, while any planned laser or ongoing pigmentation care continues on schedule.",
        ],
        bullets: [
          "Start a regular HydraFacial rhythm (roughly monthly)",
          "Continue pigmentation care and laser if it's part of your plan",
          "Lock in a simple, consistent home routine",
        ],
      },
      {
        heading: "1 month before: refine and perfect",
        paras: [
          "Now it's about luminosity and an even, camera-ready finish — refining, not reinventing. This is the ideal window for BB Glow to perfect tone, and dermaplaning for a flawless makeup base. Avoid introducing anything brand new.",
        ],
        bullets: [
          "A HydraFacial for radiance",
          "BB Glow for an even, luminous finish",
          "Dermaplaning for a smooth makeup canvas",
        ],
      },
      {
        heading: "Wedding week: the final glow",
        paras: [
          "Keep it gentle and familiar. A hydrating finishing treatment a few days before leaves skin fresh and dewy — but never book an intensive or first-time treatment now, when there's no time to settle. Hydrate, sleep, and let the months of work shine.",
        ],
      },
      {
        heading: "The golden rules of bridal skin",
        paras: ["Whatever your timeline, these make the biggest difference:"],
        bullets: [
          "Start early — great skin is built over months, not days",
          "Wear SPF 30+ every single day, without exception",
          "Never try a new treatment in the final two weeks",
          "Stay consistent and hydrated — and trust the plan",
        ],
      },
      {
        heading: "What to avoid before the big day",
        paras: [
          "A few common mistakes can undo months of progress: experimenting with new products or clinics late in the timeline, aggressive treatments too close to the day, picking at breakouts, and skipping sun protection. When in doubt, gentler and earlier always wins.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should I start skincare before my wedding?",
        answer:
          "Ideally about six months before. Starting early lets you treat deeper concerns like texture and pigmentation, then build radiance gradually — so your skin looks its best on the day rather than rushed.",
      },
      {
        question: "What treatments give the best bridal glow?",
        answer:
          "A tailored combination usually works best: microneedling or peels early for texture, HydraFacials for radiance, pigmentation care as needed, and BB Glow near the day for an even, luminous finish.",
      },
      {
        question: "Can I have a facial the week of my wedding?",
        answer:
          "Yes — but only a gentle, hydrating treatment your skin already knows, a few days before. Never book a new or intensive treatment in the final week, as there's no time for skin to settle.",
      },
      {
        question: "Do you offer bridal skincare packages in Lahore?",
        answer:
          "Yes. Voila offers tailored bridal and event packages in Wapda Town, Lahore, built around your wedding date and skin goals. Message us on WhatsApp to plan yours.",
      },
    ],
  },
];

export const postSlugs = posts.map((p) => p.slug);

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
