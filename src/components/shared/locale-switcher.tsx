"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const localeNames: Record<string, string> = {
  en: "EN",
  tr: "TR",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale =
    locale === "en"
      ? "tr"
      : "en";

  function handleSwitch() {
    router.replace(
      // @ts-expect-error -- pathname is typed as string but may be a valid route
      { pathname },
      { locale: nextLocale }
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      className="gap-1.5 text-sm"
    >
      <Globe className="h-4 w-4" />
      {localeNames[nextLocale]}
    </Button>
  );
}
