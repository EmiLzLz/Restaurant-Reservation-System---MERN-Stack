import React from "react";

const DashboardHeader = ({ userName }) => {
  return (
    <div className="relative bg-gradient-to-r from-[#2C3E36] via-[#2C3E36] to-[#81A68D] text-white px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="relative max-w-6xl mx-auto z-10">
        <h1 className="text-5xl font-light mb-3 tracking-wide">
          Welcome back, {userName || "Guest"}
        </h1>
        <p className="text-[#F5EDE2]/90 text-xl font-light">
          Your culinary journey continues
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
