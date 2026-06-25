import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TreatmentCard from "@/components/ui/TreatmentCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { treatments } from "@/content/treatments";

/**
 * Services overview grid (PRD F1/F2). Optionally limited (home) or full
 * (treatments hub). Staggered reveal for an elegant entrance.
 */
export default function ServicesGrid({
  limit,
  heading = true,
  showCta = true,
}) {
  const items = limit ? treatments.slice(0, limit) : treatments;

  return (
    <section className="section-pad bg-bg">
      <Container>
        {heading ? (
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Treatments"
              title="Tailored treatments for radiant, healthy skin"
              lead="From a single glow-boosting facial to long-term laser and restoration plans — every treatment is doctor-led and personalized to you."
            />
          </ScrollReveal>
        ) : null}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((treatment, i) => (
            <ScrollReveal key={treatment.slug} delay={(i % 3) * 90}>
              <TreatmentCard treatment={treatment} priority={i < 3 && !heading} />
            </ScrollReveal>
          ))}
        </div>

        {showCta && limit ? (
          <div className="mt-12 text-center">
            <Button href="/treatments" variant="ghost" size="lg">
              View all treatments
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
