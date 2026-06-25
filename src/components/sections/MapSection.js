import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

const fullAddress = `${BUSINESS.address.street}, ${BUSINESS.address.city} ${BUSINESS.address.postalCode}, ${BUSINESS.address.countryName}`;
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `Voila Luxury Skincare Aesthetics, ${fullAddress}`
)}&output=embed`;

/**
 * Location & directions (PRD F6/F22). Map iframe is lazy-loaded so it never
 * blocks paint; address/hours rendered as real text for SEO & a11y.
 */
export default function MapSection({ compact = false }) {
  return (
    <section className={compact ? "" : "section-pad bg-bg"}>
      <Container className={compact ? "" : ""}>
        <div className="grid overflow-hidden rounded-lg border border-line bg-surface shadow-soft lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10">
            <div>
              <span className="eyebrow">Find us</span>
              <h2 className="mt-3 text-3xl">Visit Voila in Wapda Town</h2>
            </div>
            <ul className="space-y-5 text-[0.98rem]">
              <li className="flex gap-3">
                <Icon name="mapPin" size={22} className="mt-0.5 shrink-0 text-accent" />
                <address className="not-italic text-text">{fullAddress}</address>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" size={22} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-text">{BUSINESS.hours.displayLong}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" size={22} className="mt-0.5 shrink-0 text-accent" />
                <a
                  href={`tel:+${BUSINESS.phoneE164}`}
                  className="text-text hover:text-primary"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button href={BUSINESS.googleMapsUrl} variant="primary" size="md">
                <Icon name="mapPin" size={18} />
                Get directions
              </Button>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[440px]">
            <iframe
              title={`Map showing ${BUSINESS.name} location in Wapda Town, Lahore`}
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
