"use client";

import { m, LazyMotion, domAnimation, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Page transition wrapper.
 *
 * Unlike `layout.js` (which persists across navigation), a `template.js`
 * re-mounts on every route change — so this enter animation replays each time
 * the user navigates, giving an elegant soft fade + blur + rise as new content
 * settles in. Enter-only (no AnimatePresence needed) keeps it lightweight and
 * avoids holding the outgoing page on screen.
 *
 * Coexists cleanly with the cinematic intro: on a first/full load the intro
 * doors are still closed while this plays, so the hand-off stays seamless.
 * Honors prefers-reduced-motion (renders children untouched).
 */
export default function Template({ children }) {
  const reduce = useReducedMotion();

  if (reduce) return children;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE.luxe }}
        style={{ willChange: "opacity, transform" }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
