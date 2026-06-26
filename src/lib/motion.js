/**
 * ──────────────────────────────────────────────────────────────
 * Voila Motion System — single source of truth for animation.
 *
 * Centralizing easings, durations and variants keeps every animation
 * across the site coherent, intentional and easy to tune. Components
 * import from here instead of redefining timing inline (DRY).
 *
 * Philosophy: cinematic, soft, luxurious. Long, gentle ease-out curves
 * (the "expo / quint" family) so motion settles rather than snaps.
 * Everything animates GPU-friendly properties only (opacity, transform,
 * filter) and is gated on prefers-reduced-motion at the component layer.
 * ──────────────────────────────────────────────────────────────
 */

/** Signature easing curves (cubic-bezier control points). */
export const EASE = {
  // Smooth, expensive-feeling settle — our default for reveals.
  luxe: [0.22, 1, 0.36, 1],
  // Weightier ease-in-out for doors / large panels.
  door: [0.76, 0, 0.24, 1],
  // Gentle ease-out for hovers and micro-interactions.
  soft: [0.33, 1, 0.68, 1],
  // Subtle overshoot for playful accents (use sparingly).
  spring: [0.34, 1.56, 0.64, 1],
};

/** Canonical durations (seconds). */
export const DURATION = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
  cinematic: 1.6,
};

/** Spring presets for interactive (cursor-driven) motion. */
export const SPRING = {
  // Magnetic buttons / cursor followers — responsive but fluid.
  magnetic: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
  // 3D tilt — softer, heavier so cards feel substantial.
  tilt: { type: "spring", stiffness: 120, damping: 18, mass: 0.4 },
  // General gentle spring.
  gentle: { type: "spring", stiffness: 100, damping: 20 },
};

/**
 * Viewport defaults for whileInView. `once` keeps it a one-shot reveal
 * (no replay thrash on scroll-up); the negative bottom margin triggers a
 * touch before the element is fully on screen so it never feels late.
 */
export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" };

/* ── Reveal variants ─────────────────────────────────────────── */

/** Soft fade + lift + blur-to-sharp — the house reveal. */
export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE.luxe },
  },
};

/** Same family, entering from the side (for split layouts). */
export const fadeIn = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE.luxe },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 36, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE.luxe },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -36, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE.luxe },
  },
};

/** Gentle scale-in for media / cards. */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: DURATION.slow, ease: EASE.luxe },
  },
};

/** Map a named direction to its variant for the <Reveal> component. */
export const REVEAL_VARIANTS = {
  up: fadeUp,
  in: fadeIn,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
};

/* ── Stagger orchestration ───────────────────────────────────── */

/** Parent container that releases children in a refined cascade. */
export const staggerContainer = (stagger = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Per-word / per-line child used by TextReveal & list cascades. */
export const staggerChild = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE.luxe },
  },
};

/* ── Reduced-motion fallback ─────────────────────────────────── */

/** A no-op variant pair: appear instantly, no transform/blur. */
export const reducedVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.001 } },
};
