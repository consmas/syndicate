"use client";

import { useEffect, useState } from "react";
import { buildPage, pageTitleMarkup } from "../lib/siteMarkup";

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = `
  ${pageTitleMarkup("Products & Services", "Products & Services")}

  <section class="services-three">
    <div class="services-three_icon-one" style="background-image:url(assets/images/icons/icon-2.png)"></div>
    <div class="services-three_icon-two" style="background-image:url(assets/images/icons/icon-3.png)"></div>
    <div class="auto-container">
      <div class="sec-title centered">
        <div class="sec-title_title">Our Products & Services</div>
        <h2 class="sec-title_heading">Comprehensive financial advisory and structuring expertise</h2>
        <div class="sec-title_text">Syndicate provides comprehensive financial advisory and structuring expertise across multiple disciplines, enabling clients to achieve clarity, confidence, and competitive advantage in their investment decisions.</div>
      </div>

      <div class="row clearfix">
        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="M&A Advisory" />
              </div>
              <h4 class="service-block_three-heading"><a href="/contact">M&amp;A Advisory</a></h4>
            </div>
            <div class="service-block_three-text">We provide comprehensive M&amp;A advisory services to corporates, private equity investors, and institutional clients. We deliver end-to-end transaction support — from strategic planning and target identification to valuation, due diligence, negotiation, and post-merger integration.</div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-9.svg" alt="Infrastructure Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="/contact">Infrastructure Finance</a></h4>
            </div>
            <div class="service-block_three-text">We advise on the structuring, financing, and delivery of critical infrastructure across energy, transport, water, digital, and social sectors. Syndicate brings proven experience in project finance, PPP frameworks, concession design, and financial close execution.</div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-10.svg" alt="Climate Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="/contact">Climate Finance</a></h4>
            </div>
            <div class="service-block_three-text">We design and structure green and sustainability-linked financing instruments aligned with global standards, covering renewable energy, sustainable agriculture, circular economy, and carbon markets.</div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="Private Debt" />
              </div>
              <h4 class="service-block_three-heading"><a href="/contact">Private Debt</a></h4>
            </div>
            <div class="service-block_three-text">We provide specialist advisory for the structuring and placement of private credit instruments across mezzanine, senior secured, and asset-backed financing, bridging funding gaps where traditional financing falls short.</div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-9.svg" alt="Private Equity" />
              </div>
              <h4 class="service-block_three-heading"><a href="/contact">Private Equity</a></h4>
            </div>
            <div class="service-block_three-text">We support corporates and growth-stage businesses seeking institutional equity capital, helping prepare, position, and structure transactions while connecting them with regional and international private equity funds.</div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-10.svg" alt="Structured Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="/contact">Structured Finance</a></h4>
            </div>
            <div class="service-block_three-text">We design bespoke structures including securitizations, hybrid instruments, credit enhancements, and off-balance-sheet vehicles to unlock liquidity and optimize balance sheets.</div>
          </div>
        </div>

        <div class="service-block_three col-lg-12 col-md-12 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="Financial Modelling & Valuation" />
              </div>
              <h4 class="service-block_three-heading"><a href="/contact">Financial Modelling &amp; Valuation</a></h4>
            </div>
            <div class="service-block_three-text">We build dynamic, transparent models that integrate operational, financial, and macroeconomic drivers to test scenarios and guide capital allocation. Our valuation services adhere to international standards and cover business enterprises, project assets, and financial instruments.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

  const pageMarkup = buildPage(content);

  if (!mounted) {
    return null;
  }

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: pageMarkup }}
    />
  );
}
