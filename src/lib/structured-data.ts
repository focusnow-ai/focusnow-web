export function getSoftwareApplicationLD(locale?: string) {
  const descriptions: Record<string, string> = {
    en: "Automatic time tracking for Mac and Windows with focus sessions, an AI daily report and timecards for client hours. No screenshots, no keylogging.",
    tr: "Mac ve Windows için odak oturumları, AI günlük raporu ve müşteri saatleri için zaman kartları sunan otomatik zaman takibi. Ekran görüntüsü ve tuş kaydı yok.",
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
        ? "Mac ve Windows için otomatik zaman takibi, odak oturumları ve müşteri saatleri."
        : "Automatic time tracking, focus sessions and client hours for Mac and Windows.",
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
      email: "info@focusnow.ai",
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

export function getBreadcrumbLD(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleLD(article: {
  headline: string;
  description: string;
  url: string;
  locale: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    url: article.url,
    inLanguage: article.locale === "tr" ? "tr" : "en",
    dateModified: article.dateModified,
    author: [
      { "@type": "Person", name: "Cihan" },
      { "@type": "Person", name: "Barbaros" },
    ],
    publisher: {
      "@type": "Organization",
      name: "FocusNow",
      url: "https://focusnow.ai",
    },
  };
}
