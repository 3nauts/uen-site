"use client";

import { useState } from "react";

interface CarteirinhaProps {
  cpf: string;
}

export default function Carteirinha({ cpf }: CarteirinhaProps) {
  const [loading, setLoading] = useState(false);

  const baixarCarteirinha = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/carteirinha/pdf?cpf=${cpf}`);

      if (!response.ok) {
        throw new Error("Erro ao gerar carteirinha");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `carteirinha-${cpf}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Erro ao baixar carteirinha digital.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold text-gray-800">Carteirinha Digital</h2>
      <p className="text-sm text-gray-500">
        Sua carteirinha digital está disponível para download em PDF.
      </p>
      <button
        onClick={baixarCarteirinha}
        disabled={loading}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow transition"
      >
        {loading ? "Gerando..." : "📥 Baixar Carteirinha Digital"}
      </button>
    </div>
  );
}
