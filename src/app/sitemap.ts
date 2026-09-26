import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getAllGuideSlugs } from "@/lib/guide";
import { absoluteUrl, SITE_URL } from "@/lib/seo";
import type { NavHref } from "@/lib/site-nav";

interface PageConfig {
  path: NavHref | "/";
  changeFrequency: "daily" | "weekly" | "monthly";
  priority: number;
}

const staticPages: PageConfig[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/download", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/features/automatic-time-tracking", changeFrequency: "monthly", priority: 0.8 },
  { path: "/features/focus-sessions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/features/timecards", changeFrequency: "monthly", priority: 0.8 },
  { path: "/use-cases/freelancers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/use-cases/developers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/use-cases/remote-workers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/use-cases/students", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare/rize", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare/rescuetime", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare/toggl", changeFrequency: "monthly", priority: 0.7 },
  { path: "/alternatives", changeFrequency: "monthly", priority: 0.7 },
  { path: "/guide", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/changelog", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
];

function localizedPair(en: string, tr: string, entry: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">) {
  const alternates = { languages: { en, tr, "x-default": en } };
  return [
    { url: en, alternates, ...entry },
    { url: tr, alternates, ...entry },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticPages.flatMap((page) =>
    localizedPair(absoluteUrl(page.path, "en"), absoluteUrl(page.path, "tr"), {
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  );

  const guideEntries = getAllGuideSlugs("en").flatMap((slug) =>
    localizedPair(`${SITE_URL}/guide/${slug}`, `${SITE_URL}/tr/rehber/${slug}`, {
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    })
  );

  // Blog slugs differ per language, so each post stands alone without hreflang pairs.
  const blogEntries: MetadataRoute.Sitemap = (["en", "tr"] as const).flatMap((locale) =>
    getBlogPosts(locale).map((post) => ({
      url: locale === "en" ? `${SITE_URL}/blog/${post.slug}` : `${SITE_URL}/tr/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  return [...staticEntries, ...guideEntries, ...blogEntries];
}
