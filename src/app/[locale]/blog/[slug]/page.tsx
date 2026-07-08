import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog";
import { renderInline } from "@/lib/markdown";
import { getBlogPostLD } from "@/lib/structured-data";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const enSlugs = getAllBlogSlugs("en");
  const trSlugs = getAllBlogSlugs("tr");

  return [
    ...enSlugs.map((slug) => ({ locale: "en", slug })),
    ...trSlugs.map((slug) => ({ locale: "tr", slug })),
  ];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations("blog");
  const post = getBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogPostLD(post)),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToBlog")}
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {post.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {t("publishedOn", { date: post.date })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {t("readingTime", { minutes: post.readingTime })}
              </span>
              <span>{post.author}</span>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content.split("\n").map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                    {renderInline(trimmed.replace("## ", ""))}
                  </h2>
                );
              }
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold mt-6 mb-3">
                    {renderInline(trimmed.replace("### ", ""))}
                  </h3>
                );
              }
              if (trimmed.startsWith("- ")) {
                return (
                  <li key={i} className="text-muted-foreground ml-4">
                    {renderInline(trimmed.replace("- ", ""))}
                  </li>
                );
              }
              const ordered = trimmed.match(/^(\d+)\.\s+(.*)$/);
              if (ordered) {
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-2 ml-4">
                    {ordered[1]}. {renderInline(ordered[2])}
                  </p>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {renderInline(trimmed)}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
