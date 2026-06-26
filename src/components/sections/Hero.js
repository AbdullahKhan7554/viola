import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import StarRating from "@/components/ui/StarRating";
import { WhatsAppButton } from "@/components/ui/TrackedCTA";
import HeroVideo from "@/components/sections/HeroVideo";
import MouseParallax from "@/components/motion/MouseParallax";
import AmbientBackground from "@/components/motion/AmbientBackground";
import Magnetic from "@/components/motion/Magnetic";
import { BUSINESS } from "@/lib/constants";

/**
 * Home hero (PRD F1) — minimal, centered, luxury, now cinematic.
 *
 * Layered depth: the ambient video + poster sit on a mouse-parallax plane
 * (scaled up so movement never reveals edges), refined scrims keep type crisp,
 * floating gold particles add atmosphere, and the foreground copy drifts a
 * touch the opposite way for a sense of dimension. The staggered entrance is
 * still the CSS `animate-fade-up` (held by the intro until the doors open) so
 * the cinematic hand-off from the intro is preserved. LCP remains the poster.
 */

// Word-by-word headline reveal, staggered via the intro-coordinated fade-up.
const HEADLINE = ["The", "art", "of", "radiant", "skin"];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-center">
      {/* ── Background plane (mouse parallax + slow depth zoom) ── */}
      <MouseParallax strength={-22} className="absolute inset-0">
        <div className="absolute inset-0 scale-[1.12]">
          {/* Poster = LCP candidate; loads instantly. */}
          <Image
            src="/images/voila-exterior.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-slow-zoom object-cover"
            aria-hidden="true"
          />
          <HeroVideo
            src="/video/voila-hero.mp4"
            poster="/images/voila-exterior.webp"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </MouseParallax>

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

      {/* Floating ambient particles. (No blend-mode grain over the video —
          blending recomposites every video frame and costs FPS.) */}
      <AmbientBackground variant="particles" tone="dark" particleCount={10} className="z-[5]" />

      <Container className="relative z-10">
        <MouseParallax strength={10}>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-white">
            <p
              className="animate-fade-up text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-[#e6c98f]"
              style={{ animationDelay: "0.05s" }}
            >
              Doctor-led luxury aesthetics · Lahore
            </p>

            <h1 className="mt-7 text-balance font-medium text-white text-[clamp(2.8rem,7.5vw,5.5rem)] leading-[1.04] tracking-[-0.01em] [text-shadow:0_2px_40px_rgba(0,0,0,0.45)]">
              {HEADLINE.map((word, i) => (
                <span
                  key={word}
                  className="animate-fade-up mr-[0.22em] inline-block last:mr-0"
                  style={{ animationDelay: `${0.12 + i * 0.07}s` }}
                >
                  {word === "radiant" ? (
                    <span className="text-gradient-gold">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            <span
              className="animate-fade-up mt-7 h-px w-16 bg-gradient-to-r from-transparent via-[#e6c98f] to-transparent"
              style={{ animationDelay: "0.5s" }}
              aria-hidden="true"
            />

            <p
              className="animate-fade-up mt-7 max-w-md text-pretty text-[1.05rem] text-white/85"
              style={{ animationDelay: "0.58s" }}
            >
              HydraFacial, laser & advanced skin treatments — personalized by{" "}
              {BUSINESS.practitioner}.
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row"
              style={{ animationDelay: "0.66s" }}
            >
              <Magnetic strength={0.4} className="inline-flex">
                <WhatsAppButton size="lg" location="hero" className="btn-shine">
                  Book on WhatsApp
                </WhatsAppButton>
              </Magnetic>
              <Magnetic strength={0.4} className="inline-flex">
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
              </Magnetic>
            </div>

            {/* Minimal trust line */}
            <div
              className="animate-fade-up mt-9 flex items-center gap-2.5 text-sm text-white/85"
              style={{ animationDelay: "0.74s" }}
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
        </MouseParallax>
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
