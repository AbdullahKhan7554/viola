import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTABand from "@/components/sections/CTABand";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Skin Treatments in Lahore | HydraFacial, Laser & More" },
  description:
    "Explore Voila's doctor-led treatments in Wapda Town, Lahore — HydraFacial, laser, BB Glow, microneedling, PRP, peels & more. 5.0★. Book today.",
  alternates: { canonical: "/treatments" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Treatments", path: "/treatments" },
];

export default function TreatmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <PageHero
        eyebrow="Our Treatments"
        title="Doctor-led treatments, personalized to your skin"
        lead="Every treatment at Voila is performed with medical credibility, high hygiene standards and genuine warmth — for results you can see and feel."
        breadcrumbs={crumbs}
      />
      <ServicesGrid heading={false} showCta={false} />
      <CTABand location="treatments_cta" />
    </>
  );
}
