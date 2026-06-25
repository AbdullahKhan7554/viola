/**
 * Gallery & clinic imagery (PRD F4). Uses the real photos provided by the
 * clinic. Before/after pairs are scaffolded with real ambiance imagery and
 * flagged for replacement with consented clinical photos pre-launch.
 */

export const galleryImages = [
  {
    src: "/images/voila-reception.webp",
    alt: "Voila Luxury Skincare reception area with the brand wordmark and chandelier in Wapda Town, Lahore",
    caption: "Our welcoming reception",
    width: 569,
    height: 1020,
  },
  {
    src: "/images/treatment-room-1.webp",
    alt: "Bright, hygienic treatment room with HydraFacial equipment and natural light at Voila Lahore",
    caption: "Treatment room — natural light & calm",
    width: 1030,
    height: 1020,
  },
  {
    src: "/images/treatment-room-2.webp",
    alt: "Private treatment area with laser equipment and a relaxing ambiance at Voila Lahore",
    caption: "Private treatment suite",
    width: 471,
    height: 1020,
  },
  {
    src: "/images/voila-signage.webp",
    alt: "Voila Luxury Skincare Aesthetics signage and elegant chandelier at the clinic entrance",
    caption: "Where luxury meets care",
    width: 845,
    height: 1020,
  },
  {
    src: "/images/voila-exterior.webp",
    alt: "Voila Luxury Skincare exterior entrance with garden and greenery in Wapda Town, Lahore",
    caption: "Our serene exterior",
    width: 805,
    height: 1020,
  },
  {
    src: "/images/voila-entrance.webp",
    alt: "Elegant wrought-iron front entrance of Voila Luxury Skincare clinic in Lahore",
    caption: "Step inside",
    width: 920,
    height: 1020,
  },
];

/**
 * Before/after pairs (PRD F11). // TODO: replace with consented clinical
 * before/after photography (Open Decision A6). Using ambiance imagery as a
 * structural placeholder so the slider component is production-ready.
 */
export const beforeAfter = [
  {
    label: "Dull, uneven skin → radiant glow",
    before: "/images/transformation-before.webp",
    after: "/images/transformation-after.webp",
    beforeAlt:
      "Close-up of dull, uneven skin before treatment — illustrative. TODO: replace with consented client photo",
    afterAlt:
      "Close-up of bright, even, radiant skin after treatment — illustrative. TODO: replace with consented client photo",
  },
];
