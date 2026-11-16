import type { MetadataRoute } from "next";
import { legal, nav, site } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav, ...legal].map((n) => n.href).map((path) => ({
    url: `${site.url}${path}`,
  }));
}
