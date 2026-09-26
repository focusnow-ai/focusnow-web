import type { Link } from "@/i18n/navigation";
import type { NavHref } from "@/lib/site-nav";
import type { ShotKey } from "@/lib/screens";

type Href = React.ComponentProps<typeof Link>["href"];

export type FeatureKey = "tracking" | "focus" | "timecards";

interface FeatureConfig {
  pathname: NavHref;
  heroShot: ShotKey;
  heroMobileShot: ShotKey;
  flowShot: ShotKey;
  guide: Href;
  earlyAccess?: boolean;
  related: { key: string; href: Href }[];
}

const guide = (slug: string): Href => ({ pathname: "/guide/[slug]", params: { slug } });

export const featureConfigs: Record<FeatureKey, FeatureConfig> = {
  tracking: {
    pathname: "/features/automatic-time-tracking",
    heroShot: "activitiesColumns",
    heroMobileShot: "activitiesFocus",
    flowShot: "productivityTop",
    guide: guide("getting-started"),
    related: [
      { key: "gettingStarted", href: guide("getting-started") },
      { key: "focusScore", href: guide("focus-score") },
      { key: "workingHours", href: guide("working-hours") },
      { key: "remote", href: "/use-cases/remote-workers" },
      { key: "rize", href: "/compare/rize" },
    ],
  },
  focus: {
    pathname: "/features/focus-sessions",
    heroShot: "focusWide",
    heroMobileShot: "personaStudent",
    flowShot: "tasksList",
    guide: guide("focus-sessions"),
    related: [
      { key: "focusSessions", href: guide("focus-sessions") },
      { key: "shortcuts", href: guide("shortcuts-and-tips") },
      { key: "students", href: "/use-cases/students" },
      { key: "developers", href: "/use-cases/developers" },
      { key: "rescuetime", href: "/compare/rescuetime" },
    ],
  },
  timecards: {
    pathname: "/features/timecards",
    heroShot: "timecardsEntries",
    heroMobileShot: "timecardsMobile",
    flowShot: "billingStatements",
    guide: "/use-cases/freelancers",
    earlyAccess: true,
    related: [
      { key: "freelancers", href: "/use-cases/freelancers" },
      { key: "pricing", href: "/pricing" },
      { key: "toggl", href: "/compare/toggl" },
      { key: "alternatives", href: "/alternatives" },
    ],
  },
};
