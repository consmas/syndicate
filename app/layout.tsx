import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syndicate Investment Advisory Ltd",
  description:
    "Independent investment advisory firm providing portfolio strategy, wealth planning, and risk oversight.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/color-switcher-design.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/appear.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/tilt.jquery.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.paroller.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/backtotop.js" strategy="afterInteractive" />
        <Script src="/assets/js/odometer.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallax-scroll.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollToPlugin.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/nav-tool.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.marquee.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
        <Script src="/assets/js/color-settings.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
