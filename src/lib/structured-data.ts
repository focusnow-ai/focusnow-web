export function getSoftwareApplicationLD(locale?: string) {
  const descriptions: Record<string, string> = {
    en: "Free desktop app that tracks your apps automatically and shows where your workday goes. No screenshots, no keylogging. Mac & Windows.",
    tr: "Hangi uygulamada ne kadar vakit geçirdiğinizi otomatik takip eden ücretsiz masaüstü uygulaması. Ekran görüntüsü ve tuş kaydı yok. Mac ve Windows.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FocusNow",
    applicationCategory: "ProductivityApplication",
    operatingSystem: ["macOS", "Windows"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: descriptions[locale ?? "en"] ?? descriptions.en,
    url: "https://focusnow.ai",
    downloadUrl: "https://focusnow.ai/download",
    inLanguage: locale === "tr" ? "tr" : "en",
  };
}

export function getBlogPostLD(post: {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  locale: string;
}) {
  const url =
    post.locale === "en"
      ? `https://focusnow.ai/blog/${post.slug}`
      : `https://focusnow.ai/tr/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: post.locale === "tr" ? "tr" : "en",
    author: {
      "@type": "Person",
      name: post.author,
    },
    url,
    publisher: {
      "@type": "Organization",
      name: "FocusNow",
      url: "https://focusnow.ai",
    },
  };
}

export function getWebsiteLD(locale?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FocusNow",
    url: "https://focusnow.ai",
    inLanguage: locale === "tr" ? "tr" : "en",
    description:
      locale === "tr"
        ? "Hangi uygulamalara ne kadar vakit harcadığınızı otomatik takip eden ücretsiz masaüstü uygulaması."
        : "Free desktop app that automatically tracks your apps and shows how you spend your workday.",
  };
}

export function getOrganizationLD() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FocusNow",
    url: "https://focusnow.ai",
    logo: "https://focusnow.ai/icon.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "privacy@focusnow.ai",
      contactType: "customer support",
    },
  };
}

export function getFAQPageLD(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
