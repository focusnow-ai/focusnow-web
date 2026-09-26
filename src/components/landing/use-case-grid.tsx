import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ProductShot } from "@/components/shared/product-shot";
import type { NavHref } from "@/lib/site-nav";
import type { ShotKey } from "@/lib/screens";
import { cn } from "@/lib/utils";

interface Persona {
  key: "freelancers" | "developers" | "remoteWorkers" | "students";
  href: NavHref;
  shot: ShotKey;
  sizes: string;
  className: string;
}

const personas: Persona[] = [
  {
    key: "freelancers",
    href: "/use-cases/freelancers",
    shot: "personaFreelancer",
    sizes: "(min-width: 1024px) 460px, 88vw",
    className: "lg:col-span-2 lg:row-span-2 bg-wash",
  },
  {
    key: "developers",
    href: "/use-cases/developers",
    shot: "focusTasks",
    sizes: "(min-width: 1024px) 600px, 88vw",
    className: "lg:col-span-2 bg-card",
  },
  {
    key: "remoteWorkers",
    href: "/use-cases/remote-workers",
    shot: "personaRemote",
    sizes: "(min-width: 1024px) 300px, 88vw",
    className: "bg-card",
  },
  {
    key: "students",
    href: "/use-cases/students",
    shot: "personaStudent",
    sizes: "(min-width: 1024px) 300px, 88vw",
    className: "bg-muted/70",
  },
];

export function UseCaseGrid() {
  const t = useTranslations("useCaseGrid");

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <h2 className="reveal max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:leading-[1.05]">
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona) => {
            const lead = persona.key === "freelancers";
            return (
              <Link
                key={persona.key}
                href={persona.href}
                className={cn(
                  "reveal group flex flex-col overflow-hidden rounded-2xl border border-border/70 p-6 transition-colors hover:border-emphasis/40 sm:p-7",
                  persona.className
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-emphasis">{t(`items.${persona.key}.who`)}</p>
                    <h3 className={cn("mt-2 font-semibold tracking-tight", lead ? "text-2xl sm:text-3xl" : "text-lg")}>
                      {t(`items.${persona.key}.title`)}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emphasis"
                    aria-hidden="true"
                  />
                </div>
                <p className={cn("mt-2 leading-relaxed text-muted-foreground", lead ? "max-w-md text-base" : "text-[15px]")}>
                  {t(`items.${persona.key}.body`)}
                </p>
                <div className={cn("mt-auto pt-6", lead && "lg:pt-10")}>
                  <ProductShot
                    shot={persona.shot}
                    alt={t(`items.${persona.key}.alt`)}
                    sizes={persona.sizes}
                    className={cn("rounded-xl border border-border/70", lead ? "mx-auto max-w-lg shadow-detail" : "bg-card")}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
