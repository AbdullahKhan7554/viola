import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { formatDate } from "@/lib/utils";
import TiltCard from "@/components/motion/TiltCard";

/** Skin Journal post card for the blog index — 3D tilt + gold sheen on hover. */
export default function PostCard({ post, priority = false }) {
  const href = `/blog/${post.slug}`;
  return (
   <TiltCard className="group h-full rounded-lg">
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-surface shadow-soft transition-shadow duration-300 hover:shadow-elevated">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-bg/90 px-3 py-1 text-xs font-semibold text-primary shadow-soft backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-muted">
          <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-3 text-xl leading-snug">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent-dark">
          Read the guide
          <Icon
            name="arrowRight"
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
      <Link href={href} className="absolute inset-0 z-20" aria-label={post.title} />
    </article>
   </TiltCard>
  );
}
