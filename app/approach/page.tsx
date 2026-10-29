import type { Metadata } from "next";
import { IMG } from "../_site/data";
import { CtaBand, Model, NextPage, PageHero, Pipeline } from "../_site/sections";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "Origination, structuring, deal preparation, investor matching and execution through to financial close.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="From first conversation to financial close."
        lead="Money isn't the hard part. Finding and shaping the right deal is. Here is how we do it, and how we connect businesses with investors."
        image={IMG.screens}
      />
      <Pipeline />
      <Model />
      <NextPage href="/platforms" label="Platforms" title="The three areas we work across" />
      <CtaBand />
    </>
  );
}
