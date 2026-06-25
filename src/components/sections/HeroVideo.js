"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient hero video with reliable mobile autoplay.
 *
 * Why a client component: iOS Safari / Android Chrome only autoplay when the
 * video is genuinely muted AND has begun loading. Two gotchas are handled
 * here that the plain `<video>` markup could not:
 *   1. React does not reliably reflect the `muted` *attribute* onto the DOM
 *      node — so we set `muted`/`defaultMuted` imperatively before play().
 *   2. `preload="none"` prevents autoplay from ever starting; we let the
 *      browser preload and call play() once data is ready, retrying on
 *      visibility changes (e.g. returning to the tab).
 *
 * The poster (also the LCP image behind this) keeps the hero looking perfect
 * if autoplay is blocked (Low Power Mode) or motion is reduced.
 */
export default function HeroVideo({ src, poster, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Ensure the element is truly muted at the DOM level (React quirk).
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    // Legacy iOS inline playback flag.
    video.setAttribute("webkit-playsinline", "true");

    // Respect reduced-motion: keep the still poster, skip playback.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    const onVisible = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
