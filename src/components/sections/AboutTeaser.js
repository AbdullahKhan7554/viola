import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Parallax from "@/components/motion/Parallax";
import { BUSINESS } from "@/lib/constants";

const pillars = [
  { icon: "shield", title: "Medical credibility", text: "Doctor-led care and high hygiene standards you can trust." },
  { icon: "heart", title: "Warm & personal", text: "A calm, homely ambiance — never clinical or rushed." },
  { icon: "sparkle", title: "Visible results", text: "Personalized plans designed around your skin and goals." },
];

/** About teaser (PRD F1/F3) — introduces Dr. Beenish on the home page. */
export default function AboutTeaser() {
  return (
    <section className="section-pad bg-soft/40">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="relative">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-lg shadow-elevated">
            <Parallax speed={70} className="absolute inset-0">
              <div className="absolute inset-0 scale-110">
                <Image
                  src="/images/voila-reception.webp"
                  alt="The welcoming reception at Voila Luxury Skincare Aesthetics in Lahore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>
            </Parallax>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          </div>
          {/* Floating rating card */}
          <div className="glow-gold absolute -bottom-6 -right-2 rounded-lg bg-surface p-5 shadow-elevated sm:-right-6">
            <p className="font-serif text-4xl font-bold text-primary">5.0</p>
            <p className="text-xs text-muted">
              {BUSINESS.rating.count} verified reviews
            </p>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <SectionHeading
              align="left"
              eyebrow={`Meet ${BUSINESS.practitioner}`}
              title="Doctor-led skincare, delivered with genuine care"
              lead="Voila was built on a simple belief: premium results and personal warmth belong together. Every consultation is unhurried, every treatment tailored, and every detail considered — which is why our clients keep coming back."
            />
          </ScrollReveal>

          <ul className="mt-8 space-y-5">
            {pillars.map((p, i) => (
              <ScrollReveal as="li" key={p.title} delay={i * 90} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Icon name={p.icon} size={20} />
                </span>
                <span>
                  <span className="block font-semibold text-text">{p.title}</span>
                  <span className="text-sm text-muted">{p.text}</span>
                </span>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal className="mt-9">
            <Button href="/about" variant="primary" size="md">
              More about Voila
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
