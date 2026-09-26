import { ogContentType, ogRoute, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "FocusNow";

export default ogRoute({ namespace: "compareHub", titleKey: "title", kickerKey: "ogKicker", shot: "productivity" });
