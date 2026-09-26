import { getTranslations } from "next-intl/server";

interface LegalSection {
  title: string;
  content: string;
  items?: string[];
  note?: string;
}

/** Shared long-form layout for the privacy policy and terms of use. The legal text itself lives in messages. */
export async function LegalDocument({ namespace, locale }: { namespace: "privacyPage" | "termsPage"; locale: string }) {
  const t = await getTranslations({ locale, namespace });
  const sections: Record<string, LegalSection> = t.raw("sections");

  return (
    <div className="pb-24 pt-12 sm:pt-16">
      <article className="mx-auto max-w-[46rem] px-4 sm:px-6">
        <header className="border-b border-border/70 pb-8">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{t("title")}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{t("lastUpdated")}</p>
          <p className="mt-6 text-[17px] leading-8 text-foreground/85">{t("intro")}</p>
        </header>
        <div className="divide-y divide-border/60">
          {Object.entries(sections).map(([key, section]) => (
            <section key={key} id={key} className="scroll-mt-24 py-8">
              <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-3 text-[16px] leading-7 text-foreground/80">{section.content}</p>
              {section.items && section.items.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-7 text-foreground/80 marker:text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.note && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{section.note}</p>}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
