import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { DownloadCTA } from "@/components/landing/download-cta";
import { pageMetadata } from "@/lib/seo";
import { getGuidePages } from "@/lib/guide";
import { ArrowRight, BookOpen } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guide.meta" });
  return pageMetadata({ pathname: "/guide", locale, title: t("title"), description: t("description") });
}

export default async function GuideIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guide" });
  const pages = getGuidePages(locale);

  return (
    <>
      <div className="pb-20 pt-14 sm:pt-20">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl">{t("title")}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{t("description")}</p>
          </div>
          <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={{ pathname: "/guide/[slug]", params: { slug: page.slug } }}
                  className="group flex h-full flex-col rounded-2xl border border-border/80 bg-card p-6 transition-colors hover:border-emphasis/40"
                >
                  <BookOpen className="size-5 text-emphasis" aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-semibold tracking-tight">{page.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{page.description}</p>
                  <ArrowRight className="mt-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-emphasis" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <DownloadCTA />
    </>
  );
}
