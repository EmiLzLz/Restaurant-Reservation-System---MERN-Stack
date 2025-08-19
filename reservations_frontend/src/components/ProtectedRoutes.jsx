import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoutes() {
  const { user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>; // O tu spinner
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
