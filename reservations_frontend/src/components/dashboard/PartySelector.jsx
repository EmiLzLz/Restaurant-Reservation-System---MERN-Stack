import React from "react";

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function PartySelector({ selectedPartySize, onPartySizeSelect }) {
  return (
    <div className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-center text-[#2C3E36] text-lg font-light mb-4">
          Number of guests
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {partySizes.map((size) => (
            <button
              key={size}
              onClick={() => onPartySizeSelect(size)}
              className={`
                w-full p-3 text-sm rounded-xl border transition-all duration-300
                ${
                  selectedPartySize === size
                    ? "bg-gradient-to-br from-[#81A68D] to-[#2C3E36] text-white shadow-lg"
                    : "bg-[#D9D4C8]/20 border-[#D9D4C8]/30 text-[#2C3E36] hover:bg-[#D9D4C8]/40"
                }
              `}
            >
              {size} {size === 1 ? "guest" : "guests"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartySelector;
