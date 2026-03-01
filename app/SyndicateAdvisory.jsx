"use client";

import { useState, useEffect, useRef } from "react";

const C = {
  navy: "#0B1C2E",
  navyLight: "#132B42",
  blue: "#0077C8",
  blueLight: "#0091F7",
  bluePale: "#E8F4FD",
  bg: "#FAFBFC",
  surface: "#F1F3F5",
  white: "#FFFFFF",
  dark: "#0D1117",
  text: "#374151",
  muted: "#6B7280",
  border: "#E5E7EB",
  borderLight: "#F3F4F6",
  gold: "#D4A843",
};

const F = {
  heading: "'Source Serif 4', 'Georgia', serif",
  body: "'General Sans', 'DM Sans', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

function useInView(t = 0.1) {
  const r = useRef(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const el = r.current;
    if (!el) return undefined;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          o.unobserve(el);
        }
      },
      { threshold: t }
    );
    o.observe(el);
    return () => o.disconnect();
  }, [t]);

  return [r, v];
}

function R({ children, d = 0, y = 28, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.75s cubic-bezier(.22,1,.36,1) ${d}s, transform 0.75s cubic-bezier(.22,1,.36,1) ${d}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Counter({ end, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);

  useEffect(() => {
    if (!inView) return undefined;
    let c = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      c += step;
      if (c >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(c));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function LogoIcon({ size = 36, light = false }) {
  const navy = light ? "#FFFFFF" : C.navy;
  const blue = C.blue;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="28" width="7" height="14" rx="1" fill={navy} opacity="0.7" />
      <rect x="15" y="20" width="7" height="22" rx="1" fill={navy} opacity="0.85" />
      <rect x="24" y="12" width="7" height="30" rx="1" fill={navy} />
      <path d="M28 10L36 4L38 12L28 10Z" fill={blue} />
      <path d="M26 14L36 5" stroke={blue} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function LogoFull({ light = false, compact = false }) {
  const textColor = light ? "#FFFFFF" : C.navy;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: compact ? 8 : 10, cursor: "pointer" }}>
      <LogoIcon size={compact ? 30 : 36} light={light} />
      <div>
        <div
          style={{
            fontFamily: F.body,
            fontSize: compact ? 15 : 17,
            fontWeight: 700,
            color: textColor,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          Syndicate
        </div>
        <div
          style={{
            fontFamily: F.body,
            fontSize: compact ? 8 : 9.5,
            fontWeight: 500,
            color: C.blue,
            letterSpacing: 1.8,
            textTransform: "uppercase",
            marginTop: 1,
          }}
        >
          Investment Advisory
        </div>
      </div>
    </div>
  );
}

function Tag({ children, blue }) {
  return (
    <span
      style={{
        fontFamily: F.mono,
        fontSize: 10,
        letterSpacing: 2.5,
        textTransform: "uppercase",
        fontWeight: 500,
        color: blue ? C.blue : C.blue,
      }}
    >
      {children}
    </span>
  );
}

function Btn({ children, onClick, variant = "primary", style: s = {}, type = "button" }) {
  const [h, setH] = useState(false);
  const isPrimary = variant === "primary";
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontFamily: F.body,
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: 0.5,
        padding: "14px 32px",
        borderStyle: "solid",
        borderWidth: isPrimary ? 0 : 1.5,
        borderColor: isPrimary ? "transparent" : h ? C.blue : C.border,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        transition: "all 0.35s cubic-bezier(.22,1,.36,1)",
        ...(isPrimary
          ? {
              background: h ? C.blueLight : C.blue,
              color: C.white,
              boxShadow: h ? "0 8px 28px rgba(0,119,200,0.3)" : "0 2px 8px rgba(0,119,200,0.15)",
              transform: h ? "translateY(-1px)" : "none",
            }
          : {
              background: "transparent",
              color: h ? C.blue : C.navy,
            }),
        ...s,
      }}
    >
      {children}
    </button>
  );
}

function Nav({ page, go }) {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const pages = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "mandates", label: "Mandates" },
    { id: "partnerships", label: "Partnerships" },
    { id: "contact", label: "Contact" },
  ];
  const isHeroPage = page === "home" && !scrolled;
  const navText = isHeroPage ? "rgba(255,255,255,0.8)" : C.muted;
  const navActive = isHeroPage ? "#fff" : C.blue;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: scrolled ? "10px 28px" : "16px 28px",
          background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "none",
          transition: "all 0.4s ease",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div onClick={() => go("home")}>
          <LogoFull light={isHeroPage} compact={scrolled} />
        </div>

        <div className="dn" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {pages.map((p) => (
            <button
              key={p.id}
              onClick={() => go(p.id)}
              style={{
                fontFamily: F.body,
                fontSize: 13,
                fontWeight: page === p.id ? 600 : 400,
                color: page === p.id ? navActive : navText,
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                padding: 0,
              }}
            >
              {p.label}
            </button>
          ))}
          <Btn onClick={() => go("contact")} style={{ padding: "9px 24px", fontSize: 12 }}>
            Get in Touch
          </Btn>
        </div>

        <button
          className="mn"
          onClick={() => setMob(!mob)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            padding: 4,
            zIndex: 201,
          }}
          aria-label="Toggle navigation"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 22,
                height: 1.5,
                background: mob ? C.navy : isHeroPage ? "#fff" : C.navy,
                transition: "all 0.3s",
                transform: mob
                  ? i === 0
                    ? "rotate(45deg) translate(4px,4px)"
                    : i === 2
                      ? "rotate(-45deg) translate(4px,-4px)"
                      : "scaleX(0)"
                  : "none",
                opacity: mob && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 199,
          background: C.white,
          transform: mob ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(.22,1,.36,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {pages.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              go(p.id);
              setMob(false);
            }}
            style={{
              fontFamily: F.heading,
              fontSize: 28,
              fontWeight: 400,
              color: page === p.id ? C.blue : C.navy,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
    </>
  );
}

