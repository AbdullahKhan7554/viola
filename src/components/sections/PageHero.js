import Link from "next/link";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import AmbientBackground from "@/components/motion/AmbientBackground";
import TextReveal from "@/components/motion/TextReveal";

/**
 * Compact hero band for inner pages. Includes an accessible breadcrumb
 * trail (mirrors BreadcrumbList schema on the page). The title performs a
 * cinematic word-by-word reveal over a softly drifting ambient backdrop, so
 * every page opens with the same premium signature as the home hero.
 */
export default function PageHero({ eyebrow, title, lead, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-primary pb-14 pt-32 text-white">
      {/* Drifting colour blobs + faint film grain. */}
      <AmbientBackground variant="blobs" tone="dark" className="opacity-70" />
      <div className="noise-overlay" aria-hidden="true" />

      <Container className="relative">
        {breadcrumbs.length ? (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              {breadcrumbs.map((c, i) => {
                const last = i === breadcrumbs.length - 1;
                return (
                  <li key={c.path} className="flex items-center gap-1.5">
                    {last ? (
                      <span aria-current="page" className="text-white">
                        {c.name}
                      </span>
                    ) : (
                      <Link href={c.path} className="hover:text-accent">
                        {c.name}
                      </Link>
                    )}
                    {!last ? (
                      <Icon name="chevronRight" size={14} className="text-white/40" />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <span className="eyebrow animate-fade-up !text-accent" style={{ animationDelay: "0.05s" }}>
            {eyebrow}
          </span>
        ) : null}
        <TextReveal
          as="h1"
          text={title}
          trigger="view"
          className="mt-3 block max-w-3xl text-white text-[clamp(2.1rem,5vw,3.4rem)]"
        />
        <span
          className="gold-rule animate-fade-up mt-5"
          style={{ animationDelay: "0.25s" }}
          aria-hidden="true"
        />
        {lead ? (
          <p
            className="animate-fade-up mt-5 max-w-2xl text-pretty text-lg text-white/85"
            style={{ animationDelay: "0.32s" }}
          >
            {lead}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
