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

// Inline-playback flags that MUST be in the server-rendered markup (parse-time
// critical) and are identical for every video. Spread onto the <video> in JSX.
//
// Deliberately does NOT include `autoPlay` or `preload`: those are
// per-element concerns. Only the minimum number of videos should decode at
// once, so a video that must wait its turn (e.g. the hero behind the intro)
// omits `autoPlay` and starts with `preload="none"`, then is driven by
// primeAutoplay() when it is actually visible. See ARCHITECTURE note below.
export const INLINE_AUTOPLAY_ATTRS = {
  muted: true,
  playsInline: true,
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

// First-gesture events that count as a user activation across engines. The
// instant any of these fire, a previously-blocked muted video is allowed to
// play — so we never have to surface a play button.
const GESTURE_EVENTS = [
  "touchstart",
  "touchend",
  "pointerdown",
  "mousedown",
  "click",
  "keydown",
  "scroll",
];

/**
 * Drive a muted <video> to actually play across every mobile engine.
 *
 * Strategy (in order of how reliably each path fires):
 *  1. Re-assert the muted *property* (what the autoplay policy reads) + deny
 *     remote playback, then attempt play() immediately.
 *  2. Retry play() on every readiness signal and on tab re-focus — covers the
 *     normal "data/decoder wasn't ready on the first microtask" mobile case.
 *  3. If the OS still refuses muted autoplay (iOS Low Power Mode, strict
 *     per-site settings), arm a one-shot listener so the FIRST user gesture
 *     anywhere on the page silently starts the video. No play button needed.
 *
 * @param {HTMLVideoElement} video
 * @returns {() => void} cleanup
 */
export function primeAutoplay(video) {
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

  let cleaned = false;

  const removeGestureListeners = () => {
    GESTURE_EVENTS.forEach((e) =>
      window.removeEventListener(e, onGesture, gestureOpts)
    );
  };

  const tryPlay = () => {
    // Keep it muted in case anything toggled it; muted is the autoplay gate.
    video.muted = true;
    const p = video.play();
    if (p && typeof p.then === "function") {
      p.then(removeGestureListeners).catch(() => {
        /* still blocked — readiness events / first gesture will retry */
      });
    }
  };

  const gestureOpts = { passive: true, capture: true };
  const onGesture = () => tryPlay();

  const onVisible = () => {
    if (!document.hidden) tryPlay();
  };

  tryPlay();
  video.addEventListener("loadeddata", tryPlay);
  video.addEventListener("canplay", tryPlay);
  video.addEventListener("canplaythrough", tryPlay);
  document.addEventListener("visibilitychange", onVisible);
  // Once playing, drop the gesture net so we never fight the user later.
  video.addEventListener("playing", removeGestureListeners);
  GESTURE_EVENTS.forEach((e) =>
    window.addEventListener(e, onGesture, gestureOpts)
  );

  return () => {
    if (cleaned) return;
    cleaned = true;
    video.removeEventListener("loadeddata", tryPlay);
    video.removeEventListener("canplay", tryPlay);
    video.removeEventListener("canplaythrough", tryPlay);
    video.removeEventListener("playing", removeGestureListeners);
    document.removeEventListener("visibilitychange", onVisible);
    removeGestureListeners();
  };
}

/* ──────────────────────────────────────────────────────────────────────────
   ARCHITECTURE: one decoder at a time
   --------------------------------------------------------------------------
   The cinematic intro overlay covers the homepage, so while it plays the hero
   video behind it is invisible. Decoding both at once buys nothing and, on
   constrained mobile hardware, two simultaneous H.264 decoders contend for the
   same fixed pool — plus both compete for bandwidth, slowing the intro's
   startup (the most autoplay-sensitive moment). So the hero waits: it ships
   with `preload="none"` and no `autoPlay`, and only loads + plays once the
   intro signals it is done. If there is no intro (reduced-motion / already
   revealed) the hero starts immediately.
   ────────────────────────────────────────────────────────────────────────── */

const INTRO_DONE_EVENT = "voila:intro-done";

/** True while the cinematic intro overlay is covering the page. */
export function isIntroActive() {
  return (
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("intro-active")
  );
}

/** Fire-and-forget: tell any deferred videos the intro has handed off. */
export function signalIntroDone() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(INTRO_DONE_EVENT));
  }
}

/**
 * Run `cb` once the intro is no longer covering the page — immediately if no
 * intro is active, otherwise on the intro-done signal. A safety timeout
 * guarantees `cb` runs even if the signal is somehow missed, so the hero can
 * never get stuck on its poster. Returns a cleanup function.
 *
 * @param {() => void} cb
 * @param {number} [safetyMs] hard cap before running `cb` regardless
 */
export function whenIntroDone(cb, safetyMs = 10000) {
  if (typeof window === "undefined" || !isIntroActive()) {
    cb();
    return () => {};
  }
  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    window.removeEventListener(INTRO_DONE_EVENT, run);
    window.clearTimeout(timer);
    cb();
  };
  const timer = window.setTimeout(run, safetyMs);
  window.addEventListener(INTRO_DONE_EVENT, run, { once: true });
  return () => {
    done = true;
    window.removeEventListener(INTRO_DONE_EVENT, run);
    window.clearTimeout(timer);
  };
}
