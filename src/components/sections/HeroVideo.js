"use client";

import { useEffect, useRef } from "react";
import {
  INLINE_AUTOPLAY_ATTRS,
  primeAutoplay,
  whenIntroDone,
} from "@/lib/video";

/**
 * Ambient hero background video — the site's single "live" video once the
 * cinematic intro has handed off.
 *
 * One decoder at a time: while the intro overlay covers the page this video is
 * invisible, so it ships with `preload="none"` and no `autoPlay` and does
 * nothing. {@link whenIntroDone} starts it the moment the intro reveals (or
 * immediately when there is no intro — reduced-motion / already revealed), at
 * which point we flip preload to `auto`, kick a load(), and hand off to
 * {@link primeAutoplay} (muted-inline play with readiness + first-gesture
 * retries, hydration- and iOS/Android-safe).
 *
 * The poster (also the hero's LCP image) holds the frame until the first video
 * frame paints, so there is no layout shift and no play button is ever shown.
 */
export default function HeroVideo({ src, poster, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Respect reduced-motion: keep the still poster, never decode.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let stopAutoplay = () => {};

    const start = () => {
      // Our turn to take the decoder: begin loading, then drive playback.
      if (video.preload !== "auto") {
        video.preload = "auto";
        video.load();
      }
      stopAutoplay = primeAutoplay(video);
    };

    const cancelWait = whenIntroDone(start);

    return () => {
      cancelWait();
      stopAutoplay();
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      loop
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      preload="none"
      {...INLINE_AUTOPLAY_ATTRS}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
