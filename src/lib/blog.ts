import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  content: string;
  locale: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getBlogPosts(locale: string): BlogPost[] {
  const dir = path.join(BLOG_DIR, locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    return getBlogPost(slug, locale);
  }).filter((post): post is BlogPost => post !== null);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string, locale: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "FocusNow Team",
    tags: data.tags || [],
    readingTime: Math.ceil(stats.minutes).toString(),
    content,
    locale,
  };
}

export function getAllBlogSlugs(locale: string): string[] {
  const dir = path.join(BLOG_DIR, locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** Human-readable, localized post date (e.g. "July 8, 2026" / "8 Temmuz 2026"). */
export function formatPostDate(date: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
