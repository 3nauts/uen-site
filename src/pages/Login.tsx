import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Simulação: se CPF termina em par, vai para área do cliente
    const clienteExiste = parseInt(cpf.replace(/\D/g, "").slice(-1)) % 2 === 0;
    if (clienteExiste) {
      navigate(`/cliente/${cpf}`);
    } else {
      navigate("/cadastro");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#009c3b] via-[#ffcc29] to-[#006837] p-4">
      {/* Logo UEN */}
      <img
        src="https://uenestudantil.org/img/logo-uen.2b7e825d.png"
        alt="Logomarca UEN"
        className="w-32 md:w-40 mb-6 drop-shadow-xl"
        style={{ filter: "drop-shadow(0 2px 12px #00683755)" }}
      />

      {/* Card de login */}
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-6 w-full max-w-sm flex flex-col gap-4"
      >
        <h1 className="text-2xl md:text-3xl font-black text-[#009c3b] text-center mb-1">
          Área do Cliente
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Acesse sua carteirinha com CPF
        </p>
        <label className="text-[#009c3b] text-lg font-bold" htmlFor="cpf">
          CPF
        </label>
        <input
          type="text"
          id="cpf"
          placeholder="000.000.000-00"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          maxLength={14}
          className="border border-[#009c3b] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffcc29] text-center text-lg tracking-wide"
          required
        />
        <button
          type="submit"
          className="bg-[#009c3b] hover:bg-[#00782c] text-white font-bold rounded-lg py-2 text-lg shadow transition-all duration-200"
        >
          Entrar
        </button>
      </form>

      {/* Footer informativo */}
      <div className="mt-8 text-white text-sm text-center opacity-80">
        <span>
          <strong>UEN</strong> | Carteirinha estudantil nacional
        </span>
      </div>
    </div>
  );
}
