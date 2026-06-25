import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

/**
 * Treatment card (PRD §17.4). Used on the home grid and treatments hub.
 * Image uses `fill` inside a fixed aspect ratio box → zero layout shift.
 */
export default function TreatmentCard({ treatment, priority = false }) {
  const href = `/treatments/${treatment.slug}`;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={treatment.image}
          alt={treatment.imageAlt || `${treatment.name} at Voila Luxury Skincare, Wapda Town, Lahore`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg/90 text-primary shadow-soft backdrop-blur">
          <Icon name={treatment.icon} size={20} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="eyebrow mb-2">{treatment.category}</span>
        <h3 className="text-xl">{treatment.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {treatment.summary}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent-dark"
          aria-label={`Learn more about ${treatment.name}`}
        >
          Explore treatment
          <Icon
            name="arrowRight"
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
      {/* Full-card click target for accessibility & large tap area */}
      <Link href={href} className="absolute inset-0" aria-hidden="true" tabIndex={-1}>
        <span className="sr-only">{treatment.name}</span>
      </Link>
    </article>
  );
}
