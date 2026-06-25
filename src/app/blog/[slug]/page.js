import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TreatmentCard from "@/components/ui/TreatmentCard";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import ArticleBody from "@/components/blog/ArticleBody";
import { posts, getPost } from "@/content/posts";
import { getTreatment } from "@/content/treatments";
import { BUSINESS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import {
  blogPostingSchema,
  faqSchema,
  breadcrumbSchema,
  jsonLd,
} from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: { absolute: post.seoTitle || post.title },
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [BUSINESS.practitioner],
      images: [{ url: post.image, width: 1200, height: 750, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = (post.relatedTreatments || [])
    .map((s) => getTreatment(s))
    .filter(Boolean);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Skin Journal", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(blogPostingSchema(post))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(post.faqs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={crumbs}
      />

      <article className="section-pad bg-bg">
        <Container className="max-w-3xl">
          {/* Meta + EEAT byline */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line pb-6 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-soft font-serif font-semibold text-primary">
                B
              </span>
              <span className="font-medium text-text">{BUSINESS.practitioner}</span>
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Hero image */}
          <ScrollReveal className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-elevated">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ArticleBody lead={post.lead} sections={post.sections} />

          {/* Contextual "see also" link (e.g. guide → bridal packages) */}
          {post.relatedLink ? (
            <ScrollReveal className="mt-8">
              <Button href={post.relatedLink.href} variant="secondary" size="md">
                {post.relatedLink.label}
                <Icon name="arrowRight" size={16} />
              </Button>
            </ScrollReveal>
          ) : null}

          {/* FAQ */}
          {post.faqs?.length ? (
            <section className="mt-12 border-t border-line pt-10">
              <h2 className="text-2xl">Frequently asked questions</h2>
              <span className="gold-rule mt-3" aria-hidden="true" />
              <Accordion items={post.faqs} className="mt-6" />
            </section>
          ) : null}

          {/* EEAT review line */}
          <p className="mt-10 flex items-center gap-2 rounded-md bg-soft/50 px-4 py-3 text-sm text-muted">
            <Icon name="shield" size={18} className="shrink-0 text-accent" />
            Medically reviewed by {BUSINESS.practitioner}, lead practitioner at
            Voila, Wapda Town, Lahore. Last updated {formatDate(post.dateModified)}.
          </p>
        </Container>
      </article>

      {/* Related treatments */}
      {related.length ? (
        <section className="section-pad bg-soft/40">
          <Container>
            <ScrollReveal>
              <SectionHeading eyebrow="Explore" title="Related treatments" />
            </ScrollReveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t, i) => (
                <ScrollReveal key={t.slug} delay={(i % 3) * 90}>
                  <TreatmentCard treatment={t} />
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTABand title="Ready to glow? Book your visit" location={`blog_${post.slug}_cta`} />
    </>
  );
}
