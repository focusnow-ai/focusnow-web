import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts } from "@/lib/blog";
import { Clock, ArrowRight } from "lucide-react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  const posts = getBlogPosts(locale);

  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">{t("noPosts")}</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
              >
                <Card className="card-hover border-glow transition-all hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {t("readingTime", { minutes: post.readingTime })}
                        </span>
                      </div>
                      <span className="text-sm text-purple-600 dark:text-purple-400 flex items-center gap-1">
                        {t("readMore")}
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
