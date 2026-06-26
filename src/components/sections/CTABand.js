import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WhatsAppButton, CallButton } from "@/components/ui/TrackedCTA";
import AmbientBackground from "@/components/motion/AmbientBackground";
import Magnetic from "@/components/motion/Magnetic";

/**
 * Repeatable conversion CTA band (PRD §10.4 — "Ready to glow? Book now").
 * Placed near every decision point. `location` tags the GA4 event source.
 */
export default function CTABand({
  title = "Ready to glow? Book your visit",
  text = "Tell us what you're looking for and we'll help you choose the perfect treatment. Booking takes one tap on WhatsApp.",
  location = "cta_band",
}) {
  return (
    <section className="section-pad relative overflow-hidden bg-primary text-white">
      <AmbientBackground variant="blobs" tone="dark" />
      <div className="noise-overlay" aria-hidden="true" />
      <Container className="relative">
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="eyebrow !text-accent">Book your consultation</span>
          <h2 className="mt-4 text-white text-[clamp(1.8rem,4.5vw,2.8rem)]">
            {title}
          </h2>
          <span className="gold-rule mx-auto mt-4" aria-hidden="true" />
          <p className="mt-5 max-w-xl text-pretty text-white/85">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Magnetic strength={0.4} className="inline-flex">
              <WhatsAppButton size="lg" location={location} className="btn-shine">
                Book on WhatsApp
              </WhatsAppButton>
            </Magnetic>
            <Magnetic strength={0.4} className="inline-flex">
              <CallButton size="lg" variant="outlineLight" location={location}>
                Call the clinic
              </CallButton>
            </Magnetic>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
