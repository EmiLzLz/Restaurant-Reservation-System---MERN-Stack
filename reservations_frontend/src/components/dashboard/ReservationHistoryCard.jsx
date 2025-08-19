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
    <section className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none"></div>

      <header className="relative z-10 flex items-center gap-4 mb-8">
        <div className="bg-gradient-to-br from-[#D9886A] to-[#D9886A]/80 p-3 rounded-2xl shadow-lg">
          <MapPin className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-light text-[#2C3E36]">Dining History</h2>
          <p className="text-[#2C3E36]/70 font-light">
            Your memorable moments with us
          </p>
        </div>
      </header>

      <ul className="relative z-10 space-y-4">
        {reservations && reservations.length > 0 ? (
          reservations.map((reservation) => {
            const status = getReservationStatus(reservation.date);
            const statusColor = getStatusColor(status);
            const statusText = getStatusText(status);

            return (
              <li key={reservation._id}>
                <article className="flex items-center justify-between p-5 backdrop-blur-sm bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 rounded-xl hover:bg-[#D9D4C8]/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[#81A68D]/80 to-[#2C3E36] p-3 rounded-xl shadow-md">
                      <Users className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#2C3E36]/80 mb-2">
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {formatTime(reservation.date)}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {reservation.people} guests
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

                  <div className="flex flex-col items-end gap-3">
                    <span
                      className={`inline-flex items-center px-3 py-2 rounded-full text-xs font-medium backdrop-blur-sm ${statusColor}`}
                    >
                      {statusText}
                    </span>

                    {status === "confirmed" && (
                      <button className="text-[#81A68D] hover:text-[#2C3E36] text-sm font-medium transition-colors">
                        Modify
                      </button>
                    )}
                  </div>
                </article>
              </li>
            );
          })
        ) : (
          <li className="text-center py-8">
            <p className="text-[#2C3E36]/70 text-lg">No reservations found</p>
            <p className="text-[#2C3E36]/50 text-sm">
              Make your first reservation!
            </p>
          </li>
        )}
      </ul>

      <footer className="mt-8">
        <button className="w-full backdrop-blur-sm bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 text-[#2C3E36] py-3 px-6 rounded-xl hover:bg-[#D9D4C8]/40 transition-all duration-300 font-medium">
          View All History
        </button>
      </footer>
    </section>
  );
};

export default ReservationHistoryCard;
