"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Cliente {
  cpf: string;
  nome: string;
  instituicao?: string;
  curso?: string;
  fotoUrl?: string;
  dataExpiracao?: string;
}

export default function AreaAluno({ params }: { params: { cpf: string } }) {
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/cliente/${params.cpf}`)
      .then((res) => res.json())
      .then((data) => {
        setCliente(data.cliente);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.cpf]);

  if (loading) return <p className="text-center mt-20">Carregando...</p>;
  if (!cliente) return <p className="text-center mt-20">Aluno não encontrado</p>;

  const validade = cliente.dataExpiracao
    ? new Date(cliente.dataExpiracao)
    : null;
  const hoje = new Date();
  const valido = validade && validade >= hoje;

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Área do Aluno 🎓
        </h1>

        {/* Foto */}
        {cliente.fotoUrl && (
          <div className="flex justify-center">
            <img
              src={cliente.fotoUrl}
              alt="Foto do aluno"
              className="w-32 h-32 rounded-full border-4 border-green-600 shadow-md object-cover"
            />
          </div>
        )}

        {/* Dados */}
        <div className="text-center space-y-1">
          <p className="text-lg font-semibold">{cliente.nome}</p>
          {cliente.instituicao && (
            <p className="text-gray-600">{cliente.instituicao}</p>
          )}
          {cliente.curso && (
            <p className="text-gray-500 text-sm">{cliente.curso}</p>
          )}
          {validade && (
            <p
              className={`mt-2 text-sm font-medium ${
                valido ? "text-green-600" : "text-red-600"
              }`}
            >
              {valido
                ? `Carteirinha válida até ${validade.toLocaleDateString("pt-BR")}`
                : "Carteirinha expirada"}
            </p>
          )}
        </div>

        {/* Ações */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a
            href={`/api/carteirinha/pdf?cpf=${cliente.cpf}`}
            target="_blank"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            📥 Baixar Carteirinha
          </a>

          <Link
            href={`/pagamento/${cliente.cpf}?status=pendente`}
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            🔄 Renovar Carteirinha
          </Link>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            ✏️ Atualizar Dados
          </button>
        </div>
      </div>
    </main>
  );
}
