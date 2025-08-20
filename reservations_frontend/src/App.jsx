import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardHome from "./pages/Dashboard";
import NewReservation from "./pages/NewReservation";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ReservationsList from "./pages/ReservationsList";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/new-reservation" element={<NewReservation />} />
        <Route
          path="/dashboard/reservations-list"
          element={<ReservationsList />}
        />
      </Route>

      <Route element={<ProtectedAdminRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
