export const headerMarkup = `
<header class="main-header header-style-two">
  <div class="header-upper">
    <div class="auto-container">
      <div class="inner-container">
        <div class="d-flex justify-content-between align-items-center flex-wrap">
          <div class="nav-outer d-flex align-items-center flex-wrap">
            <div class="logo-box">
              <div class="logo"><a href="/"><img src="assets/images/logo.png" alt="Syndicate Investment Advisory Ltd" title="Syndicate Investment Advisory Ltd" /></a></div>
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
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Products & Services</a></li>
                  <li><a href="/mandates">Mandates</a></li>
                  <li><a href="/partnerships">Partnerships</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div class="outer-box d-flex align-items-center flex-wrap">
            <div class="login-box"><a href="/contact"><span class="icon flaticon-user-1"></span>Client Portal</a></div>

            <div class="header_button-box">
              <a href="/contact" class="theme-btn btn-style-one">
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
      <div class="nav-logo"><a href="/"><img src="assets/images/mobile-logo.png" alt="Syndicate Investment Advisory Ltd" title="Syndicate Investment Advisory Ltd" /></a></div>
      <div class="menu-outer"></div>
    </nav>
  </div>
</header>
`;

export const footerMarkup = `
<footer class="main-footer alternate" style="background-image: url(assets/images/background/footer-bg.jpg)">
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
                  <div class="footer-logo"><a href="/"><img src="assets/images/logo.png" alt="Syndicate Investment Advisory Ltd" title="Syndicate Investment Advisory Ltd" /></a></div>
                  <div class="main-footer_text">Advisors for a changing investment landscape.</div>

                  <div class="newsletter-box style-two">
                    <form method="post" action="/contact">
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
                    <li><a href="/about">About us</a></li>
                    <li><a href="/services">Products &amp; Services</a></li>
                    <li><a href="/mandates">Mandates</a></li>
                    <li><a href="/partnerships">Strategic Partnerships</a></li>
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
                    <li><a href="/services">Products &amp; Services</a></li>
                    <li><a href="/mandates">Representative Mandates</a></li>
                    <li><a href="/partnerships">Strategic Partnerships</a></li>
                    <li><a href="/contact">Contact</a></li>
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
`;

export const utilitiesMarkup = `
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
`;

export const progressMarkup = `
<div class="progress-wrap">
  <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
  </svg>
</div>
`;

export const pageTitleMarkup = (title: string, crumb: string) => `
<section class="page-title">
  <div class="page-title_shapes" style="background-image:url(assets/images/background/page-title_bg.png)"></div>
  <div class="page-title_bg" style="background-image:url(assets/images/background/page-title_bg.jpg)"></div>
  <div class="page-title_icons" style="background-image:url(assets/images/background/page-title_icons.png)"></div>
  <div class="auto-container">
    <h2>${title}</h2>
    <ul class="bread-crumb clearfix">
      <li><a href="/">Home</a></li>
      <li>${crumb}</li>
    </ul>
  </div>
</section>
`;

export const buildPage = (content: string) => `
<div class="page-wrapper">
  <div class="cursor"></div>
  <div class="cursor-follower"></div>
  ${headerMarkup}
  ${content}
  ${footerMarkup}
  ${utilitiesMarkup}
</div>
${progressMarkup}
`;
