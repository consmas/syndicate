import type { Metadata } from "next";
import "./globals.css";
import "./syndicate.css";
import { Header, Reveal } from "./_site/client";
import { Footer } from "./_site/sections";

export const metadata: Metadata = {
  title: {
    default: "Syndicate Investment Advisory Ltd",
    template: "%s | Syndicate Investment Advisory",
  },
  description:
    "Specialist financial advisory focused on alternative investments and structured finance across Africa.",
  icons: {
    icon: "/assets/images/logo.png",
    shortcut: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=DM+Sans:wght@500;700&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
