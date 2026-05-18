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
    url: "https://focusnow.app",
    downloadUrl: "https://focusnow.app/download",
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
      ? `https://focusnow.app/blog/${post.slug}`
      : `https://focusnow.app/tr/blog/${post.slug}`;

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
      url: "https://focusnow.app",
    },
  };
}

export function getWebsiteLD() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FocusNow",
    url: "https://focusnow.app",
    description:
      "Privacy-first desktop focus and time tracking application.",
  };
}
