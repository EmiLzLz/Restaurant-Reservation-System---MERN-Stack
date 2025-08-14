import { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }

  return context;
};
