"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoFull } from "./brand";
import { EMAIL, NAV } from "./data";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
            <Link
              key={n.href}
              href={n.href}
              className={isActive(n.href) ? "active" : undefined}
              aria-current={isActive(n.href) ? "page" : undefined}
            >
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
      <div className="scroll-progress" ref={progress} aria-hidden="true" />
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

const ROLES = [
  "A company looking for capital",
  "A government or public institution",
  "An investor",
  "Something else",
];

// No mail backend: the form composes the enquiry in the visitor's own email app.
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k) => String(f.get(k) || "").trim();
    const org = get("organisation");
    const subject = `Enquiry from ${get("name")}${org ? ` (${org})` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      ...(org ? [`Organisation: ${org}`] : []),
      `Email: ${get("email")}`,
      ...(get("phone") ? [`Phone: ${get("phone")}`] : []),
      `I am: ${get("role")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="enquiry" onSubmit={onSubmit}>
      <div className="field-row">
        <label className="field">
          <span>Full name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label className="field">
          <span>
            Organisation <em>optional</em>
          </span>
          <input name="organisation" autoComplete="organization" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="field">
          <span>
            Phone <em>optional</em>
          </span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <fieldset className="field roles">
        <legend>I am</legend>
        <div>
          {ROLES.map((r, i) => (
            <label key={r} className="role">
              <input type="radio" name="role" value={r} defaultChecked={i === 0} />
              <span>{r}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="field">
        <span>How can we help?</span>
        <textarea name="message" rows={5} required placeholder="Tell us about the business, project or investment you have in mind." />
      </label>
      <div className="form-foot">
        <button type="submit" className="btn btn-primary">
          Send enquiry <span className="arr">→</span>
        </button>
        <p className="form-note" role="status">
          {sent ? (
            <>
              Your email app should now be open with your message ready to send. If it didn&apos;t open, email us at{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </>
          ) : (
            "Sending opens your email app with your enquiry ready to go."
          )}
        </p>
      </div>
    </form>
  );
}
