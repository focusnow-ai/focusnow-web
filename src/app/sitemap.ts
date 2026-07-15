import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getAllGuideSlugs } from "@/lib/guide";

const BASE_URL = "https://focusnow.ai";

// Localized paths for Turkish locale
const trPaths: Record<string, string> = {
  "": "",
  "/download": "/indir",
  "/pricing": "/fiyatlandirma",
  "/about": "/hakkimizda",
  "/privacy": "/gizlilik",
  "/terms": "/kullanim-kosullari",
  "/changelog": "/degisiklik-kaydi",
  "/contact": "/iletisim",
  "/blog": "/blog",
  "/use-cases/remote-workers": "/kullanim-alanlari/uzaktan-calisanlar",
  "/use-cases/students": "/kullanim-alanlari/ogrenciler",
  "/use-cases/freelancers": "/kullanim-alanlari/serbest-calisanlar",
  "/use-cases/developers": "/kullanim-alanlari/yazilimcilar",
  "/compare/rize": "/karsilastir/rize",
  "/guide": "/rehber",
};

interface PageConfig {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly";
  priority: number;
  trPriority: number;
}

const staticPages: PageConfig[] = [
  { path: "", changeFrequency: "daily", priority: 1, trPriority: 0.9 },
  { path: "/download", changeFrequency: "weekly", priority: 0.9, trPriority: 0.8 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.8, trPriority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6, trPriority: 0.5 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3, trPriority: 0.3 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3, trPriority: 0.3 },
  { path: "/changelog", changeFrequency: "weekly", priority: 0.5, trPriority: 0.4 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5, trPriority: 0.5 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7, trPriority: 0.7 },
  { path: "/use-cases/remote-workers", changeFrequency: "monthly", priority: 0.7, trPriority: 0.7 },
  { path: "/use-cases/students", changeFrequency: "monthly", priority: 0.7, trPriority: 0.8 },
  { path: "/use-cases/freelancers", changeFrequency: "monthly", priority: 0.7, trPriority: 0.7 },
  { path: "/use-cases/developers", changeFrequency: "monthly", priority: 0.7, trPriority: 0.7 },
  { path: "/compare/rize", changeFrequency: "monthly", priority: 0.7, trPriority: 0.5 },
  { path: "/guide", changeFrequency: "monthly", priority: 0.6, trPriority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) => {
    const trPath = trPaths[page.path] ?? page.path;
    return [
      {
        url: `${BASE_URL}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${BASE_URL}${page.path}`,
            tr: `${BASE_URL}/tr${trPath}`,
          },
        },
      },
      {
        url: `${BASE_URL}/tr${trPath}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.trPriority,
        alternates: {
          languages: {
            en: `${BASE_URL}${page.path}`,
            tr: `${BASE_URL}/tr${trPath}`,
          },
        },
      },
    ];
  });

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

  // Guide pages share the same slug across locales, so each entry can
  // carry proper hreflang alternates (unlike blog posts, whose slugs differ).
  const guideEntries: MetadataRoute.Sitemap = getAllGuideSlugs("en").flatMap(
    (slug) => {
      const alternates = {
        languages: {
          en: `${BASE_URL}/guide/${slug}`,
          tr: `${BASE_URL}/tr/rehber/${slug}`,
        },
      };
      return [
        {
          url: `${BASE_URL}/guide/${slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.5,
          alternates,
        },
        {
          url: `${BASE_URL}/tr/rehber/${slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.5,
          alternates,
        },
      ];
    }
  );

  return [...staticEntries, ...blogEntries, ...trBlogEntries, ...guideEntries];
}
