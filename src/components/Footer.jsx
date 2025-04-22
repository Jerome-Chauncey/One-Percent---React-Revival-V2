import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white" id="footer">
      <div className="container px-3 px-lg-0">
        <div className="row">
          <div className="flex-column d-flex flex-sm-row justify-content align-items-center justify-content-sm-between">
            <a href="https://jerome-chauncey.github.io/One-Percent/">
              <img
                src="/OnePercentLogo.png"
                alt="One percent Logo Footer"
                className="Logo"
                height="50"
                width="50"
              />
            </a>
            <div className="social-network mt4 mt-sm-0 flex-wrap gap-2 gap-md-4 d-flex">
              <a
                href="https://www.instagram.com/chaunceyyy__/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://eq-cdn.equiti-me.com/website/documents/instagram_BOVNLvi.svg"
                  alt="Instagram"
                  className="social-icon"
                  width="50"
                  height="50"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jerome-chauncey-100bab244"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://eq-cdn.equiti-me.com/website/documents/linkedin_7mDS4co.svg"
                  alt="LinkedIn"
                  className="social-icon"
                  width="50"
                  height="50"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="order-2 order-sm-1 col-12 col-sm-9 col-lg-10 row row-cols-2 row-cols-lg-5 row-gap-5">
            <div className="block-column">
              <div>
                <div className="block-section_title">
                  <span className="title h6" id="tradingTools">
                    Trading Tools
                  </span>
                </div>
                <div className="block-Divider">
                  <hr />
                </div>
                <div className="block-page_link">
                  <a
                    href="https://www.myfxbook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Myfxbook
                  </a>
                </div>
                <div className="block-page_link">
                  <a
                    href="https://www.fxblue.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fxblue
                  </a>
                </div>
                <div className="block-page_link">
                  <a
                    href="https://www.forexfactory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ForexFactory
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 order-sm-2 col-12 col-sm-3 col-lg-2 mb-4 mb-sm-0">
            <span className="title h6 mb-3">Contact Us</span>
            <div className="block-Divider">
              <hr />
            </div>
            <ul
              className="list-unstyled d-flex flex-column gap-3"
              id="contact-us"
            >
              <li className="d-flex align-items-start gap-2">
                <img
                  src="https://eq-cdn.equiti-me.com/website/documents/phone_talk_mvMQuZ3.svg"
                  alt="Phone Talk"
                  width="24"
                  height="24"
                  className="contact-icon"
                />
                <div className="d-flex flex-column align-items-start">
                  <a
                    href="tel:+254714923182"
                    className="m-0 title page-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Phone
                  </a>
                  <small className="m-0 direction-ltr">0714923182</small>
                </div>
              </li>
              <li className="d-flex align-items-start gap-2">
                <img
                  src="https://eq-cdn.equiti-me.com/website/documents/email_jdEIIQc.svg"
                  width="24"
                  height="24"
                  alt="Email"
                  className="contact-icon"
                />
                <div className="d-flex flex-column align-items-start">
                  <a
                    href="mailto:jerome.chauncey@student.moringaschool.com"
                    className="m-0 title page-link"
                  >
                    Email
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <br />

        <div className="d-flex justify-content-center">
          <div className="text-start">
            <p>
              Margined FX and contracts for difference are complex leveraged
              products which carry a high level of risk and can result in losses
              that exceed your initial investment. We recommend you seek
              professional advice before investing.
            </p>
            <p>
              Any analysis, opinion, commentary or research-based material on
              our website is for information and educational purposes only and
              is not, under any circumstances, intended to be an offer,
              recommendation, advice or solicitation to buy or sell.
            </p>
            <p>
              The information on this site is not directed at residents of the
              United States, Belgium, Canada and Singapore and is not intended
              for use by any person in any jurisdiction where such use would be
              contrary to local law or regulation.
            </p>
            <div className="copyright px-2 px-sm-0">
              <p>© 2025 One Percent, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
