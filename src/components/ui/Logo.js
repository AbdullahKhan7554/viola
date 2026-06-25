import Link from "next/link";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";

/**
 * Brand wordmark — matches the clinic's real signage ("VOILÁ — LUXURY
 * SKINCARE AESTHETICS"). `tone` switches color for light/dark backgrounds.
 */
export default function Logo({ tone = "dark", className }) {
  const main = tone === "light" ? "text-white" : "text-primary";
  const sub = tone === "light" ? "text-white/70" : "text-accent-dark";

  return (
    <Link
      href="/"
      aria-label={`${BUSINESS.name} — home`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-serif text-2xl font-bold tracking-[0.18em] transition-colors sm:text-[1.7rem]",
          main
        )}
      >
        {BUSINESS.wordmark}
      </span>
      <span
        className={cn(
          "mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.32em] sm:text-[0.6rem]",
          sub
        )}
      >
        {BUSINESS.tagline}
      </span>
    </Link>
  );
}
