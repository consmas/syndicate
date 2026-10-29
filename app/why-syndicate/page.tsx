import type { Metadata } from "next";
import { IMG } from "../_site/data";
import { pageMeta } from "../_site/meta";
import { Audiences, CtaBand, NextPage, PageHero } from "../_site/sections";

export const metadata: Metadata = pageMeta({
  title: "Why Syndicate",
  description:
    "What Syndicate offers institutional investors, corporates and entrepreneurs, and governments.",
  path: "/why-syndicate",
});

export default function WhySyndicatePage() {
  return (
    <>
      <PageHero
        eyebrow="Why Syndicate"
        title="Why investors, businesses and governments work with us."
        lead="For institutional investors, corporates and entrepreneurs, and governments and public institutions."
        image={IMG.desk}
        imagePosition="center 25%"
      />
      <Audiences />
      <NextPage href="/contact" label="Contact" title="Talk to our team" />
      <CtaBand />
    </>
  );
}
