"use client";

import { useEffect, useState } from "react";
import { buildPage, pageTitleMarkup } from "../lib/siteMarkup";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = `
  ${pageTitleMarkup("About Us", "About")}

  <section class="about-two">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="about-two_content-column col-lg-7 col-md-12 col-sm-12">
          <div class="about-two_content-outer">
            <div class="sec-title">
              <div class="sec-title_title">Insight. Integrity. Execution.</div>
              <h2 class="sec-title_heading">Advisors for a changing investment landscape</h2>
              <div class="sec-title_text">
                <p>Syndicate Investment Advisory Ltd. is an independent financial advisory firm providing strategic and transaction support across M&amp;A, infrastructure finance, climate finance, private capital, and structured finance.</p>
                <p>We work with corporates, investors, and development institutions to design and execute solutions that unlock value, mobilize capital, and deliver sustainable impact. Our expertise lies in bridging the gap between opportunity and capital — combining analytical depth, market insight, and execution excellence.</p>
                <p>At Syndicate, every engagement is driven by a disciplined, data-led approach. Whether structuring a complex infrastructure transaction, valuing a business, or guiding cross-border investments, we ensure each recommendation is grounded in sound financial logic and practical deliverability.</p>
                <p>Our commitment to integrity, innovation, and client success defines who we are. We believe the best outcomes come from clear thinking, rigorous analysis, and collaborative partnerships built on trust.</p>
              </div>
            </div>

            <ul class="about-two_list">
              <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Strategic advisory across alternative investments.</li>
              <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Disciplined execution with practical deliverability.</li>
              <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Integrity-driven partnerships built for long-term value.</li>
            </ul>

            <div class="about-two_button">
              <a href="/services" class="theme-btn btn-style-one">
                <span class="btn-wrap">
                  <span class="text-one">Explore our services</span>
                  <span class="text-two">Explore our services</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="about-two_image-column col-lg-5 col-md-12 col-sm-12">
          <div class="about-two_image-outer">
            <div class="about-two_image">
              <img src="assets/images/resource/about-2.jpg" alt="Syndicate advisory team" />
            </div>
            <div class="mission-box">
              <h3 class="mission-box_title">Syndicate Investment Advisory Ltd.</h3>
              <div class="mission-box_text">Where Capital Meets Strategy.</div>
              <div class="mission-box-drop d-flex justify-content-between align-items-center flex-wrap">
                <a class="mission-box_line" href="/contact">Start a conversation</a>
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
