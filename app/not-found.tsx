import Link from "next/link";
import { NAV } from "./_site/data";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="wrap">
        <span className="eyebrow">Error 404</span>
        <h1>This page has moved, or never existed.</h1>
        <p>The link may be out of date. These pages will get you back on track:</p>
        <div className="nf-links">
          <Link href="/">Home</Link>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </section>
  );
}
