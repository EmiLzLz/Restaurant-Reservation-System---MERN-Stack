import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ReservationProvider } from "./context/ReservationContext.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ReservationProvider>
        <AdminProvider>
          <Router>
            <App />
          </Router>
        </AdminProvider>
      </ReservationProvider>
    </AuthProvider>
  </StrictMode>
);
