import type { Metadata } from "next";
import { IMG } from "../_site/data";
import { CtaBand, Narrative, NextPage, PageHero } from "../_site/sections";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "We build deals, not just execute them: investment advisory for Africa's businesses, projects and industries.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Helping Africa's businesses become investments."
        lead="We help Africa's businesses, projects and industries become investments that meet international institutional standards, and connect them with long-term capital."
        image={IMG.team}
        imagePosition="center 60%"
      />
      <Narrative />
      <NextPage href="/approach" label="Our Approach" title="How we take a deal from first conversation to close" />
      <CtaBand />
    </>
  );
}
