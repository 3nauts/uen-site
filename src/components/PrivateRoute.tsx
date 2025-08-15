import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Envolva páginas protegidas com <PrivateRoute>
export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();

  // Se não estiver autenticado, volta para login ("/")
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
