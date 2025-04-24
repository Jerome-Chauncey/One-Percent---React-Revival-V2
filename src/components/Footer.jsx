import React, { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  // Color palette matching the screenshot
  const colors = {
    background: "#1e1e1e", // Dark background
    accent: "#40E0D0", // Teal/cyan color matching the logo
    text: "#9ca3af", // Default text color
    textHover: "#40E0D0", // Hover text color matching logo
    divider: "rgba(64, 224, 208, 0.1)", // Subtle divider with logo color
  };

  return (
    <footer
      className="bg-dark text-white"
      id="footer"
      style={{
        background: colors.background,
        borderTop: `1px solid ${colors.divider}`,
        position: "relative",
        paddingTop: "3rem",
      }}
    >
      <div className="container px-3 px-lg-0">
        <div className="row">
          <div className="flex-column d-flex flex-sm-row justify-content align-items-center justify-content-sm-between">
            <a
              href="https://jerome-chauncey.github.io/One-Percent/"
              style={{
                transition: "all 0.3s ease",
                padding: "8px",
                borderRadius: "50%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src="/OnePercentLogo.png"
                alt="One percent Logo Footer"
                className="Logo"
                height="50"
                width="50"
              />
            </a>
          </div>
        </div>

        <div className="row mt-4">
          <div className="order-2 order-sm-1 col-12 col-sm-9 col-lg-10 row row-cols-2 row-cols-lg-5 row-gap-5">
            <div className="block-column">
              <div>
                <div className="block-section_title">
                  <span
                    className="title h6"
                    id="tradingTools"
                    style={{
                      color: colors.accent,
                      letterSpacing: "0.5px",
                      fontWeight: "600",
                    }}
                  >
                    Trading Tools
                  </span>
                </div>
                <div className="block-Divider">
                  <hr
                    style={{
                      borderColor: colors.divider,
                      margin: "1rem 0",
                    }}
                  />
                </div>
                {["myfxbook", "fxblue", "forexfactory"].map((item) => (
                  <div className="block-page_link" key={item}>
                    <a
                      href={`https://www.${item}.com/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                      style={{
                        color:
                          hoveredLink === item ? colors.textHover : colors.text,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        display: "block",
                        padding: "0.4rem 0",
                      }}
                      onMouseEnter={() => setHoveredLink(item)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item === "myfxbook"
                        ? "Myfxbook"
                        : item === "fxblue"
                        ? "Fxblue"
                        : "ForexFactory"}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 order-sm-2 col-12 col-sm-3 col-lg-2 mb-4 mb-sm-0">
            <span
              className="title h6 mb-3"
              style={{
                color: colors.accent,
                letterSpacing: "0.5px",
                fontWeight: "600",
              }}
            >
              Contact Us
            </span>
            <div className="block-Divider">
              <hr
                style={{
                  borderColor: colors.divider,
                  margin: "1rem 0",
                }}
              />
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
                  style={{
                    opacity: 0.7,
                    filter: "brightness(0) invert(1)",
                  }}
                />
                <div className="d-flex flex-column align-items-start">
                  <a
                    href="tel:+254714923182"
                    className="m-0 title page-link footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color:
                        hoveredLink === "phone"
                          ? colors.textHover
                          : colors.text,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={() => setHoveredLink("phone")}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    Phone
                  </a>
                  <small
                    className="m-0 direction-ltr"
                    style={{ color: colors.text }}
                  >
                    0714923182
                  </small>
                </div>
              </li>
              <li className="d-flex align-items-start gap-2">
                <img
                  src="https://eq-cdn.equiti-me.com/website/documents/email_jdEIIQc.svg"
                  width="24"
                  height="24"
                  alt="Email"
                  className="contact-icon"
                  style={{
                    opacity: 0.7,
                    filter: "brightness(0) invert(1)",
                  }}
                />
                <div className="d-flex flex-column align-items-start">
                  <a
                    href="mailto:jerome.chauncey@student.moringaschool.com"
                    className="m-0 title page-link footer-link"
                    style={{
                      color:
                        hoveredLink === "email"
                          ? colors.textHover
                          : colors.text,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={() => setHoveredLink("email")}
                    onMouseLeave={() => setHoveredLink(null)}
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
