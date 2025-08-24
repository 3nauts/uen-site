// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-600 to-green-700 text-white py-24 px-6 md:px-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Sua Carteirinha de Estudante<br />
              <span className="text-green-200">Digital e Oficial</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-green-100">
              Rápida, válida em todo o Brasil e aceita para meia-entrada em eventos, cinemas e transportes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/cadastro"
                className="px-6 py-3 rounded-full bg-white text-green-700 font-semibold hover:bg-gray-100 transition"
              >
                Solicitar agora
              </a>
              <a
                href="#como-funciona"
                className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-green-800 transition"
              >
                Como funciona
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex-1">
            <Image
              src="/mock/uen-card.png"
              alt="Carteirinha Estudantil Digital"
              width={500}
              height={350}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 px-6 md:px-12 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Como funciona?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Solicite sua carteirinha online, envie seus documentos e receba sua versão digital
            validada em poucos minutos. Simples, rápido e sem burocracia.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-2xl border bg-gray-50 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">1. Cadastro</h3>
              <p className="text-gray-600">Preencha seus dados no nosso site de forma segura.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-gray-50 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">2. Envio</h3>
              <p className="text-gray-600">Anexe seus documentos e foto diretamente pelo site.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-gray-50 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">3. Carteirinha Digital</h3>
              <p className="text-gray-600">Receba a versão digital validada e use de imediato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Benefícios da UEN Estudantil</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-2xl bg-white border hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Meia-entrada garantida</h3>
              <p className="text-gray-600">Shows, cinemas, teatros e eventos culturais em todo o Brasil.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">100% digital</h3>
              <p className="text-gray-600">Carteirinha validada digitalmente e disponível no celular.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Validade nacional</h3>
              <p className="text-gray-600">Aceita em qualquer lugar do país, de forma prática e rápida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 md:px-12 bg-green-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Garanta já sua Carteirinha Oficial</h2>
        <p className="mt-4 text-lg text-green-100">Clique abaixo e peça agora a sua.</p>
        <a
          href="/cadastro"
          className="mt-8 inline-block px-8 py-4 rounded-full bg-white text-green-700 font-semibold hover:bg-gray-100 transition"
        >
          Solicitar Carteirinha
        </a>
      </section>
    </div>
  );
}
