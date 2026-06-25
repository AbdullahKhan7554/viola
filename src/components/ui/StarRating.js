import Icon from "./Icon";

/** Accessible 5-star rating. Decorative stars + a screen-reader label. */
export default function StarRating({ value = 5, size = 18, className }) {
  return (
    <span className={className} role="img" aria-label={`${value} out of 5 stars`}>
      <span className="inline-flex gap-0.5 text-accent" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            name="star"
            size={size}
            className={i < Math.round(value) ? "text-accent" : "text-line"}
          />
        ))}
      </span>
    </span>
  );
}
