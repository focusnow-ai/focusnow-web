import { segmentRoute } from "@/lib/use-case-route";

const route = segmentRoute("freelancers");

export const generateMetadata = route.generateMetadata;
export default route.Page;
