import React from "react";
import { MapPin, Clock, Users } from "lucide-react";

const ReservationHistoryCard = ({
  reservations,
  formatDate,
  formatTime,
  getReservationStatus,
  getStatusColor,
  getStatusText,
}) => {
  return (
    <div className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-8">
          <div className="bg-gradient-to-br from-[#D9886A] to-[#D9886A]/80 p-3 rounded-2xl shadow-lg">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-light text-[#2C3E36]">
              Dining History
            </h2>
            <p className="text-[#2C3E36]/70 font-light">
              Your memorable moments with us
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {reservations && reservations.length > 0 ? (
            reservations.map((reservation) => (
              <div
                key={reservation._id}
                className="flex items-center justify-between p-5 backdrop-blur-sm bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 rounded-xl hover:bg-[#D9D4C8]/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#81A68D]/80 to-[#2C3E36] p-3 rounded-xl shadow-md">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-4 text-sm text-[#2C3E36]/80 mb-2">
                      <span className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{formatTime(reservation.date)}</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{reservation.people} guests</span>
                      </span>
                      <span className="text-[#81A68D] font-medium">
                        Table{" "}
                        {reservation.table?.capacity
                          ? `(${reservation.table.capacity} seats)`
                          : reservation.table}
                      </span>
                    </div>
                    <p className="text-[#2C3E36] font-medium text-lg">
                      {formatDate(reservation.date)}
                    </p>
                    <p className="text-[#2C3E36]/70 text-sm font-light">
                      Duration: {reservation.duration}h
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-3">
                  <span
                    className={`inline-flex items-center px-3 py-2 rounded-full text-xs font-medium backdrop-blur-sm ${getStatusColor(
                      getReservationStatus(reservation.date)
                    )}`}
                  >
                    {getStatusText(getReservationStatus(reservation.date))}
                  </span>
                  {getReservationStatus(reservation.date) === "confirmed" && (
                    <button className="text-[#81A68D] hover:text-[#2C3E36] text-sm font-medium transition-colors">
                      Modify
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-[#2C3E36]/70 text-lg">No reservations found</p>
              <p className="text-[#2C3E36]/50 text-sm">
                Make your first reservation!
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 backdrop-blur-sm bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 text-[#2C3E36] py-3 px-6 rounded-xl hover:bg-[#D9D4C8]/40 transition-all duration-300 font-medium">
            View All History
          </button>
          <button className="flex-1 bg-gradient-to-r from-[#D9886A] to-[#D9886A]/80 hover:from-[#D9886A]/90 hover:to-[#D9886A]/70 text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
            Book Another Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationHistoryCard;
