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
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        parallax: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        autoplay: {
          enabled: true,
          delay: 6500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".main-slider-next",
          prevEl: ".main-slider-prev",
        },
        pagination: {
          el: ".main-slider_pagination",
          clickable: true,
        },
        speed: 900,
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

    const sliderSection = document.querySelector("#home");
    if (!sliderSection) {
      return;
    }

    const updateHeaderTheme = () => {
      const sliderRect = sliderSection.getBoundingClientRect();
      const header = document.querySelector(".main-header");
      const headerHeight = header?.clientHeight ?? 0;
      const isWithinHero =
        sliderRect.top <= headerHeight && sliderRect.bottom >= headerHeight;
      document.body.classList.toggle("hero-menu-light", isWithinHero);
    };

    updateHeaderTheme();
    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
      document.body.classList.remove("hero-menu-light");
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
  <section id="home" class="slider-two slider-two_full slider-two_modern">
    <div class="main-slider swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image:url(assets/images/main-slider/image-1.png)">
          <div class="auto-container">
            <div class="row clearfix justify-content-center">
              <div class="slider-two_content-column col-lg-8 col-md-10 col-sm-12">
                <div class="slider-two_content-outer">
                  <div class="slider-two_panel">
                    <div class="slider-two_kicker">Investment Advisory</div>
                    <h1 class="slider-two_heading" data-swiper-parallax="-200">Structuring Opportunity. Driving Sustainable Growth.</h1>
                    <div class="slider-two_text" data-swiper-parallax="-120">Syndicate Investment Advisory Ltd. is a specialist financial advisory firm at the forefront of alternative investments and innovative financial structuring across Africa. We design, structure, and execute complex transactions that connect institutional capital with high-impact opportunities in infrastructure, energy, and real assets.</div>
                    <div class="slider-two_options d-flex align-items-center flex-wrap" data-swiper-parallax="-80">
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
        </div>

        <div class="swiper-slide" style="background-image:url(assets/images/main-slider/image-2.png)">
          <div class="auto-container">
            <div class="row clearfix justify-content-center">
              <div class="slider-two_content-column col-lg-8 col-md-10 col-sm-12">
                <div class="slider-two_content-outer">
                  <div class="slider-two_panel">
                    <div class="slider-two_kicker">Our Mission</div>
                    <h1 class="slider-two_heading" data-swiper-parallax="-200">Where strategy meets finance, insight creates opportunity.</h1>
                    <div class="slider-two_text" data-swiper-parallax="-120">Our mission is to deliver solutions that are financially sound, developmentally meaningful, and commercially sustainable. Syndicate Investment Advisory Ltd. — Where Capital Meets Strategy.</div>
                    <div class="slider-two_options d-flex align-items-center flex-wrap" data-swiper-parallax="-80">
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
        </div>

        <div class="swiper-slide" style="background-image:url(assets/images/main-slider/image-3.png)">
          <div class="auto-container">
            <div class="row clearfix justify-content-center">
              <div class="slider-two_content-column col-lg-8 col-md-10 col-sm-12">
                <div class="slider-two_content-outer">
                  <div class="slider-two_panel">
                    <div class="slider-two_kicker">Institutional Partnerships</div>
                    <h1 class="slider-two_heading" data-swiper-parallax="-200">Mobilizing private capital for impact.</h1>
                    <div class="slider-two_text" data-swiper-parallax="-120">As the Capital Raising arm of CIPA Holdings Group, Syndicate leverages strategic collaboration with ABSA Bank Ghana and other partner financial institutions to expand access to climate-aligned and sustainability-linked financing.</div>
                    <div class="slider-two_options d-flex align-items-center flex-wrap" data-swiper-parallax="-80">
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
      <div class="main-slider-controls">
        <button type="button" class="main-slider-prev" aria-label="Previous slide"></button>
        <div class="main-slider_pagination"></div>
        <button type="button" class="main-slider-next" aria-label="Next slide"></button>
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
        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="M&A Advisory" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">M&amp;A Advisory</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-9.svg" alt="Infrastructure Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Infrastructure Finance</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-10.svg" alt="Climate Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Climate Finance</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="Private Debt" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Private Debt</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-9.svg" alt="Private Equity" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Private Equity</a></h4>
            </div>
          </div>
        </div>

        <div class="service-block_three col-lg-6 col-md-6 col-sm-12">
          <div class="service-block_three-inner">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-10.svg" alt="Structured Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="/services">Structured Finance</a></h4>
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
