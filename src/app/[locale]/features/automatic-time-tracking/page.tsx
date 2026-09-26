import { featureRoute } from "@/lib/feature-route";

const route = featureRoute("tracking");

export const generateMetadata = route.generateMetadata;
export default route.Page;
