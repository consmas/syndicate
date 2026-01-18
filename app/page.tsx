"use client";

import { useEffect, useState } from "react";
import { buildPage } from "./lib/siteMarkup";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    let stopped = false;
    const initSlider = () => {
      if (stopped || typeof window === "undefined") {
        return false;
      }
      const Swiper = (window as { Swiper?: new (...args: any[]) => unknown })
        .Swiper;
      const sliderEl = document.querySelector(".main-slider");
      if (!Swiper || !sliderEl) {
        return false;
      }
      if ((sliderEl as { swiper?: unknown }).swiper) {
        return true;
      }

      new Swiper(".main-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        autoplay: {
          enabled: true,
          delay: 6000,
        },
        navigation: {
          nextEl: ".main-slider-next",
          prevEl: ".main-slider-prev",
          clickable: true,
        },
        pagination: {
          el: ".main-slider_pagination",
          clickable: true,
        },
        speed: 500,
        breakpoints: {
          1600: { slidesPerView: 1 },
          1200: { slidesPerView: 1 },
          992: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        },
      });

      return true;
    };

    if (initSlider()) {
      return;
    }

    const retryId = window.setInterval(() => {
      if (initSlider()) {
        window.clearInterval(retryId);
      }
    }, 300);

    return () => {
      stopped = true;
      window.clearInterval(retryId);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const menuOuter = document.querySelector(
      ".mobile-menu .menu-box .menu-outer"
    );
    const mainMenu = document.querySelector(
      ".main-header .nav-outer .main-menu"
    );

    if (menuOuter && mainMenu && menuOuter.childElementCount === 0) {
      menuOuter.innerHTML = mainMenu.innerHTML;
    }

    const openMenu = () => {
      document.body.classList.add("mobile-menu-visible");
    };
    const closeMenu = () => {
      document.body.classList.remove("mobile-menu-visible");
    };

    const toggler = document.querySelector(".mobile-nav-toggler");
    const backdrop = document.querySelector(".mobile-menu .menu-backdrop");
    const closeBtn = document.querySelector(".mobile-menu .close-btn");

    toggler?.addEventListener("click", openMenu);
    backdrop?.addEventListener("click", closeMenu);
    closeBtn?.addEventListener("click", closeMenu);

    return () => {
      toggler?.removeEventListener("click", openMenu);
      backdrop?.removeEventListener("click", closeMenu);
      closeBtn?.removeEventListener("click", closeMenu);
    };
  }, [mounted]);

  const content = `
  <section id="home" class="slider-two" style="background-image:url(assets/images/main-slider/1.png)">
    <div class="slider-two_icon" style="background-image:url(assets/images/main-slider/icon-1.png)"></div>
    <div class="slider-two_icon-two" style="background-image:url(assets/images/main-slider/icon-2.png)"></div>
    <div class="slider-two_icon-three" style="background-image:url(assets/images/main-slider/icon-3.png)"></div>
    <div class="slider-two_icon-four" style="background-image:url(assets/images/main-slider/icon-4.png)"></div>
    <div class="slider-two_icon-five" style="background-image:url(assets/images/main-slider/icon-6.png)"></div>
    <div class="main-slider swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="slider-two_image-column col-lg-5 col-md-12 col-sm-12">
                <div class="slider-two_image-outer">
                  <div class="slider-two_image">
                    <img src="assets/images/main-slider/image-1.png" alt="Capital strategy" />
                  </div>
                </div>
              </div>

              <div class="slider-two_content-column col-lg-7 col-md-12 col-sm-12">
                <div class="slider-two_content-outer">
                  <div class="slider-two_counter-box" style="background-image:url(assets/images/main-slider/icon-5.png)">
                    <div class="slider-two_counter-content">
                      <div class="slider-two_counter count-box"><span class="count-text"></span>Shaping Capital</div>
                    </div>
                  </div>

                  <h1 class="slider-two_heading">Structuring Opportunity. Driving Sustainable Growth.</h1>
                  <div class="slider-two_text">Syndicate Investment Advisory Ltd. is a specialist financial advisory firm at the forefront of alternative investments and innovative financial structuring across Africa. We design, structure, and execute complex transactions that connect institutional capital with high-impact opportunities in infrastructure, energy, and real assets.</div>
                  <div class="slider-two_options d-flex align-items-center flex-wrap">
                    <div class="slider-two_button">
                      <a href="/about" class="theme-btn btn-style-two">
                        <span class="btn-wrap">
                          <span class="text-one">About us</span>
                          <span class="text-two">About us</span>
                        </span>
                      </a>
                    </div>
                    <div class="slider-two_experts">
                      <a href="/services">Products & Services</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="slider-two_image-column col-lg-5 col-md-12 col-sm-12">
                <div class="slider-two_image-outer">
                  <div class="slider-two_image">
                    <img src="assets/images/main-slider/image-2.png" alt="Strategic execution" />
                  </div>
                </div>
              </div>

              <div class="slider-two_content-column col-lg-7 col-md-12 col-sm-12">
                <div class="slider-two_content-outer">
                  <div class="slider-two_counter-box" style="background-image:url(assets/images/main-slider/icon-5.png)">
                    <div class="slider-two_counter-content">
                      <div class="slider-two_counter count-box"><span class="count-text"></span>Our Mission</div>
                    </div>
                  </div>

                  <h1 class="slider-two_heading">Where strategy meets finance, insight creates opportunity.</h1>
                  <div class="slider-two_text">Our mission is to deliver solutions that are financially sound, developmentally meaningful, and commercially sustainable. Syndicate Investment Advisory Ltd. — Where Capital Meets Strategy.</div>
                  <div class="slider-two_options d-flex align-items-center flex-wrap">
                    <div class="slider-two_button">
                      <a href="/mandates" class="theme-btn btn-style-two">
                        <span class="btn-wrap">
                          <span class="text-one">Representative mandates</span>
                          <span class="text-two">Representative mandates</span>
                        </span>
                      </a>
                    </div>
                    <div class="slider-two_experts">
                      <a href="/partnerships">Strategic Partnerships</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="slider-two_image-column col-lg-5 col-md-12 col-sm-12">
                <div class="slider-two_image-outer">
                  <div class="slider-two_image">
                    <img src="assets/images/main-slider/image-3.png" alt="Institutional partnerships" />
                  </div>
                </div>
              </div>

              <div class="slider-two_content-column col-lg-7 col-md-12 col-sm-12">
                <div class="slider-two_content-outer">
                  <div class="slider-two_counter-box" style="background-image:url(assets/images/main-slider/icon-5.png)">
                    <div class="slider-two_counter-content">
                      <div class="slider-two_counter count-box"><span class="count-text"></span>Institutional Partnerships</div>
                    </div>
                  </div>

                  <h1 class="slider-two_heading">Mobilizing private capital for impact.</h1>
                  <div class="slider-two_text">As the Capital Raising arm of CIPA Holdings Group, Syndicate leverages strategic collaboration with ABSA Bank Ghana and other partner financial institutions to expand access to climate-aligned and sustainability-linked financing.</div>
                  <div class="slider-two_options d-flex align-items-center flex-wrap">
                    <div class="slider-two_button">
                      <a href="/partnerships" class="theme-btn btn-style-two">
                        <span class="btn-wrap">
                          <span class="text-one">Strategic Partnerships</span>
                          <span class="text-two">Strategic Partnerships</span>
                        </span>
                      </a>
                    </div>
                    <div class="slider-two_experts">
                      <a href="/contact">Start a conversation</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="services-three">
    <div class="services-three_icon-one" style="background-image:url(assets/images/icons/icon-2.png)"></div>
    <div class="services-three_icon-two" style="background-image:url(assets/images/icons/icon-3.png)"></div>
    <div class="auto-container">
      <div class="sec-title centered">
        <div class="sec-title_title">Our Expertise Includes</div>
        <h2 class="sec-title_heading">Specialist advisory across alternative investments</h2>
      </div>

      <div class="row clearfix">
        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="M&A Advisory" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">M&amp;A Advisory</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-9.svg" alt="Infrastructure Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Infrastructure Finance</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-10.svg" alt="Climate Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Climate Finance</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="Private Debt" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Private Debt</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-9.svg" alt="Private Equity" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Private Equity</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-10.svg" alt="Structured Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Structured Finance</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="Financial Modelling & Valuation" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Financial Modelling &amp; Valuation</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about-two">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="about-two_content-column col-lg-7 col-md-12 col-sm-12">
          <div class="about-two_content-outer">
            <div class="sec-title">
              <div class="sec-title_title">Institutional Partnerships</div>
              <h2 class="sec-title_heading">Capital raising anchored by strategic collaboration</h2>
              <div class="sec-title_text">As the Capital Raising arm of CIPA Holdings Group, Syndicate leverages the Group’s strategic collaboration with ABSA Bank Ghana and other partner financial institutions to expand access to climate-aligned and sustainability-linked financing. These partnerships strengthen our ability to design innovative financial structures and mobilize private capital for impactful infrastructure, energy, and real asset projects across Ghana and the wider West African region.</div>
            </div>

            <div class="about-two_button">
              <a href="/partnerships" class="theme-btn btn-style-one">
                <span class="btn-wrap">
                  <span class="text-one">Strategic Partnerships</span>
                  <span class="text-two">Strategic Partnerships</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="about-two_image-column col-lg-5 col-md-12 col-sm-12">
          <div class="about-two_image-outer">
            <div class="about-two_image">
              <img src="assets/images/resource/about-2.jpg" alt="Institutional partnerships" />
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

  <section class="cta-two">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="cta-two_content-column col-lg-6 col-md-12 col-sm-12">
          <div class="cta-two_content-outer">
            <div class="cta-two_content-icon"><img src="assets/images/icons/cta.png" alt="CTA" /></div>
            <h2 class="cta-two_title">Syndicate Investment Advisory Ltd. — Where Capital Meets Strategy.</h2>
            <div class="cta-two_text">Advisors for a changing investment landscape.</div>
            <div class="cta-two_button">
              <a href="/contact" class="theme-btn btn-style-one">
                <span class="btn-wrap">
                  <span class="text-one">Contact us</span>
                  <span class="text-two">Contact us</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="cta-two_image-column col-lg-6 col-md-12 col-sm-12">
          <div class="cta-two_image-outer">
            <div class="cta-two_icon" style="background-image:url(assets/images/icons/cta-two.png)"></div>
            <div class="cta-two_image">
              <img src="assets/images/resource/cta.png" alt="Consultation" />
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
