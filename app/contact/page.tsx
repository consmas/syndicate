import type { Metadata } from "next";
import { IMG } from "../_site/data";
import { ContactDetails, PageHero } from "../_site/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Syndicate Investment Advisory, Independence Avenue, Accra, Ghana.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Have a project in mind? Let's talk."
        lead="Whether you are a company looking for capital, a government looking for a transaction partner, or an investor looking for access to Africa's private markets, we would like to hear from you."
        image={IMG.analyst}
        imagePosition="center 30%"
      />
      <ContactDetails />
    </>
  );
}
