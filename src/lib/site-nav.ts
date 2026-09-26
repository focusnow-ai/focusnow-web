import type { Pathnames } from "@/i18n/routing";

export type NavHref = Exclude<Pathnames, `${string}[${string}]${string}`>;

export interface NavLink {
  href: NavHref;
  key: string;
}

export interface NavGroup {
  key: "product" | "useCases" | "compare" | "resources";
  links: NavLink[];
}

/** One map drives the header menus, the mobile sheet and the footer. */
export const navGroups: NavGroup[] = [
  {
    key: "product",
    links: [
      { href: "/features/automatic-time-tracking", key: "tracking" },
      { href: "/features/focus-sessions", key: "focus" },
      { href: "/features/timecards", key: "timecards" },
      { href: "/changelog", key: "changelog" },
    ],
  },
  {
    key: "useCases",
    links: [
      { href: "/use-cases/freelancers", key: "freelancers" },
      { href: "/use-cases/developers", key: "developers" },
      { href: "/use-cases/remote-workers", key: "remoteWorkers" },
      { href: "/use-cases/students", key: "students" },
    ],
  },
  {
    key: "compare",
    links: [
      { href: "/compare", key: "hub" },
      { href: "/compare/rize", key: "rize" },
      { href: "/compare/rescuetime", key: "rescuetime" },
      { href: "/compare/toggl", key: "toggl" },
      { href: "/alternatives", key: "alternatives" },
    ],
  },
  {
    key: "resources",
    links: [
      { href: "/guide", key: "guide" },
      { href: "/blog", key: "blog" },
      { href: "/about", key: "about" },
    ],
  },
];
