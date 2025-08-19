import React from "react";
import { useReservation } from "../hooks/useReservation";
import { Calendar, Users, Clock } from "lucide-react";
import { format } from "date-fns";

function ReservationsList() {
  const { reservations, loading, error } = useReservation();

  if (loading)
    return <p className="text-[#2C3E36]">Loading your reservations...</p>;
  if (error)
    return <p className="text-[#D9886A]">Failed to load reservations.</p>;

  return (
    <section
      aria-labelledby="reservations-heading"
      className="bg-[#2C3E36]/10 p-8 rounded-2xl border border-[#81A68D]/30 shadow-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none" />

      <header className="mb-6 relative z-10">
        <h2
          id="reservations-heading"
          className="text-2xl font-light text-[#2C3E36]"
        >
          Your Reservations
        </h2>
      </header>

      {reservations.length === 0 ? (
        <p className="text-[#2C3E36]/70 relative z-10">
          You don't have any reservations yet.
        </p>
      ) : (
        <ul className="flex flex-col gap-5 relative z-10">
          {reservations.map((reservation) => (
            <li key={reservation._id}>
              <article
                aria-label={`Reservation for ${reservation.people} people`}
                className="bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 rounded-xl p-6 backdrop-blur-sm hover:bg-[#D9D4C8]/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="bg-gradient-to-br from-[#81A68D] to-[#2C3E36] p-3 rounded-xl text-white shadow-md"
                  >
                    <Calendar className="h-6 w-6" />
                  </span>

                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#2C3E36]">
                      Reservation
                    </h3>
                    <p className="text-sm text-[#2C3E36]/70">
                      {format(new Date(reservation.date), "PPP 'at' p")}
                    </p>

                    <ul className="flex items-center gap-4 mt-2 text-sm text-[#2C3E36]/70">
                      <li className="flex items-center gap-1">
                        <Users className="h-4 w-4" aria-hidden="true" />
                        <span>{reservation.people} people</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span>{reservation.duration}h duration</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>
                          Table:{" "}
                          {typeof reservation.table === "object"
                            ? reservation.table.number || reservation.table._id
                            : reservation.table}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ReservationsList;
