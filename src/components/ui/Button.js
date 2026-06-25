import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Polymorphic button/link primitive (PRD §17.4).
 * Renders a Next <Link> for internal hrefs, an <a> for external,
 * or a <button> otherwise. Presentational & server-safe.
 *
 * Variants: primary | secondary | ghost | whatsapp
 * Sizes: sm | md | lg
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none select-none";

const variants = {
  primary:
    "bg-primary text-white shadow-soft hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-elevated",
  secondary:
    "bg-soft text-primary-dark hover:bg-secondary hover:text-white hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-primary border border-line hover:border-accent hover:text-accent-dark",
  whatsapp:
    "bg-success text-white shadow-soft hover:bg-success-dark hover:-translate-y-0.5 hover:shadow-elevated",
  outlineLight:
    "bg-white/10 text-white border border-white/40 backdrop-blur-sm hover:bg-white hover:text-primary",
};

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[0.95rem]",
  lg: "h-14 px-9 text-base min-w-[3.5rem]", // tap target ≥44px
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  type = "button",
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
