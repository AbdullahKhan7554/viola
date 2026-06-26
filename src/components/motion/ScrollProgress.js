"use client";

import {
  m,
  LazyMotion,
  domAnimation,
  useScroll,
  useSpring,
} from "framer-motion";

/**
 * Slim page-scroll progress bar pinned to the very top edge — a refined,
 * Linear/Stripe-style reading indicator. Springed so it glides rather than
 * jumps. Decorative (aria-hidden); driven entirely by the compositor.
 *
 * Sits above the navbar (z-50) and is harmless under reduced-motion (it just
 * fills as you scroll, no easing surprises).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-accent via-secondary to-accent"
        style={{ scaleX }}
      />
    </LazyMotion>
  );
}
