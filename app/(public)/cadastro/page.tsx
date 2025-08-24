"use client";

import { useState } from "react";

export default function CadastroPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);

      // 🔎 Envia para API de cadastro
      const userRes = await fetch("/api/users", {
        method: "POST",
        body: formData,
      });

      const userData = await userRes.json();
      if (!userData.success) {
        alert("Erro ao salvar cadastro");
        return;
      }

      if (userData.jaExistente) {
        // 🚀 Já cadastrado → Área do Aluno
        window.location.href = `/area-aluno/${userData.usuario.cpf}`;
      } else {
        // 🚀 Novo cadastro → inicia pagamento
        const payRes = await fetch("/api/payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ clienteId: userData.usuario.id }),
        });

        if (!payRes.ok) {
          alert("Erro ao iniciar pagamento");
          return;
        }

        const payData = await payRes.json();
        window.location.href = payData.init_point;
      }
    } catch (err) {
      console.error(err);
      alert("Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Solicite sua Carteirinha
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Preencha seus dados e garanta sua Carteirinha Oficial UEN
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome completo</label>
            <input
              type="text"
              name="nome"
              required
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>

          {/* CPF */}
          <div>
            <label className="block text-sm font-medium text-gray-700">CPF</label>
            <input
              type="text"
              name="cpf"
              required
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>

          {/* Data de nascimento */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Data de nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              required
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>

          {/* E-mail */}
          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              name="telefone"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>

          {/* Instituição */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Instituição</label>
            <input
              type="text"
              name="instituicao"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>

          {/* Curso */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Curso</label>
            <input
              type="text"
              name="curso"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>

          {/* Foto do aluno */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Foto 3x4</label>
            <input
              type="file"
              name="foto"
              accept="image/*"
              capture="user" // 🔹 abre câmera frontal em celular
              required
              className="mt-1 w-full text-sm text-gray-600"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use a câmera do celular ou faça upload de uma foto 3x4.
            </p>
          </div>

          {/* Documento */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Documento (RG/CPF)</label>
            <input
              type="file"
              name="documento"
              accept="image/*,application/pdf"
              capture="environment" // 🔹 abre câmera traseira
              required
              className="mt-1 w-full text-sm text-gray-600"
            />
            <p className="text-xs text-gray-500 mt-1">
              Tire uma foto do documento ou faça upload do arquivo.
            </p>
          </div>

          {/* Botão */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-10 py-4 rounded-full bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Processando..." : "Avançar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
