import type { MetadataRoute } from "next";

import { properties } from "@/data/properties";
import { absoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/markets", changeFrequency: "monthly", priority: 0.8 },
    { path: "/properties", changeFrequency: "weekly", priority: 0.9 },
    { path: "/investors", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/insights", changeFrequency: "monthly", priority: 0.7 },
  ];

  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...properties.map((property) => ({
      url: absoluteUrl(`/properties/${property.slug}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
