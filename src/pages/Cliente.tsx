import React, { useRef, useEffect, useState } from "react";
import { toPng } from "html-to-image";

type DadosAluno = {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  rg: string;
  ensino: string;
  curso: string;
  instituicao: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  tipo: string;
  fotoUrl?: string;
};

export default function Cliente() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Busca os dados do cadastro (sessionStorage)
  const [dados, setDados] = useState<DadosAluno | null>(null);

  useEffect(() => {
    const cad = sessionStorage.getItem("cadastroUEN");
    if (cad) setDados(JSON.parse(cad));
  }, []);

  if (!dados) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#00977A]">
        <div className="text-white font-bold text-lg">Nenhum cadastro encontrado!</div>
      </div>
    );
  }

  // QR dinâmico baseado em CPF, Nascimento, Ano
  const qrText = `CPF:${dados.cpf};NASC:${dados.nascimento};ANO:2025`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(qrText)}`;

  // Download do cartão como PNG
  const handleDownload = () => {
    if (cardRef.current) {
      toPng(cardRef.current).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "carteirinha-uen.png";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#00977A] flex flex-col items-center py-8 px-2">
      <h1 className="text-white text-xl md:text-2xl font-bold mb-6 text-center drop-shadow">
        Visualização da carteirinha
      </h1>

      {/* Cartão da carteirinha */}
      <div
        ref={cardRef}
        className="rounded-2xl bg-[#aee9cb] shadow-2xl px-4 py-4 w-[355px] md:w-[410px] max-w-full mb-5"
        style={{ border: "4px solid #ffffff66" }}
      >
        <div className="flex flex-row items-start gap-5">
          {/* Foto, logo e QR */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={dados.fotoUrl || "/usuario.png"}
              alt="Foto estudante"
              className="w-24 h-28 object-cover rounded-lg bg-yellow-200 border-4 border-white"
            />
            {/* Logo maior */}
            <img
              src="/uen-logo.png"
              alt="UEN Logo"
              className="w-16 h-10 object-contain -mt-2"
              style={{ filter: "drop-shadow(0 1px 2px #00824f44)" }}
            />
            {/* QR code */}
            <img
              src={qrUrl}
              alt="QR code"
              className="bg-white rounded p-1 w-16 h-16 mt-1"
            />
          </div>
          {/* Informações */}
          <div className="flex-1 flex flex-col h-full justify-between py-1">
            <div className="text-xs md:text-sm font-bold mb-2 leading-tight">
              <div>
                <span className="font-bold">NOME: </span>
                <span className="font-normal">{dados.nome}</span>
              </div>
              <div>
                <span className="font-bold">Inst.: </span>
                <span className="font-normal">{dados.instituicao}</span>
              </div>
              <div>
                <span className="font-bold">Curso: </span>
                <span className="font-normal">{dados.curso}</span>
              </div>
              <div>
                <span className="font-bold">Nível de Ensino: </span>
                <span className="font-normal">{dados.ensino}</span>
              </div>
              <div>
                <span className="font-bold">CPF: </span>
                <span className="font-normal">{dados.cpf}</span>
              </div>
              <div>
                <span className="font-bold">Data de Nasc.: </span>
                <span className="font-normal">{dados.nascimento}</span>
              </div>
              <div>
                <span className="font-bold">Validade: </span>
                <span className="font-normal">31/12/2025</span>
              </div>
            </div>
            <div className="flex items-center justify-end mt-2">
              <span className="font-black text-2xl text-[#7c38b4] mr-1">2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* STATUS DO PEDIDO */}
      <div className="rounded-2xl bg-[#007b67] shadow-xl px-4 py-5 w-[355px] md:w-[410px] max-w-full flex flex-col items-center mb-4">
        <div className="text-white text-base md:text-lg font-bold mb-3 text-center">
          STATUS DO PEDIDO
        </div>
        <div className="bg-white w-full rounded-2xl px-4 py-3 flex flex-col gap-2">
          {/* Exemplo: todos os status já "ok" */}
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full flex items-center justify-center border-2 border-green-600 bg-green-400">
                <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 16 16">
                  <path d="M4 8.5l3 3 5-6" />
                </svg>
              </div>
              <div className="w-0.5 h-6 bg-green-400"></div>
            </div>
            <div className="text-sm md:text-base font-semibold text-black">
              Pedido recebido
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full flex items-center justify-center border-2 border-green-600 bg-green-400">
                <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 16 16">
                  <path d="M4 8.5l3 3 5-6" />
                </svg>
              </div>
              <div className="w-0.5 h-6 bg-green-400"></div>
            </div>
            <div className="text-sm md:text-base font-semibold text-black">
              Pagamento aprovado
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full flex items-center justify-center border-2 border-yellow-500 bg-yellow-400">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="text-sm md:text-base font-semibold text-yellow-600">
              Carteirinha disponível.
            </div>
          </div>
        </div>
      </div>

      {/* Data de expiração */}
      <div className="text-white font-medium text-sm mb-3">
        Validade da carteirinha: <span className="font-bold">31/12/2025</span>
      </div>

      {/* Botão de download */}
      <button
        className="bg-[#7c38b4] hover:bg-[#5d288f] text-white font-bold rounded-lg px-6 py-2 text-base shadow transition-all duration-200"
        onClick={handleDownload}
      >
        Baixar carteirinha em PNG
      </button>
    </div>
  );
}
