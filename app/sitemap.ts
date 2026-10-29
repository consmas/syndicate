import type { MetadataRoute } from "next";
import { SITE_URL } from "./_site/data";

const ROUTES = ["", "/about", "/approach", "/platforms", "/sectors", "/why-syndicate", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
