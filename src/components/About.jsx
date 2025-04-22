import React from 'react';

const features = [
  {
    title: "Integrity at the Core",
    description: "We believe integrity is non-negotiable. One Percent empowers traders to act with transparency and fairness.",
    image: "MM.jpeg",
  },
  {
    title: "Proactive Self-Regulation",
    description: "We don’t wait for regulations to catch up. We create our own standard of excellence through self-accountability.",
    image: "MM.jpeg",
  },
  {
    title: "Community-Led Trust",
    description: "We’re building a culture of trust where professionals hold each other accountable in restoring faith in the markets.",
    image: "fMMjpeg",
  },
  {
    title: "Elevating Market Ethics",
    description: "One Percent is redefining what it means to trade with honor. We educate, inspire, and lead by example.",
    image: "f4M.jpeg",
  }
];

const About = () => {
    return (
      <div className="about-section">
        <h2 className="about-heading">Who We Are</h2>
        <p className="about-description">
          One Percent empowers traders and financial professionals to uphold integrity in the markets. Rather than waiting for
          regulators to act, we promote proactive self-regulation to ensure fairness, transparency, and trust.
        </p>
        <div className="feature-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default About;
