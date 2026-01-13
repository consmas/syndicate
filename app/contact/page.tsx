"use client";

import { useEffect, useState } from "react";
import { buildPage, pageTitleMarkup } from "../lib/siteMarkup";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = `
  ${pageTitleMarkup("Contact Us", "Contact")}

  <section class="contact-one">
    <div class="contact-one_icon" style="background-image:url(assets/images/icons/icon-11.png)"></div>
    <div class="auto-container">
      <div class="title-box">
        <h4>Let’s discuss your next transaction.</h4>
      </div>
      <div class="row clearfix">
        <div class="info-block_one col-lg-4 col-md-6 col-sm-12">
          <div class="info-block_one-inner">
            <div class="info-block_one-icon">
              <i class="flaticon-targeting"></i>
            </div>
            <h5>Head Office</h5>
            <div class="text">9th Floor, Business Emporium Movenpick Ambassador Hotel</div>
            <div class="contact-info">Independence Avenue, Accra, Ghana</div>
          </div>
        </div>

        <div class="info-block_one col-lg-4 col-md-6 col-sm-12">
          <div class="info-block_one-inner">
            <div class="info-block_one-icon">
              <i class="flaticon-personal"></i>
            </div>
            <h5>Email</h5>
            <div class="text">General inquiries</div>
            <div class="contact-info">info@syndicateadvisory.com</div>
          </div>
        </div>

        <div class="info-block_one col-lg-4 col-md-6 col-sm-12">
          <div class="info-block_one-inner">
            <div class="info-block_one-icon">
              <i class="flaticon-phone-call"></i>
            </div>
            <h5>Telephone</h5>
            <a class="phone_number" href="tel:+233302633294">+233 (0)30 263 3294</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-two">
    <div class="auto-container">
      <div class="inner-container">
        <div class="title-box">
          <h4>Complete the form below to get in touch</h4>
        </div>

        <div class="contact-form">
          <form method="post" action="/contact" id="contact-form">
            <div class="form-group">
              <input type="text" name="username" placeholder="Full name" required>
            </div>

            <div class="form-group">
              <input type="email" name="email" placeholder="Email address" required>
            </div>

            <div class="form-group">
              <textarea name="message" placeholder="Tell us about your engagement"></textarea>
            </div>

            <div class="form-group text-center">
              <div class="button-box">
                <button type="submit" class="theme-btn btn-style-one">
                  <span class="btn-wrap">
                    <span class="text-one">Send message</span>
                    <span class="text-two">Send message</span>
                  </span>
                </button>
              </div>
            </div>
          </form>
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
