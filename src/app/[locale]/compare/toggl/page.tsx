import { compareRoute } from "@/lib/compare-route";

const route = compareRoute("toggl");

export const generateMetadata = route.generateMetadata;
export default route.Page;
