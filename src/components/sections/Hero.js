import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import StarRating from "@/components/ui/StarRating";
import { WhatsAppButton } from "@/components/ui/TrackedCTA";
import HeroVideo from "@/components/sections/HeroVideo";
import { BUSINESS } from "@/lib/constants";

/**
 * Home hero (PRD F1) — minimal, centered, luxury.
 * Ambient video + image poster (the LCP element). A layered, refined scrim
 * keeps the short headline crisply legible over moving footage. The single
 * <h1> is intentionally minimal; supporting copy is one quiet line.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-center">
      {/* Poster = LCP candidate; loads instantly. */}
      <Image
        src="/images/voila-exterior.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <HeroVideo
        src="/video/voila-hero.mp4"
        poster="/images/voila-exterior.webp"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Layered scrim: cinematic darkening + brand plum + center vignette
          so white type stays legible without looking heavy. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1c1316]/55 via-[#1c1316]/35 to-[#1c1316]/75"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(28,19,22,0.55)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 mix-blend-soft-light bg-primary/30"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-white">
          <p
            className="animate-fade-up text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-[#e6c98f]"
            style={{ animationDelay: "0.05s" }}
          >
            Doctor-led luxury aesthetics · Lahore
          </p>

          <h1
            className="animate-fade-up mt-7 text-balance font-medium text-white text-[clamp(2.8rem,7.5vw,5.5rem)] leading-[1.04] tracking-[-0.01em] [text-shadow:0_2px_40px_rgba(0,0,0,0.45)]"
            style={{ animationDelay: "0.12s" }}
          >
            The art of radiant skin
          </h1>

          <span
            className="animate-fade-up mt-7 h-px w-16 bg-gradient-to-r from-transparent via-[#e6c98f] to-transparent"
            style={{ animationDelay: "0.2s" }}
            aria-hidden="true"
          />

          <p
            className="animate-fade-up mt-7 max-w-md text-pretty text-[1.05rem] text-white/85"
            style={{ animationDelay: "0.26s" }}
          >
            HydraFacial, laser & advanced skin treatments — personalized by{" "}
            {BUSINESS.practitioner}.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.34s" }}
          >
            <WhatsAppButton size="lg" location="hero">
              Book on WhatsApp
            </WhatsAppButton>
            <Link
              href="/treatments"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/35 px-9 text-base font-medium text-white transition-all duration-300 hover:border-[#e6c98f] hover:bg-white/5"
            >
              Explore treatments
              <Icon
                name="arrowRight"
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Minimal trust line */}
          <div
            className="animate-fade-up mt-9 flex items-center gap-2.5 text-sm text-white/85"
            style={{ animationDelay: "0.42s" }}
          >
            <StarRating value={5} size={16} />
            <span>
              <span className="font-semibold text-white">
                {BUSINESS.rating.value.toFixed(1)}
              </span>{" "}
              · {BUSINESS.rating.count} Google reviews
            </span>
          </div>
        </div>
      </Container>

      {/* Refined scroll cue */}
      <div
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/55"
        aria-hidden="true"
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-9 w-px overflow-hidden bg-white/20">
          <span className="block h-3 w-px animate-[scrollcue_1.8s_ease-in-out_infinite] bg-[#e6c98f]" />
        </span>
      </div>
    </section>
  );
}
