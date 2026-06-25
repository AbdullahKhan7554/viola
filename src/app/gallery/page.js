import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import Gallery from "@/components/gallery/Gallery";
import BeforeAfterSlider from "@/components/gallery/BeforeAfterSlider";
import { galleryImages, beforeAfter } from "@/content/gallery";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "Results & Gallery — Inside Voila Lahore",
  description:
    "Step inside Voila Luxury Skincare Aesthetics in Wapda Town, Lahore — our serene clinic, treatment rooms and real results.",
  alternates: { canonical: "/gallery" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Results", path: "/gallery" },
];

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <PageHero
        eyebrow="Results & Gallery"
        title="A glimpse inside Voila"
        lead="Our calm, hygienic and beautifully appointed space — and the results that keep our clients coming back."
        breadcrumbs={crumbs}
      />

      {/* Before / After */}
      <section className="section-pad bg-bg">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Real transformations"
              title="See the difference"
              lead="Drag the slider to compare before and after. Results vary by individual and treatment plan."
            />
          </ScrollReveal>
          <div className="mt-10 space-y-12">
            {beforeAfter.map((pair) => (
              <ScrollReveal key={pair.label}>
                <BeforeAfterSlider pair={pair} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Clinic gallery */}
      <section className="section-pad bg-soft/40">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our space"
              title="The Voila experience"
            />
          </ScrollReveal>
          <ScrollReveal className="mt-12">
            <Gallery images={galleryImages} />
          </ScrollReveal>
        </Container>
      </section>

      <CTABand title="Come and experience it in person" location="gallery_cta" />
    </>
  );
}
