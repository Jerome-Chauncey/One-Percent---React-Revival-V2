import React from "react";

const features = [
  {
    title: "Integrity at the Core",
    description:
      "We believe integrity is non-negotiable. One Percent empowers traders to act with transparency and fairness.",
    image: "f1.jpeg",
  },
  {
    title: "Proactive Self-Regulation",
    description:
      "We don’t wait for regulations to catch up. We create our own standard of excellence through self-accountability.",
    image: "f2.jpeg",
  },
  {
    title: "Community-Led Trust",
    description:
      "We’re building a culture of trust where professionals hold each other accountable in restoring faith in the markets.",
    image: "f3.jpeg",
  },
  {
    title: "Elevating Market Ethics",
    description:
      "One Percent is redefining what it means to trade with honor. We educate, inspire, and lead by example.",
    image: "f4.jpeg",
  },
];

const About = () => {
  return (
    <div
      className="about-section"
      style={{ backgroundColor: "#111", color: "white", padding: "50px 20px" }}
    >
      <h2
        style={{ textAlign: "center", marginBottom: "40px", color: "#f2b705" }}
      >
        Who We Are
      </h2>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 60px",
          color: "#ccc",
          fontSize: "16px",
          lineHeight: "1.8",
        }}
      >
        One Percent empowers traders and financial professionals to uphold
        integrity in the markets. Rather than waiting for regulators to act, we
        promote proactive self-regulation to ensure fairness, transparency, and
        trust.
      </p>
      <div
        className="feature-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-box"
            style={{
              backgroundColor: "#1c1c1c",
              borderRadius: "10px",
              width: "300px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <h3 style={{ marginTop: "20px", color: "#f2b705" }}>
              {feature.title}
            </h3>
            <p
              style={{
                marginTop: "10px",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#ccc",
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
