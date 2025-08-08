import { useParams } from "react-router-dom";

export default function Cliente() {
  const { cpf } = useParams();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#009c3b] via-[#ffcc29] to-[#006837] p-4">
      <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-6 w-full max-w-sm flex flex-col items-center gap-4">
        <h1 className="text-2xl font-black text-[#009c3b] text-center mb-2">
          Minha Carteirinha Digital
        </h1>
        <div className="w-full rounded-lg p-4 bg-[#009c3b] text-white shadow-lg mb-2">
          <div className="text-sm mb-1 font-light">CPF:</div>
          <div className="text-lg font-mono tracking-wide">{cpf}</div>
          <div className="mt-2 text-xs">Válida em todo território nacional</div>
        </div>
        <div className="text-gray-700 text-center text-sm">
          Status do pedido: <span className="text-yellow-600">Em análise</span>
        </div>
      </div>
    </div>
  );
}
