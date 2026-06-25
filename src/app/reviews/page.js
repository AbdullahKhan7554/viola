import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import StarRating from "@/components/ui/StarRating";
import ReviewCard from "@/components/ui/ReviewCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import { reviews } from "@/content/reviews";
import { BUSINESS } from "@/lib/constants";
import { reviewsSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "Reviews — 5.0★ from 113 Happy Clients",
  description:
    "Read why clients rate Voila Luxury Skincare 5.0 across 113 Google reviews — exceptional, hygienic, relaxing and doctor-led skincare in Lahore.",
  alternates: { canonical: "/reviews" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
];

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(reviewsSchema(reviews))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <PageHero
        eyebrow="Client Reviews"
        title="A perfect 5.0, earned one client at a time"
        lead="Our reputation is built on real experiences. Here's what visitors say about their time at Voila."
        breadcrumbs={crumbs}
      />

      {/* Rating summary */}
      <section className="bg-bg pt-12">
        <Container>
          <ScrollReveal className="mx-auto flex max-w-md flex-col items-center rounded-lg border border-line bg-surface p-8 text-center shadow-soft">
            <p className="font-serif text-6xl font-bold text-primary">
              {BUSINESS.rating.value.toFixed(1)}
            </p>
            <StarRating value={5} size={24} className="mt-3" />
            <p className="mt-3 text-muted">
              Based on {BUSINESS.rating.count} Google reviews
            </p>
            <Button
              href={BUSINESS.googleReviewsUrl}
              variant="ghost"
              size="md"
              className="mt-5"
            >
              <Icon name="star" size={18} className="text-accent" />
              View on Google
            </Button>
          </ScrollReveal>
        </Container>
      </section>

      {/* All reviews */}
      <section className="section-pad bg-bg">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.author} delay={(i % 3) * 90}>
                <ReviewCard review={review} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand title="Join our happy clients" location="reviews_cta" />
    </>
  );
}
