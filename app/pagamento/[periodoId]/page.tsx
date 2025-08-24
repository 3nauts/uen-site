"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PagamentoPage({ params }: { params: { pedidoId: string } }) {
    const searchParams = useSearchParams();
    const status = searchParams?.get("status") || "pendente";

    const mensagens: Record<string, { titulo: string; cor: string; texto: string }> = {
        sucesso: {
            titulo: "Pagamento Aprovado ✅",
            cor: "bg-green-600",
            texto: "Sua carteirinha será gerada em breve.",
        },
        falha: {
            titulo: "Pagamento Falhou ❌",
            cor: "bg-red-600",
            texto: "Houve um problema com seu pagamento. Tente novamente.",
        },
        pendente: {
            titulo: "Pagamento Pendente ⏳",
            cor: "bg-yellow-500",
            texto: "Estamos aguardando a confirmação do pagamento.",
        },
    };

    const dados = mensagens[status] || mensagens["pendente"];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
            <div
                className={`w-full max-w-lg shadow-xl rounded-2xl p-10 text-center text-white ${dados.cor}`}
            >
                <h1 className="text-3xl font-extrabold">{dados.titulo}</h1>
                <p className="mt-4">{dados.texto}</p>

                <p className="mt-6 text-sm opacity-80">Pedido #{params.pedidoId}</p>

                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        href="/area-aluno"
                        className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition"
                    >
                        Ir para Área do Aluno
                    </Link>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                        Voltar para Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
