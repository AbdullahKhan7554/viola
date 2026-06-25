import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "5.0★", label: "Google rating" },
  { value: "113+", label: "Five-star reviews" },
  { value: "6", label: "Signature treatments" },
  { value: "100%", label: "Doctor-led care" },
];

/** Trust stats band (PRD §17.7 — trust signals near CTAs). */
export default function StatsBar() {
  return (
    <section className="bg-primary py-12 text-white">
      <Container>
        <dl className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal as="div" key={s.label} delay={i * 80}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-4xl font-bold text-accent sm:text-5xl">
                {s.value}
              </dd>
              <p className="mt-2 text-sm tracking-wide text-white/75">{s.label}</p>
            </ScrollReveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
