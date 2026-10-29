import type { Metadata } from "next";
import { IMG } from "../_site/data";
import { CtaBand, NextPage, PageHero, PlatformsList } from "../_site/sections";

export const metadata: Metadata = {
  title: "Our Platforms",
  description: "Private credit, real assets and private equity: three platforms meeting different capital needs in the real economy.",
};

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Platforms"
        title="Private credit, real assets and private equity."
        lead="Each platform meets a different kind of capital need in the real economy."
        image={IMG.charts}
      />
      <PlatformsList />
      <NextPage href="/sectors" label="Sectors" title="The industries we know" />
      <CtaBand />
    </>
  );
}
