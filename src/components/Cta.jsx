import React, { useState } from "react";
import { Info, Shield, ChevronRight } from "lucide-react";

function Cta() {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, cardIndex) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    // Gentler rotation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5; // Reduced from 10 to 5
    const rotateY = ((centerX - x) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`; // Reduced lift
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    setActiveCard(null);
  };

  const cardData = [
    {
      icon: <Info size={24} />,
      title: "Did you know?",
      content: [
        "In retail forex trading, neither you nor the broker actually take ownership of the currencies being traded. When you place a trade, you and your broker enter into an agreement where:",
        "If you predict correctly, you earn the difference between the opening and closing price.",
        "If you predict incorrectly, you pay the difference to the broker.",
      ],
    },
    {
      icon: <Shield size={24} />,
      title: "Assess Broker Risk",
      content: [
        "This setup introduces counterparty credit risk the risk that the broker may not have enough capital to pay you if they default. Since your broker is the other party in your trade, ensuring they are well-capitalized and regulated is crucial for security.",
      ],
    },
  ];

  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #03045e 0%, #023e8a 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div className="col-12 col-md-4 mx-md-3 my-3" key={index}>
              <div
                className="h-100 p-4 rounded-lg text-white position-relative transition-all"
                style={{
                  background:
                    activeCard === index
                      ? "rgba(0, 119, 182, 0.35)"
                      : "rgba(0, 119, 182, 0.25)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${
                    activeCard === index
                      ? "rgba(0, 180, 216, 0.4)"
                      : "rgba(0, 180, 216, 0.2)"
                  }`,
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Subtle background gradient */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                      rgba(0, 180, 216, 0.15) 0%, 
                      transparent 60%)`,
                    opacity: activeCard === index ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* Header with subtle icon animation */}
                <div
                  className="d-flex align-items-center mb-3"
                  style={{ transform: "translateZ(10px)" }}
                >
                  <div
                    className="me-2"
                    style={{
                      color: "#48CAE4",
                      transform:
                        activeCard === index ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.4s ease",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="m-0" style={{ color: "#90E0EF" }}>
                    {card.title}
                  </h3>
                </div>

                {/* Content */}
                {card.content.map((text, i) => (
                  <p
                    key={i}
                    className={i > 0 ? "fw-bold" : ""}
                    style={{
                      color: i > 0 ? "#CAF0F8" : "#ADE8F4",
                      transform: "translateZ(5px)",
                      transition: "all 0.4s ease",
                    }}
                  >
                    {text}
                  </p>
                ))}

                {/* Subtle indicator */}
                <div
                  className="position-absolute bottom-0 end-0 p-3"
                  style={{
                    transform: "translateZ(10px)",
                    opacity: activeCard === index ? 1 : 0,
                    transition: "all 0.4s ease",
                  }}
                >
                  <ChevronRight
                    size={20}
                    style={{
                      color: "#48CAE4",
                      transform:
                        activeCard === index
                          ? "translateX(5px)"
                          : "translateX(0)",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cta;
