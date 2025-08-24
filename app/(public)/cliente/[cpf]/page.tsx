"use client";

import { useEffect, useState } from "react";

export default function ClientePage({ params }: { params: { cpf: string } }) {
  const [cliente, setCliente] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/cliente/${params.cpf}`)
      .then((res) => res.json())
      .then((data) => {
        setCliente(data.cliente);
        setLoading(false);
      });
  }, [params.cpf]);

  if (loading) return <p className="text-center mt-20">Carregando...</p>;
  if (!cliente) return <p className="text-center mt-20">Cliente não encontrado</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900">
        Área do Aluno - {cliente.nome}
      </h1>
      <p className="mt-2 text-gray-600">CPF: {cliente.cpf}</p>
      <p className="text-gray-600">E-mail: {cliente.email || "-"}</p>
      <p className="text-gray-600">
        Validade:{" "}
        {cliente.dataExpiracao
          ? new Date(cliente.dataExpiracao).toLocaleDateString("pt-BR")
          : "Não definida"}
      </p>

      {/* Ações */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`/api/cliente/${cliente.cpf}/carteirinha`}
          target="_blank"
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
        >
          📥 Baixar Carteirinha
        </a>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          ✏️ Atualizar Dados
        </button>
        <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">
          🔄 Renovar
        </button>
      </div>
    </div>
  );
}
