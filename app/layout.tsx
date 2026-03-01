import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syndicate Investment Advisory Ltd",
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
      <body>{children}</body>
    </html>
  );
}
