"use client";

import { useRef } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * Scroll-linked parallax — translates its child as the element passes through
 * the viewport, creating layered depth. Springed so motion feels fluid rather
 * than rigidly locked to the scrollbar.
 *
 * `speed` is the total travel in px across the scroll range (negative moves
 * up/left). `axis` picks the translated axis. Reduced-motion renders statically.
 *
 * For best results give the parent `overflow-hidden` and oversize the child
 * (e.g. an Image with negative insets / scale) so no gap shows at the edges.
 */
export default function Parallax({
  children,
  speed = 80,
  axis = "y",
  className,
  ...props
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [speed * -0.5, speed * 0.5]);
  const value = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });

  if (reduce) {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        ref={ref}
        className={className}
        style={axis === "x" ? { x: value } : { y: value }}
        {...props}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
