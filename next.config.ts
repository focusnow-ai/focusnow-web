import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { routing } from "./src/i18n/routing";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const toPattern = (pathname: string) => pathname.replace(/\[(\w+)\]/g, ":$1");

/* The locale middleware already sends `/tr/about` to `/tr/hakkimizda` and
   `/en/x` to `/x`, but with a temporary 307, so Google keeps the old URLs
   around as "Page with redirect". These run first and answer with a 308. */
const legacyLocaleRedirects = [
  { source: "/en", destination: "/", permanent: true },
  { source: "/en/:path*", destination: "/:path*", permanent: true },
  ...Object.values(routing.pathnames).flatMap((entry) =>
    typeof entry === "string" || entry.en === entry.tr
      ? []
      : [
          {
            source: `/tr${toPattern(entry.en)}`,
            destination: `/tr${toPattern(entry.tr)}`,
            permanent: true,
          },
        ]
  ),
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyLocaleRedirects;
  },
};

export default withNextIntl(nextConfig);
