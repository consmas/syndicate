import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import "./syndicate.css";
import { Header, Reveal } from "./_site/client";
import { EMAIL, PHONE, SITE_URL } from "./_site/data";
import { Footer } from "./_site/sections";

const display = Fraunces({ subsets: ["latin"], axes: ["opsz"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const logo = DM_Sans({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-logo", display: "swap" });

const DESCRIPTION =
  "Syndicate Investment Advisory helps businesses, developers and governments across Africa build the deals that attract long-term investors, across private credit, real assets and private equity.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Syndicate Investment Advisory | Private credit, real assets & private equity in Africa",
    template: "%s | Syndicate Investment Advisory",
  },
  description: DESCRIPTION,
  applicationName: "Syndicate Investment Advisory",
  openGraph: {
    type: "website",
    siteName: "Syndicate Investment Advisory",
    locale: "en_GB",
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: "#242852",
};

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Syndicate Investment Advisory Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logo.png`,
  description: DESCRIPTION,
  email: EMAIL,
  telephone: PHONE.href.replace("tel:", ""),
  areaServed: "Africa",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9th Floor, Business Emporium, Movenpick Ambassador Hotel, Independence Avenue",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${logo.variable}`}>
      {/* Extensions such as ColorZilla add attributes to <body> before hydration; ignore those (one level deep only). */}
      <body suppressHydrationWarning>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Reveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
        />
      </body>
    </html>
  );
}
