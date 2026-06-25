import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms governing the use of the Voila Luxury Skincare Aesthetics website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms", path: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead="Please read these terms carefully before using our website."
        breadcrumbs={crumbs}
      />
      <section className="section-pad bg-bg">
        <Container className="max-w-3xl space-y-8 text-muted">
          <div>
            <h2 className="text-2xl text-primary">Use of this website</h2>
            <p className="mt-3">
              This website provides information about treatments and services
              offered at Voila Luxury Skincare Aesthetics. Content is for general
              information only and does not constitute medical advice. Always
              consult our practitioner for guidance specific to you.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-primary">Bookings &amp; enquiries</h2>
            <p className="mt-3">
              Submitting an enquiry does not guarantee an appointment; all
              bookings are subject to confirmation and availability. Treatment
              suitability is determined during consultation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-primary">Results disclaimer</h2>
            <p className="mt-3">
              Treatment outcomes vary from person to person. Any results,
              testimonials or imagery shown are illustrative and not a guarantee
              of the results you will experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-primary">Intellectual property</h2>
            <p className="mt-3">
              All content, branding and imagery on this site are the property of
              Voila Luxury Skincare Aesthetics and may not be reproduced without
              permission.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
