"use client";

import { useEffect, useState } from "react";
import { buildPage, pageTitleMarkup } from "../lib/siteMarkup";

export default function PartnershipsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = `
  ${pageTitleMarkup("Strategic Partnerships", "Strategic Partnerships")}

  <section class="about-two">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="about-two_content-column col-lg-7 col-md-12 col-sm-12">
          <div class="about-two_content-outer">
            <div class="sec-title">
              <div class="sec-title_title">Institutional Partnerships</div>
              <h2 class="sec-title_heading">Mobilizing sustainable capital across West Africa</h2>
              <div class="sec-title_text">
                <p>As the Capital Raising arm of CIPA Holdings Group, Syndicate Investment Advisory leverages the Group’s institutional relationships and ecosystem capabilities to expand access to capital, technical expertise, and sustainable finance opportunities.</p>
                <p>Through CIPA Holdings, we benefit from a strategic collaboration with ABSA Bank Ghana focused on climate finance and sustainability-linked investments. This partnership underpins the design and structuring of innovative financing solutions that mobilize private capital toward green and transition projects.</p>
                <p>In addition, Syndicate continues to build direct partnerships with select financial institutions and investment platforms to establish specialized funding vehicles, including a climate-focused private debt initiative designed to finance sustainable infrastructure and mid-market enterprises.</p>
                <p>These collaborations strengthen our execution capacity and reinforce our position as a trusted advisor at the intersection of capital, sustainability, and innovation across Ghana and the broader West African region.</p>
              </div>
            </div>

            <div class="about-two_button">
              <a href="/contact" class="theme-btn btn-style-one">
                <span class="btn-wrap">
                  <span class="text-one">Partner with Syndicate</span>
                  <span class="text-two">Partner with Syndicate</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="about-two_image-column col-lg-5 col-md-12 col-sm-12">
          <div class="about-two_image-outer">
            <div class="about-two_image">
              <img src="assets/images/resource/about-2.jpg" alt="Strategic partnership" />
            </div>
            <div class="mission-box">
              <h3 class="mission-box_title">Strategic Collaboration</h3>
              <div class="mission-box_text">Expanding access to climate-aligned and sustainability-linked financing.</div>
              <div class="mission-box-drop d-flex justify-content-between align-items-center flex-wrap">
                <a class="mission-box_line" href="/contact">Connect with us</a>
                <a class="mission-box_arrow" href="/contact">
                  <i class="flaticon-arrow-2"></i>
                </a>
              </div>
            </div>
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
