import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FaqList, type FaqItem } from "@/components/shared/faq-list";

export function FAQSection() {
  const t = useTranslations("faq");
  const items: FaqItem[] = t.raw("items");

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[84rem] gap-10 px-4 sm:px-6 lg:grid-cols-[4fr_7fr] lg:gap-16 lg:px-8">
        <div className="reveal">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:leading-[1.05]">
            {t("title")}
          </h2>
          <p className="mt-5 text-muted-foreground">
            {t("contactPrompt")}{" "}
            <Link href="/contact" className="font-medium text-emphasis underline-offset-4 hover:underline">
              {t("contactLink")}
            </Link>
          </p>
        </div>
        <FaqList items={items} className="reveal" />
      </div>
    </section>
  );
}
