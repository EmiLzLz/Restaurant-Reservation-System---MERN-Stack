import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomCalendar = ({ selectedDate, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date()); // ✅ Corregido

  const today = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days = [];
  const date = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  const isToday = (date) => {
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const isCurrentMonth = (date) => {
    return date.getMonth() === currentMonth;
  };

  const isPastDate = (date) => {
    return date < today && !isToday(date);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentYear, currentMonth + direction, 1));
  };

  return (
    <div className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 rounded-xl bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 hover:bg-[#D9D4C8]/40 transition-all duration-300 hover:shadow-lg"
          >
            <ChevronLeft className="h-5 w-5 text-[#2C3E36]" />
          </button>

          <h2 className="text-xl font-light text-[#2C3E36]">
            {monthNames[currentMonth]} {currentYear}
          </h2>

          <button
            onClick={() => navigateMonth(1)}
            className="p-2 rounded-xl bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 hover:bg-[#D9D4C8]/40 transition-all duration-300 hover:shadow-lg"
          >
            <ChevronRight className="h-5 w-5 text-[#2C3E36]" />
          </button>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day) => (
            <div
              key={day}
              className="p-2 text-center text-sm font-medium text-[#2C3E36]/70"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((date, index) => (
            <button
              key={index}
              onClick={() => !isPastDate(date) && onDateSelect(date)}
              disabled={isPastDate(date)}
              className={`
               p-3 text-sm rounded-xl transition-all duration-300 relative
               ${!isCurrentMonth(date) ? "text-[#2C3E36]/30" : "text-[#2C3E36]"}
               ${
                 isPastDate(date)
                   ? "text-[#2C3E36]/20 cursor-not-allowed"
                   : "hover:bg-[#D9D4C8]/40 cursor-pointer"
               }
               ${
                 isSelected(date)
                   ? "bg-gradient-to-br from-[#81A68D] to-[#2C3E36] text-white shadow-lg"
                   : isToday(date)
                   ? "bg-[#D9886A]/20 border border-[#D9886A]/30 text-[#2C3E36] font-medium"
                   : "bg-[#D9D4C8]/20 border border-[#D9D4C8]/30"
               }
             `}
            >
              {date.getDate()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
