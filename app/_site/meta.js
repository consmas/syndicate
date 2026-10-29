const SITE_NAME = "Syndicate Investment Advisory";
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Syndicate Investment Advisory: private credit, real assets and private equity across Africa",
};

// Full per-page metadata; Next.js replaces (not merges) nested objects like openGraph, so each page sets them all.
export function pageMeta({ title = "", description, path }) {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: SITE_NAME, locale: "en_GB", title: title || SITE_NAME, description, url: path, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: title || SITE_NAME, description, images: [OG_IMAGE.url] },
  };
}
