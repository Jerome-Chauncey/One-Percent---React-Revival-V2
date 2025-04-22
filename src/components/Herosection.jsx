import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/market.jpeg",
    h1: "Integrity Over Everything",
    h2: "Redefining Forex Standards",
    h3: "Trade with honor. Lead with trust.",
    p: "One Percent promotes self-regulation and transparency, ensuring traders operate with unmatched ethics.",
  },
  {
    image: "/market1.jpeg",
    h1: "Empower Your Strategy",
    h2: "Tools Backed by Ethics",
    h3: "Built for serious professionals.",
    p: "We provide data-driven tools while championing fairness, accountability, and informed execution.",
  },
  {
    image: "/market2.jpeg",
    h1: "Lead the Market Ethically",
    h2: "Be the Standard Others Follow",
    h3: "Elevate your trading journey.",
    p: "Through education and self-discipline, we empower traders to act with responsibility and confidence.",
  },
  {
    image: "/market3.jpeg",
    h1: "Beyond Profits",
    h2: "Build Trust. Create Legacy.",
    h3: "Trading isn't just numbers — it's character.",
    p: "We’re shaping a new era where community-led trust replaces reliance on slow-moving regulation.",
  },
  {
    image: "/market4.jpeg",
    h1: "Own Your Edge",
    h2: "Data + Discipline = Dominance",
    h3: "Let your integrity guide your trades.",
    p: "With real-time signals and a mission-driven mindset, you're always prepared — and respected.",
  },
  {
    image: "/market5.jpeg",
    h1: "Built for the 1%",
    h2: "Where Mindset Meets Mastery",
    h3: "This isn’t for everyone — only the committed.",
    p: "We don’t chase hype. We build elite traders through grit, growth, and grounded knowledge.",
  },
  {
    image: "/market6.jpeg",
    h1: "The Future is Self-Regulated",
    h2: "No More Waiting for Oversight",
    h3: "We act before regulators react.",
    p: "Join a community that values initiative, accountability, and a better vision for financial markets.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000); // auto-slide every 7 seconds
    return () => clearInterval(interval);
  }, []);

  const switchSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section
      className="relative w-full bg-black text-white font-['Poppins']"
      style={{
        height: "100vh",
        backgroundImage: `url(${slides[index].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.6s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 z-20 mt-90">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            {slides[index].h1}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-indigo-300">
            {slides[index].h2}
          </h2>
          <h3 className="text-lg md:text-xl text-gray-300">
            {slides[index].h3}
          </h3>

          <p className="text-base md:text-lg text-gray-300 mt-2">
            {slides[index].p}
          </p>

          <button
            onClick={switchSlide}
            className="hero-slide-button mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm md:text-base font-semibold tracking-wide shadow-lg"
          >
            Slide
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
