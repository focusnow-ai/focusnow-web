import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getGuidePage, getAllGuideSlugs } from "@/lib/guide";
import { renderInline } from "@/lib/markdown";
import { ArrowLeft, Clock } from "lucide-react";
import { formatPostDate } from "@/lib/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = getGuidePage(slug, locale);
  if (!page) return {};

  const enPath = `/guide/${slug}`;
  const trPath = `/tr/rehber/${slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: locale === "en" ? enPath : trPath,
      languages: { en: enPath, tr: trPath },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export async function generateStaticParams() {
  const enSlugs = getAllGuideSlugs("en");
  const trSlugs = getAllGuideSlugs("tr");

  return [
    ...enSlugs.map((slug) => ({ locale: "en", slug })),
    ...trSlugs.map((slug) => ({ locale: "tr", slug })),
  ];
}

export default async function GuidePageDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations("guide");
  const page = getGuidePage(slug, locale);

  if (!page) {
    notFound();
  }

  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/guide"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToGuide")}
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {page.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {page.description}
            </p>
            {page.updated && (
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {t("updatedOn", { date: formatPostDate(page.updated, locale) })}
              </p>
            )}
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {page.content.split("\n").map((paragraph, i) => {
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
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed mb-2 ml-4"
                  >
                    {ordered[1]}. {renderInline(ordered[2])}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
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
