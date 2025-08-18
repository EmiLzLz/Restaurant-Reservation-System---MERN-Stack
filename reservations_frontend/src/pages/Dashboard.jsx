import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useReservation } from "../hooks/useReservation";
import DashboardHeader from "../components/dashboard/DashboardHearder";
import UpcomingReservationCard from "../components/dashboard/UpcomingReservationCard";
import ReservationHistoryCard from "../components/dashboard/ReservationHistoryCard";
import QuickActionsCard from "../components/dashboard/QuickActionsCard";

const DashboardHome = () => {
  const { user } = useAuth();
  const { reservations, loading, error } = useReservation();

  // Helper functions (keeping them here for now)
  /**
   * The `formatDate` function takes a date string as input and returns a formatted date in the "month
   * day, year" format.
   * @returns The `formatDate` function takes a `dateString` as input, converts it to a `Date` object,
   * and then returns the formatted date in the format "Month Day, Year" (e.g., "January 1, 2022") in
   * US English locale.
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  /**
   * The `formatTime` function takes a date string as input and returns the time in 24-hour format.
   * @returns The `formatTime` function takes a `dateString` as input, converts it to a `Date` object,
   * and then returns the time portion of the date in 24-hour format (HH:mm) using the
   * `toLocaleDateString` method with the specified options.
   */
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  /**
   * The function `getReservationStatus` determines if a reservation is confirmed or completed based on
   * the reservation date compared to the current date.
   * @returns The function `getReservationStatus` returns either "confirmed" if the reservation date is
   * in the future compared to the current date, or "completed" if the reservation date is in the past
   * or the same as the current date.
   */
  const getReservationStatus = (reservationDate) => {
    const now = new Date();
    const resDate = new Date(reservationDate);
    return resDate > now ? "confirmed" : "completed";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-[#81A68D]/20 text-[#2C3E36] border border-[#81A68D]/30";
      case "completed":
        return "bg-[#D9886A]/20 text-[#2C3E36] border border-[#D9886A]/30";
      default:
        return "bg-[#D9D4C8]/30 text-[#2C3E36] border border-[#D9D4C8]/50";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Confirmed";
      case "completed":
        return "Wonderful Evening";
      default:
        return status;
    }
  };

  // Get upcoming reservation
  /* This line of code is filtering the `reservations` array to get the upcoming reservation. Here's a
  breakdown of what each part of the code is doing: */
  const upcomingReservation = reservations
    ?.filter((res) => new Date(res.date) > new Date())
    ?.sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  // Get reservation history
  /* This line of code is creating a new array `reservationHistory` by performing the following
  operations: */
  const reservationHistory = reservations
    ?.slice()
    ?.sort((a, b) => new Date(b.date) - new Date(a.date))
    ?.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EDE2] via-[#D9D4C8] to-[#F5EDE2]">
      <DashboardHeader userName={user?.name} />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <UpcomingReservationCard
          reservation={upcomingReservation}
          formatDate={formatDate}
          formatTime={formatTime}
          getStatusColor={getStatusColor}
          getStatusText={getStatusText}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-14">
          <ReservationHistoryCard
            reservations={reservationHistory}
            formatDate={formatDate}
            formatTime={formatTime}
            getReservationStatus={getReservationStatus}
            getStatusColor={getStatusColor}
            getStatusText={getStatusText}
          />
          <QuickActionsCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
