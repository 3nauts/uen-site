import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'UEN • Carteirinha Estudantil',
  description: 'A carteirinha oficial do Brasil – rápida, digital e moderna.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#0f2221] text-white antialiased">
        <header className="sticky top-0 z-50 backdrop-blur bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/uen-logo.svg" alt="UEN" width={96} height={36} priority />
              <span className="hidden sm:inline text-sm text-white/70">
                União Estudantil Nacional
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="/#como-funciona" className="hover:text-uen.yellow transition">Como funciona</a>
              <a href="/#vantagens" className="hover:text-uen.yellow transition">Vantagens</a>
              <a href="/#faq" className="hover:text-uen.yellow transition">FAQ</a>
              <a href="/validacao" className="hover:text-uen.yellow transition">Validação</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="/login" className="text-sm hover:text-uen.yellow transition">Entrar</a>
              <a
                href="/cadastro"
                className="inline-flex items-center rounded-full bg-uen.green px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-uen.dark transition"
              >
                Solicitar agora
              </a>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white/80">
            <div>
              <h4 className="font-semibold text-white">UEN</h4>
              <p className="mt-3 text-sm">Carteirinha estudantil oficial do Brasil.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Links</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/#vantagens" className="hover:text-uen.yellow">Vantagens</a></li>
                <li><a href="/#como-funciona" className="hover:text-uen.yellow">Como funciona</a></li>
                <li><a href="/faq" className="hover:text-uen.yellow">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Suporte</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/rastrear" className="hover:text-uen.yellow">Rastrear pedido</a></li>
                <li><a href="/validacao" className="hover:text-uen.yellow">Validar carteirinha</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Redes</h4>
              <div className="mt-3 flex gap-3 text-sm">
                <a href="#" className="hover:text-uen.yellow">Instagram</a>
                <a href="#" className="hover:text-uen.yellow">Twitter</a>
                <a href="#" className="hover:text-uen.yellow">YouTube</a>
              </div>
            </div>
          </div>
          <div className="pb-10 text-center text-xs text-white/50">
            © {new Date().getFullYear()} UEN — Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
