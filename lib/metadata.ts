import type { Metadata } from "next";

import { siteConfig } from "@/data/company";

function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!envUrl) {
    return siteConfig.url;
  }

  return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

type CreateMetadataInput = {
  title?: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image",
  keywords = [],
}: CreateMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_NG",
      url: canonical,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
