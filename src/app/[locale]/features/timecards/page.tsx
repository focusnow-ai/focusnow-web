import { featureRoute } from "@/lib/feature-route";

const route = featureRoute("timecards");

export const generateMetadata = route.generateMetadata;
export default route.Page;
