import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardHome from "./pages/Dashboard";
import NewReservation from "./pages/NewReservation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="/dashboard/new-reservation" element={<NewReservation />} />
    </Routes>
  );
}

export default App;
