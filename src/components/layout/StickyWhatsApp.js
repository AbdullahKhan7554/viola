"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import { whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";

/**
 * Persistent WhatsApp floating action button (PRD F9). Always reachable
 * within one tap from any section. Appears after a small scroll to avoid
 * covering the hero CTA on first paint.
 */
export default function StickyWhatsApp() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track.whatsappClick("sticky_fab")}
      aria-label="Chat with us on WhatsApp to book"
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-elevated transition-all duration-300 hover:bg-success-dark hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-16 sm:w-16 ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-20" aria-hidden="true" />
      <Icon name="whatsapp" size={30} className="relative" />
    </a>
  );
}
