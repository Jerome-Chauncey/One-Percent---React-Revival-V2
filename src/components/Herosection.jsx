import React, { useState } from "react";

const slides = [
    {
      image: "/marketW.jpeg",
      h1: "Integrity Over Everything",
      h2: "Redefining Forex Standards",
      h3: "Trade with honor. Lead with trust.",
      p: "One Percent promotes self-regulation and transparency, ensuring traders operate with unmatched ethics.",
    },
    {
      image: "/market1W.jpeg",
      h1: "Empower Your Strategy",
      h2: "Tools Backed by Ethics",
      h3: "Built for serious professionals.",
      p: "We provide data-driven tools while championing fairness, accountability, and informed execution.",
    },
    
      
  ];
  

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const switchSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section
      className="relative w-full bg-black text-white font-['Poppins']"
      
    >
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 z-20 pt-90">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{slides[index].h1}</h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-indigo-300">{slides[index].h2}</h2>
          <h3 className="text-lg md:text-xl text-gray-300">{slides[index].h3}</h3>

          <p className="text-base md:text-lg text-gray-300 mt-2">{slides[index].p}</p>
          
          <button
            onClick={switchSlide}
            className="mt-6 inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold tracking-wide hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            Slide
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
