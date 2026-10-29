import type { Metadata } from "next";
import { IMG } from "../_site/data";
import { CtaBand, NextPage, PageHero, SectorsGrid } from "../_site/sections";

export const metadata: Metadata = {
  title: "Sector Expertise",
  description: "Infrastructure, energy, water, logistics, real estate, industrials and growth businesses across Africa.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sector Expertise"
        title="We know the industries we work in."
        lead="Our relationships span the sectors that keep Africa's economy running. That helps us spot opportunities early and structure deals around how each industry really finances itself."
        image={IMG.handshake}
        imagePosition="center 40%"
      />
      <SectorsGrid intro={false} />
      <NextPage href="/why-syndicate" label="Why Syndicate" title="What we offer investors, businesses and governments" />
      <CtaBand />
    </>
  );
}
