import React from "react";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Services from "../components/landing/Services";

function Landing() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default Landing;
