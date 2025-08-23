import React from "react";
import restaurant1 from "../../assets/images/restaurant1.webp"

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-[#496759] via-[#3a5147] to-[#1a2620] text-[#F5EDE2] flex"
    >
      {/* Left side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 relative z-20">
        <div className="max-w-lg">
          <p className="text-sm md:text-base text-[#D9D4C8] uppercase tracking-widest mb-4 font-light">
            Premium Family Dining
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Restaurant
          </h1>

          <p className="text-lg md:text-xl text-[#D9D4C8] mb-8 font-light leading-relaxed">
            A sanctuary for life's meaningful connections, where exceptional
            views meet exceptional moments in perfect harmony
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/login"
              className="bg-[#D9886A] hover:bg-[#c77a5a] hover:scale-105 hover:shadow-lg text-[#F5EDE2] px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 font-medium text-center transform"
            >
              Reserve a Table
            </a>

            <a
              href="#next-section"
              className="border border-[#D9D4C8] hover:bg-[#D9D4C8] hover:text-[#2C3E36] text-[#D9D4C8] px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 font-medium text-center"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#2C3E36] opacity-30 z-10"></div>
        <img
          src={restaurant1}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile background image overlay */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Restaurant Interior"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#496759] via-[#3a5147]/60 to-[#2C3E36]/70"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center text-[#D9D4C8] animate-pulse">
          <span className="text-xs mb-2 tracking-wider opacity-70 hover:opacity-100 transition-opacity duration-300">
            SCROLL
          </span>
          <div className="w-px h-8 bg-[#D9D4C8] opacity-70"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fade {
          animation: fadeInOut 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
