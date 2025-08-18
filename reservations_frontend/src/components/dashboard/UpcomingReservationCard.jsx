import React from "react";
import { Calendar, Users } from "lucide-react";

const UpcomingReservationCard = ({
  reservation,
  formatDate,
  formatTime,
  getStatusColor,
  getStatusText,
}) => {
  if (!reservation) return null;

  return (
    <div className="bg-[#2C3E36]/40 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/30 to-[#D9D4C8]/10 pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-5">
            <div className="bg-gradient-to-br from-[#81A68D] to-[#2C3E36] p-4 rounded-2xl shadow-lg">
              <Calendar className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-light text-[#2C3E36] mb-2">
                Your Upcoming Experience
              </h2>
              <p className="text-[#2C3E36]/70 font-light">
                Perfect for your special gathering
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#D9886A] to-[#D9886A]/80 hover:from-[#D9886A]/90 hover:to-[#D9886A]/70 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm">
            Manage Reservation
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="backdrop-blur-sm bg-[#D9D4C8]/40 rounded-xl p-4 border border-[#D9D4C8]/30">
          <h3 className="text-sm font-medium text-[#2C3E36]/80 mb-2 tracking-wide">
            DATE & TIME
          </h3>
          <p className="text-[#2C3E36] font-medium text-lg">
            {formatDate(reservation.date)}
          </p>
          <p className="text-[#2C3E36]/70">{formatTime(reservation.time)}</p>
        </div>
        <div className="backdrop-blur-sm bg-[#D9D4C8]/40 rounded-xl p-4 border border-[#D9D4C8]/30">
          <h3 className="text-sm font-medium text-[#2C3E36]/80 mb-2 tracking-wide">
            PARTY SIZE
          </h3>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-[#81A68D]" />
            <span className="text-[#2C3E36] font-medium text-lg">
              {reservation.people} guests
            </span>
          </div>
          <p className="text-[#2C3E36]/70 text-sm">Perfect for families</p>
        </div>
        <div className="backdrop-blur-sm bg-[#D9D4C8]/40 rounded-xl p-4 border border-[#D9D4C8]/30">
          <h3 className="text-sm font-medium text-[#2C3E36]/80 mb-2 tracking-wide">
            TABLE
          </h3>
          <p className="text-[#2C3E36] font-medium text-lg">
            {reservation.table?.capacity
              ? `(${reservation.table.capacity} seats)`
              : reservation.table}
          </p>
        </div>
        <div className="backdrop-blur-sm bg-[#D9D4C8]/40 rounded-xl p-4 border border-[#D9D4C8]/30 flex items-center justify-center">
          <span
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${getStatusColor(
              reservation.status
            )}`}
          >
            {getStatusText(reservation.status)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingReservationCard;
