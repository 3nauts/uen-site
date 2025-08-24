// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UEN Estudantil - Carteirinha Digital",
  description:
    "Carteirinha de estudante oficial, rápida, digital e validada em todo o Brasil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {/* Header fixo */}
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo clicável */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              {/* Apenas o ícone do logo (sem texto no SVG) */}
              <img src="/uen-logo.png" alt="UEN" className="h-8 w-auto" />
              
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-8 font-medium">
              <Link href="/" className="hover:text-green-600 transition">
                Home
              </Link>
              <Link href="/cadastro" className="hover:text-green-600 transition">
                Cadastro
              </Link>
              <Link href="/login" className="hover:text-green-600 transition">
                Área do Aluno
              </Link>
              <a href="#faq" className="hover:text-green-600 transition">
                Dúvidas
              </a>
            </nav>

            {/* CTA */}
            <Link
              href="/cadastro"
              className="hidden md:inline-block px-5 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Solicitar Carteirinha
            </Link>

            {/* Mobile menu (hamburguer) */}
            <button className="md:hidden flex flex-col gap-1">
              <span className="w-6 h-0.5 bg-gray-900"></span>
              <span className="w-6 h-0.5 bg-gray-900"></span>
              <span className="w-6 h-0.5 bg-gray-900"></span>
            </button>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-100 py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} UEN Estudantil. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
