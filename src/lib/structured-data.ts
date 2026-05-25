export function getSoftwareApplicationLD() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FocusNow",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "macOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Privacy-first desktop focus and time tracking application.",
    url: "https://focusnow.ai",
    downloadUrl: "https://focusnow.ai/download",
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

export function getWebsiteLD() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FocusNow",
    url: "https://focusnow.ai",
    description:
      "Privacy-first desktop focus and time tracking application.",
  };
}
