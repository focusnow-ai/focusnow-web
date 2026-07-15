import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface GuidePage {
  slug: string;
  title: string;
  description: string;
  order: number;
  updated: string;
  content: string;
  locale: string;
}

const GUIDE_DIR = path.join(process.cwd(), "src/content/guide");

/**
 * Guide pages use the SAME slug in every locale (unlike blog posts) so that
 * EN/TR versions pair up cleanly for hreflang and the desktop app can link
 * to a stable slug regardless of language.
 */
export function getGuidePages(locale: string): GuidePage[] {
  const dir = path.join(GUIDE_DIR, locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const pages = files
    .map((file) => getGuidePage(file.replace(/\.mdx$/, ""), locale))
    .filter((page): page is GuidePage => page !== null);

  return pages.sort((a, b) => a.order - b.order);
}

export function getGuidePage(slug: string, locale: string): GuidePage | null {
  const filePath = path.join(GUIDE_DIR, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    order: data.order ?? 99,
    updated: data.updated || "",
    content,
    locale,
  };
}

export function getAllGuideSlugs(locale: string): string[] {
  const dir = path.join(GUIDE_DIR, locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
