import type { NavHref } from "@/lib/site-nav";
import type { ShotKey } from "@/lib/screens";

export type Competitor = "rize" | "rescuetime" | "toggl";

export const COMPETITOR_CHECKED_ON = "2026-09-26";

export const comparisons: { key: Competitor; name: string; href: NavHref; experienceShot: ShotKey; sources: string[] }[] = [
  {
    key: "rize",
    name: "Rize",
    href: "/compare/rize",
    experienceShot: "timecardsEntries",
    sources: [
      "https://rize.io/pricing",
      "https://rize.io/",
      "https://rize.io/features/productivity",
      "https://www.rize.io/features/project-tracking",
    ],
  },
  {
    key: "rescuetime",
    name: "RescueTime",
    href: "/compare/rescuetime",
    experienceShot: "focusWide",
    sources: ["https://www.rescuetime.com/pricing"],
  },
  {
    key: "toggl",
    name: "Toggl Track",
    href: "/compare/toggl",
    experienceShot: "calendarMonth",
    sources: ["https://toggl.com/track/pricing/", "https://toggl.com/track/features/"],
  },
];

export const alternativeTools: { key: string; name: string; url: string; compare?: NavHref }[] = [
  { key: "focusnow", name: "FocusNow", url: "https://focusnow.ai" },
  { key: "rize", name: "Rize", url: "https://rize.io/", compare: "/compare/rize" },
  { key: "rescuetime", name: "RescueTime", url: "https://www.rescuetime.com/", compare: "/compare/rescuetime" },
  { key: "toggl", name: "Toggl Track", url: "https://toggl.com/track/", compare: "/compare/toggl" },
  { key: "timely", name: "Timely", url: "https://www.timely.com/" },
  { key: "activitywatch", name: "ActivityWatch", url: "https://activitywatch.net/" },
];

export const alternativeSources = [
  "https://rize.io/pricing",
  "https://www.rescuetime.com/pricing",
  "https://toggl.com/track/pricing/",
  "https://www.timely.com/pricing/",
  "https://activitywatch.net/",
];
