import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Accordion from "@/components/ui/Accordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TreatmentCard from "@/components/ui/TreatmentCard";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import { WhatsAppButton, CallButton } from "@/components/ui/TrackedCTA";
import TrackTreatmentView from "@/components/analytics/TrackView";
import {
  treatments,
  getTreatment,
  getRelatedTreatments,
} from "@/content/treatments";
import { whatsappLink } from "@/lib/constants";
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  jsonLd,
} from "@/lib/schema";

/* Pre-render all 6 treatment pages at build time (SSG). */
export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  const title = treatment.seoTitle || `${treatment.name} in Lahore`;
  const description =
    treatment.seoDescription ||
    `${treatment.summary} ${treatment.name} by Dr. Beenish at Voila, Wapda Town, Lahore. Book your session today.`;
  return {
    // Absolute title so the SEO-tuned title isn't appended with the template.
    title: { absolute: title },
    description,
    alternates: { canonical: `/treatments/${treatment.slug}` },
    openGraph: {
      title,
      description,
      images: [
        {
          url: treatment.image,
          width: 1000,
          height: 1200,
          alt: treatment.imageAlt || treatment.name,
        },
      ],
    },
  };
}

const factIcons = {
  duration: "clock",
  sessions: "sparkle",
  downtime: "heart",
  priceNote: "shield",
};

export default async function TreatmentDetailPage({ params }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const related = getRelatedTreatments(treatment.slug, 3);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    { name: treatment.name, path: `/treatments/${treatment.slug}` },
  ];

  const facts = [
    { key: "duration", label: "Duration", value: treatment.duration },
    { key: "sessions", label: "Sessions", value: treatment.sessions },
    { key: "downtime", label: "Downtime", value: treatment.downtime },
    { key: "priceNote", label: "Pricing", value: treatment.priceNote },
  ];

  return (
    <>
      <TrackTreatmentView slug={treatment.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(serviceSchema(treatment))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(treatment.faqs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />

      <PageHero
        eyebrow={treatment.category}
        title={`${treatment.name} in Lahore`}
        lead={treatment.summary}
        breadcrumbs={crumbs}
      />

      {/* Intro: image + quick facts + CTAs */}
      <section className="section-pad bg-bg">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-elevated">
              <Image
                src={treatment.image}
                alt={treatment.imageAlt || `${treatment.name} at Voila Luxury Skincare, Wapda Town, Lahore`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="text-3xl">About this treatment</h2>
              <span className="gold-rule mt-4" aria-hidden="true" />
              <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-muted">
                {treatment.description}
              </p>
            </ScrollReveal>

            {/* Quick facts */}
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {facts.map((f, i) => (
                <ScrollReveal
                  as="div"
                  key={f.key}
                  delay={i * 70}
                  className="rounded-md border border-line bg-surface p-4"
                >
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    <Icon name={factIcons[f.key]} size={16} className="text-accent" />
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 font-medium text-text">{f.value}</dd>
                </ScrollReveal>
              ))}
            </dl>

            {/* What affects your price (captures "price/cost in Lahore" intent
                while pricing stays consultation-based). */}
            {treatment.pricingFactors?.length ? (
              <ScrollReveal className="mt-6 rounded-md border border-line bg-surface p-5">
                <h2 className="flex items-center gap-2 text-base font-semibold text-text">
                  <Icon name="shield" size={18} className="text-accent" />
                  {treatment.name} pricing in Lahore — what affects your price
                </h2>
                <ul className="mt-3 space-y-2">
                  {treatment.pricingFactors.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-muted">
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted">
                  Your exact price is confirmed at consultation. Message us on
                  WhatsApp for current pricing.
                </p>
              </ScrollReveal>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                size="lg"
                location={`treatment_${treatment.slug}`}
                message={`Hi Voila! I'd like to book a ${treatment.name} session. Please share availability.`}
              >
                Book {treatment.name}
              </WhatsAppButton>
              <CallButton size="lg" location={`treatment_${treatment.slug}`} />
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits + Process */}
      <section className="section-pad bg-soft/40">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <h2 className="text-3xl">Key benefits</h2>
            <span className="gold-rule mt-4" aria-hidden="true" />
            <ul className="mt-7 space-y-4">
              {treatment.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                    <Icon name="check" size={16} />
                  </span>
                  <span className="text-text">{b}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl">What to expect</h2>
            <span className="gold-rule mt-4" aria-hidden="true" />
            <ol className="mt-7 space-y-6">
              {treatment.process.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-serif font-semibold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-text">
                      {step.title}
                    </span>
                    <span className="text-sm text-muted">{step.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </Container>
      </section>

      {/* Aftercare */}
      <section className="section-pad bg-bg">
        <Container>
          <ScrollReveal className="mx-auto max-w-3xl rounded-lg border border-line bg-surface p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-soft text-primary">
                <Icon name="leaf" size={22} />
              </span>
              <h2 className="text-2xl">Aftercare advice</h2>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {treatment.aftercare.map((a) => (
                <li key={a} className="flex gap-2.5 text-sm text-muted">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-soft/40">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Good to know"
              title={`${treatment.name} — your questions answered`}
            />
          </ScrollReveal>
          <ScrollReveal className="mt-8">
            <Accordion items={treatment.faqs} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Related treatments */}
      <section className="section-pad bg-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="You may also like"
              title="Related treatments"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t, i) => (
              <ScrollReveal key={t.slug} delay={(i % 3) * 90}>
                <TreatmentCard treatment={t} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title={`Ready for your ${treatment.name}?`}
        location={`treatment_${treatment.slug}_cta`}
      />
    </>
  );
}
