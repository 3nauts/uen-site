import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative">
        {/* gradient apple-like */}
        <div
          className="absolute inset-0 -z-10 opacity-[.65]"
          style={{
            background:
              'radial-gradient(1200px 600px at 10% 10%, rgba(10,165,160,.35), transparent 60%), radial-gradient(1000px 600px at 80% 20%, rgba(255,204,41,.25), transparent 60%), radial-gradient(800px 500px at 60% 80%, rgba(0,156,59,.3), transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-uen.yellow font-semibold tracking-wide mb-3">#VoltaÀsAulasUEN</p>
            <h1 className="text-4xl/tight md:text-6xl font-extrabold">
              Sua carteirinha digital
              <span className="block text-uen.yellow">em minutos</span>
            </h1>
            <p className="mt-5 text-white/80 max-w-xl">
              Acesse meia-entrada e benefícios estudantis em todo o Brasil. Faça tudo pelo celular,
              pague via PIX e receba a versão digital na hora.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/cadastro"
                className="rounded-full bg-uen.green px-6 py-3 font-semibold shadow-soft hover:bg-uen.dark transition"
              >
                Solicitar agora
              </a>
              <a
                href="/#como-funciona"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-white/40 transition"
              >
                Como funciona
              </a>
            </div>

            {/* badges */}
            <div className="mt-6 flex items-center gap-5 text-white/70 text-sm">
              <span className="inline-flex items-center gap-2">
                <Dot /> PIX, cartão ou boleto
              </span>
              <span className="inline-flex items-center gap-2">
                <Dot /> Digital liberada na hora
              </span>
              <span className="inline-flex items-center gap-2">
                <Dot /> Acesso pelo app e site
              </span>
            </div>
          </div>

          {/* mock – phone + card */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 -z-10 w-64 h-64 rounded-full bg-uen.green/20 blur-3xl" />
            <div className="absolute bottom-0 -right-6 -z-10 w-72 h-72 rounded-full bg-uen.yellow/20 blur-3xl" />
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-soft">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-black/80 p-3 border border-white/10">
                  {/* phone */}
                  <div className="rounded-[20px] bg-black p-3 border border-white/10">
                    <Image
                      src="/mock/phone-card.png"
                      alt="Carteirinha no celular"
                      width={460}
                      height={900}
                      className="rounded-[14px] object-cover w-full h-auto"
                    />
                  </div>
                  <p className="mt-3 text-xs text-white/70 text-center">Carteirinha digital</p>
                </div>

                <div className="rounded-2xl bg-white p-4 text-black">
                  <Image
                    src="/mock/uen-card.png"
                    alt="Carteirinha UEN"
                    width={640}
                    height={400}
                    className="rounded-xl shadow"
                  />
                  <p className="mt-3 text-xs text-black/60 text-center">Modelo 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat kpi="+2M" label="estudantes atendidos" />
          <Stat kpi="24h" label="envio da versão física" />
          <Stat kpi="100%" label="aceitação nacional" />
          <Stat kpi="10min" label="média de emissão digital" />
        </div>
      </section>

      {/* FEATURES (cards) */}
      <section id="vantagens" className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-3 gap-6">
        <Card
          title="Tudo pelo celular"
          desc="Faça cadastro, pagamento e acompanhe o status em tempo real."
          icon={<PhoneIcon />}
        />
        <Card
          title="Pagamento descomplicado"
          desc="Pague via PIX, cartão ou boleto. Aprovação automática."
          icon={<PixIcon />}
        />
        <Card
          title="Carteirinha digital e física"
          desc="A versão digital sai na hora. A física chega em poucos dias."
          icon={<IdIcon />}
        />
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">Como funciona</h2>
        <p className="text-white/70 mt-2 max-w-2xl">
          É simples e rápido — o fluxo foi pensado para você resolver tudo em poucos minutos.
        </p>

        <ol className="mt-8 grid md:grid-cols-3 gap-6">
          <Step n={1} title="Informe seu CPF" desc="Se já tiver carteirinha, vai para sua área. Senão, seguimos para cadastro." />
          <Step n={2} title="Envie documentos" desc="Foto e documento (RG/CNH). Você pode tirar a foto na hora." />
          <Step n={3} title="Pague e receba" desc="Geramos o link de pagamento e liberamos a digital imediatamente." />
        </ol>

        <div className="mt-10">
          <a
            href="/cadastro"
            className="inline-flex items-center rounded-full bg-uen.green px-6 py-3 font-semibold text-white shadow-soft hover:bg-uen.dark transition"
          >
            Começar agora
          </a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-uen.green/20 via-transparent to-uen.yellow/20" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Pronto para garantir sua meia-entrada?</h3>
            <p className="text-white/70 mt-2 max-w-xl">
              Solicite sua carteirinha oficial da UEN e tenha seu documento digital sempre com você.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/cadastro"
              className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90 transition"
            >
              Solicitar agora
            </a>
            <a
              href="/login"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:border-white/60 transition"
            >
              Já tenho cadastro
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------- micro componentes ------- */
function Dot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-uen.yellow" />;
}
function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold">{kpi}</div>
      <div className="text-white/70 text-sm mt-1">{label}</div>
    </div>
  );
}
function Card({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl2 border border-white/10 bg-white/5 p-6 shadow-soft hover:translate-y-[-2px] transition">
      <div className="w-11 h-11 rounded-xl bg-uen.green/20 flex items-center justify-center text-uen.yellow">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/70">{desc}</p>
    </div>
  );
}
function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <li className="rounded-xl2 border border-white/10 bg-white/5 p-6">
      <div className="w-8 h-8 rounded-full bg-uen.yellow text-black font-extrabold grid place-items-center">{n}</div>
      <h4 className="mt-4 text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-white/70">{desc}</p>
    </li>
  );
}

/* ------- inline ícones leves ------- */
function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
      <path d="M17 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm0 18H7V5h10v14Z" />
    </svg>
  );
}
function PixIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90" fill="currentColor">
      <path d="M12 2 3 11l9 9 9-9-9-9Zm0 4.5L16.5 11 12 15.5 7.5 11 12 6.5Z" />
    </svg>
  );
}
function IdIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90" fill="currentColor">
      <path d="M3 4h18v16H3V4Zm2 2v12h14V6H5Zm2 2h5v5H7V8Zm0 7h10v2H7v-2Z" />
    </svg>
  );
}
