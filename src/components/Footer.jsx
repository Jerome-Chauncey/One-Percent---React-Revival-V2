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
                className="footer-link"
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
                className="footer-link"
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
                    className="footer-link"
                  >
                    Myfxbook
                  </a>
                </div>
                <div className="block-page_link">
                  <a
                    href="https://www.fxblue.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Fxblue
                  </a>
                </div>
                <div className="block-page_link">
                  <a
                    href="https://www.forexfactory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
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
                    className="m-0 title page-link footer-link"
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
                    className="m-0 title page-link footer-link"
                  >
                    Email
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <br />
            </div>
    </footer>
  );
};

export default Footer;
