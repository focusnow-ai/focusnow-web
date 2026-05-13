"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { cn } from "@/lib/utils";
import { Menu, Sparkles } from "lucide-react";

type NavItem =
  | { href: string; label: string; isAnchor: true }
  | { href: "/download" | "/pricing" | "/blog" | "/about"; label: string; isAnchor?: false };

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = [
    { href: "/#features", label: t("features"), isAnchor: true },
    { href: "/download", label: t("download") },
    { href: "/pricing", label: t("pricing") },
    { href: "/blog", label: t("blog") },
    { href: "/about", label: t("about") },
  ];

  const linkClass =
    "px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted";
  const mobileLinkClass =
    "px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="gradient-text">FocusNow</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.isAnchor ? (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          <Link
            href="/download"
            className={cn(
              buttonVariants({ size: "sm" }),
              "gradient-primary text-white border-0"
            )}
          >
            {t("getApp")}
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="h-9 w-9" />}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-1 mt-8">
                {navItems.map((item) =>
                  item.isAnchor ? (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={mobileLinkClass}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={mobileLinkClass}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <div className="mt-4 px-3">
                  <Link
                    href="/download"
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants(),
                      "w-full gradient-primary text-white border-0"
                    )}
                  >
                    {t("getApp")}
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
