import { AboutTeaser, CtaBand, HomeHero, Pipeline, PlatformsPreview } from "./_site/sections";

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
