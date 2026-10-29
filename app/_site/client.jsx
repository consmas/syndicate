"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoFull } from "./brand";
import { NAV } from "./data";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="nav-inner">
        <Link className="logo" href="/" aria-label="Syndicate Investment Advisory home" onClick={close}>
          <LogoFull compact={scrolled} />
        </Link>
        <nav className="navlinks" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={isActive(n.href) ? "active" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link className={`navcta${isActive("/contact") ? " active" : ""}`} href="/contact" onClick={close}>
          Contact Us
        </Link>
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!open}>
        {[{ href: "/", label: "Home" }, ...NAV, { href: "/contact", label: "Contact" }].map((n, i) => (
          <Link
            key={n.href}
            href={n.href}
            onClick={close}
            className={(n.href === "/" ? pathname === "/" : isActive(n.href)) ? "active" : undefined}
            style={{ "--d": `${i * 0.04}s` }}
          >
            {n.label}
            <span className="arr">→</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

// Adds `.in` to every [data-reveal] element as it scrolls into view; re-runs on each route change.
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    document.documentElement.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

export function CountUp({ to, duration = 1200, delay = 900 }) {
  const [n, setN] = useState(to);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let raf;
    const start = performance.now() + delay;
    const tick = (t) => {
      const p = Math.min(Math.max((t - start) / duration, 0), 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, delay]);

  return n;
}
