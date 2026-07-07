/**
 * Activity status colors shared by product mockups (hero, bento).
 * Mirrors the desktop app's activity semantics:
 * Focus = green, Neutral = blue, Distraction = red, Idle/Away = gray.
 */
export const activityColors = {
  focus: "bg-emerald-500 dark:bg-emerald-400",
  neutral: "bg-blue-500 dark:bg-blue-400",
  distraction: "bg-red-500 dark:bg-red-400",
  idle: "bg-gray-400 dark:bg-gray-500",
} as const;

export type ActivityStatus = keyof typeof activityColors;
