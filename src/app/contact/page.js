import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/sections/PageHero";
import MapSection from "@/components/sections/MapSection";
import LeadForm from "@/components/forms/LeadForm";
import { WhatsAppButton, CallButton } from "@/components/ui/TrackedCTA";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Contact & Book | Voila Skincare, Wapda Town Lahore" },
  description:
    "Book your consultation at Voila in Wapda Town, Lahore. WhatsApp, call, or request online. Open daily from 4 PM. Find directions & timings here.",
  alternates: { canonical: "/contact" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <PageHero
        eyebrow="Contact & Book"
        title="Let's get you booked in"
        lead="Tell us what you're looking for and we'll help you choose the right treatment. For the fastest response, message us on WhatsApp."
        breadcrumbs={crumbs}
      />

      <section className="section-pad bg-bg">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Contact methods */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl">Get in touch</h2>
              <span className="gold-rule mt-4" aria-hidden="true" />
              <p className="mt-5 text-muted">
                We’re an afternoon &amp; evening clinic — {BUSINESS.hours.displayLong.toLowerCase()}.
                Reach out any time and we’ll reply as soon as we can.
              </p>
            </ScrollReveal>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: "whatsapp",
                  label: "WhatsApp",
                  value: BUSINESS.phoneDisplay,
                  hint: "Fastest way to book",
                },
                {
                  icon: "phone",
                  label: "Call us",
                  value: BUSINESS.phoneDisplay,
                  hint: "During clinic hours",
                },
                {
                  icon: "mapPin",
                  label: "Visit",
                  value: `${BUSINESS.address.street}, ${BUSINESS.address.city}`,
                  hint: BUSINESS.hours.displayShort,
                },
                {
                  icon: "instagram",
                  label: "Instagram",
                  value: `@${BUSINESS.instagram}`,
                  hint: "See our latest work",
                },
              ].map((item, i) => (
                <ScrollReveal
                  as="div"
                  key={item.label}
                  delay={i * 70}
                  className="flex items-start gap-4 rounded-lg border border-line bg-surface p-5 shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      {item.label}
                    </p>
                    <p className="font-medium text-text">{item.value}</p>
                    <p className="text-sm text-muted">{item.hint}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg" location="contact_page">
                Book on WhatsApp
              </WhatsAppButton>
              <CallButton size="lg" location="contact_page" />
            </ScrollReveal>
          </div>

          {/* Lead form */}
          <ScrollReveal>
            <h2 className="mb-6 text-3xl">Request an appointment</h2>
            <LeadForm />
          </ScrollReveal>
        </Container>
      </section>

      <MapSection />
    </>
  );
}
