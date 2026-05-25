import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getWebsiteLD, getSoftwareApplicationLD } from "@/lib/structured-data";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | FocusNow`,
    },
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL("https://focusnow.ai"),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        en: "/",
        tr: "/tr",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://focusnow.ai",
      siteName: "FocusNow",
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteLD()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSoftwareApplicationLD()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
