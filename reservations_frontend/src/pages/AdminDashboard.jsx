import React from "react";
import {
  Check,
  XCircle,
  CalendarCheck2,
  LayoutGrid,
  LogOut,
  Users,
  Clock,
} from "lucide-react";
import { useReservation } from "../hooks/useReservation";
import { useAuth } from "../hooks/useAuth";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { reservations, loading, error } = useReservation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Filter today's reservations
  const today = new Date().toDateString();
  const todayReservations = reservations.filter(
    (reservation) => new Date(reservation.date).toDateString() === today
  );

  // Mock table status - you can replace with real data later
  const tablesStatus = [
    { id: 1, occupied: true },
    { id: 2, occupied: false },
    { id: 3, occupied: true },
    { id: 4, occupied: false },
    { id: 5, occupied: true },
  ];

  const occupiedTables = tablesStatus.filter((table) => table.occupied).length;
  const availableTables = tablesStatus.filter(
    (table) => !table.occupied
  ).length;

  if (loading)
    return <div className="p-8 text-[#2C3E36]">Loading admin data...</div>;
  if (error)
    return (
      <div className="p-8 text-[#D9886A]">Error loading data: {error}</div>
    );

  return (
    <section className="min-h-screen bg-[#F5EDE2]">
      {/* Header */}
      <header className="w-full bg-gradient-to-br from-[#2C3E36] via-[#1a2d25] to-[#0f1b17] text-white py-12 px-8 shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-light tracking-wide">Admin Panel</h1>
            <p className="text-white/70 text-base mt-2">
              Monitor and manage restaurant reservations
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl text-white transition shadow-lg backdrop-blur-sm"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="p-8 space-y-10 max-w-7xl mx-auto">
        {/* Overview Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <CalendarCheck2 className="text-[#2C3E36] w-6 h-6" />
                <h2 className="text-lg text-[#2C3E36] font-medium">
                  Today's Reservations
                </h2>
              </div>
              <p className="text-3xl text-[#2C3E36] font-semibold">
                {todayReservations.length}
              </p>
            </div>
          </div>

          <div className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <LayoutGrid className="text-[#2C3E36] w-6 h-6" />
                <h2 className="text-lg text-[#2C3E36] font-medium">
                  Tables Status
                </h2>
              </div>
              <div className="space-y-1 text-sm text-[#2C3E36]/80">
                <p>
                  Occupied:{" "}
                  <span className="text-[#D9886A] font-medium">
                    {occupiedTables}
                  </span>
                </p>
                <p>
                  Available:{" "}
                  <span className="text-[#81A68D] font-medium">
                    {availableTables}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <Users className="text-[#2C3E36] w-6 h-6" />
                <h2 className="text-lg text-[#2C3E36] font-medium">
                  Total Reservations
                </h2>
              </div>
              <p className="text-3xl text-[#2C3E36] font-semibold">
                {reservations.length}
              </p>
            </div>
          </div>
        </section>

        {/* Reservations List */}
        <section
          aria-labelledby="all-reservations-heading"
          className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none" />

          <header className="mb-6 relative z-10">
            <h2
              id="all-reservations-heading"
              className="text-2xl font-light text-[#2C3E36]"
            >
              All Reservations
            </h2>
          </header>

          {reservations.length === 0 ? (
            <p className="text-[#2C3E36]/70 relative z-10">
              No reservations found.
            </p>
          ) : (
            <ul className="space-y-4 relative z-10">
              {reservations.map((reservation) => (
                <li key={reservation._id}>
                  <article className="bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 rounded-xl p-6 backdrop-blur-sm hover:bg-[#D9D4C8]/40 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-[#2C3E36] text-lg font-medium mb-2">
                          Reservation #{reservation._id.slice(-6)}
                        </h3>
                        <p className="text-[#2C3E36]/70 text-sm mb-2">
                          {format(new Date(reservation.date), "PPP 'at' p")}
                        </p>

                        <ul className="flex items-center gap-4 text-sm text-[#2C3E36]/70">
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
                                ? reservation.table.number ||
                                  reservation.table._id
                                : reservation.table}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex items-center gap-1 px-4 py-2 text-sm bg-[#81A68D] text-white rounded-lg hover:bg-[#2C3E36] transition">
                          <Check className="w-4 h-4" />
                          Confirm
                        </button>
                        <button className="flex items-center gap-1 px-4 py-2 text-sm bg-[#D9886A] text-white rounded-lg hover:bg-red-700 transition">
                          <XCircle className="w-4 h-4" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </section>
  );
};

export default AdminDashboard;
