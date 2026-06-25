import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import { WhatsAppButton } from "@/components/ui/TrackedCTA";
import { bridalTimeline, packages, bridalFaqs } from "@/content/offers";
import { SITE_URL } from "@/lib/constants";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Bridal Skin Packages in Lahore | Voila Wedding Glow" },
  description:
    "Doctor-led bridal & pre-wedding skin packages in Wapda Town, Lahore — HydraFacial, BB Glow, peels & more for camera-ready glow. By Dr. Beenish. Book now.",
  alternates: { canonical: "/bridal" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Bridal & Offers", path: "/bridal" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bridal & Event Skincare Packages",
  serviceType: "Bridal skincare",
  description:
    "Tailored bridal and pre-wedding skin packages — HydraFacial, BB Glow, microneedling, peels and more — for camera-ready glow, at Voila in Wapda Town, Lahore.",
  url: `${SITE_URL}/bridal`,
  areaServed: { "@type": "City", name: "Lahore" },
  provider: { "@id": `${SITE_URL}/#business` },
};

export default function BridalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(bridalFaqs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />

      <PageHero
        eyebrow="Bridal & Events"
        title="Your wedding glow, planned to perfection"
        lead="Doctor-led bridal skin packages designed around your big day — so you walk in with your most radiant, camera-ready skin. Tailored by Dr. Beenish in Wapda Town, Lahore."
        breadcrumbs={crumbs}
      />

      {/* Intro */}
      <section className="section-pad bg-bg">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-elevated">
              <Image
                src="/images/treatments/bb-glow.webp"
                alt="Radiant, camera-ready bridal skin after BB Glow at Voila, Wapda Town, Lahore"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <SectionHeading
                align="left"
                eyebrow="Why plan ahead"
                title="Glowing skin isn't rushed — it's planned"
              />
            </ScrollReveal>
            <ScrollReveal className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
              <p>
                The most radiant bridal skin doesn’t come from one treatment the
                week before — it’s built over months. Starting early lets us treat
                the deeper work first and layer in glow gradually, so your skin
                peaks exactly when it matters.
              </p>
              <p>
                As a doctor-led clinic, every bridal plan begins with a real
                assessment of your skin, then a tailored timeline of treatments —
                never a fixed menu. The result: an even, luminous, camera-ready
                complexion that looks like <em>you</em>, at your best.
              </p>
            </ScrollReveal>
            <ScrollReveal className="mt-8">
              <WhatsAppButton size="lg" location="bridal_intro">
                Plan your bridal glow
              </WhatsAppButton>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-soft/40">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="The bridal timeline"
              title="Your countdown to glowing"
              lead="A typical journey from first consultation to the wedding week. We tailor the exact plan to your skin and your date."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bridalTimeline.map((step, i) => (
              <ScrollReveal
                as="div"
                key={step.when}
                delay={(i % 4) * 90}
                className="relative flex flex-col rounded-lg bg-surface p-6 shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-serif font-semibold text-white">
                  {i + 1}
                </span>
                <span className="eyebrow mt-4">{step.when}</span>
                <h3 className="mt-1 text-lg">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {step.detail}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {step.treatments.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-primary-dark"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="section-pad bg-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Choose your package"
              title="Bridal & event packages"
              lead="Every package is tailored at consultation. Here's where most brides begin."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {packages.map((pkg, i) => (
              <ScrollReveal
                as="div"
                key={pkg.slug}
                delay={(i % 2) * 90}
                className={`relative flex flex-col rounded-lg border p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${
                  pkg.featured
                    ? "border-accent bg-surface"
                    : "border-line bg-surface"
                }`}
              >
                {pkg.featured ? (
                  <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                ) : null}
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Icon name={pkg.icon} size={22} />
                </span>
                <h3 className="mt-5 text-2xl">{pkg.name}</h3>
                <p className="mt-1 text-sm text-accent-dark">{pkg.tagline}</p>
                <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
                  <div>
                    <dt className="inline font-semibold text-text">Duration: </dt>
                    <dd className="inline">{pkg.duration}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-sm text-muted">{pkg.forWho}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-text">
                      <Icon name="check" size={18} className="mt-0.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <WhatsAppButton
                    size="md"
                    location={`bridal_${pkg.slug}`}
                    message={`Hi Voila! I'd like to know more about the "${pkg.name}" bridal package.`}
                    className="w-full"
                  >
                    Enquire about this package
                  </WhatsAppButton>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Pricing is tailored to your skin and timeline, confirmed at
            consultation.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-soft/40">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <SectionHeading eyebrow="Good to know" title="Bridal skincare FAQs" />
          </ScrollReveal>
          <ScrollReveal className="mt-8">
            <Accordion items={bridalFaqs} />
          </ScrollReveal>
          <ScrollReveal className="mt-10 text-center">
            <Button href="/blog/pre-wedding-skin-timeline" variant="ghost" size="md">
              Read: Pre-wedding skin timeline — 6 months to glowing
            </Button>
          </ScrollReveal>
        </Container>
      </section>

      <CTABand
        title="Let's plan your wedding glow"
        text="Tell us your wedding date and skin goals on WhatsApp — we'll design a bridal plan that has you glowing on the day."
        location="bridal_footer_cta"
      />
    </>
  );
}
