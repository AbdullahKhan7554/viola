import { SITE_URL } from "@/lib/constants";
import { treatments } from "@/content/treatments";
import { posts } from "@/content/posts";

/** Auto-generated XML sitemap (PRD §11.5). Excludes utility/admin pages. */
export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/treatments", priority: 0.9, changeFrequency: "monthly" },
    { path: "/bridal", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
    { path: "/reviews", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: `${SITE_URL}/treatments/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified || p.datePublished),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...postRoutes];
}
