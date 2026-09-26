export type ScreenName =
  | "focus"
  | "productivity"
  | "insights"
  | "activities"
  | "calendar"
  | "tasks"
  | "timecards"
  | "projects"
  | "billing"
  | "reports";

/** Region of a 1920×1157 screenshot, as fractions of its width and height. */
export interface Crop {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Shot {
  screen: ScreenName;
  crop: Crop;
}

export const SOURCE_WIDTH = 1920;
export const SOURCE_HEIGHT = 1157;


/**
 * Every product view on the site is cropped from the real screenshots in
 * public/screenshots/{light,dark}. Keeping the regions in one place means a
 * re-capture only needs this file checked.
 */
export const shots = {
  focusTimer: { screen: "focus", crop: { x: 0.33, y: 0.12, w: 0.65, h: 0.62 } },
  focusWithTasks: { screen: "focus", crop: { x: 0.3, y: 0.13, w: 0.56, h: 0.87 } },
  focusToday: { screen: "focus", crop: { x: 0.35, y: 0.565, w: 0.455, h: 0.135 } },
  focusTasks: { screen: "focus", crop: { x: 0.35, y: 0.715, w: 0.455, h: 0.285 } },
  focusWide: { screen: "focus", crop: { x: 0.158, y: 0, w: 0.842, h: 0.72 } },
  timecardTimer: { screen: "timecards", crop: { x: 0.625, y: 0.148, w: 0.36, h: 0.08 } },
  timecardsEntries: { screen: "timecards", crop: { x: 0.168, y: 0.08, w: 0.818, h: 0.62 } },
  timecardRecords: { screen: "timecards", crop: { x: 0.198, y: 0.543, w: 0.3, h: 0.118 } },
  insightsHighlights: { screen: "insights", crop: { x: 0.335, y: 0.37, w: 0.245, h: 0.4 } },
  insightsRecommendations: { screen: "insights", crop: { x: 0.585, y: 0.37, w: 0.245, h: 0.37 } },
  productivityTop: { screen: "productivity", crop: { x: 0.165, y: 0.075, w: 0.825, h: 0.6 } },
  productivityBreakdown: { screen: "productivity", crop: { x: 0.165, y: 0.665, w: 0.41, h: 0.335 } },
  productivityMobile: { screen: "productivity", crop: { x: 0.168, y: 0.08, w: 0.335, h: 0.27 } },
  calendarMobile: { screen: "calendar", crop: { x: 0.176, y: 0.325, w: 0.42, h: 0.36 } },
  timecardsMobile: { screen: "timecards", crop: { x: 0.168, y: 0.46, w: 0.44, h: 0.3 } },
  calendarMonth: { screen: "calendar", crop: { x: 0.165, y: 0.245, w: 0.825, h: 0.6 } },
  calendarWeeks: { screen: "calendar", crop: { x: 0.176, y: 0.325, w: 0.424, h: 0.48 } },
  activitiesColumns: { screen: "activities", crop: { x: 0.165, y: 0.08, w: 0.825, h: 0.62 } },
  activitiesSplit: { screen: "activities", crop: { x: 0.578, y: 0.27, w: 0.412, h: 0.24 } },
  activitiesFocus: { screen: "activities", crop: { x: 0.168, y: 0.27, w: 0.205, h: 0.42 } },
  tasksList: { screen: "tasks", crop: { x: 0.168, y: 0.215, w: 0.818, h: 0.6 } },
  tasksAccuracy: { screen: "tasks", crop: { x: 0.168, y: 0.222, w: 0.3, h: 0.122 } },
  calendarRow: { screen: "calendar", crop: { x: 0.176, y: 0.685, w: 0.41, h: 0.117 } },
  projectsDetail: { screen: "projects", crop: { x: 0.158, y: 0.06, w: 0.842, h: 0.62 } },
  billingStatements: { screen: "billing", crop: { x: 0.18, y: 0.5, w: 0.575, h: 0.5 } },
  billingCreate: { screen: "billing", crop: { x: 0.73, y: 0.165, w: 0.255, h: 0.2 } },
  personaFreelancer: { screen: "projects", crop: { x: 0.165, y: 0.245, w: 0.275, h: 0.34 } },
  personaRemote: { screen: "productivity", crop: { x: 0.172, y: 0.228, w: 0.165, h: 0.115 } },
  personaStudent: { screen: "focus", crop: { x: 0.355, y: 0.155, w: 0.445, h: 0.395 } },
  reportsUtilization: { screen: "reports", crop: { x: 0.17, y: 0.365, w: 0.45, h: 0.125 } },
} satisfies Record<string, Shot>;

export type ShotKey = keyof typeof shots;
