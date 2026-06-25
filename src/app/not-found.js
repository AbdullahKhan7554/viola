import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/TrackedCTA";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-bg pt-24">
      <Container className="text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-[clamp(2.5rem,8vw,5rem)]">Page not found</h1>
        <span className="gold-rule mx-auto mt-5" aria-hidden="true" />
        <p className="mx-auto mt-5 max-w-md text-muted">
          The page you’re looking for doesn’t exist or has moved. Let’s get you
          back to glowing skin.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <WhatsAppButton size="lg" variant="ghost" location="404">
            Book on WhatsApp
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
