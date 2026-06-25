import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PostCard from "@/components/ui/PostCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { getRecentPosts } from "@/content/posts";

/** Home teaser for the Skin Journal (internal linking + topical authority). */
export default function JournalTeaser({ limit = 3 }) {
  const posts = getRecentPosts(limit);
  if (!posts.length) return null;

  return (
    <section className="section-pad bg-soft/40">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Skin Journal"
            title="Expert skincare, explained simply"
            lead="Honest, doctor-led guides to help you understand your treatments and care for your skin with confidence."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={(i % 3) * 90}>
              <PostCard post={post} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/blog" variant="ghost" size="lg">
            Read the Skin Journal
          </Button>
        </div>
      </Container>
    </section>
  );
}
