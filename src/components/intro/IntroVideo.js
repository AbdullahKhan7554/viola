"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

/**
 * Cinematic intro with a luxury "doors opening" split-screen reveal.
 *
 * Sequence
 *  1. Full-screen intro video (Project 2) plays with a 3D entrance.
 *  2. On end / skip / safety, the final frame is captured to a canvas and
 *     frozen briefly (~250ms).
 *  3. The frozen frame is split into two panels which slide outward like
 *     doors, with edge shadows + subtle motion blur, revealing the homepage.
 *  4. As the doors open, the homepage scales up + fades in and the hero
 *     content plays its staggered entrance (CSS, gated on `intro-active`).
 *
 * Performance
 *  - Panels animate with GPU transforms (x) for 60fps.
 *  - The homepage is already rendered behind the overlay (no late mount).
 *
 * Behaviour
 *  - Shown once per session (sessionStorage). Set PLAY_ONCE = false to
 *    replay on every refresh.
 *  - `prefers-reduced-motion` skips the intro entirely.
 *  - Pre-paint <html> classes (see layout) prevent any flash and hold the
 *    hero entrance until the reveal.
 *
 * Accessibility: labelled dialog, focusable + keyboard-dismissable skip.
 */

// Set to true to show the intro only once per browser session; false plays
// it on every entry / refresh (current preference).
const PLAY_ONCE = false;
const SESSION_KEY = "voila:intro-seen";
const SKIP_AFTER_MS = 2000;
const SAFETY_MAX_MS = 9000;
const FREEZE_MS = 260; // hold the final frame before the doors open
const PANEL_MS = 1250; // door slide duration
const EASE = [0.16, 1, 0.3, 1];
const DOOR_EASE = [0.76, 0, 0.24, 1]; // weighty ease-in-out for the doors

function markSeen() {
  try {
    if (PLAY_ONCE) sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* storage unavailable — ignore */
  }
}

function setLock(lock) {
  document.documentElement.style.overflow = lock ? "hidden" : "";
  document.body.style.overflow = lock ? "hidden" : "";
}

