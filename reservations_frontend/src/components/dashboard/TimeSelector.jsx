import React from "react";

const hours = [
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

function TimeSelector({ selectedTime, onTimeSelect }) {
  return (
    <div className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-center text-[#2C3E36] text-lg font-light mb-4">
          Select a time
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {hours.map((hour) => (
            <button
              key={hour}
              onClick={() => onTimeSelect(hour)}
              className={`
                w-full p-3 text-sm rounded-xl border transition-all duration-300
                ${
                  selectedTime === hour
                    ? "bg-gradient-to-br from-[#81A68D] to-[#2C3E36] text-white shadow-lg"
                    : "bg-[#D9D4C8]/20 border-[#D9D4C8]/30 text-[#2C3E36] hover:bg-[#D9D4C8]/40"
                }
              `}
            >
              {hour}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimeSelector;
