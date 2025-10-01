import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const today = new Date();

  const urls = [
    "/", "/about",
    "/services", "/services/accounts", "/services/savings", "/services/loans", "/services/safe-deposit", "/services/education",
    "/csi", "/tenders", "/careers",
    "/resources", "/resources/faqs", "/resources/downloads", "/resources/news",
    "/contact"
  ];

  return urls.map((u) => ({
    url: `${site}${u}`,
    lastModified: today,
    changeFrequency: u === "/" ? "weekly" : "monthly",
    priority: u === "/" ? 1 : 0.7
  }));
}
