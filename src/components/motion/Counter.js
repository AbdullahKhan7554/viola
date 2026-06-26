"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";

/**
 * Animated number counter — counts up from 0 to `value` when scrolled into
 * view, once. Preserves any prefix/suffix (e.g. "113+", "5.0★", "100%") so
 * the markup reads identically before and after — zero layout shift.
 *
 * Reduced-motion shows the final value immediately. The count runs on a
 * single requestAnimationFrame loop (Framer's `animate`), writing straight
 * to the DOM node so there are no per-frame React re-renders.
 *
 * @param {number} value     Target number.
 * @param {number} decimals  Decimal places to render (e.g. 1 → "5.0").
 * @param {string} prefix    Rendered before the number.
 * @param {string} suffix    Rendered after the number (e.g. "+", "%", "★").
 */
export default function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  className,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const mv = useMotionValue(0);

  const format = (n) =>
    `${prefix}${Number(n).toFixed(decimals)}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduce || !inView) {
      if (reduce) node.textContent = format(value);
      return;
    }

    const controls = animate(mv, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = format(latest);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  // Server / first paint renders the final value (no CLS, SEO-safe);
  // the effect resets it to 0 before animating when in view.
  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
}
