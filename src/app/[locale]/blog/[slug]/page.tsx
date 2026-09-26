import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { getBlogPost, getAllBlogSlugs, formatPostDate } from "@/lib/blog";
import { MarkdownBody } from "@/lib/markdown";
import { getBlogPostLD } from "@/lib/structured-data";
import { BlogReadTracker } from "@/components/shared/blog-read-tracker";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale);
  if (!post) return {};
  const path = locale === "en" ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      url: `https://focusnow.ai${path}`,
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
    <div className="pb-24 pt-12 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogPostLD(post)),
        }}
      />
      <div className="mx-auto max-w-[44rem] px-4 sm:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToBlog")}
        </Link>

        <article>
          <header className="mb-12 border-b border-border/70 pb-8">
            <div className="flex items-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mb-5 text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">
              {post.title}
            </h1>
            <p className="mb-5 text-xl leading-relaxed text-muted-foreground">
              {post.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {t("publishedOn", { date: formatPostDate(post.date, locale) })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {t("readingTime", { minutes: post.readingTime })}
              </span>
              <span>{post.author}</span>
            </div>
          </header>

          <MarkdownBody content={post.content} locale={locale} />
          <BlogReadTracker
            slug={slug}
            locale={locale}
            readingTime={post.readingTime}
          />
        </article>
      </div>
    </div>
  );
}