function HomePage({ go }) {
  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(165deg, ${C.navy} 0%, ${C.navyLight} 50%, #0F2A40 100%)`,
          padding: "140px 28px 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(0,119,200,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "5%",
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(0,119,200,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative" }}>
          <R d={0.1}>
            <Tag>Syndicate Investment Advisory Ltd.</Tag>
          </R>
          <R d={0.25}>
            <h1
              style={{
                fontFamily: F.heading,
                fontSize: "clamp(32px, 5.5vw, 64px)",
                color: C.white,
                lineHeight: 1.12,
                fontWeight: 400,
                margin: "18px 0 0",
                maxWidth: 750,
              }}
            >
              Shaping Capital.
              <br />
              Structuring Opportunity.
              <br />
              <span style={{ color: C.blue }}>Driving Sustainable Growth.</span>
            </h1>
          </R>
          <R d={0.45}>
            <p
              style={{
                fontFamily: F.body,
                fontSize: "clamp(15px, 1.6vw, 18px)",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                maxWidth: 540,
                margin: "24px 0 40px",
                fontWeight: 300,
              }}
            >
              A specialist financial advisory firm at the forefront of alternative investments and
              innovative financial structuring across Africa.
            </p>
          </R>
          <R d={0.6}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn onClick={() => go("about")}>
                About Us <span style={{ fontSize: 15 }}>→</span>
              </Btn>
              <Btn
                variant="outline"
                onClick={() => go("services")}
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}
              >
                Our Services
              </Btn>
            </div>
          </R>

          <R d={0.8}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: 32,
                marginTop: 80,
                paddingTop: 36,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {[
                { n: 119, p: "$", s: "M+", l: "Active Mandates" },
                { n: 7, p: "", s: "", l: "Service Lines" },
                { n: 5, p: "", s: "+", l: "Sectors Covered" },
              ].map((s, i) => (
                <R key={i} d={0.9 + i * 0.1}>
                  <div>
                    <div
                      style={{
                        fontFamily: F.heading,
                        fontSize: "clamp(28px, 3.5vw, 40px)",
                        color: C.white,
                        fontWeight: 400,
                      }}
                    >
                      <Counter end={s.n} prefix={s.p} suffix={s.s} />
                    </div>
                    <div
                      style={{
                        fontFamily: F.mono,
                        fontSize: 9,
                        letterSpacing: 2,
                        color: "rgba(255,255,255,0.35)",
                        textTransform: "uppercase",
                        marginTop: 6,
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                </R>
              ))}
            </div>
          </R>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              fontFamily: F.mono,
              fontSize: 8,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 28,
              background: "linear-gradient(to bottom, rgba(0,119,200,0.5), transparent)",
              animation: "pulse 2s infinite",
            }}
          />
        </div>
      </section>

      <section style={{ padding: "80px 28px", background: C.white }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <R>
            <Tag>Our Expertise</Tag>
          </R>
          <R d={0.1}>
            <h2
              style={{
                fontFamily: F.heading,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: C.navy,
                fontWeight: 400,
                lineHeight: 1.2,
                margin: "14px 0 20px",
              }}
            >
              Where strategy meets finance,
              <br />
              and insight creates opportunity.
            </h2>
          </R>
          <R d={0.15}>
            <p
              style={{
                fontFamily: F.body,
                fontSize: 16,
                color: C.text,
                lineHeight: 1.8,
                maxWidth: 600,
                marginBottom: 48,
              }}
            >
              We design, structure, and execute complex transactions that connect institutional
              capital with high-impact opportunities in infrastructure, energy, and real assets.
            </p>
          </R>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
            {[
              "M&A Advisory",
              "Infrastructure Finance",
              "Climate Finance",
              "Private Debt",
              "Private Equity",
              "Structured Finance",
              "Financial Modelling & Valuation",
            ].map((s, i) => (
              <R key={i} d={i * 0.06}>
                <ExpertiseChip label={s} onClick={() => go("services")} />
              </R>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 28px", background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <R>
            <Tag>Institutional Partnerships</Tag>
            <h2
              style={{
                fontFamily: F.heading,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: C.navy,
                fontWeight: 400,
                lineHeight: 1.25,
                margin: "14px 0 20px",
              }}
            >
              Capital Raising arm of CIPA Holdings Group
            </h2>
            <p
              style={{
                fontFamily: F.body,
                fontSize: 16,
                color: C.text,
                lineHeight: 1.8,
                maxWidth: 680,
                marginBottom: 32,
              }}
            >
              Syndicate leverages the Group&apos;s strategic collaboration with ABSA Bank Ghana and
              other partner financial institutions to expand access to climate-aligned and
              sustainability-linked financing across Ghana and the wider West African region.
            </p>
            <Btn variant="outline" onClick={() => go("partnerships")}>
              Learn More <span style={{ fontSize: 15 }}>→</span>
            </Btn>
          </R>
        </div>
      </section>

      <section style={{ padding: "64px 28px", background: C.navy, textAlign: "center" }}>
        <R>
          <p
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(20px, 3vw, 30px)",
              color: C.white,
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.5,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Syndicate Investment Advisory Ltd.
            <br />
            <span style={{ color: C.blue }}>Where Capital Meets Strategy.</span>
          </p>
        </R>
      </section>

      <section style={{ padding: "80px 28px", background: C.white, textAlign: "center" }}>
        <R>
          <Tag>Get Started</Tag>
          <h2
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(24px, 3vw, 36px)",
              color: C.navy,
              fontWeight: 400,
              margin: "14px 0 16px",
            }}
          >
            Ready to explore your capital strategy?
          </h2>
          <p
            style={{
              fontFamily: F.body,
              fontSize: 16,
              color: C.muted,
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto 28px",
            }}
          >
            Let&apos;s discuss how we can structure and execute the right solution for your business.
          </p>
          <Btn onClick={() => go("contact")}>
            Contact Us <span>→</span>
          </Btn>
        </R>
      </section>
    </>
  );
}

function ExpertiseChip({ label, onClick }) {
  const [h, setH] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "20px 24px",
        background: h ? C.bluePale : C.bg,
        borderLeft: `3px solid ${h ? C.blue : "transparent"}`,
        cursor: "pointer",
        transition: "all 0.35s ease",
      }}
    >
      <span style={{ fontFamily: F.body, fontSize: 15, fontWeight: 500, color: h ? C.blue : C.navy }}>
        {label}
      </span>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero label="About Us" title="Insight. Integrity. Execution." />

      <section style={{ padding: "80px 28px", background: C.white }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <R>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.9, marginBottom: 20 }}>
              Syndicate Investment Advisory Ltd. is an independent financial advisory firm providing
              strategic and transaction support across M&amp;A, infrastructure finance, climate
              finance, private capital, and structured finance.
            </p>
          </R>
          <R d={0.1}>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.9, marginBottom: 20 }}>
              We work with corporates, investors, and development institutions to design and execute
              solutions that unlock value, mobilize capital, and deliver sustainable impact. Our
              expertise lies in bridging the gap between opportunity and capital, combining
              analytical depth, market insight, and execution excellence.
            </p>
          </R>
          <R d={0.15}>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.9, marginBottom: 20 }}>
              At Syndicate, every engagement is driven by a disciplined, data-led approach. Whether
              structuring a complex infrastructure transaction, valuing a business, or guiding
              cross-border investments, we ensure each recommendation is grounded in sound financial
              logic and practical deliverability.
            </p>
          </R>
          <R d={0.2}>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.9 }}>
              Our commitment to integrity, innovation, and client success defines who we are. We
              believe the best outcomes come from clear thinking, rigorous analysis, and
              collaborative partnerships built on trust.
            </p>
          </R>
        </div>
      </section>

      <section style={{ padding: "80px 28px", background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <R>
            <Tag>Our Values</Tag>
          </R>
          <R d={0.05}>
            <h2 style={{ fontFamily: F.heading, fontSize: 32, color: C.navy, fontWeight: 400, margin: "12px 0 40px" }}>
              What drives every engagement
            </h2>
          </R>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {[
              {
                icon: "◈",
                title: "Analytical Depth",
                desc: "Data-driven insights and rigorous financial analysis underpin every recommendation.",
              },
              {
                icon: "◇",
                title: "Integrity First",
                desc: "Independent advice, transparent processes, and an unwavering commitment to client interests.",
              },
              {
                icon: "△",
                title: "Execution Excellence",
                desc: "From strategy through financial close, disciplined, hands-on execution at every stage.",
              },
              {
                icon: "○",
                title: "Sustainable Impact",
                desc: "Solutions that are financially sound, developmentally meaningful, and commercially sustainable.",
              },
            ].map((v, i) => (
              <R key={i} d={i * 0.08}>
                <div style={{ padding: "32px 28px", background: C.white, border: `1px solid ${C.border}`, transition: "all 0.3s" }}>
                  <div style={{ fontFamily: F.body, fontSize: 24, color: C.blue, marginBottom: 14 }}>{v.icon}</div>
                  <h4 style={{ fontFamily: F.heading, fontSize: 19, color: C.navy, fontWeight: 400, marginBottom: 8 }}>{v.title}</h4>
                  <p style={{ fontFamily: F.body, fontSize: 14, color: C.muted, lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 28px", background: C.navy, textAlign: "center" }}>
        <R>
          <p
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(18px, 2.5vw, 26px)",
              color: C.white,
              fontStyle: "italic",
              lineHeight: 1.5,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Syndicate Investment Advisory Ltd.
            <br />
            <span style={{ color: C.blue }}>Advisors for a changing investment landscape.</span>
          </p>
        </R>
      </section>
    </>
  );
}

function ServicesPage() {
  const services = [
    {
      title: "M&A Advisory",
      text: "We provide comprehensive M&A advisory services to corporates, private equity investors, and institutional clients. We deliver end-to-end transaction support, from strategic planning and target identification to valuation, due diligence, negotiation, and post-merger integration. Our approach combines rigorous financial analysis, sector insights, and deal structuring expertise to help clients maximize value, manage risks, and achieve successful outcomes in both buy-side and sell-side mandates.",
    },
    {
      title: "Infrastructure Finance",
      text: "We advise on the structuring, financing, and delivery of critical infrastructure across energy, transport, water, digital, and social sectors. Our team bridges the gap between public policy objectives and private capital requirements, helping sponsors, lenders, and governments structure bankable projects. Syndicate brings proven experience in project finance, PPP frameworks, concession design, and financial close execution, ensuring projects are technically sound, commercially viable, and sustainably financed.",
    },
    {
      title: "Climate Finance",
      text: "Syndicate supports institutions and governments to mobilize capital towards climate-resilient and low-carbon investments. We design and structure green and sustainability-linked financing instruments that align with global standards. Our expertise spans renewable energy, sustainable agriculture, circular economy, and carbon markets. We help clients access blended finance, concessional funding, and climate investment facilities to achieve both financial and environmental impact.",
    },
    {
      title: "Private Debt",
      text: "We provide specialist advisory for the structuring and placement of private credit instruments across mezzanine, senior secured, and asset-backed financing. Syndicate assists corporates, fund managers, and institutional investors in originating, negotiating, and executing private debt transactions that meet both yield and risk objectives. Our deep understanding of local capital markets, regulatory frameworks, and investor appetite enables us to bridge funding gaps where traditional financing falls short.",
    },
    {
      title: "Private Equity",
      text: "Our Private Equity Advisory service supports corporates and growth-stage businesses seeking to raise institutional equity capital. We help clients prepare and position their businesses for investment by conducting valuation assessments, optimizing governance and financial transparency, and structuring transactions that align with investor expectations. Leveraging our network of regional and international private equity funds, we connect businesses with the right partners and guide them through every stage of the fundraising process.",
    },
    {
      title: "Structured Finance",
      text: "Our structured finance practice delivers innovative, risk-mitigated financing solutions tailored to complex funding challenges. We design bespoke structures including securitizations, hybrid instruments, credit enhancements, and off-balance-sheet vehicles. Syndicate&apos;s expertise in asset-backed, receivables-based, and infrastructure-linked structures enables clients to unlock liquidity, optimize balance sheets, and access diverse pools of capital in domestic and international markets.",
    },
    {
      title: "Financial Modelling & Valuation",
      text: "Syndicate provides robust financial modelling and valuation services that support decision-making, transactions, and strategic planning. We build dynamic, transparent models that integrate key operational, financial, and macroeconomic drivers to test scenarios and guide capital allocation. Our valuation services adhere to international standards and cover business enterprises, project assets, and financial instruments.",
    },
  ];

  return (
    <>
      <PageHero label="Products & Services" title="Comprehensive advisory and structuring expertise" />

      <section style={{ padding: "80px 28px", background: C.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <R>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.85, marginBottom: 56, maxWidth: 700 }}>
              Syndicate provides comprehensive financial advisory and structuring expertise across
              multiple disciplines, enabling clients to achieve clarity, confidence, and
              competitive advantage in their investment decisions.
            </p>
          </R>

          {services.map((s, i) => (
            <R key={i} d={i * 0.05}>
              <div
                style={{
                  padding: "40px 0",
                  borderBottom: i < services.length - 1 ? `1px solid ${C.border}` : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
                  <span style={{ fontFamily: F.mono, fontSize: 11, color: C.blue, letterSpacing: 1, fontWeight: 500 }}>
                    0{i + 1}
                  </span>
                  <h3 style={{ fontFamily: F.heading, fontSize: "clamp(22px, 2.5vw, 28px)", color: C.navy, fontWeight: 400 }}>
                    {s.title}
                  </h3>
                </div>
                <p style={{ fontFamily: F.body, fontSize: 15, color: C.text, lineHeight: 1.85, maxWidth: 720, paddingLeft: 38 }}>
                  {s.text}
                </p>
              </div>
            </R>
          ))}
        </div>
      </section>
    </>
  );
}

function MandatesPage() {
  const mandates = [
    {
      name: "Triangle Mall Development",
      value: "USD 15 million",
      desc: "Advising on the structuring and capital raise for a landmark mixed-use retail and commercial centre. The engagement covers project financing strategy, investor placement, and asset-holding structure optimization.",
    },
    {
      name: "University Hostel Development Programme",
      value: "USD 30 million",
      tag: "aggregate",
      desc: "Advising a consortium on developing purpose-built student accommodation across multiple tertiary institutions under an innovative REIT framework. Syndicate&apos;s role includes structuring, financial modelling, and investor engagement to establish a scalable real estate investment platform.",
    },
    {
      name: "Solar-Powered Data Centre",
      value: "USD 14 million",
      desc: "Providing transaction and structuring advisory for a renewable-powered data infrastructure project. The mandate includes financial modelling, risk structuring, and capital sourcing under a blended finance framework.",
    },
    {
      name: "C&I Solar Portfolio",
      value: "USD 50 million",
      tag: "aggregate",
      desc: "Advising on the structuring and financing of distributed solar projects for industrial and commercial off-takers. The engagement focuses on scalable project financing, credit enhancement, and sustainable investment packaging.",
    },
    {
      name: "Mining Equipment Financing",
      value: "USD 10 million",
      desc: "Advising a mining services company on debt structuring and capital sourcing for specialized equipment procurement. The engagement covers lender engagement, financial structuring, and credit analysis to support long-term asset financing.",
    },
  ];

  return (
    <>
      <PageHero label="Track Record" title="Representative Mandates & Active Engagements" />

      <section style={{ padding: "80px 28px", background: C.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <R>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.85, marginBottom: 16, maxWidth: 700 }}>
              Syndicate is currently advising on a portfolio of transactions that reflect our
              leadership in alternative investments, structured finance, and sustainable capital
              solutions.
            </p>
            <p style={{ fontFamily: F.body, fontSize: 14, color: C.muted, lineHeight: 1.7, marginBottom: 56, fontStyle: "italic" }}>
              Due to confidentiality obligations, only representative summaries are provided.
            </p>
          </R>

          {mandates.map((m, i) => (
            <R key={i} d={i * 0.06}>
              <MandateCard {...m} index={i} />
            </R>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 28px", background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <R>
            <Tag>Our Mandate Portfolio Demonstrates Expertise In</Tag>
          </R>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              "Designing bankable capital structures for mid-market and infrastructure projects.",
              "Bridging private and institutional capital through innovative investment vehicles.",
              "Integrating climate-aligned finance and sustainability principles into project development.",
              "Delivering independent, data-driven financial models and valuations across sectors.",
            ].map((t, i) => (
              <R key={i} d={i * 0.08}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.blue, marginTop: 8, flexShrink: 0 }} />
                  <p style={{ fontFamily: F.body, fontSize: 15, color: C.text, lineHeight: 1.75 }}>{t}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MandateCard({ name, value, tag, desc }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "32px",
        marginBottom: 16,
        background: h ? C.bluePale : C.bg,
        border: `1px solid ${h ? "rgba(0,119,200,0.15)" : C.border}`,
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
        <h3 style={{ fontFamily: F.heading, fontSize: 20, color: C.navy, fontWeight: 400 }}>{name}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: F.heading, fontSize: 20, color: C.blue, fontWeight: 400 }}>{value}</span>
          {tag && (
            <span
              style={{
                fontFamily: F.mono,
                fontSize: 9,
                color: C.muted,
                background: C.surface,
                padding: "3px 8px",
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          )}
        </div>
      </div>
      <p style={{ fontFamily: F.body, fontSize: 14, color: C.text, lineHeight: 1.8 }}>{desc}</p>
    </div>
  );
}

function PartnershipsPage() {
  return (
    <>
      <PageHero label="Partnerships" title="Strategic Institutional Partnerships" />

      <section style={{ padding: "80px 28px", background: C.white }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <R>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.9, marginBottom: 20 }}>
              As the Capital Raising arm of <strong style={{ color: C.navy }}>CIPA Holdings Group</strong>,
              Syndicate Investment Advisory leverages the Group&apos;s institutional relationships and
              ecosystem capabilities to expand access to capital, technical expertise, and
              sustainable finance opportunities.
            </p>
          </R>
          <R d={0.1}>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.9, marginBottom: 20 }}>
              Through CIPA Holdings, we benefit from a strategic collaboration with <strong style={{ color: C.navy }}>ABSA Bank Ghana</strong> focused
              on climate finance and sustainability-linked investments. This partnership underpins
              the design and structuring of innovative financing solutions that mobilize private
              capital toward green and transition projects.
            </p>
          </R>
          <R d={0.15}>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.9, marginBottom: 20 }}>
              In addition, Syndicate continues to build direct partnerships with select financial
              institutions and investment platforms to establish specialized funding vehicles,
              including a climate-focused private debt initiative designed to finance sustainable
              infrastructure and mid-market enterprises.
            </p>
          </R>
          <R d={0.2}>
            <p style={{ fontFamily: F.body, fontSize: 17, color: C.text, lineHeight: 1.9 }}>
              These collaborations strengthen our execution capacity and reinforce our position as a
              trusted advisor at the intersection of capital, sustainability, and innovation across
              Ghana and the broader West African region.
            </p>
          </R>
        </div>
      </section>

      <section style={{ padding: "80px 28px", background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <R>
            <Tag>Key Partnerships</Tag>
          </R>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginTop: 32,
            }}
          >
            {[
              {
                org: "CIPA Holdings Group",
                role: "Parent Group",
                desc: "Strategic platform for capital raising, ecosystem access, and institutional relationships across West Africa.",
              },
              {
                org: "ABSA Bank Ghana",
                role: "Banking Partner",
                desc: "Climate finance and sustainability-linked investment collaboration enabling innovative green financing solutions.",
              },
              {
                org: "Partner Institutions",
                role: "Capital Partners",
                desc: "Specialized funding vehicles for sustainable infrastructure and mid-market enterprise financing.",
              },
            ].map((p, i) => (
              <R key={i} d={i * 0.1}>
                <div style={{ padding: "32px 28px", background: C.white, border: `1px solid ${C.border}`, height: "100%" }}>
                  <div
                    style={{
                      fontFamily: F.mono,
                      fontSize: 9,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: C.blue,
                      marginBottom: 12,
                    }}
                  >
                    {p.role}
                  </div>
                  <h4 style={{ fontFamily: F.heading, fontSize: 20, color: C.navy, fontWeight: 400, marginBottom: 10 }}>
                    {p.org}
                  </h4>
                  <p style={{ fontFamily: F.body, fontSize: 14, color: C.muted, lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const up = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const inp = {
    width: "100%",
    padding: "14px 0",
    fontFamily: F.body,
    fontSize: 15,
    color: C.navy,
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${C.border}`,
    outline: "none",
    transition: "border-color 0.3s",
  };

  return (
    <>
      <PageHero label="Contact" title="Get in touch with our team" />

      <section style={{ padding: "80px 28px", background: C.white }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64 }}>
            <R>
              {sent ? (
                <div style={{ padding: "56px 32px", background: C.bg, border: `1px solid ${C.border}`, textAlign: "center" }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: C.bluePale,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      color: C.blue,
                      fontSize: 22,
                    }}
                  >
                    ✓
                  </div>
                  <h3 style={{ fontFamily: F.heading, fontSize: 24, color: C.navy, fontWeight: 400, marginBottom: 8 }}>
                    Message sent
                  </h3>
                  <p style={{ fontFamily: F.body, fontSize: 15, color: C.muted }}>
                    We&apos;ll respond within one business day.
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <h3 style={{ fontFamily: F.heading, fontSize: 24, color: C.navy, fontWeight: 400, marginBottom: 8 }}>
                    Send us a message
                  </h3>
                  {[
                    { k: "name", l: "Full Name", t: "text" },
                    { k: "email", l: "Email", t: "email" },
                    { k: "company", l: "Company / Organization", t: "text" },
                    { k: "subject", l: "Subject", t: "text" },
                  ].map((f) => (
                    <div key={f.k}>
                      <label
                        style={{
                          fontFamily: F.mono,
                          fontSize: 9,
                          letterSpacing: 2,
                          textTransform: "uppercase",
                          color: C.muted,
                          display: "block",
                          marginBottom: 4,
                        }}
                      >
                        {f.l}
                      </label>
                      <input
                        type={f.t}
                        value={form[f.k]}
                        onChange={(e) => up(f.k, e.target.value)}
                        style={inp}
                        onFocus={(e) => {
                          e.target.style.borderBottomColor = C.blue;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderBottomColor = C.border;
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      style={{
                        fontFamily: F.mono,
                        fontSize: 9,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: C.muted,
                        display: "block",
                        marginBottom: 4,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => up("message", e.target.value)}
                      rows={4}
                      style={{ ...inp, resize: "vertical", fontFamily: F.body }}
                      onFocus={(e) => {
                        e.target.style.borderBottomColor = C.blue;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderBottomColor = C.border;
                      }}
                    />
                  </div>
                  <Btn onClick={() => setSent(true)} style={{ alignSelf: "flex-start" }}>
                    Send Message <span>→</span>
                  </Btn>
                </div>
              )}
            </R>

            <R d={0.15}>
              <div>
                <h3 style={{ fontFamily: F.heading, fontSize: 24, color: C.navy, fontWeight: 400, marginBottom: 28 }}>
                  Our Office
                </h3>

                <div style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      fontFamily: F.mono,
                      fontSize: 9,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: C.blue,
                      marginBottom: 8,
                    }}
                  >
                    Address
                  </div>
                  <p style={{ fontFamily: F.body, fontSize: 15, color: C.text, lineHeight: 1.7 }}>
                    9th Floor, Business Emporium
                    <br />
                    Movenpick Ambassador Hotel
                    <br />
                    Independence Avenue
                    <br />
                    Accra, Ghana
                  </p>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      fontFamily: F.mono,
                      fontSize: 9,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: C.blue,
                      marginBottom: 8,
                    }}
                  >
                    Telephone
                  </div>
                  <a
                    href="tel:+233302633294"
                    style={{
                      fontFamily: F.body,
                      fontSize: 15,
                      color: C.navy,
                      textDecoration: "none",
                      borderBottom: `1px solid ${C.border}`,
                      paddingBottom: 2,
                    }}
                  >
                    +233 (0)30 263 3294
                  </a>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      fontFamily: F.mono,
                      fontSize: 9,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: C.blue,
                      marginBottom: 8,
                    }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:info@syndicateadvisory.com"
                    style={{
                      fontFamily: F.body,
                      fontSize: 15,
                      color: C.navy,
                      textDecoration: "none",
                      borderBottom: `1px solid ${C.border}`,
                      paddingBottom: 2,
                    }}
                  >
                    info@syndicateadvisory.com
                  </a>
                </div>

                <div style={{ marginTop: 32, padding: "48px 24px", background: C.bg, border: `1px solid ${C.border}`, textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }} aria-hidden="true">
                    📍
                  </div>
                  <p style={{ fontFamily: F.body, fontSize: 13, color: C.muted }}>Independence Avenue, Accra</p>
                </div>
              </div>
            </R>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({ label, title }) {
  return (
    <section
      style={{
        padding: "152px 28px 72px",
        background: `linear-gradient(165deg, ${C.navy} 0%, ${C.navyLight} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(0,119,200,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
        <R>
          <Tag>{label}</Tag>
        </R>
        <R d={0.15}>
          <h1
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(28px, 4.5vw, 48px)",
              color: C.white,
              fontWeight: 400,
              lineHeight: 1.15,
              marginTop: 12,
              maxWidth: 650,
            }}
          >
            {title}
          </h1>
        </R>
      </div>
    </section>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ padding: "56px 28px 28px", background: C.navy, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <LogoFull light />
            <p
              style={{
                fontFamily: F.body,
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                marginTop: 16,
                maxWidth: 260,
              }}
            >
              Specialist financial advisory at the forefront of alternative investments and
              innovative financial structuring across Africa.
            </p>
          </div>
          {[
            {
              t: "Company",
              links: [
                { l: "About Us", id: "about" },
                { l: "Services", id: "services" },
                { l: "Mandates", id: "mandates" },
                { l: "Partnerships", id: "partnerships" },
                { l: "Contact", id: "contact" },
              ],
            },
            {
              t: "Expertise",
              links: [
                { l: "M&A Advisory" },
                { l: "Infrastructure Finance" },
                { l: "Climate Finance" },
                { l: "Private Debt" },
                { l: "Structured Finance" },
              ],
            },
            {
              t: "Contact",
              links: [
                { l: "info@syndicateadvisory.com" },
                { l: "+233 (0)30 263 3294" },
                { l: "Independence Avenue, Accra" },
                { l: "Ghana" },
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: F.mono,
                  fontSize: 9,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  color: C.blue,
                  marginBottom: 16,
                }}
              >
                {col.t}
              </div>
              {col.links.map((l, j) => (
                <div
                  key={j}
                  onClick={l.id ? () => go(l.id) : undefined}
                  style={{
                    fontFamily: F.body,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: 9,
                    cursor: l.id ? "pointer" : "default",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    if (l.id) e.target.style.color = "rgba(255,255,255,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    if (l.id) e.target.style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  {l.l}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Syndicate Investment Advisory Ltd. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Use", "Disclaimer"].map((l) => (
              <span key={l} style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SyndicateAdvisory({ initialPage = "home" }) {
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

  const go = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = {
    home: <HomePage go={go} />,
    about: <AboutPage />,
    services: <ServicesPage />,
    mandates: <MandatesPage />,
    partnerships: <PartnershipsPage />,
    contact: <ContactPage />,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        body { background: ${C.bg}; overflow-x: hidden; }
        ::selection { background: rgba(0,119,200,0.15); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${C.blue}; }
        @keyframes pulse { 0%,100%{opacity:0.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.2)} }
        @media (max-width: 768px) {
          .dn { display: none !important; }
          .mn { display: flex !important; }
        }
      `}</style>

      <Nav page={page} go={go} />
      <main style={{ minHeight: "100vh" }}>{pages[page] || <HomePage go={go} />}</main>
      <Footer go={go} />
    </>
  );
}
