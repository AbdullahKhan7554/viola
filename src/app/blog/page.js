import Container from "@/components/ui/Container";
import PostCard from "@/components/ui/PostCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import { getRecentPosts } from "@/content/posts";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Skin Journal | Expert Skincare Guides — Voila Lahore" },
  description:
    "Doctor-led skincare guides from Voila, Lahore — laser, HydraFacial, acne, pigmentation & more. Honest, expert advice from Dr. Beenish Jahangir.",
  alternates: { canonical: "/blog" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Skin Journal", path: "/blog" },
];

export default function BlogPage() {
  const posts = getRecentPosts();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <PageHero
        eyebrow="Skin Journal"
        title="Expert skincare, explained simply"
        lead="Honest, doctor-led guides to help you choose the right treatment and care for your skin with confidence — written by Dr. Beenish Jahangir."
        breadcrumbs={crumbs}
      />

      <section className="section-pad bg-bg">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={(i % 3) * 90}>
                <PostCard post={post} priority={i < 3} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Have a question about your skin?"
        text="Our guides are a great start — but the best advice is personal. Ask Dr. Beenish on WhatsApp and we'll point you in the right direction."
        location="blog_cta"
      />
    </>
  );
}
