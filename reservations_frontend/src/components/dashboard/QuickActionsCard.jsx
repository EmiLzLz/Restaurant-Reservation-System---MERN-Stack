import React from "react";
import { Calendar, Users, MapPin } from "lucide-react";

const QuickActionsCard = () => {
  return (
    <div className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-light text-[#2C3E36] mb-8">
          Quick Actions
        </h2>

        <div className="space-y-5">
          <button className="w-full text-left p-6 backdrop-blur-sm bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 rounded-xl hover:border-[#81A68D]/50 hover:bg-[#D9D4C8]/40 transition-all duration-300 group hover:shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-[#81A68D] to-[#2C3E36] p-3 rounded-xl group-hover:shadow-lg transition-all duration-300">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#2C3E36] text-lg">
                  Make New Reservation
                </h3>
                <p className="text-[#2C3E36]/70 text-sm font-light">
                  Book your next dining experience
                </p>
              </div>
            </div>
          </button>

          <button className="w-full text-left p-6 backdrop-blur-sm bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 rounded-xl hover:border-[#D9886A]/50 hover:bg-[#D9D4C8]/40 transition-all duration-300 group hover:shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-[#D9886A] to-[#D9886A]/80 p-3 rounded-xl group-hover:shadow-lg transition-all duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#2C3E36] text-lg">
                  Profile Settings
                </h3>
                <p className="text-[#2C3E36]/70 text-sm font-light">
                  Update your personal information
                </p>
              </div>
            </div>
          </button>

          <button className="w-full text-left p-6 backdrop-blur-sm bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 rounded-xl hover:border-[#81A68D]/50 hover:bg-[#D9D4C8]/40 transition-all duration-300 group hover:shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-[#81A68D]/80 to-[#2C3E36] p-3 rounded-xl group-hover:shadow-lg transition-all duration-300">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#2C3E36] text-lg">
                  View Tables
                </h3>
                <p className="text-[#2C3E36]/70 text-sm font-light">
                  Check available tables and layout
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActionsCard;
