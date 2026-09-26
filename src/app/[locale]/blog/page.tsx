import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { DownloadCTA } from "@/components/landing/download-cta";
import { getBlogPosts, formatPostDate } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.meta" });
  return pageMetadata({ pathname: "/blog", locale, title: t("title"), description: t("description") });
}

export default async function BlogPage({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = getBlogPosts(locale);

  return (
    <>
      <div className="pb-20 pt-14 sm:pt-20">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl">{t("title")}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{t("description")}</p>
          </div>

          {posts.length === 0 ? (
            <p className="mt-14 text-muted-foreground">{t("noPosts")}</p>
          ) : (
            <ul className="mt-14 grid gap-4 md:grid-cols-2">
              {posts.map((post, index) => (
                <li key={post.slug} className={index === 0 ? "md:col-span-2" : undefined}>
                  <Link
                    href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
                    className="group flex h-full flex-col rounded-3xl border border-border/80 bg-card p-6 transition-colors hover:border-emphasis/40 sm:p-8"
                  >
                    <p className="text-sm text-muted-foreground">
                      {formatPostDate(post.date, locale)} · {post.author} · {t("readingTime", { minutes: post.readingTime })}
                    </p>
                    <h2 className={index === 0 ? "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl" : "mt-3 text-xl font-semibold tracking-tight"}>
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{post.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-emphasis">
                      {t("readMore")}
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <DownloadCTA />
    </>
  );
}
