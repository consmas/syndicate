import Link from "next/link";
import { LogoFull } from "./brand";
import { CountUp, EnquiryForm } from "./client";
import { AUDIENCES, EMAIL, FLOW, IMG, MAP_SRC, NAV, PHONE, PLATFORMS, SECTORS, VALUES } from "./data";
import { Media, MoreLink, Words, d } from "./ui";

const pad = (i) => String(i + 1).padStart(2, "0");

/* ============ HOME HERO ============ */
export function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <svg className="hero-line" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            className="area"
            d="M0 290 L120 270 L220 282 L340 240 L450 252 L560 205 L680 222 L790 170 L900 186 L1010 128 L1130 146 L1240 88 L1340 104 L1440 52 L1440 320 L0 320 Z"
          />
          <path
            className="stroke"
            pathLength="1"
            d="M0 290 L120 270 L220 282 L340 240 L450 252 L560 205 L680 222 L790 170 L900 186 L1010 128 L1130 146 L1240 88 L1340 104 L1440 52"
          />
        </svg>
      </div>

      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-pill">
              <span className="pulse" />
              Investment advisory · Accra, Ghana
            </span>
            <h1 className="hero-title">
              <Words text="We turn good businesses into" />
              <span className="w">
                <span style={{ "--i": 5 }}>
                  <em>investments</em>
                </span>
              </span>{" "}
              <Words text="that capital can back" from={6} />
            </h1>
            <p className="lead">
              Syndicate Investment Advisory helps businesses, developers and governments across Africa put
              together the deals that attract long-term investors. We work across private credit, real assets and
              private equity, and we stay with each transaction until it closes.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" href="/platforms">
                Explore Our Platforms <span className="arr">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <Media
              className="hero-media"
              src={IMG.handshake}
              alt="Two business partners shaking hands in front of market data screens"
              sizes="(max-width: 900px) 100vw, 400px"
              priority
            />
            <Media
              className="hero-media-2"
              src={IMG.analyst}
              alt="Syndicate analyst reviewing market data on a laptop"
              sizes="220px"
              priority
            />

            <div className="float-card journey-card">
              <div className="fc-head">
                <span className="pulse" />
                From first conversation to close
              </div>
              <ol>
                {FLOW.map((step, i) => (
                  <li key={step.title} style={{ "--s": i }}>
                    <span>{step.title}</span>
                    <i />
                  </li>
                ))}
              </ol>
              <div className="fc-foot">
                <span className="check">✓</span> Financial close
              </div>
            </div>

            <div className="float-card focus-card">
              <span className="fc-label">Three platforms</span>
              <div className="chips">
                {PLATFORMS.map((p) => (
                  <span key={p.num}>{p.name.join(" ")}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <div className="num">
              <CountUp to={3} />
            </div>
            <div className="lbl">Areas of focus: credit, real assets and equity</div>
          </div>
          <div>
            <div className="num">Start to close</div>
            <div className="lbl">We stay with every deal through financial close</div>
          </div>
          <div>
            <div className="num">Accra</div>
            <div className="lbl">Based in Ghana, working across the region</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ INNER PAGE HERO ============ */
export function PageHero({ eyebrow, title, lead = "", image, imagePosition = "center" }) {
  return (
    <section className="page-hero">
      <Media className="bg-media" src={image} sizes="100vw" priority style={{ objectPosition: imagePosition }} />
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">{eyebrow}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="hero-title">
          <Words text={title} />
        </h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

/* ============ ORIGINATION PIPELINE ============ */
export function Pipeline({ more = false }) {
  return (
    <section className="pipeline">
      <Media className="bg-media" src={IMG.screens} sizes="100vw" />
      <div className="wrap">
        <div data-reveal>
          <span className="eyebrow">Our Approach</span>
          <h2>Money isn&apos;t the hard part. Finding and shaping the right deal is.</h2>
          <p className="sub">This is how we take an opportunity from first conversation to funded deal.</p>
        </div>
        <div className="flow" data-reveal>
          <div className="flow-track">
            {FLOW.map((step, i) => (
              <div className="flow-node" key={step.title} style={d(i, 0.18)}>
                <div className="flow-dot">{pad(i)}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
        {more && (
          <div className="section-foot" data-reveal>
            <MoreLink href="/approach" light>
              See how we work
            </MoreLink>
          </div>
        )}
      </div>
    </section>
  );
}

/* ============ WHO WE ARE ============ */
export function Narrative() {
  return (
    <section>
      <div className="wrap">
        <div className="narrative-grid">
          <div className="stick">
            <div data-reveal>
              <span className="eyebrow">Who We Are</span>
              <h2>We build deals, not just execute them.</h2>
            </div>
            <Media
              className="stick-media"
              src={IMG.analyst}
              alt="Syndicate analyst reviewing market data on a laptop"
              sizes="(max-width: 900px) 100vw, 440px"
              data-reveal="mask"
            />
          </div>
          <div>
            <p data-reveal>
              Plenty of investors want exposure to African private markets. What they struggle to find is enough
              well-built deals to put their money into.
            </p>
            <p data-reveal>
              We don&apos;t wait for mandates to land on our desk. We spend time inside industries, get to know the
              businesses and project sponsors in them, and build opportunities from the ground up. The work starts
              long before a term sheet: understanding how an industry works, working out what a business really
              needs, and designing a structure that holds up when investors look closely.
            </p>
            <p data-reveal>
              That is why much of what we bring to investors isn&apos;t available on the open market. It exists
              because we helped build it.
            </p>
            <p data-reveal>
              <strong>Our mission</strong> is simple: help Africa&apos;s businesses, projects and industries become
              investments that meet international institutional standards, and connect them with the long-term
              capital that can help them grow.
            </p>
            <ul className="values-list">
              {VALUES.map((v, i) => (
                <li key={v.title} data-reveal style={d(i)}>
                  <span className="n">{pad(i)}</span>
                  <div>
                    <span className="t">{v.title}</span>
                    <span className="d">{v.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ HOME: ABOUT TEASER ============ */
export function AboutTeaser() {
  return (
    <section>
      <div className="wrap">
        <div className="teaser">
          <Media
            className="teaser-media"
            src={IMG.analyst}
            alt="Syndicate analyst reviewing market data on a laptop"
            sizes="(max-width: 900px) 100vw, 520px"
            data-reveal="mask"
          />
          <div data-reveal>
            <span className="eyebrow">Who We Are</span>
            <h2>We build deals, not just execute them.</h2>
            <p className="teaser-lead">
              Plenty of investors want exposure to African private markets. What they struggle to find is enough
              well-built deals to put their money into.
            </p>
            <p>
              We spend time inside industries, get to know the businesses and project sponsors in them, and build
              opportunities from the ground up. Much of what we bring to investors isn&apos;t available on the open
              market. It exists because we helped build it.
            </p>
            <MoreLink href="/about">More about us</MoreLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ PLATFORMS ============ */
export function PlatformsList() {
  return (
    <section className="alt">
      <div className="wrap">
        <div className="split-head">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Our Platforms</span>
            <h2>Three areas of focus.</h2>
            <p>We work across three areas, each meeting a different kind of capital need in the real economy.</p>
          </div>
          <Media
            className="split-media"
            src={IMG.charts}
            alt="Financial reports with performance charts"
            sizes="(max-width: 900px) 100vw, 520px"
            data-reveal="mask"
          />
        </div>
        <div>
          {PLATFORMS.map((p, i) => (
            <div className="platform-card" key={p.num} data-reveal style={d(i, 0.12)}>
              <div>
                <span className="pnum">{p.num}</span>
                <div className="ptag">
                  {p.name[0]}
                  <br />
                  {p.name[1]}
                </div>
              </div>
              <div className="pbody">
                <p>{p.text}</p>
                <div className="taglist">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlatformsPreview() {
  return (
    <section className="alt">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Our Platforms</span>
          <h2>Three areas of focus.</h2>
          <p>We work across three areas, each meeting a different kind of capital need in the real economy.</p>
        </div>
        <div className="preview-grid">
          {PLATFORMS.map((p, i) => (
            <Link className="preview-card" href="/platforms" key={p.num} data-reveal style={d(i, 0.12)}>
              <span className="pnum">{p.num}</span>
              <h3>{p.name.join(" ")}</h3>
              <p>{p.text.split(". ")[0]}.</p>
              <span className="preview-more">
                {p.tags.length} specialisms <span className="arr">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTORS ============ */
export function SectorsGrid({ intro = true }) {
  return (
    <section>
      <div className="wrap">
        {intro && (
          <div className="section-head" data-reveal>
            <span className="eyebrow">Sector Expertise</span>
            <h2>We know the industries we work in.</h2>
            <p>
              Our relationships span the sectors that keep Africa&apos;s economy running. That helps us spot
              opportunities early and structure deals around how each industry really finances itself.
            </p>
          </div>
        )}
        {!intro && <h2 className="sr-only">Sectors we work in</h2>}
        <div className="sector-grid">
          {SECTORS.map((s, i) => (
            <div className="sector-cell" key={s.title} data-reveal style={d(i % 3, 0.1)}>
              <span className="sector-n">{pad(i)}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ WHY SYNDICATE ============ */
export function Audiences() {
  return (
    <section className="alt">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Why Syndicate</span>
          <h2>Our strength is the quality of the deals we build.</h2>
        </div>
        <Media
          className="banner-media"
          src={IMG.team}
          alt="Investment team silhouetted against a city skyline and market data"
          sizes="(max-width: 1180px) 100vw, 1100px"
          style={{ objectPosition: "center 60%" }}
          data-reveal="mask"
        />
        <div className="audience-grid">
          {AUDIENCES.map((a, i) => (
            <div className="audience-card" key={a.title} data-reveal style={d(i, 0.12)}>
              <h3>{a.title}</h3>
              <ul>
                {a.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ OUR MODEL ============ */
export function Model() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Our Model</span>
          <h2>How we connect businesses with investors.</h2>
        </div>
        <div className="model-diagram" data-reveal>
          <div className="model-row">
            <div className="model-box">
              <h3>Real Economy</h3>
              <span>Corporates • Governments • Entrepreneurs • Developers</span>
            </div>
            <div className="model-arrow">→</div>
            <div className="model-box accent">
              <h3>Syndicate Investment Advisory</h3>
              <span>Sourcing • Structuring • Execution</span>
            </div>
            <div className="model-arrow">→</div>
            <div className="model-box">
              <h3>Institutional Capital</h3>
              <span>Long-term investment in businesses, projects &amp; assets</span>
            </div>
          </div>
        </div>
        <p className="model-note" data-reveal>
          We start with the deal. We focus on building the opportunities investors want to back, which sets us apart
          in Ghana and across West Africa.
        </p>
      </div>
    </section>
  );
}

/* ============ NEXT PAGE LINK ============ */
export function NextPage({ href, label, title }) {
  return (
    <section className="next-page">
      <div className="wrap">
        <Link href={href} className="next-link" data-reveal>
          <span className="eyebrow">Next · {label}</span>
          <span className="next-title">
            {title} <span className="arr">→</span>
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ============ CTA BAND ============ */
export function CtaBand() {
  return (
    <section className="ctaband">
      <Media className="bg-media" src={IMG.desk} sizes="100vw" style={{ objectPosition: "center 25%" }} />
      <div className="wrap" data-reveal>
        <h2>Have a project, a business or an investment in mind? Let&apos;s talk.</h2>
        <p>
          Whether you are a company looking for capital, a government looking for a transaction partner, or an
          investor looking for access to Africa&apos;s private markets, we would like to hear from you.
        </p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" href="/contact">
            Contact Our Team <span className="arr">→</span>
          </Link>
          <Link className="btn btn-ghost" href="/platforms">
            Explore Our Platforms
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
export function ContactDetails() {
  return (
    <section>
      <div className="wrap">
        <div className="contact-grid">
          <div className="form-card" data-reveal>
            <span className="eyebrow">Send an enquiry</span>
            <h2>Tell us what you&apos;re working on.</h2>
            <EnquiryForm />
          </div>
          <div className="contact-side">
            <div className="contact-block" data-reveal style={d(0)}>
              <h3>Office</h3>
              <p>9th Floor, Business Emporium</p>
              <p>Movenpick Ambassador Hotel</p>
              <p>Independence Avenue</p>
              <p>Accra, Ghana</p>
            </div>
            <div className="contact-block" data-reveal style={d(1)}>
              <h3>Telephone</h3>
              <p>
                <a className="link" href={PHONE.href}>
                  {PHONE.label}
                </a>
              </p>
            </div>
            <div className="contact-block" data-reveal style={d(2)}>
              <h3>Email</h3>
              <p>
                <a className="link" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
            </div>
            <div className="contact-map" data-reveal="mask">
              <iframe
                title="Map: Movenpick Ambassador Hotel, Independence Avenue, Accra"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-logo">
            <Link href="/" aria-label="Syndicate Investment Advisory home">
              <LogoFull />
            </Link>
            <p className="footer-blurb">
              Investment advisory for Africa&apos;s real economy, across private credit, real assets and private
              equity. From first conversation to financial close.
            </p>
            <p className="footer-address">
              9th Floor, Business Emporium, Movenpick Ambassador Hotel, Independence Avenue, Accra
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <h2>Platforms</h2>
              {PLATFORMS.map((p) => (
                <Link key={p.num} href="/platforms">
                  {p.name.join(" ")}
                </Link>
              ))}
            </div>
            <div>
              <h2>Firm</h2>
              {NAV.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </div>
            <div>
              <h2>Connect</h2>
              <Link href="/contact">Contact us</Link>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={PHONE.href}>{PHONE.label}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Syndicate Investment Advisory. All rights reserved.</span>
          <span>Accra, Ghana</span>
        </div>
      </div>
    </footer>
  );
}
