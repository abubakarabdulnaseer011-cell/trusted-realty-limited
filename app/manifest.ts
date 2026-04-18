import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#090807",
    theme_color: "#090807",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        src: "/favicon.ico",
        type: "image/x-icon",
        sizes: "256x256",
      },
    ],
  };
}
