const About = () => {
  const features = [
    {
      title: "Our Mission",
      description:
        "Empowering traders with tools and knowledge for market integrity.",
      icon: "bi bi-bullseye",
    },
    {
      title: "Our Vision",
      description:
        "Creating a self-regulated trading environment built on trust.",
      icon: "bi bi-eye",
    },
    {
      title: "Our Values",
      description:
        "Integrity, transparency, and fairness in all market operations.",
      icon: "bi bi-shield-check",
    },
  ];

  return (
    <>
      <div className="border-top border-info opacity-25"></div>

      <section
        className="about-section py-5"
        style={{ backgroundColor: "#03045E" }}
      >
        <div className="container position-relative">
          <div className="card bg-opacity-10 bg-info border-0 shadow-sm p-4">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mb-5">
                <h2
                  className="display-4 fw-bold mb-4"
                  style={{ color: "#4CC9F0" }}
                >
                  Who We Are
                </h2>
                <p className="lead mb-5" style={{ color: "#CAF0F8" }}>
                  One Percent empowers traders and financial professionals to
                  uphold integrity in the markets. Rather than waiting for
                  regulators to act, we promote proactive self-regulation to
                  ensure fairness, transparency, and trust.
                </p>
              </div>
            </div>

            <div className="row g-4 justify-content-center">
              {features.map((feature, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 bg-transparent border border-info border-opacity-25">
                    <div className="card-body text-center">
                      <i
                        className={`${feature.icon} fs-1 mb-3`}
                        style={{ color: "#4CC9F0" }}
                      ></i>
                      <h3
                        className="card-title h4 mb-3"
                        style={{ color: "#4CC9F0" }}
                      >
                        {feature.title}
                      </h3>
                      <p className="card-text" style={{ color: "#CAF0F8" }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
