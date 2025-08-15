import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Importe seus componentes reais:
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Pagamento from "./pages/Pagamento";
import Cliente from "./pages/Cliente";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/cadastro"
            element={
              <PrivateRoute>
                <Cadastro />
              </PrivateRoute>
            }
          />
          <Route
            path="/pagamento"
            element={
              <PrivateRoute>
                <Pagamento />
              </PrivateRoute>
            }
          />
          <Route
            path="/cliente/:cpf"
            element={
              <PrivateRoute>
                <Cliente />
              </PrivateRoute>
            }
          />
          {/* Se quiser proteger todas as rotas futuras, adicione PrivateRoute nelas também */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
