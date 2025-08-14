import { createContext, useEffect, useState } from "react";
import {
  getReservations,
  createReservation,
  deleteReservation,
} from "../api/reservations";

// Create context
export const ReservationContext = createContext(null);

// Provider component
export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch reservations when component mounts
  useEffect(() => {
    fetchUserReservations();
  }, []);

  // Get reservations from current user
  const fetchUserReservations = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getReservations();
      setReservations(data);
    } catch (error) {
      setError(error.message || "Failed to fetch reservations");
    } finally {
      setLoading(false);
    }
  };

  //Create a new reservation
  const addReservation = async (reservationData) => {
    try {
      setLoading(true);
      setError(null);

      const newReservation = await createReservation(reservationData);

      // add new reservation to local state
      setReservations((prev) => [...prev, newReservation]);

      return { success: true, reservation: newReservation };
    } catch (error) {
      setError(error.message || "Failed to create reservation");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Cancel reservation
  const removeReservation = async (reservationId) => {
    try {
      setLoading(true);
      setError(null);

      await deleteReservation(reservationId);

      // remove reservation from local state
      setReservations((prev) =>
        prev.filter((reservation) => reservation._id !== reservationId)
      );

      return { success: true };
    } catch (error) {
      setError(error.message || "Failed to cancel reservation");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // clean errors
  const clearError = () => {
    setError(null);
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations,
        loading,
        error,
        fetchUserReservations,
        addReservation,
        removeReservation,
        clearError,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
