"use client";

import { useEffect, useState } from "react";

export default function ValidarCarteirinha({ params }: { params: { cpf: string } }) {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/validar/${params.cpf}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.cpf]);

  if (loading) {
    return <p className="text-center mt-20">Validando carteirinha...</p>;
  }

  if (!status) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600">Erro na validação</h1>
          <p className="mt-2 text-gray-600">Não foi possível validar esta carteirinha.</p>
        </div>
      </div>
    );
  }

  const valido = status.valido;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div
        className={`w-full max-w-md shadow-xl rounded-2xl p-8 text-center ${
          valido ? "bg-green-600 text-white" : "bg-red-600 text-white"
        }`}
      >
        <h1 className="text-3xl font-extrabold">
          {valido ? "Carteirinha Válida ✅" : "Carteirinha Expirada ❌"}
        </h1>
        <p className="mt-4 text-lg font-medium">{status.aluno?.nome}</p>
        {status.aluno?.instituicao && (
          <p className="text-sm opacity-90">{status.aluno.instituicao}</p>
        )}
        {status.aluno?.validade && (
          <p className="mt-2 text-sm">
            Validade até: <strong>{status.aluno.validade}</strong>
          </p>
        )}

        {!valido && (
          <p className="mt-4 text-sm text-white/80">
            Solicite a renovação no site da UEN Estudantil.
          </p>
        )}
      </div>
    </div>
  );
}
