"use client";

import { useEffect, useRef } from "react";
import { INLINE_AUTOPLAY_ATTRS, primeAutoplay } from "@/lib/video";

/**
 * Ambient hero background video with reliable inline autoplay on every device.
 *
 * The autoplay-critical attributes (muted / playsinline / webkit-playsinline /
 * x5-* / preload) are spread from {@link INLINE_AUTOPLAY_ATTRS} so they are in
 * the server-rendered HTML at parse time — the browser starts its native
 * autoplay attempt before React hydrates, so these must not be JS-only.
 * {@link primeAutoplay} then re-asserts the muted property and retries play()
 * on each readiness signal (Next.js hydration / slow-buffer safe).
 *
 * The poster (also the hero's LCP image) keeps the section pixel-perfect if the
 * OS hard-blocks autoplay (e.g. iOS Low Power Mode) — no play button is ever
 * shown because we never render `controls`.
 */
export default function HeroVideo({ src, poster, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Respect reduced-motion: keep the still poster, skip playback entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    return primeAutoplay(video);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      loop
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      {...INLINE_AUTOPLAY_ATTRS}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
