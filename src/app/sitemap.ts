import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://novrrerp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/start", changeFrequency: "monthly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
    { path: "/product", changeFrequency: "weekly", priority: 0.85 },
    { path: "/product/pos", changeFrequency: "monthly", priority: 0.8 },
    { path: "/product/inventory", changeFrequency: "monthly", priority: 0.8 },
    { path: "/product/sales", changeFrequency: "monthly", priority: 0.8 },
    { path: "/product/finance", changeFrequency: "monthly", priority: 0.8 },
    { path: "/solutions", changeFrequency: "monthly", priority: 0.8 },
    { path: "/compliance", changeFrequency: "monthly", priority: 0.75 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}