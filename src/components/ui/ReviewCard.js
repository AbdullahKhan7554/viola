import StarRating from "./StarRating";
import TiltCard from "@/components/motion/TiltCard";

/** Testimonial card (PRD §17.4) with a subtle 3D tilt + gold sheen on hover. */
export default function ReviewCard({ review }) {
  return (
   <TiltCard className="group h-full rounded-lg" max={5}>
    <figure className="flex h-full flex-col rounded-lg border border-line bg-surface p-7 shadow-soft transition-shadow duration-300 hover:shadow-elevated">
      <StarRating value={review.rating} size={18} />
      <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-text">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-full bg-soft font-serif text-lg font-semibold text-primary"
          aria-hidden="true"
        >
          {review.author.charAt(0)}
        </span>
        <span>
          <span className="block font-medium text-text">{review.author}</span>
          {review.treatment ? (
            <span className="block text-sm text-muted">{review.treatment}</span>
          ) : null}
        </span>
      </figcaption>
    </figure>
   </TiltCard>
  );
}
