import { ogContentType, ogRoute, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "FocusNow";

export default ogRoute({ namespace: "useCases.freelancers", titleKey: "title", kickerKey: "who", shot: "billing" });
