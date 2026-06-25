"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

/**
 * Before/after comparison slider (PRD F11). Accessible: the handle is a
 * range input, so it's fully keyboard-operable and screen-reader friendly.
 * Pointer drag updates the same value for mouse/touch.
 */
export default function BeforeAfterSlider({ pair }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  return (
    <div className="select-none">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-soft"
        onPointerDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        {/* After (base layer) */}
        <Image
          src={pair.after}
          alt={pair.afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Before (clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={pair.before}
            alt={pair.beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 rounded-full bg-text/60 px-3 py-1 text-xs font-medium text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-text/60 px-3 py-1 text-xs font-medium text-white">
          After
        </span>

        {/* Divider line + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-elevated">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9 7 4 12l5 5V7Zm6 0v10l5-5-5-5Z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Accessible range control */}
      <label className="mt-4 block">
        <span className="sr-only">
          Reveal before and after — {pair.label}
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Before and after comparison slider for ${pair.label}`}
          className="w-full accent-primary"
        />
      </label>
      <p className="mt-1 text-center text-sm font-medium text-muted">{pair.label}</p>
    </div>
  );
}
