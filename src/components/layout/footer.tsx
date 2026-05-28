import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FocusNowLogo } from "@/components/shared/focusnow-logo";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const uc = useTranslations("useCases");

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <FocusNowLogo />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold text-sm mb-3">{t("product")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {nav("features")}
                </a>
              </li>
              <li>
                <Link href="/download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {nav("download")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {nav("pricing")}
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {nav("changelog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-semibold text-sm mb-3">{t("useCases")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/use-cases/remote-workers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {uc("remoteWorkers.badge")}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/students" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {uc("students.badge")}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/freelancers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {uc("freelancers.badge")}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/developers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {uc("developers.badge")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-3">{t("resources")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {nav("blog")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {nav("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-3">{t("legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {nav("privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} FocusNow. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
