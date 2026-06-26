"use client";

import { m, LazyMotion, domAnimation, useReducedMotion } from "framer-motion";
import {
  REVEAL_VARIANTS,
  reducedVariant,
  staggerContainer,
  VIEWPORT,
  EASE,
  DURATION,
} from "@/lib/motion";

/**
 * House reveal primitive — the Framer-Motion upgrade to ScrollReveal.
 *
 * Soft fade + lift + blur-to-sharp, triggered once when the element scrolls
 * into view. Honors prefers-reduced-motion (falls back to a plain fade) and
 * only animates GPU-friendly properties (opacity / transform / filter).
 *
 * `LazyMotion` + `domAnimation` ships a lean Framer feature bundle (~15kb vs
 * the full ~34kb) and the `m` component is the tree-shakeable element.
 *
 * Usage:
 *   <Reveal>…</Reveal>                          // single fade-up
 *   <Reveal direction="scale" delay={0.1}>…</Reveal>
 *   <Reveal stagger>                            // cascade direct children
 *     <RevealItem>…</RevealItem>               // (named export, below)
 *     <RevealItem>…</RevealItem>
 *   </Reveal>
 */
export default function Reveal({
  as = "div",
  direction = "up",
  delay = 0,
  stagger = false,
  staggerAmount = 0.09,
  className,
  children,
  ...props
}) {
  const reduce = useReducedMotion();
  const MotionTag = m[as] || m.div;

  if (stagger) {
    return (
      <LazyMotion features={domAnimation} strict>
        <MotionTag
          className={className}
          variants={reduce ? undefined : staggerContainer(staggerAmount, delay)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          {...props}
        >
          {children}
        </MotionTag>
      </LazyMotion>
    );
  }

  const variant = reduce ? reducedVariant : REVEAL_VARIANTS[direction] || REVEAL_VARIANTS.up;

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionTag
        className={className}
        variants={variant}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        transition={delay ? { delay } : undefined}
        {...props}
      >
        {children}
      </MotionTag>
    </LazyMotion>
  );
}

/**
 * Child of a <Reveal stagger> container. Inherits the parent's cascade so it
 * animates in sequence. Exported as a named export (not `Reveal.Item`) so it
 * resolves correctly when used from server components — each named export of a
 * "use client" module becomes its own client reference.
 */
export function RevealItem({
  as = "div",
  direction = "up",
  className,
  children,
  ...props
}) {
  const reduce = useReducedMotion();
  const MotionTag = m[as] || m.div;
  const variant = reduce ? reducedVariant : REVEAL_VARIANTS[direction] || REVEAL_VARIANTS.up;

  return (
    <MotionTag className={className} variants={variant} {...props}>
      {children}
    </MotionTag>
  );
}

export { EASE, DURATION };
