import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

const BASE_URL = "https://focusnow.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/download",
    "/pricing",
    "/about",
    "/privacy",
    "/changelog",
    "/blog",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) => [
    {
      url: `${BASE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}${page}`,
          tr: `${BASE_URL}/tr${page}`,
        },
      },
    },
  ]);

  const enPosts = getBlogPosts("en");
  const trPosts = getBlogPosts("tr");

  const blogEntries: MetadataRoute.Sitemap = enPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const trBlogEntries: MetadataRoute.Sitemap = trPosts.map((post) => ({
    url: `${BASE_URL}/tr/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...trBlogEntries];
}
