"use client";

import { useRef } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { SPRING } from "@/lib/motion";

/**
 * Magnetic wrapper — the element subtly leans toward the cursor while hovered
 * and springs home on leave. A hallmark of premium / Awwwards interfaces.
 *
 * - Pointer-driven via motion values (no React re-renders → 60fps).
 * - Disabled on coarse pointers (touch) and reduced-motion, where it renders
 *   an inert wrapper so layout and tap targets are untouched.
 * - `strength` scales how far it travels; keep it restrained for elegance.
 *
 * Wrap a single interactive child (button / link).
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className,
  as = "div",
  ...props
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING.magnetic);
  const sy = useSpring(y, SPRING.magnetic);

  // Touch / reduced-motion: render a plain wrapper, no listeners.
  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = m[as] || m.div;

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionTag
        ref={ref}
        className={className}
        style={{ x: sx, y: sy }}
        onPointerMove={(e) => e.pointerType === "mouse" && handleMove(e)}
        onPointerLeave={reset}
        {...props}
      >
        {children}
      </MotionTag>
    </LazyMotion>
  );
}
