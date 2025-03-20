"use client";

import HeroText from "./hero-text";
import HeroSearch from "./hero-search";

const Hero = () => {
  return (
    <div className="min-h-[70vh] bg-gradient-to-r from-[#731963] to-[#D5CFE1] flex p-6">
      <HeroText />
      <HeroSearch />
    </div>
  );
};

export default Hero;
