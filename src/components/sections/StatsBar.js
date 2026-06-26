import Container from "@/components/ui/Container";
import Reveal, { RevealItem } from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";

/**
 * Trust stats band (PRD §17.7 — trust signals near CTAs).
 * Values animate up from zero when scrolled into view, in a staggered cascade.
 */
const stats = [
  { value: 5.0, decimals: 1, suffix: "★", label: "Google rating" },
  { value: 113, suffix: "+", label: "Five-star reviews" },
  { value: 6, label: "Signature treatments" },
  { value: 100, suffix: "%", label: "Doctor-led care" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary py-12 text-white">
      <Container>
        <Reveal as="dl" stagger className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <RevealItem as="div" key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-4xl font-bold text-accent sm:text-5xl">
                <Counter
                  value={s.value}
                  decimals={s.decimals || 0}
                  suffix={s.suffix || ""}
                />
              </dd>
              <p className="mt-2 text-sm tracking-wide text-white/75">{s.label}</p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
