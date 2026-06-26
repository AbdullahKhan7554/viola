/**
 * Shared helpers for reliable, inline, muted autoplay across every mobile
 * browser engine — not just desktop Chrome/Safari.
 *
 * Why this file exists
 * --------------------
 * Muted autoplay is allowed by every modern browser, but each mobile engine
 * gates it behind a *different* set of attributes that must already be present
 * in the server-rendered HTML at the moment the element is parsed (the native
 * autoplay attempt fires long before React hydrates):
 *
 *  • WebKit (iOS Safari, all iOS browsers): needs `playsinline` AND the legacy
 *    `webkit-playsinline`. Without inline playback iOS refuses to autoplay and
 *    surfaces the native play button.
 *  • Blink/X5 & U4 kernels (Samsung Internet, UC, QQ, many Android WebViews):
 *    hijack a bare `<video>` into a *fullscreen native player* with a tap-to-
 *    play button unless `x5-playsinline` + `x5-video-player-type="h5-page"`
 *    are present. This is the single biggest reason "it works on desktop but
 *    shows a play button on Android".
 *  • All engines: the `muted` attribute must exist *in the parsed HTML* — not
 *    be assigned by JS after hydration — or the pre-hydration autoplay attempt
 *    is treated as un-muted and blocked.
 *
 * `INLINE_AUTOPLAY_ATTRS` is spread directly onto the JSX `<video>` so every
 * one of these lands in the SSR markup. `primeAutoplay()` then handles the
 * client-side belt-and-suspenders: re-assert muted at the DOM-property level,
 * deny AirPlay/remote playback, and retry `play()` on every readiness signal.
 */

// Attributes that MUST be in the server-rendered markup (parse-time critical).
// Spread onto the <video> element in JSX.
export const INLINE_AUTOPLAY_ATTRS = {
  autoPlay: true,
  muted: true,
  playsInline: true,
  preload: "auto",
  // Recognised React boolean prop — blocks the PiP affordance on Chrome/Edge.
  disablePictureInPicture: true,
  // Strips download / fullscreen / remote-playback controls if any UA exposes
  // them, without us ever rendering `controls`.
  controlsList: "nodownload nofullscreen noremoteplayback",
  // Hyphenated custom attributes are passed through verbatim by React 19 and
  // are what unlock inline playback on the non-WebKit mobile engines.
  "webkit-playsinline": "true",
  "x5-playsinline": "true",
  "x5-video-player-type": "h5-page",
  "x5-video-orientation": "portrait",
  "x-webkit-airplay": "deny",
};

/**
 * Drive a muted <video> to actually play across mobile engines.
 *
 * Re-asserts the muted state (DOM property, not just attribute), denies remote
 * playback, then attempts `play()` immediately and again on each readiness
 * event and on tab re-focus. Returns a cleanup function.
 *
 * @param {HTMLVideoElement} video
 * @param {{ onBlocked?: () => void }} [opts]
 *   onBlocked fires only if playback is still blocked after the element is
 *   actually ready (genuine policy block, e.g. iOS Low Power Mode) — never on
 *   the first, expected "not ready yet" rejection.
 * @returns {() => void} cleanup
 */
export function primeAutoplay(video, { onBlocked } = {}) {
  if (!video) return () => {};

  // The muted *property* (distinct from the attribute) is what the autoplay
  // policy actually reads at play() time. Assert it defensively.
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute("muted", "");
  // Belt-and-suspenders for engines that only read these via property/attr.
  video.setAttribute("webkit-playsinline", "true");
  try {
    video.disableRemotePlayback = true;
  } catch {
    /* not supported — the attribute form above already covers it */
  }

  let settled = false;

  const tryPlay = () => {
    if (settled) return;
    const p = video.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        settled = true;
      }).catch(() => {
        // Only treat it as a real block once the media is genuinely ready;
        // early rejections are just "data/decoder not ready yet" and resolve
        // on the next readiness event.
        if (video.readyState >= 2 && onBlocked) onBlocked();
      });
    }
  };

  const onVisible = () => {
    if (!document.hidden) tryPlay();
  };

  tryPlay();
  video.addEventListener("loadeddata", tryPlay);
  video.addEventListener("canplay", tryPlay);
  video.addEventListener("canplaythrough", tryPlay);
  document.addEventListener("visibilitychange", onVisible);

  return () => {
    video.removeEventListener("loadeddata", tryPlay);
    video.removeEventListener("canplay", tryPlay);
    video.removeEventListener("canplaythrough", tryPlay);
    document.removeEventListener("visibilitychange", onVisible);
  };
}
