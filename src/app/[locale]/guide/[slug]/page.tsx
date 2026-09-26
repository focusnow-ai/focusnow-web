import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getGuidePage, getAllGuideSlugs } from "@/lib/guide";
import { MarkdownBody } from "@/lib/markdown";
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
    <div className="pb-24 pt-12 sm:pt-16">
      <div className="mx-auto max-w-[44rem] px-4 sm:px-6">
        <Link
          href="/guide"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToGuide")}
        </Link>

        <article>
          <header className="mb-12 border-b border-border/70 pb-8">
            <h1 className="mb-5 text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">
              {page.title}
            </h1>
            <p className="mb-5 text-xl leading-relaxed text-muted-foreground">
              {page.description}
            </p>
            {page.updated && (
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {t("updatedOn", { date: formatPostDate(page.updated, locale) })}
              </p>
            )}
          </header>

          <MarkdownBody content={page.content} locale={locale} />
        </article>
      </div>
    </div>
  );
}
