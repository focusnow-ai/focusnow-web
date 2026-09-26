import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FocusNowLogo } from "@/components/shared/focusnow-logo";
import { navGroups, type NavLink } from "@/lib/site-nav";

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

function FooterColumn({ title, links }: { title: string; links: { href: NavLink["href"]; label: string }[] }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const columns = navGroups.map((group) => ({
    title: nav(`groups.${group.key}.label`),
    links: group.links.map((link) => ({
      href: link.href,
      label: nav(`groups.${group.key}.links.${link.key}.title`),
    })),
  }));

  const resources = columns[3];
  resources.links = [...resources.links, { href: "/contact", label: t("contact") }];

  const product = columns[0];
  product.links = [
    ...product.links,
    { href: "/pricing", label: nav("pricing") },
    { href: "/download", label: nav("download") },
  ];

  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="mx-auto max-w-[84rem] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" aria-label={nav("home")}>
              <FocusNowLogo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{t("founders")}</p>
          </div>
          {columns.map((column) => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
          <FooterColumn
            title={t("legal")}
            links={[
              { href: "/privacy", label: nav("privacy") },
              { href: "/terms", label: nav("terms") },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} FocusNow. {t("copyright")}
          </p>
          <p>{t("platforms")}</p>
        </div>
      </div>
    </footer>
  );
}
