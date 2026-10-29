import type { Metadata } from "next";
import { pageMeta } from "./_site/meta";
import { AboutTeaser, CtaBand, HomeHero, Pipeline, PlatformsPreview } from "./_site/sections";

export const metadata: Metadata = pageMeta({
  description:
    "Syndicate Investment Advisory helps businesses, developers and governments across Africa build the deals that attract long-term investors, across private credit, real assets and private equity.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Pipeline more />
      <PlatformsPreview />
      <AboutTeaser />
      <CtaBand />
    </>
  );
}
