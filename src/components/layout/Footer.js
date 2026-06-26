import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import StarRating from "@/components/ui/StarRating";
import Container from "@/components/ui/Container";
import { BUSINESS, NAV_LINKS, whatsappLink, telLink } from "@/lib/constants";
import { treatments } from "@/content/treatments";

/** Site footer (PRD F18) with NAP, hours, social and quick links. */
export default function Footer() {
  const year = new Date().getFullYear();
  const { address } = BUSINESS;

  return (
    <footer className="mt-auto bg-primary text-white/80">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Doctor-led luxury skincare in Wapda Town, Lahore — personalized
            treatments with visible results, every time.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <StarRating value={5} size={16} />
            <span className="text-sm text-white/80">
              {BUSINESS.rating.value.toFixed(1)} · {BUSINESS.rating.count} reviews
            </span>
          </div>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Voila on Instagram"
            className="glow-gold group mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Icon
              name="instagram"
              size={20}
              className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[8deg] group-hover:scale-110"
            />
          </a>
        </div>

        {/* Treatments */}
        <nav aria-label="Treatments">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Treatments
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {treatments.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Explore */}
        <nav aria-label="Explore">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-white/75 transition-colors hover:text-white"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Visit Us
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="mapPin" size={18} className="mt-0.5 shrink-0 text-accent" />
              <address className="not-italic text-white/75">
                {address.street},<br />
                {address.city} {address.postalCode}, {address.countryName}
              </address>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-white/75">{BUSINESS.hours.displayLong}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-accent" />
              <a href={telLink()} className="text-white/75 hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="whatsapp" size={18} className="mt-0.5 shrink-0 text-accent" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white"
              >
                Message on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
