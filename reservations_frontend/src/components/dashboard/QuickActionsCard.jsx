import React from "react";
import { Calendar, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    to: "/dashboard/new-reservation",
    icon: <Calendar className="h-6 w-6 text-white" />,
    bgIcon: "from-[#81A68D] to-[#2C3E36]",
    title: "Make New Reservation",
    description: "Book your next dining experience",
    hoverBorder: "hover:border-[#81A68D]/50",
  },
  {
    to: "/dashboard/profile",
    icon: <Users className="h-6 w-6 text-white" />,
    bgIcon: "from-[#D9886A] to-[#D9886A]/80",
    title: "Profile Settings",
    description: "Update your personal information",
    hoverBorder: "hover:border-[#D9886A]/50",
  },
  {
    to: "/dashboard/tables",
    icon: <MapPin className="h-6 w-6 text-white" />,
    bgIcon: "from-[#81A68D]/80 to-[#2C3E36]",
    title: "View Tables",
    description: "Check available tables and layout",
    hoverBorder: "hover:border-[#81A68D]/50",
  },
];

const QuickActionsCard = () => {
  return (
    <section className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none"></div>

      <header className="relative z-10 mb-8">
        <h2 className="text-2xl font-light text-[#2C3E36]">Quick Actions</h2>
      </header>

      <ul className="relative z-10 flex flex-col gap-5">
        {actions.map(
          ({ to, icon, bgIcon, title, description, hoverBorder }, idx) => (
            <li key={idx}>
              <Link
                to={to}
                className={`block w-full text-left p-6 backdrop-blur-sm bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 rounded-xl ${hoverBorder} hover:bg-[#D9D4C8]/40 transition-all duration-300 group hover:shadow-lg`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`bg-gradient-to-br ${bgIcon} p-3 rounded-xl group-hover:shadow-lg transition-all duration-300`}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2C3E36] text-lg">
                      {title}
                    </h3>
                    <p className="text-[#2C3E36]/70 text-sm font-light">
                      {description}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default QuickActionsCard;
