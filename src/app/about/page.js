import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import StatsBar from "@/components/sections/StatsBar";
import CTABand from "@/components/sections/CTABand";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema, personSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Meet Dr. Beenish Jahangir | Voila Skincare Lahore" },
  description:
    "Voila is led by Dr. Beenish Jahangir — doctor-led, hygienic, personalised skincare in Wapda Town, Lahore. The story, philosophy & 5.0★ care.",
  alternates: { canonical: "/about" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const values = [
  {
    icon: "shield",
    title: "Medical credibility",
    text: "Doctor-led treatments and strict hygiene standards mean you're always in safe, expert hands.",
  },
  {
    icon: "heart",
    title: "Personalized care",
    text: "No two skins are alike. Every consultation is unhurried and every plan is built around you.",
  },
  {
    icon: "flower",
    title: "A calming sanctuary",
    text: "A homely, relaxing ambiance — luxury you feel from the moment you walk through the door.",
  },
  {
    icon: "sparkle",
    title: "Visible results",
    text: "We focus on outcomes you can see, which is why our clients return and refer their friends.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(personSchema())}
      />
      <PageHero
        eyebrow="About Voila"
        title={`Skincare, perfected by ${BUSINESS.practitioner}`}
        lead="Voila Luxury Skincare Aesthetics blends medical expertise with the warmth of a personal consultation — a different kind of clinic in the heart of Wapda Town, Lahore."
        breadcrumbs={crumbs}
      />

      {/* Founder intro */}
      <section className="section-pad bg-bg">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-elevated">
              <Image
                src="/images/treatment-room-1.webp"
                alt="Treatment room with natural light at Voila Luxury Skincare, Lahore"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="Where luxury meets genuine care"
              />
            </ScrollReveal>
            <ScrollReveal className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
              <p>
                Voila was founded by {BUSINESS.practitioner} on a simple
                conviction: premium aesthetic results and real, personal warmth
                belong together. Too often, clients are made to choose between
                cold clinical settings and unqualified salons — Voila is neither.
              </p>
              <p>
                As a doctor-led clinic, every treatment is grounded in safety,
                hygiene and clinical knowledge. As a luxury sanctuary, every
                visit is calm, considered and tailored to you — the kind of
                experience our clients describe as &ldquo;homely&rdquo; and
                &ldquo;relaxing.&rdquo;
              </p>
              <p>
                That balance has earned Voila a flawless{" "}
                <strong className="text-text">
                  {BUSINESS.rating.value.toFixed(1)} rating across{" "}
                  {BUSINESS.rating.count} reviews
                </strong>{" "}
                — built almost entirely on word of mouth.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <StatsBar />

      {/* Values */}
      <section className="section-pad bg-soft/40">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="The Voila difference"
              lead="Four principles guide everything we do — from your first message to your final result."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal
                key={v.title}
                delay={(i % 4) * 80}
                className="rounded-lg bg-surface p-7 shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="mt-5 text-xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Experience Voila for yourself"
        location="about_cta"
      />
    </>
  );
}
