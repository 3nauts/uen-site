import React, { createContext, useContext, useState, useEffect } from "react";

// Definição do contexto
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Checa sessionStorage ao iniciar
  useEffect(() => {
    const logged = !!sessionStorage.getItem("cadastroUEN");
    setIsAuthenticated(logged);
  }, []);

  function login() {
    setIsAuthenticated(true);
  }
  function logout() {
    setIsAuthenticated(false);
    sessionStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth precisa estar dentro do AuthProvider");
  return ctx;
}
