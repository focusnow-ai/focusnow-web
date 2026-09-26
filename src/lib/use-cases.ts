import type { NavHref } from "@/lib/site-nav";
import type { ShotKey } from "@/lib/screens";

export type Segment = "freelancers" | "developers" | "remoteWorkers" | "students";

interface UseCaseConfig {
  pathname: NavHref;
  heroShot: ShotKey;
  heroMobileShot: ShotKey;
  sceneShots: [ShotKey, ShotKey];
  compare: NavHref;
  feature: NavHref;
}

export const useCaseConfigs: Record<Segment, UseCaseConfig> = {
  freelancers: {
    pathname: "/use-cases/freelancers",
    heroShot: "projectsDetail",
    heroMobileShot: "personaFreelancer",
    sceneShots: ["billingCreate", "reportsUtilization"],
    compare: "/compare/toggl",
    feature: "/features/timecards",
  },
  developers: {
    pathname: "/use-cases/developers",
    heroShot: "tasksList",
    heroMobileShot: "focusTasks",
    sceneShots: ["productivityBreakdown", "personaStudent"],
    compare: "/compare/rize",
    feature: "/features/focus-sessions",
  },
  remoteWorkers: {
    pathname: "/use-cases/remote-workers",
    heroShot: "productivityTop",
    heroMobileShot: "productivityMobile",
    sceneShots: ["calendarWeeks", "insightsHighlights"],
    compare: "/compare/rescuetime",
    feature: "/features/automatic-time-tracking",
  },
  students: {
    pathname: "/use-cases/students",
    heroShot: "focusWide",
    heroMobileShot: "personaStudent",
    sceneShots: ["focusTasks", "activitiesSplit"],
    compare: "/compare/rescuetime",
    feature: "/features/focus-sessions",
  },
};
