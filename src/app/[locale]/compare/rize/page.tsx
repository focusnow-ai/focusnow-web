import { compareRoute } from "@/lib/compare-route";

const route = compareRoute("rize");

export const generateMetadata = route.generateMetadata;
export default route.Page;
