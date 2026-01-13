"use client";

import { useEffect, useState } from "react";
import { buildPage, pageTitleMarkup } from "../lib/siteMarkup";

export default function MandatesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = `
  ${pageTitleMarkup("Representative Mandates", "Mandates")}

  <section class="case-two">
    <div class="case-two_icon-one" style="background-image:url(assets/images/icons/icon-8.png)"></div>
    <div class="case-two_icon-two" style="background-image:url(assets/images/icons/icon-5.png)"></div>
    <div class="auto-container">
      <div class="sec-title centered">
        <div class="sec-title_title">Representative Mandates &amp; Active Engagements</div>
        <h2 class="sec-title_heading">Alternative investments, structured finance, and sustainable capital solutions</h2>
        <div class="sec-title_text">Syndicate Investment Advisory Ltd. is currently advising on a portfolio of transactions that reflect our leadership in alternative investments, structured finance, and sustainable capital solutions. Our engagements span infrastructure, renewable energy, real estate, and private debt — connecting capital to impactful opportunities across Africa’s growth sectors.</div>
        <div class="sec-title_text">Due to confidentiality obligations, only representative summaries are provided.</div>
      </div>

      <div class="masonry-items-container row clearfix">
        <div class="case-block_two masonry-item col-lg-6 col-md-6 col-sm-12">
          <div class="case-block_two-inner">
            <div class="case-block_two-image">
              <img src="assets/images/resource/case-4.jpg" alt="Triangle Mall Development" />
              <div class="case-block_two-content">
                <div class="case-block_two-info">
                  <div class="case-block_two-title">Triangle Mall Development — USD 15 million</div>
                  <h4 class="case-block_two-heading"><a href="/contact">Project financing strategy and investor placement</a></h4>
                  <div class="case-block_two-text">Advising on structuring, capital raise, and asset-holding optimization for a landmark mixed-use retail and commercial centre.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="case-block_two masonry-item col-lg-6 col-md-6 col-sm-12">
          <div class="case-block_two-inner">
            <div class="case-block_two-image">
              <img src="assets/images/resource/case-5.jpg" alt="University Hostel Development Programme" />
              <div class="case-block_two-content">
                <div class="case-block_two-info">
                  <div class="case-block_two-title">University Hostel Development Programme — USD 30 million (aggregate)</div>
                  <h4 class="case-block_two-heading"><a href="/contact">REIT-backed student accommodation platform</a></h4>
                  <div class="case-block_two-text">Structuring, financial modelling, and investor engagement for a scalable real estate investment framework.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="case-block_two masonry-item col-lg-6 col-md-6 col-sm-12">
          <div class="case-block_two-inner">
            <div class="case-block_two-image">
              <img src="assets/images/resource/case-6.jpg" alt="Solar-Powered Data Centre" />
              <div class="case-block_two-content">
                <div class="case-block_two-info">
                  <div class="case-block_two-title">Solar-Powered Data Centre — USD 14 million</div>
                  <h4 class="case-block_two-heading"><a href="/contact">Blended finance structuring</a></h4>
                  <div class="case-block_two-text">Providing transaction advisory, financial modelling, and capital sourcing for renewable-powered data infrastructure.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="case-block_two masonry-item col-lg-6 col-md-6 col-sm-12">
          <div class="case-block_two-inner">
            <div class="case-block_two-image">
              <img src="assets/images/resource/case-7.jpg" alt="C&I Solar Portfolio" />
              <div class="case-block_two-content">
                <div class="case-block_two-info">
                  <div class="case-block_two-title">C&amp;I Solar Portfolio — USD 50 million (aggregate)</div>
                  <h4 class="case-block_two-heading"><a href="/contact">Scalable project financing</a></h4>
                  <div class="case-block_two-text">Structuring distributed solar projects with credit enhancement and sustainable investment packaging.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="case-block_two masonry-item col-lg-6 col-md-6 col-sm-12">
          <div class="case-block_two-inner">
            <div class="case-block_two-image">
              <img src="assets/images/resource/case-4.jpg" alt="Mining Equipment Financing" />
              <div class="case-block_two-content">
                <div class="case-block_two-info">
                  <div class="case-block_two-title">Mining Equipment Financing — USD 10 million</div>
                  <h4 class="case-block_two-heading"><a href="/contact">Debt structuring and capital sourcing</a></h4>
                  <div class="case-block_two-text">Advising on lender engagement, financial structuring, and credit analysis to support long-term asset financing.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sec-title centered" style="margin-top: 40px;">
        <div class="sec-title_title">Our Mandate Portfolio Demonstrates Expertise In</div>
      </div>
      <ul class="about-two_list">
        <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Designing bankable capital structures for mid-market and infrastructure projects.</li>
        <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Bridging private and institutional capital through innovative investment vehicles.</li>
        <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Integrating climate-aligned finance and sustainability principles into project development.</li>
        <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Delivering independent, data-driven financial models and valuations across sectors.</li>
      </ul>
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
