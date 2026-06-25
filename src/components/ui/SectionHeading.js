import { cn } from "@/lib/utils";

/**
 * Consistent section heading block: eyebrow + title + gold rule + optional
 * lead paragraph. Centered or left-aligned. Uses semantic heading level.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  as: Tag = "h2",
  className,
  titleClassName,
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag
        className={cn(
          "text-balance text-[clamp(1.85rem,4.5vw,3rem)] leading-tight",
          titleClassName
        )}
      >
        {title}
      </Tag>
      <span className={cn("gold-rule", centered && "mx-auto")} aria-hidden="true" />
      {lead ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-[1.05rem] text-muted",
            centered ? "mx-auto" : ""
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
