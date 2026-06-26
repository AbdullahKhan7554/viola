"use client";

import {
  m,
  LazyMotion,
  domAnimation,
  useReducedMotion,
} from "framer-motion";
import { staggerContainer, staggerChild, VIEWPORT } from "@/lib/motion";

/**
 * Cinematic text reveal — splits a string into words that rise into view
 * behind a clipping mask, blur-to-sharp, with staggered timing.
 *
 * Accessibility: the full string is exposed to assistive tech via an
 * aria-label and the animated words are aria-hidden, so screen readers read
 * one clean phrase (not fragmented words). Reduced-motion shows the text
 * instantly with no transform.
 *
 * Performance: word transforms only; the mask is a CSS overflow clip. Each
 * outer span carries the word space (a mask would otherwise swallow it).
 *
 * @param {string} text    The phrase to animate.
 * @param {string} as      Wrapper tag (h1, h2, p, span…).
 * @param {string} trigger "view" (default, on scroll) or "mount" (immediately).
 */
export default function TextReveal({
  text,
  as = "span",
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
  trigger = "view",
  ...props
}) {
  const reduce = useReducedMotion();
  const MotionTag = m[as] || m.span;
  const words = String(text).split(" ");

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {text}
      </Tag>
    );
  }

  const animateProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "show" }
      : { initial: "hidden", whileInView: "show", viewport: VIEWPORT };

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionTag
        className={className}
        variants={staggerContainer(stagger, delay)}
        aria-label={text}
        {...animateProps}
        {...props}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            aria-hidden="true"
            className="inline-block overflow-hidden align-bottom"
            style={{
              paddingBottom: "0.14em",
              marginBottom: "-0.14em",
              marginRight: i < words.length - 1 ? "0.25em" : 0,
            }}
          >
            <m.span
              className={wordClassName}
              style={{ display: "inline-block", willChange: "transform" }}
              variants={staggerChild}
            >
              {word}
            </m.span>
          </span>
        ))}
      </MotionTag>
    </LazyMotion>
  );
}
