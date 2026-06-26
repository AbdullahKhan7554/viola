"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Ambient atmosphere layer — slow drifting colour blobs plus optional
 * floating particles, for depth behind hero / CTA sections.
 *
 * All motion is pure CSS (transform/opacity keyframes defined in globals.css)
 * so it runs off the compositor at 60fps with no JS on the main thread. The
 * layer is decorative, non-interactive, and aria-hidden. Reduced-motion
 * renders the blobs static (no drift, no particles).
 *
 * Performance: blob sizes/blur are kept moderate (very large blurred layers
 * are expensive to rasterize), particles are simple dots (no box-shadow), and
 * counts are conservative so this stays cheap even on mobile GPUs.
 *
 * @param {"blobs"|"particles"|"both"} variant  What to render.
 * @param {"light"|"dark"} tone   Palette tuned for light or dark backgrounds.
 * @param {number} particleCount  Particles when enabled (kept low for perf).
 */
export default function AmbientBackground({
  variant = "both",
  tone = "dark",
  particleCount = 10,
  className,
}) {
  const reduce = useReducedMotion();
  const showParticles =
    !reduce && (variant === "particles" || variant === "both");
  const showBlobs = variant === "blobs" || variant === "both";

  // Deterministic particle field, memoized so it never re-randomizes
  // across renders (avoids hydration mismatch + visual jitter).
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        left: (i * 67) % 100,
        top: (i * 41) % 100,
        size: 2 + ((i * 13) % 3),
        delay: (i % 7) * 1.1,
        duration: 10 + ((i * 3) % 7),
        drift: (i % 2 === 0 ? 1 : -1) * (10 + (i % 5) * 6),
      })),
    [particleCount]
  );

  const particleColor =
    tone === "dark" ? "rgba(230,201,143,0.5)" : "rgba(122,78,87,0.35)";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {showBlobs && (
        <>
          <span
            className={cn(
              "absolute -left-[8%] top-[10%] h-[28vmax] w-[28vmax] rounded-full opacity-50 blur-[60px]",
              !reduce && "animate-blob-drift"
            )}
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(216,167,160,0.5), transparent 65%)",
            }}
          />
          <span
            className={cn(
              "absolute -right-[10%] top-[22%] h-[26vmax] w-[26vmax] rounded-full opacity-45 blur-[64px]",
              !reduce && "animate-blob-drift-slow"
            )}
            style={{
              background:
                "radial-gradient(circle at 60% 40%, rgba(201,166,107,0.45), transparent 65%)",
            }}
          />
          <span
            className={cn(
              "absolute bottom-[-8%] left-[32%] h-[24vmax] w-[24vmax] rounded-full opacity-40 blur-[60px]",
              !reduce && "animate-blob-drift-alt"
            )}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(122,78,87,0.4), transparent 65%)",
            }}
          />
        </>
      )}

      {showParticles &&
        particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-particle-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              background: particleColor,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--drift": `${p.drift}px`,
            }}
          />
        ))}
    </div>
  );
}
