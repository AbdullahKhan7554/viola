"use client";

import { useRef } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Interactive 3D tilt card with a cursor-tracking sheen.
 *
 * The card leans in 3D toward the pointer, lifts gently, and a soft radial
 * highlight follows the cursor across its surface — a tactile "premium glass"
 * feel.
 *
 * Performance: the glow is a fixed-size element with a *static* radial gradient
 * that is repositioned with a GPU `transform` (translate) — never by rewriting
 * `background` per frame, which would force a full repaint of every card on
 * every mouse move. Tilt + glow are all motion values, so there are zero React
 * re-renders. Degrades to a plain wrapper on touch / reduced-motion.
 *
 * Wrap any card; pass the same className you'd give the card root.
 */
const GLOW_SIZE = 460; // px diameter of the moving highlight

export default function TiltCard({
  children,
  className,
  max = 7,
  glow = true,
  ...props
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // Normalized pointer position (0–1) for the 3D tilt.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  // Raw pixel position for the glow (moved via transform → compositor only).
  const gx = useMotionValue(0);
  const gy = useMotionValue(0);
  const glowOpacity = useSpring(useMotionValue(0), SPRING.gentle);

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), SPRING.tilt);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), SPRING.tilt);

  if (reduce) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const handleMove = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    px.set(localX / rect.width);
    py.set(localY / rect.height);
    gx.set(localX - GLOW_SIZE / 2);
    gy.set(localY - GLOW_SIZE / 2);
    glowOpacity.set(1);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
    glowOpacity.set(0);
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        ref={ref}
        className={cn("relative [transform-style:preserve-3d]", className)}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        whileHover={{ y: -6, transition: SPRING.tilt }}
        {...props}
      >
        {children}
        {glow && (
          /* Clip the moving glow to the card's rounded shape WITHOUT clipping
             the card's own drop shadow (kept on the children, outside this). */
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[inherit]"
          >
            <m.span
              className="absolute left-0 top-0 rounded-full"
              style={{
                width: GLOW_SIZE,
                height: GLOW_SIZE,
                x: gx,
                y: gy,
                opacity: glowOpacity,
                background:
                  "radial-gradient(circle, rgba(201,166,107,0.22), transparent 60%)",
                willChange: "transform, opacity",
              }}
            />
          </span>
        )}
      </m.div>
    </LazyMotion>
  );
}
