import Link from "next/link";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

/**
 * Compact hero band for inner pages. Includes an accessible breadcrumb
 * trail (mirrors BreadcrumbList schema on the page).
 */
export default function PageHero({ eyebrow, title, lead, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-primary pb-14 pt-32 text-white">
      {/* Soft decorative gradient */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
      </div>

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

        {eyebrow ? <span className="eyebrow !text-accent">{eyebrow}</span> : null}
        <h1 className="mt-3 max-w-3xl text-white text-[clamp(2.1rem,5vw,3.4rem)]">
          {title}
        </h1>
        <span className="gold-rule mt-5" aria-hidden="true" />
        {lead ? (
          <p className="mt-5 max-w-2xl text-pretty text-lg text-white/85">{lead}</p>
        ) : null}
      </Container>
    </section>
  );
}
