import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedAdminRoute() {
  const { isAdmin, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>; // O tu spinner
  }

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedAdminRoute;
