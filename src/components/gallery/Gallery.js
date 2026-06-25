"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { track } from "@/lib/analytics";

/**
 * Responsive gallery with an accessible lightbox (PRD F4/F11).
 * - Grid uses CSS columns for a natural masonry feel.
 * - Lightbox: keyboard nav (Esc/←/→), focus restore, body-scroll lock,
 *   labelled dialog. Images optimized via next/image.
 */
export default function Gallery({ images }) {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;

  const close = useCallback(() => setIndex(-1), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => {
              setIndex(i);
              track.galleryOpen(i);
            }}
            className="group relative block w-full overflow-hidden rounded-lg shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label={`Open image: ${img.caption || img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/15" />
            {img.caption ? (
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-text/70 to-transparent p-4 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.caption}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-text/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <Icon name="close" size={26} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <Icon name="chevronLeft" size={28} />
          </button>

          <figure
            className="relative max-h-[85vh] w-auto max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              width={images[index].width}
              height={images[index].height}
              sizes="90vw"
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              priority
            />
            {images[index].caption ? (
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {images[index].caption} · {index + 1} / {images.length}
              </figcaption>
            ) : null}
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <Icon name="chevronRight" size={28} />
          </button>
        </div>
      ) : null}
    </>
  );
}
