import { compareRoute } from "@/lib/compare-route";

const route = compareRoute("rescuetime");

export const generateMetadata = route.generateMetadata;
export default route.Page;
