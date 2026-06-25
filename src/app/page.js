import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutTeaser from "@/components/sections/AboutTeaser";
import Testimonials from "@/components/sections/Testimonials";
import JournalTeaser from "@/components/sections/JournalTeaser";
import MapSection from "@/components/sections/MapSection";
import CTABand from "@/components/sections/CTABand";

/**
 * Home page (PRD F1). Composition of page sections — every section keeps
 * booking within one tap (sticky FAB + repeated CTA bands).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid limit={6} />
      <AboutTeaser />
      <Testimonials limit={3} />
      <JournalTeaser limit={3} />
      <MapSection />
      <CTABand location="home_footer_cta" />
    </>
  );
}
