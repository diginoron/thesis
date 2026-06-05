import type { Metadata } from "next";

const SITE_URL = "https://ai.caspianthesis.com";
const SITE_NAME = "Caspian Thesis — دستیار هوش مصنوعی پایان‌نامه";
const DEFAULT_KEYWORDS = [
  "انجام پایان نامه با هوش مصنوعی",
  "دستیار هوش مصنوعی انجام پایان نامه",
  "پایان نامه هوش مصنوعی",
  "نوشتن پایان نامه",
  "thesis diginoron",
];

interface GenerateMetaOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

export function generateMeta({
  title,
  description,
  keywords = [],
  path = "",
  image = "/og-image.png",
  type = "website",
  publishedTime,
}: GenerateMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const allKeywords = [...DEFAULT_KEYWORDS, ...keywords];

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: allKeywords,
    authors: [{ name: "دیجی‌نورون" }],
    creator: "دیجی‌نورون",
    publisher: "دیجی‌نورون",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fa_IR",
      type,
      images: [
        {
          url: `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${image}`],
    },
  };
}

/* ---------- JSON-LD Structured Data ---------- */

export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "دستیار هوش مصنوعی برای انجام پایان‌نامه — نوشتن، تحلیل، ویرایش و مشاوره تخصصی",
    inLanguage: "fa",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "دیجی‌نورون",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "ارائه‌دهنده خدمات هوش مصنوعی برای انجام پایان‌نامه و پژوهش‌های دانشگاهی",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["fa", "en"],
    },
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateArticleJsonLd({
  title,
  description,
  url,
  publishedTime,
  image,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: publishedTime,
    author: {
      "@type": "Organization",
      name: "دیجی‌نورون",
    },
    publisher: {
      "@type": "Organization",
      name: "دیجی‌نورون",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}${image}`,
      },
    }),
  };
}

export function generateServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: "دیجی‌نورون",
      url: SITE_URL,
    },
  };
}
