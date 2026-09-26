"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Menu } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { buttonVariants, Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { FocusNowLogo } from "@/components/shared/focusnow-logo";
import { navGroups, type NavGroup } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const topLinkClass =
  "inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground";

function useDismiss(open: boolean, close: () => void, ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) close();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close, ref]);
}

function MenuGroup({
  group,
  open,
  onToggle,
  onClose,
}: {
  group: NavGroup;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const t = useTranslations("nav");
  const panelId = useId();
  const wrapperRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeAndFocus = () => {
    onClose();
    buttonRef.current?.focus();
  };

  return (
    <li
      ref={wrapperRef}
      className="relative"
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node)) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) closeAndFocus();
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className={topLinkClass}
      >
        {t(`groups.${group.key}.label`)}
        <ChevronDown
          className={cn("size-3.5 opacity-60 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-2"
      >
        <ul className="rounded-2xl border border-border/80 bg-popover p-2 shadow-detail">
          {group.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-muted focus-visible:bg-muted"
              >
                <span className="block text-sm font-medium text-foreground">
                  {t(`groups.${group.key}.links.${link.key}.title`)}
                </span>
                <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground">
                  {t(`groups.${group.key}.links.${link.key}.description`)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function DesktopNav() {
  const t = useTranslations("nav");
  const [openKey, setOpenKey] = useState<NavGroup["key"] | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const close = () => setOpenKey(null);
  useDismiss(openKey !== null, close, navRef);

  return (
    <nav ref={navRef} aria-label={t("primary")} className="hidden lg:block">
      <ul className="flex items-center gap-0.5">
        {navGroups.map((group) => (
          <MenuGroup
            key={group.key}
            group={group}
            open={openKey === group.key}
            onToggle={() => setOpenKey(openKey === group.key ? null : group.key)}
            onClose={close}
          />
        ))}
        <li>
          <Link href="/pricing" className={topLinkClass}>
            {t("pricing")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function MobileNav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="size-10" />}>
        <Menu className="size-5" />
        <span className="sr-only">{t("menu")}</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-[86vw] max-w-sm overflow-y-auto">
        <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
        <nav aria-label={t("primary")} className="flex flex-col gap-6 px-5 pb-8 pt-14">
          {navGroups.map((group) => (
            <div key={group.key}>
              <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                {t(`groups.${group.key}.label`)}
              </p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block rounded-lg py-2 text-base text-foreground/90 hover:text-foreground"
                    >
                      {t(`groups.${group.key}.links.${link.key}.title`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-2 border-t border-border pt-5">
            <Link href="/pricing" onClick={close} className="py-2 text-base font-medium">
              {t("pricing")}
            </Link>
            <Link href="/download" onClick={close} className={cn(buttonVariants({ size: "lg" }), "h-11 text-base")}>
              {t("download")}
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        {t("skip")}
      </a>
      <div className="mx-auto flex h-16 max-w-[84rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" aria-label={t("home")} className="flex items-center" aria-current={pathname === "/" ? "page" : undefined}>
            <FocusNowLogo />
          </Link>
          <DesktopNav />
        </div>

        <div className="flex items-center gap-1.5">
          <LocaleSwitcher />
          <ThemeToggle />
          <Link
            href="/download"
            className={cn(buttonVariants({ size: "lg" }), "ml-1.5 hidden h-9 px-4 sm:inline-flex press-effect")}
          >
            {t("download")}
          </Link>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
