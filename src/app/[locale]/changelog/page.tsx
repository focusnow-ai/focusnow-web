import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DownloadCTA } from "@/components/landing/download-cta";
import { formatPostDate } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

interface ChangelogVersion {
  version: string;
  date: string;
  title: string;
  changes: string[];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "changelog.meta" });
  return pageMetadata({ pathname: "/changelog", locale, title: t("title"), description: t("description") });
}

export default async function ChangelogPage({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "changelog" });
  const versions: ChangelogVersion[] = t.raw("versions");

  return (
    <>
      <div className="pb-20 pt-14 sm:pt-20">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl">{t("title")}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{t("description")}</p>
          </div>

          <ol className="mt-14 space-y-14">
            {versions.map((version) => (
              <li key={version.version} className="grid gap-4 border-t border-border/70 pt-8 md:grid-cols-[14rem_1fr] md:gap-10">
                <div>
                  <p className="font-mono text-2xl font-medium">v{version.version}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <time dateTime={version.date}>{formatPostDate(version.date, locale)}</time>
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{version.title}</h2>
                  <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-foreground/80 marker:text-emphasis/70">
                    {version.changes.map((change) => (
                      <li key={change}>{change}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <DownloadCTA />
    </>
  );
}
