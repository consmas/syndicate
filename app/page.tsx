"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pageMarkup = `
<div class="page-wrapper">
  <div class="preloader"></div>
  <div class="cursor"></div>
  <div class="cursor-follower"></div>

  <header class="main-header header-style-two">
    <div class="header-upper">
      <div class="auto-container">
        <div class="inner-container">
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <div class="nav-outer d-flex align-items-center flex-wrap">
              <div class="logo-box">
                <div class="logo"><a href="#home"><img src="assets/images/logo.png" alt="Syndicate Investment Advisory Ltd" title="Syndicate Investment Advisory Ltd" /></a></div>
              </div>

              <nav class="main-menu navbar-expand-md">
                <div class="navbar-header">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>

                <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                  <ul class="navigation clearfix">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Products & Services</a></li>
                    <li><a href="#mandates">Mandates</a></li>
                    <li><a href="#partnerships">Partnerships</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            <div class="outer-box d-flex align-items-center flex-wrap">
              <div class="login-box"><a href="#contact"><span class="icon flaticon-user-1"></span>Client Portal</a></div>

              <div class="header_button-box">
                <a href="#contact" class="theme-btn btn-style-one">
                  <span class="btn-wrap">
                    <span class="text-one">Request a Discussion</span>
                    <span class="text-two">Request a Discussion</span>
                  </span>
                </a>
              </div>

              <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-menu">
      <div class="menu-backdrop"></div>
      <div class="close-btn"><span class="icon flaticon-close-1"></span></div>
      <nav class="menu-box">
        <div class="nav-logo"><a href="#home"><img src="assets/images/mobile-logo.png" alt="Syndicate Investment Advisory Ltd" title="Syndicate Investment Advisory Ltd" /></a></div>
        <div class="menu-outer"></div>
      </nav>
    </div>
  </header>

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
                    <img src="assets/images/main-slider/image-2.png" alt="Capital strategy" />
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
                      <a href="#about" class="theme-btn btn-style-two">
                        <span class="btn-wrap">
                          <span class="text-one">About us</span>
                          <span class="text-two">About us</span>
                        </span>
                      </a>
                    </div>
                    <div class="slider-two_experts">
                      <a href="#services">Products & Services</a>
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

                  <h1 class="slider-two_heading">Strategy meets finance, insight creates opportunity.</h1>
                  <div class="slider-two_text">Our mission is to deliver solutions that are financially sound, developmentally meaningful, and commercially sustainable. Syndicate Investment Advisory Ltd. — Where Capital Meets Strategy.</div>
                  <div class="slider-two_options d-flex align-items-center flex-wrap">
                    <div class="slider-two_button">
                      <a href="#mandates" class="theme-btn btn-style-two">
                        <span class="btn-wrap">
                          <span class="text-one">Representative mandates</span>
                          <span class="text-two">Representative mandates</span>
                        </span>
                      </a>
                    </div>
                    <div class="slider-two_experts">
                      <a href="#partnerships">Strategic Partnerships</a>
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
                    <img src="assets/images/main-slider/image-2.png" alt="Institutional partnerships" />
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
                      <a href="#partnerships" class="theme-btn btn-style-two">
                        <span class="btn-wrap">
                          <span class="text-one">Strategic Partnerships</span>
                          <span class="text-two">Strategic Partnerships</span>
                        </span>
                      </a>
                    </div>
                    <div class="slider-two_experts">
                      <a href="#contact">Start a conversation</a>
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

  <section id="about" class="about-two">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="about-two_content-column col-lg-7 col-md-12 col-sm-12">
          <div class="about-two_content-outer">
            <div class="sec-title">
              <div class="sec-title_title">About Us</div>
              <h2 class="sec-title_heading">Insight. Integrity. Execution.</h2>
              <div class="sec-title_text">Syndicate Investment Advisory Ltd. is an independent financial advisory firm providing strategic and transaction support across M&amp;A, infrastructure finance, climate finance, private capital, and structured finance. We work with corporates, investors, and development institutions to design and execute solutions that unlock value, mobilize capital, and deliver sustainable impact.</div>
            </div>

            <ul class="about-two_list">
              <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Disciplined, data-led approach to every engagement.</li>
              <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Analytical depth, market insight, and execution excellence.</li>
              <li><i><img src="assets/images/icons/check.svg" alt="Check" /></i>Collaborative partnerships built on trust.</li>
            </ul>

            <div class="about-two_button">
              <a href="#services" class="theme-btn btn-style-one">
                <span class="btn-wrap">
                  <span class="text-one">Our products & services</span>
                  <span class="text-two">Our products & services</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="about-two_image-column col-lg-5 col-md-12 col-sm-12">
          <div class="about-two_image-outer">
            <div class="about-two_image">
              <img src="assets/images/resource/about-2.jpg" alt="Advisory team" />
            </div>
            <div class="mission-box">
              <h3 class="mission-box_title">Our Commitment</h3>
              <div class="mission-box_text">Clear thinking, rigorous analysis, and execution that delivers sustainable outcomes across Africa.</div>
              <div class="mission-box-drop d-flex justify-content-between align-items-center flex-wrap">
                <a class="mission-box_line" href="#contact">Talk with us</a>
                <a class="mission-box_arrow" href="#contact">
                  <i class="flaticon-arrow-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="services-three">
    <div class="services-three_icon-one" style="background-image:url(assets/images/icons/icon-2.png)"></div>
    <div class="services-three_icon-two" style="background-image:url(assets/images/icons/icon-3.png)"></div>
    <div class="auto-container">
      <div class="sec-title centered">
        <div class="sec-title_title">Our Products & Services</div>
        <h2 class="sec-title_heading">Comprehensive advisory and structuring expertise</h2>
      </div>

      <div class="row clearfix">
        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="M&A Advisory" />
              </div>
              <h4 class="service-block_three-heading"><a href="#contact">M&amp;A Advisory</a></h4>
            </div>
            <div class="service-block_three-text">End-to-end transaction support from strategy and valuation to due diligence, negotiation, and integration.</div>
            <a class="service-block_three-more" href="#contact"><span>more</span><i class="flaticon-arrow"></i></a>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-9.svg" alt="Infrastructure Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="#contact">Infrastructure Finance</a></h4>
            </div>
            <div class="service-block_three-text">Structuring bankable projects across energy, transport, water, digital, and social infrastructure.</div>
            <a class="service-block_three-more" href="#contact"><span>more</span><i class="flaticon-arrow"></i></a>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-10.svg" alt="Climate Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="#contact">Climate Finance</a></h4>
            </div>
            <div class="service-block_three-text">Green and sustainability-linked financing for renewable energy, agriculture, and carbon markets.</div>
            <a class="service-block_three-more" href="#contact"><span>more</span><i class="flaticon-arrow"></i></a>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="Private Debt" />
              </div>
              <h4 class="service-block_three-heading"><a href="#contact">Private Debt</a></h4>
            </div>
            <div class="service-block_three-text">Structuring and placement of private credit across mezzanine, senior secured, and asset-backed financing.</div>
            <a class="service-block_three-more" href="#contact"><span>more</span><i class="flaticon-arrow"></i></a>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-9.svg" alt="Private Equity" />
              </div>
              <h4 class="service-block_three-heading"><a href="#contact">Private Equity</a></h4>
            </div>
            <div class="service-block_three-text">Advisory for growth-stage businesses seeking institutional equity capital and strategic partners.</div>
            <a class="service-block_three-more" href="#contact"><span>more</span><i class="flaticon-arrow"></i></a>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-10.svg" alt="Structured Finance" />
              </div>
              <h4 class="service-block_three-heading"><a href="#contact">Structured Finance</a></h4>
            </div>
            <div class="service-block_three-text">Bespoke solutions including securitizations, hybrid instruments, and credit enhancements.</div>
            <a class="service-block_three-more" href="#contact"><span>more</span><i class="flaticon-arrow"></i></a>
          </div>
        </div>

        <div class="service-block_three col-lg-4 col-md-6 col-sm-12">
          <div class="service-block_three-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="service-block_three-upper-box d-flex align-items-center flex-wrap">
              <div class="service-block_three-icon">
                <img src="assets/images/icons/service-8.svg" alt="Financial Modelling & Valuation" />
              </div>
              <h4 class="service-block_three-heading"><a href="#contact">Financial Modelling &amp; Valuation</a></h4>
            </div>
            <div class="service-block_three-text">Dynamic models and defensible valuation work supporting transactions and strategic planning.</div>
            <a class="service-block_three-more" href="#contact"><span>more</span><i class="flaticon-arrow"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="mandates" class="case-two">
    <div class="case-two_icon-one" style="background-image:url(assets/images/icons/icon-8.png)"></div>
    <div class="case-two_icon-two" style="background-image:url(assets/images/icons/icon-5.png)"></div>
    <div class="auto-container">
      <div class="sec-title centered">
        <div class="sec-title_title">Representative Mandates &amp; Active Engagements</div>
        <h2 class="sec-title_heading">Alternative investments, structured finance, and sustainable capital solutions</h2>
      </div>

      <div class="masonry-items-container row clearfix">
        <div class="case-block_two masonry-item col-lg-6 col-md-6 col-sm-12">
          <div class="case-block_two-inner">
            <div class="case-block_two-image">
              <img src="assets/images/resource/case-4.jpg" alt="Triangle Mall Development" />
              <div class="case-block_two-content">
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="case-block_two-info">
                    <div class="case-block_two-title">USD 15 million</div>
                    <h4 class="case-block_two-heading"><a href="#contact">Triangle Mall Development</a></h4>
                  </div>
                  <a class="case-block_two-arrow" href="#contact"><i class="flaticon-up-right-arrow"></i></a>
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
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="case-block_two-info">
                    <div class="case-block_two-title">USD 30 million (aggregate)</div>
                    <h4 class="case-block_two-heading"><a href="#contact">University Hostel Development Programme</a></h4>
                  </div>
                  <a class="case-block_two-arrow" href="#contact"><i class="flaticon-up-right-arrow"></i></a>
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
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="case-block_two-info">
                    <div class="case-block_two-title">USD 14 million</div>
                    <h4 class="case-block_two-heading"><a href="#contact">Solar-Powered Data Centre</a></h4>
                  </div>
                  <a class="case-block_two-arrow" href="#contact"><i class="flaticon-up-right-arrow"></i></a>
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
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="case-block_two-info">
                    <div class="case-block_two-title">USD 50 million (aggregate)</div>
                    <h4 class="case-block_two-heading"><a href="#contact">C&amp;I Solar Portfolio</a></h4>
                  </div>
                  <a class="case-block_two-arrow" href="#contact"><i class="flaticon-up-right-arrow"></i></a>
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
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="case-block_two-info">
                    <div class="case-block_two-title">USD 10 million</div>
                    <h4 class="case-block_two-heading"><a href="#contact">Mining Equipment Financing</a></h4>
                  </div>
                  <a class="case-block_two-arrow" href="#contact"><i class="flaticon-up-right-arrow"></i></a>
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

  <section id="partnerships" class="testimonial-two">
    <div class="testimonial-two_icon" style="background-image:url(assets/images/icons/icon-6.png)"></div>
    <div class="testimonial-two_icon-two" style="background-image:url(assets/images/icons/icon-7.png)"></div>
    <div class="auto-container">
      <div class="sec-title d-flex justify-content-between align-items-center flex-wrap">
        <div class="left-box">
          <div class="sec-title_title">Strategic Partnerships</div>
          <h2 class="sec-title_heading">Institutional relationships that mobilize sustainable capital</h2>
        </div>
        <div class="right-box">
          <a class="testimonial-two_review" href="#contact">Partner with Syndicate</a>
        </div>
      </div>
    </div>

    <div class="outer-container">
      <div class="three-item_carousel swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="testimonial-block_two">
              <div class="testimonial-block_two-inner" style="background-image:url(assets/images/background/testimonial-two_bg.png)">
                <div class="testimonial-block_two-overlay" style="background-image:url(assets/images/background/testimonial-two_bg-2.png)"></div>
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="testimonial-block_two-title">CIPA Holdings Group</div>
                  <div class="testimonial-block_two-quote">
                    <i class="flaticon-right-quote"></i>
                  </div>
                </div>
                <div class="testimonial-block_two-text">As the Capital Raising arm of CIPA Holdings Group, Syndicate leverages institutional relationships and ecosystem capabilities to expand access to capital, technical expertise, and sustainable finance opportunities.</div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-block_two">
              <div class="testimonial-block_two-inner" style="background-image:url(assets/images/background/testimonial-two_bg.png)">
                <div class="testimonial-block_two-overlay" style="background-image:url(assets/images/background/testimonial-two_bg-2.png)"></div>
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="testimonial-block_two-title">ABSA Bank Ghana</div>
                  <div class="testimonial-block_two-quote">
                    <i class="flaticon-right-quote"></i>
                  </div>
                </div>
                <div class="testimonial-block_two-text">Through CIPA Holdings, we benefit from a strategic collaboration focused on climate finance and sustainability-linked investments, underpinning innovative financing solutions for green and transition projects.</div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-block_two">
              <div class="testimonial-block_two-inner" style="background-image:url(assets/images/background/testimonial-two_bg.png)">
                <div class="testimonial-block_two-overlay" style="background-image:url(assets/images/background/testimonial-two_bg-2.png)"></div>
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="testimonial-block_two-title">Private Debt Initiative</div>
                  <div class="testimonial-block_two-quote">
                    <i class="flaticon-right-quote"></i>
                  </div>
                </div>
                <div class="testimonial-block_two-text">Syndicate continues to build direct partnerships with select financial institutions and investment platforms to establish specialized funding vehicles, including a climate-focused private debt initiative for sustainable infrastructure and mid-market enterprises.</div>
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
            <div class="cta-two_text">Connecting capital to impactful opportunities across Africa’s growth sectors.</div>
            <div class="cta-two_button">
              <a href="#contact" class="theme-btn btn-style-one">
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

  <footer id="contact" class="main-footer alternate" style="background-image: url(assets/images/background/footer-bg.jpg)">
    <div class="footer-icon-four" style="background-image: url(assets/images/icons/footer-icon-4.png)"></div>
    <div class="footer-icon-five" style="background-image: url(assets/images/icons/footer-icon-5.png)"></div>
    <div class="auto-container">
      <div class="inner-container">
        <div class="widgets-section">
          <div class="row clearfix">
            <div class="big-column col-lg-6 col-md-12 col-sm-12">
              <div class="row clearfix">
                <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                  <div class="footer-widget logo-widget">
                    <div class="footer-logo"><a href="#home"><img src="assets/images/logo.png" alt="Syndicate Investment Advisory Ltd" title="Syndicate Investment Advisory Ltd" /></a></div>
                    <div class="main-footer_text">Advisors for a changing investment landscape.</div>

                    <div class="newsletter-box style-two">
                      <form method="post" action="#contact">
                        <div class="form-group">
                          <label>Email Address</label>
                          <input type="email" name="search-field" value="" placeholder="name@company.com" required>
                          <button type="submit" class="theme-btn">Subscribe <i class="flaticon-arrow"></i></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h5 class="footer-title">Links</h5>
                    <ul class="footer-list">
                      <li><a href="#about">About us</a></li>
                      <li><a href="#services">Products &amp; Services</a></li>
                      <li><a href="#mandates">Mandates</a></li>
                      <li><a href="#partnerships">Strategic Partnerships</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="big-column col-lg-6 col-md-12 col-sm-12">
              <div class="row clearfix">
                <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h5 class="footer-title">Company</h5>
                    <ul class="footer-list">
                      <li><a href="#services">Products &amp; Services</a></li>
                      <li><a href="#mandates">Representative Mandates</a></li>
                      <li><a href="#partnerships">Strategic Partnerships</a></li>
                      <li><a href="#contact">Contact</a></li>
                    </ul>
                  </div>
                </div>

                <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div class="footer-widget newsletter-widget">
                    <h5 class="footer-title">Contact Us</h5>
                    <div class="main-footer_text">Syndicate Investment Advisory Ltd<br>9th Floor, Business Emporium Movenpick Ambassador Hotel<br>Independence Avenue, Accra, Ghana</div>
                    <div class="address_info">
                      info@syndicateadvisory.com <br>
                      <a href="tel:+233302633294">+233 (0)30 263 3294</a>
                    </div>

                    <ul class="footer_socials">
                      <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="d-flex justify-content-between align-items-center flex-wrap">
          <div class="copyright">Copyright &copy; 2024 Syndicate Investment Advisory Ltd. All rights reserved.</div>
          <ul class="footer-nav">
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <div class="color-palate">
    <div class="color-trigger">
      <i class="fa fa-gear"></i>
    </div>
    <div class="color-palate-head">
      <h6>Choose Options</h6>
    </div>
    <h6>RTL Version</h6>
    <ul class="rtl-version option-box"> <li class="rtl">RTL Version</li> <li>LTR Version</li> </ul>
    <h6>Boxed Version</h6>
    <ul class="box-version option-box"> <li class="box">Boxed</li> <li>Full width</li></ul>
    <h6>Want Sticky Header</h6>
    <ul class="header-version option-box"> <li class="box">No</li> <li>Yes</li></ul>
  </div>
</div>

<div class="progress-wrap">
  <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
  </svg>
</div>
  `;

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
