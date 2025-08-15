import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// opcional: toasts
// import toast from "react-hot-toast";

type Metodo = "pix" | "cartao" | "boleto";

export default function Pagamento() {
  const navigate = useNavigate();
  const cadastro = useMemo(() => {
    const raw = sessionStorage.getItem("cadastroUEN");
    return raw ? JSON.parse(raw) : null;
  }, []);

  const [metodo, setMetodo] = useState<Metodo>("pix");
  const [processando, setProcessando] = useState(false);

  // se não houver cadastro, volta pro login
  useEffect(() => {
    if (!cadastro) navigate("/", { replace: true });
  }, [cadastro, navigate]);

  const isFisica = false; // se depois você salvar o "tipo" (digital/fisica) no cadastro, troque aqui
  const valor = isFisica ? 65 : 30;

  function pagar() {
    if (!cadastro) return;

    setProcessando(true);
    // toast?.loading("Processando pagamento...", { id: "pg" });

    // simulação de pagamento: 1.5s
    setTimeout(() => {
      // toast?.success("Pagamento aprovado!", { id: "pg" });

      // marque autenticação (se usar AuthContext, você pode chamar login())
      // aqui mantemos o cadastro e sinalizamos que já pagou
      sessionStorage.setItem(
        "cadastroUEN",
        JSON.stringify({ ...cadastro, pagamentoAprovado: true })
      );

      // redireciona para área do cliente
      const cpf = cadastro?.cpf || "novo";
      navigate(`/cliente/${cpf}`, { replace: true });
    }, 1500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#009c3b] via-[#ffcc29] to-[#006837] p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl">
        {/* Cabeçalho */}
        <div className="px-6 pt-6 pb-3">
          <div className="flex items-center justify-center">
            <img
              className="h-10"
              src="https://http2.mlstatic.com/frontend-assets/landing-mptools-mp-wallet/mercado-pago-logo.svg"
              alt="Mercado Pago"
            />
          </div>
          <h1 className="mt-3 text-center text-xl font-black text-[#009c3b]">
            Pagamento da Carteirinha
          </h1>
        </div>

        {/* Resumo */}
        <div className="px-6 py-4">
          <div className="rounded-xl border border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Aluno</span>
              <span className="font-semibold">{cadastro?.nome || "-"}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-600">CPF</span>
              <span className="font-semibold">{cadastro?.cpf || "-"}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-600">Produto</span>
              <span className="font-semibold">
                Carteirinha {isFisica ? "Física + Digital" : "Digital"}
              </span>
            </div>
            <div className="flex justify-between text-base mt-3 pt-3 border-t">
              <span className="font-bold">Total</span>
              <span className="font-extrabold text-[#009c3b]">
                R$ {valor.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>
        </div>

        {/* Métodos */}
        <div className="px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setMetodo("pix")}
              className={`rounded-xl border-2 p-3 text-center transition ${
                metodo === "pix"
                  ? "border-[#009c3b] bg-[#e7fff2]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="font-bold">PIX</div>
              <div className="text-xs text-gray-500">instantâneo</div>
            </button>
            <button
              type="button"
              onClick={() => setMetodo("cartao")}
              className={`rounded-xl border-2 p-3 text-center transition ${
                metodo === "cartao"
                  ? "border-[#009c3b] bg-[#e7fff2]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="font-bold">Cartão</div>
              <div className="text-xs text-gray-500">crédito</div>
            </button>
            <button
              type="button"
              onClick={() => setMetodo("boleto")}
              className={`rounded-xl border-2 p-3 text-center transition ${
                metodo === "boleto"
                  ? "border-[#009c3b] bg-[#e7fff2]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="font-bold">Boleto</div>
              <div className="text-xs text-gray-500">1–2 dias</div>
            </button>
          </div>
        </div>

        {/* Ação */}
        <div className="px-6 pb-6 pt-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-1/2 rounded-xl border-2 border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Voltar ao cadastro
          </button>

          <button
            onClick={pagar}
            disabled={processando}
            className={`w-full sm:w-1/2 rounded-xl py-3 font-extrabold text-white shadow-lg transition ${
              processando
                ? "bg-[#6cb58c] cursor-not-allowed"
                : "bg-[#008d32] hover:bg-[#009c3b]"
            }`}
          >
            {processando ? "Processando..." : `Pagar com ${metodo.toUpperCase()}`}
          </button>
        </div>
      </div>
    </div>
  );
}