export default function IntroVideo() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState("playing"); // playing | frozen | splitting
  const [canSkip, setCanSkip] = useState(false);
  const [progress, setProgress] = useState(0);
  const [frozenSrc, setFrozenSrc] = useState(null);

  const videoRef = useRef(null);
  const phaseRef = useRef("playing");

  const finish = useCallback(() => {
    setLock(false);
    markSeen();
    document.documentElement.classList.remove("intro-active");
    setShow(false);
  }, []);

  const captureFrame = useCallback(() => {
    const v = videoRef.current;
    if (!v || !v.videoWidth) return null;
    try {
      const c = document.createElement("canvas");
      c.width = v.videoWidth;
      c.height = v.videoHeight;
      c.getContext("2d").drawImage(v, 0, 0, c.width, c.height);
      return c.toDataURL("image/jpeg", 0.92);
    } catch {
      return null;
    }
  }, []);

  const beginReveal = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    phaseRef.current = "revealing";

    const v = videoRef.current;
    if (v) v.pause();

    const src = captureFrame();
    if (!src) {
      // Fallback: no frame to split — reveal gracefully.
      document.documentElement.classList.remove("intro-active");
      document.documentElement.classList.add("intro-revealed");
      finish();
      return;
    }

    setFrozenSrc(src);
    setPhase("frozen");

    window.setTimeout(() => {
      // Doors begin to open: release the hero entrance + scale-up the page.
      document.documentElement.classList.remove("intro-active");
      document.documentElement.classList.add("intro-revealed");
      setPhase("splitting");
      window.setTimeout(finish, PANEL_MS + 120);
    }, FREEZE_MS);
  }, [captureFrame, finish]);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let seen = false;
    try {
      seen = PLAY_ONCE && sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      seen = false;
    }

    if (reduced || seen) {
      phaseRef.current = "revealing";
      document.documentElement.classList.remove("intro-active");
      document.documentElement.classList.add("intro-skip");
      setLock(false);
      setShow(false);
      return;
    }

    setLock(true);

    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute("muted", "");
      v.setAttribute("webkit-playsinline", "true");
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => beginReveal());
    }

    const skipTimer = window.setTimeout(() => setCanSkip(true), SKIP_AFTER_MS);
    const safetyTimer = window.setTimeout(beginReveal, SAFETY_MAX_MS);
    const onKey = (e) => e.key === "Escape" && beginReveal();
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(skipTimer);
      window.clearTimeout(safetyTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, [beginReveal]);

  // Keep the ref in sync for guard checks.
  useEffect(() => {
    phaseRef.current = phase === "playing" ? "playing" : phaseRef.current;
  }, [phase]);

  const splitting = phase === "splitting";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="voila-intro"
          role="dialog"
          aria-modal="true"
          aria-label="Welcome to Voila Luxury Skincare"
          className="fixed inset-0 z-[200] overflow-hidden"
          style={{ perspective: 1400 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: EASE } }}
        >
          {/* ── Phase: playing — the video ── */}
          {phase === "playing" && (
            <>
              {/* Opaque backdrop so the homepage stays hidden during play.
                  The overlay itself is transparent so the doors can reveal
                  the homepage as they part. */}
              <div className="absolute inset-0 bg-[#1c1316]" aria-hidden="true" />
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.14, opacity: 0, rotateX: 6 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotateX: 0,
                  transition: { duration: 1.8, ease: EASE },
                }}
                style={{ transformOrigin: "center" }}
              >
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/intro-poster.webp"
                  aria-hidden="true"
                  tabIndex={-1}
                  onTimeUpdate={(e) => {
                    const v = e.currentTarget;
                    if (v.duration) setProgress((v.currentTime / v.duration) * 100);
                  }}
                  onEnded={beginReveal}
                  onError={beginReveal}
                >
                  <source src="/video/voila-intro.mp4" type="video/mp4" />
                </video>
              </motion.div>

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/30"
                aria-hidden="true"
              />

              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
                <motion.span
                  className="font-serif text-[clamp(2.5rem,9vw,5.5rem)] font-bold tracking-[0.22em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                  initial={{ opacity: 0, y: 34, rotateX: 45, filter: "blur(8px)" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                    transition: { delay: 0.3, duration: 1.3, ease: EASE },
                  }}
                >
                  {BUSINESS.wordmark}
                </motion.span>
                <motion.span
                  className="mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-[#e6c98f] sm:text-xs"
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { delay: 0.62, duration: 1.1, ease: EASE },
                  }}
                >
                  {BUSINESS.tagline}
                </motion.span>
              </div>

              <motion.button
                type="button"
                onClick={beginReveal}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: canSkip ? 1 : 0, y: canSkip ? 0 : 12 }}
                transition={{ duration: 0.5, ease: EASE }}
                className={`absolute bottom-7 right-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-[#e6c98f] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  canSkip ? "" : "pointer-events-none"
                }`}
                aria-label="Skip intro and enter the site"
              >
                Skip intro
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M5 5h2v14H5V5Zm4.5 7L18 5.5v13L9.5 12Z" />
                </svg>
              </motion.button>

              <div className="absolute inset-x-0 bottom-0 z-20 h-[3px] bg-white/10" aria-hidden="true">
                <div
                  className="h-full bg-gradient-to-r from-[#c9a66b] to-[#e6c98f]"
                  style={{ width: `${progress}%`, transition: "width 0.2s linear" }}
                />
              </div>
            </>
          )}

          {/* ── Phase: frozen / splitting — the luxury doors ── */}
          {phase !== "playing" && frozenSrc && (
            <>
              {/* Left door */}
              <motion.div
                className="absolute left-0 top-0 h-full w-1/2 overflow-hidden will-change-transform"
                initial={{ x: 0 }}
                animate={{ x: splitting ? "-101%" : 0 }}
                transition={{ duration: PANEL_MS / 1000, ease: DOOR_EASE }}
                style={{
                  filter: splitting ? "blur(1.5px)" : "none",
                  boxShadow: splitting ? "24px 0 70px rgba(0,0,0,0.45)" : "none",
                }}
                aria-hidden="true"
              >
                <div
                  className="absolute left-0 top-0 h-screen w-screen"
                  style={{
                    backgroundImage: `url(${frozenSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "inset -36px 0 60px -16px rgba(0,0,0,0.5)",
                  }}
                />
              </motion.div>

              {/* Right door */}
              <motion.div
                className="absolute right-0 top-0 h-full w-1/2 overflow-hidden will-change-transform"
                initial={{ x: 0 }}
                animate={{ x: splitting ? "101%" : 0 }}
                transition={{ duration: PANEL_MS / 1000, ease: DOOR_EASE }}
                style={{
                  filter: splitting ? "blur(1.5px)" : "none",
                  boxShadow: splitting ? "-24px 0 70px rgba(0,0,0,0.45)" : "none",
                }}
                aria-hidden="true"
              >
                <div
                  className="absolute top-0 h-screen w-screen"
                  style={{
                    left: "-100%",
                    backgroundImage: `url(${frozenSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "inset 36px 0 60px -16px rgba(0,0,0,0.5)",
                  }}
                />
              </motion.div>

              {/* Center light seam that flares as the doors part */}
              <motion.div
                className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-[3px] -translate-x-1/2"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, #e6c98f, #c9a66b, #e6c98f, transparent)",
                }}
                initial={{ opacity: 0, scaleY: 0.6 }}
                animate={{
                  opacity: splitting ? [0, 0.9, 0] : 0,
                  scaleY: splitting ? 1 : 0.6,
                }}
                transition={{ duration: PANEL_MS / 1000, ease: EASE, times: [0, 0.3, 1] }}
                aria-hidden="true"
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
