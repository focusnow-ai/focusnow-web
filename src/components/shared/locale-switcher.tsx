"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const localeNames: Record<string, string> = {
  en: "EN",
  tr: "TR",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const nextLocale =
    locale === "en"
      ? "tr"
      : "en";

  function handleSwitch() {
    /* Blog slugs are localized per language — the same slug doesn't exist
       in the other locale, so land on the blog index instead of a 404. */
    if (pathname === "/blog/[slug]") {
      router.replace("/blog", { locale: nextLocale });
      return;
    }
    router.replace(
      // @ts-expect-error -- pathname is typed as string but is a valid route
      { pathname, params },
      { locale: nextLocale }
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      className="h-9 gap-1.5 text-sm"
      aria-label={t("switchLanguage")}
      lang={nextLocale}
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      {localeNames[nextLocale]}
    </Button>
  );
}
