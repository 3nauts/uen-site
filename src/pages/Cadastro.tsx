import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#009c3b] via-[#ffcc29] to-[#006837] p-4">
      <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-6 w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-black text-[#009c3b] text-center mb-2">
          Cadastro de Estudante
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Complete seus dados e envie os documentos para solicitar a carteirinha.
        </p>
        {/* Exemplos de campos iniciais */}
        <input type="text" placeholder="Nome completo" className="border border-[#009c3b] rounded-lg px-4 py-2 mb-2" />
        <input type="text" placeholder="E-mail" className="border border-[#009c3b] rounded-lg px-4 py-2 mb-2" />
        <input type="text" placeholder="Instituição de ensino" className="border border-[#009c3b] rounded-lg px-4 py-2 mb-2" />
        {/* ... outros campos e uploads futuramente */}
        <button
          className="bg-[#009c3b] hover:bg-[#00782c] text-white font-bold rounded-lg py-2 text-lg shadow transition-all duration-200 mt-2"
          onClick={() => navigate("/")}
        >
          Salvar e voltar
        </button>
      </div>
    </div>
  );
}
