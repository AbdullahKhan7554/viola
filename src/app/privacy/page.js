import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Voila Luxury Skincare Aesthetics collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Your privacy matters to us. This policy explains what we collect and how we use it."
        breadcrumbs={crumbs}
      />
      <section className="section-pad bg-bg">
        <Container className="max-w-3xl space-y-8 text-muted">
          <div>
            <h2 className="text-2xl text-primary">Information we collect</h2>
            <p className="mt-3">
              When you submit our enquiry form or contact us, we collect the
              details you provide — such as your name, phone number, optional
              email, treatment of interest and any message. We do not collect
              sensitive medical records through this website.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-primary">How we use your information</h2>
            <p className="mt-3">
              We use your details solely to respond to your enquiry, arrange
              appointments and provide the services you request. We do not sell
              or share your personal information with third parties for
              marketing.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-primary">Analytics &amp; cookies</h2>
            <p className="mt-3">
              We may use privacy-respecting analytics to understand how visitors
              use our site and improve it. Analytics data is aggregated and does
              not identify you personally. You can control cookies through your
              browser settings.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-primary">Data security</h2>
            <p className="mt-3">
              Our site is served over HTTPS and we apply reasonable measures to
              protect your information. No method of transmission is 100% secure,
              but we work to safeguard your data.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-primary">Contact</h2>
            <p className="mt-3">
              For any privacy questions or to request deletion of your details,
              contact us at{" "}
              <a href={`tel:+${BUSINESS.phoneE164}`} className="text-primary underline">
                {BUSINESS.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
