"use client";

import { useEffect } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Pointer-driven parallax layer — translates its children a few pixels toward
 * (or away from) the cursor, creating cinematic depth in the hero. Layer
 * multiple instances at different `strength` values for a 3D feel.
 *
 * Listens to a single window pointermove and writes to springed motion values
 * (no React re-renders). Disabled on touch / reduced-motion (renders inert).
 *
 * @param {number} strength  Max travel in px (negative = move opposite cursor).
 */
export default function MouseParallax({
  children,
  strength = 18,
  className,
  ...props
}) {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const x = useTransform(sx, [-0.5, 0.5], [-strength, strength]);
  const y = useTransform(sy, [-0.5, 0.5], [-strength, strength]);

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: fine)").matches === false) return;

    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  if (reduce) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div className={className} style={{ x, y, willChange: "transform" }} {...props}>
        {children}
      </m.div>
    </LazyMotion>
  );
}
