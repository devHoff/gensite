import type { MetadataRoute } from "next";

const BASE_URL = "https://akiral.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/sobre-nos`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/termos-e-privacidade`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/seus-direitos-de-privacidade`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
