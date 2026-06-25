import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { reviews } from "@/content/reviews";

/** Testimonials section (PRD F5). */
export default function Testimonials({ limit = 3, showCta = true }) {
  const items = reviews.slice(0, limit);
  return (
    <section className="section-pad bg-bg">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Loved by our clients"
            title="A reputation built on results & care"
            lead="Real words from real visits — the reason so much of Voila's growth comes through word of mouth."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((review, i) => (
            <ScrollReveal key={review.author} delay={(i % 3) * 90}>
              <ReviewCard review={review} />
            </ScrollReveal>
          ))}
        </div>

        {showCta ? (
          <div className="mt-12 text-center">
            <Button href="/reviews" variant="ghost" size="lg">
              Read all reviews
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
