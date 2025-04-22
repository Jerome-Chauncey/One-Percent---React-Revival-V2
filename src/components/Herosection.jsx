import React from "react";

const Herosection = () => {
  return (
    <>
      <section
      className="hero-section text-center text-white d-flex align-items-center justify-content-center bg-dark"
    >
      <div className="container">
        <h1 className="display-4 fw-bold">Empowering Financial Self-Regulation</h1>
        <p className="lead">
          Stay ahead of the market. Learn to self-regulate before crises happen.
        </p>
         <a
          href="#learn-more"
          className="btn btn-primary btn-lg mt-3"
          id="learn-more-btn"
          >Learn More</a>
        
      </div>
    </section>

    <section id="about" className="py-5 bg-light">
      <div className="container text-center text-dark">
        <h2 className="fw-bold">About One Percent</h2>
        <p className="lead">
          We empower traders and financial professionals to uphold integrity in
          the markets. Rather than waiting for regulators to act, we promote
          proactive <span className="fw-bold">self-regulation</span> to ensure
          fairness, transparency, and trust.
        </p>
        <h2 className="mt-5 fw-bold">Market Awareness</h2>
        <p className="lead">
          Market awareness is key to responsible trading. Understanding how
          markets work, identifying legitimate brokers, recognizing
          <span className="fw-bold">fair pricing</span>, and
          <span className="fw-bold">managing risks</span> help protect your
          investments. Stay informed about market risks before they escalate to
          trade smarter and safer.
        </p>
      </div>
    </section>
    </>
    
  )
}

export default Herosection
