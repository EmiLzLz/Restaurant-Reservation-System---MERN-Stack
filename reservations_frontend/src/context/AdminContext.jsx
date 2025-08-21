import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getAllReservations,
  getTables,
  updateReservationsStatus,
} from "../api/admin";

// Create context
export const AdminContext = createContext(null);

// Provider component
export const AdminProvider = ({ children }) => {
  const [allReservations, setAllReservations] = useState([]);
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get all reservations
  const fetchAllReservations = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getAllReservations();
      setAllReservations(data);
    } catch (error) {
      setError(error.message || "Failed to fetch all reservations");
    } finally {
      setLoading(false);
    }
  }, []);

  // Get all tables
  const fetchTables = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getTables();
      setTables(data);
    } catch (error) {
      setError(error.message || "Failed to fetch tables");
    } finally {
      setLoading(false);
    }
  }, []);

  // Update reservation status (confirm/cancel)
  const updateReservation = useCallback(async (reservationId, status) => {
    try {
      setLoading(true);
      setError(null);

      const updatedReservation = await updateReservationsStatus(
        reservationId,
        status
      );

      // Update local state
      setAllReservations((prev) =>
        prev.map((reservation) =>
          reservation._id === reservationId
            ? { ...reservation, status: status }
            : reservation
        )
      );

      return { success: true, reservation: updatedReservation };
    } catch (error) {
      setError(error.message || "Failed to update reservation");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  }, []);

  // Filter today reservations
  const getTodayReservations = useMemo(() => {
    const today = new Date().toDateString();
    return allReservations.filter(
      (reservation) => new Date(reservation.date).toDateString() === today
    );
  }, [allReservations]);

  // Get table statistics
  const getTableAvailability = useMemo(() => {
    const today = new Date().toDateString();
    const todayReservations = allReservations.filter(
      (res) => new Date(res.date).toDateString() === today
    );

    const occupiedTableIds = todayReservations.map(
      (res) => res.table._id || res.table
    );
    const occupiedTables = occupiedTableIds.length;
    const availableTables = tables.length - occupiedTables;

    return {
      occupied: occupiedTables,
      available: Math.max(0, availableTables), // Evita negativos
      total: tables.length,
    };
  }, [allReservations, tables]);

  // fetch data with component mounts
  useEffect(() => {
    fetchAllReservations();
    fetchTables();
  }, [fetchAllReservations, fetchTables]);

  // clean errors
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value = useMemo(
    () => ({
      // Data
      allReservations,
      tables,
      loading,
      error,

      // Computed values
      todayReservations: getTodayReservations,
      tableAvailability: getTableAvailability,

      // Functions
      fetchAllReservations,
      fetchTables,
      updateReservation,
      clearError,
    }),
    [
      allReservations,
      tables,
      loading,
      error,
      getTodayReservations,
      getTableAvailability,
      fetchAllReservations,
      fetchTables,
      updateReservation,
      clearError,
    ]
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
