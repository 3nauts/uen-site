'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

/* ---------------------- helpers simples (máscaras) ---------------------- */
const onlyDigits = (v: string) => v.replace(/\D+/g, '');
const maskCPF = (v: string) =>
  onlyDigits(v).slice(0, 11).replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');

const maskCEP = (v: string) =>
  onlyDigits(v).slice(0, 8).replace(/(\d{5})(\d{1,3})$/, '$1-$2');

const maskPhone = (v: string) => {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
};

/* ----------------------------- tipos locais ----------------------------- */
type Plano = 'digital' | 'fisica_digital';

export default function CadastroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [plano, setPlano] = useState<Plano>('digital');

  // estado do formulário
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    nascimento: '',
    telefone: '',
    email: '',
    rg: '',
    ensino: 'Superior',
    curso: '',
    instituicao: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
  });

  // uploads
  const [foto, setFoto] = useState<File | null>(null);
  const [documento, setDocumento] = useState<File | null>(null);
  const [previewFoto, setPreviewFoto] = useState<string | null>(null);

  useEffect(() => {
    if (!foto) return setPreviewFoto(null);
    const url = URL.createObjectURL(foto);
    setPreviewFoto(url);
    return () => URL.revokeObjectURL(url);
  }, [foto]);

  const valorCentavos = useMemo(() => (plano === 'digital' ? 3000 : 6500), [plano]);

  const onChange = (k: string, v: string) => {
    if (k === 'cpf') v = maskCPF(v);
    if (k === 'cep') v = maskCEP(v);
    if (k === 'telefone') v = maskPhone(v);
    setForm((f) => ({ ...f, [k]: v }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome || !form.cpf || !form.nascimento) {
      alert('Preencha Nome, CPF e Data de Nascimento.');
      return;
    }
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      fd.append('ensino', form.ensino);
      fd.append('tipo', plano);
      fd.append('valorCentavos', String(valorCentavos));
      if (foto) fd.append('foto', foto);
      if (documento) fd.append('documento', documento);

      const r = await fetch('/api/users', { method: 'POST', body: fd });
      const data = await r.json();

      if (!r.ok || !data?.ok) {
        throw new Error(data?.error || 'Erro ao cadastrar');
      }

      // simulação de pagamento (redireciona para rota de pagamento fake)
      // você pode trocar para a criação de preferência do Mercado Pago depois:
      // ex: const pref = await fetch('/api/pagamentos/mp-preferencia', {...})
      router.push(`/pagamento?pedido=${data.pedido?.id || ''}&cpf=${encodeURIComponent(form.cpf)}`);
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Erro inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative">
      {/* fundo gradiente UEN */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg,#006837 0%, #009c3b 35%, #0aa5a0 65%, #ffcc29 100%)',
          opacity: 0.15,
        }}
      />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* topo */}
          <div className="bg-gradient-to-r from-uen-green to-uen-dark p-6 text-white">
            <h1 className="text-2xl md:text-3xl font-extrabold">Cadastro de Estudante</h1>
            <p className="text-white/80 mt-1">
              Preencha seus dados para emitir a carteirinha oficial. Foto e documento podem ser enviados em imagem
              ou PDF. A digital libera na hora após o pagamento.
            </p>
          </div>

          {/* corpo */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* seleção de plano */}
            <div className="grid sm:grid-cols-2 gap-4">
              <PlanoCard
                ativo={plano === 'digital'}
                onClick={() => setPlano('digital')}
                titulo="Digital"
                preco="R$ 30,00"
                subtitulo="Receba em até 24h"
              />
              <PlanoCard
                ativo={plano === 'fisica_digital'}
                onClick={() => setPlano('fisica_digital')}
                titulo="Física + Digital"
                preco="R$ 65,00"
                subtitulo="Digital em 24h • Física em até 15 dias úteis"
              />
            </div>

            <div className="mt-6 grid gap-6">
              {/* grid de formulário com labels à esquerda no desktop */}
              <FieldRow label="Nome" required>
                <input
                  className="input-uen"
                  value={form.nome}
                  onChange={(e) => onChange('nome', e.target.value)}
                  placeholder="Seu nome completo"
                />
              </FieldRow>

              <FieldRow label="CPF" required>
                <input
                  className="input-uen"
                  inputMode="numeric"
                  value={form.cpf}
                  onChange={(e) => onChange('cpf', e.target.value)}
                  placeholder="000.000.000-00"
                />
              </FieldRow>

              <FieldRow label="Nascimento" required>
                <input
                  className="input-uen"
                  type="date"
                  value={form.nascimento}
                  onChange={(e) => onChange('nascimento', e.target.value)}
                />
              </FieldRow>

              <FieldRow label="Telefone">
                <input
                  className="input-uen"
                  inputMode="tel"
                  value={form.telefone}
                  onChange={(e) => onChange('telefone', e.target.value)}
                  placeholder="(31) 99999-9999"
                />
              </FieldRow>

              <FieldRow label="E-mail">
                <input
                  className="input-uen"
                  type="email"
                  value={form.email}
                  onChange={(e) => onChange('email', e.target.value)}
                  placeholder="seu@email.com"
                />
              </FieldRow>

              <FieldRow label="RG">
                <input
                  className="input-uen"
                  value={form.rg}
                  onChange={(e) => onChange('rg', e.target.value)}
                />
              </FieldRow>

              <FieldRow label="Ensino">
                <select
                  className="input-uen"
                  value={form.ensino}
                  onChange={(e) => onChange('ensino', e.target.value)}
                >
                  {['Infantil', 'Fundamental', 'Médio', 'Superior', 'Pós-graduação'].map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </FieldRow>

              <FieldRow label="Curso">
                <input
                  className="input-uen"
                  value={form.curso}
                  onChange={(e) => onChange('curso', e.target.value)}
                  placeholder="Ex.: Engenharia de Software"
                />
              </FieldRow>

              <FieldRow label="Instituição">
                <input
                  className="input-uen"
                  value={form.instituicao}
                  onChange={(e) => onChange('instituicao', e.target.value)}
                  placeholder="Ex.: Universidade Federal"
                />
              </FieldRow>

              <FieldRow label="CEP">
                <input
                  className="input-uen"
                  inputMode="numeric"
                  value={form.cep}
                  onChange={(e) => onChange('cep', e.target.value)}
                  placeholder="00000-000"
                />
              </FieldRow>

              <FieldRow label="Endereço">
                <input
                  className="input-uen"
                  value={form.endereco}
                  onChange={(e) => onChange('endereco', e.target.value)}
                />
              </FieldRow>

              <FieldRow label="Número">
                <input
                  className="input-uen"
                  inputMode="numeric"
                  value={form.numero}
                  onChange={(e) => onChange('numero', e.target.value)}
                />
              </FieldRow>

              <FieldRow label="Bairro">
                <input
                  className="input-uen"
                  value={form.bairro}
                  onChange={(e) => onChange('bairro', e.target.value)}
                />
              </FieldRow>

              <FieldRow label="Cidade">
                <input
                  className="input-uen"
                  value={form.cidade}
                  onChange={(e) => onChange('cidade', e.target.value)}
                />
              </FieldRow>

              <FieldRow label="UF">
                <input
                  className="input-uen"
                  value={form.uf}
                  onChange={(e) => onChange('uf', e.target.value.toUpperCase().slice(0, 2))}
                  placeholder="MG"
                />
              </FieldRow>
            </div>

            {/* uploads */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-emerald-100 p-4">
                <div className="font-semibold text-emerald-700">Foto do estudante</div>
                <p className="text-sm text-gray-500">Você pode tirar com a câmera ou enviar uma imagem.</p>
                <div className="mt-3 flex items-center gap-3">
                  <label className="btn-uen">
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      className="hidden"
                      onChange={(e) => setFoto(e.target.files?.[0] || null)}
                    />
                    Tirar foto
                  </label>
                  <label className="btn-uen-outline">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setFoto(e.target.files?.[0] || null)}
                    />
                    Enviar imagem
                  </label>
                </div>
                {previewFoto && (
                  <div className="mt-3">
                    <img
                      src={previewFoto}
                      alt="Prévia da foto"
                      className="w-40 h-40 object-cover rounded-lg border"
                    />
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-emerald-100 p-4">
                <div className="font-semibold text-emerald-700">Documento de identificação</div>
                <p className="text-sm text-gray-500">RG, CNH ou Carteira de Trabalho (PDF ou imagem).</p>
                <div className="mt-3">
                  <label className="btn-uen">
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      className="hidden"
                      onChange={(e) => setDocumento(e.target.files?.[0] || null)}
                    />
                    Anexar documento
                  </label>
                  {documento && (
                    <div className="mt-2 text-sm text-gray-600">
                      Arquivo: <b>{documento.name}</b>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* resumo + CTA */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-gray-700">
                <div className="font-semibold">Resumo</div>
                <div className="text-sm">Plano: {plano === 'digital' ? 'Digital' : 'Física + Digital'}</div>
                <div className="text-sm">
                  Valor: <b>R$ {(valorCentavos / 100).toFixed(2).replace('.', ',')}</b>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center items-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 shadow-lg disabled:opacity-60"
              >
                {loading ? 'Enviando…' : 'Ir para pagamento'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* estilos utilitários locais */}
      <style>{`
        .input-uen {
          @apply w-full rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition bg-white;
        }
        .btn-uen {
          @apply inline-flex items-center rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-emerald-700 cursor-pointer;
        }
        .btn-uen-outline {
          @apply inline-flex items-center rounded-full border border-emerald-300 text-emerald-700 px-4 py-2 text-sm font-semibold hover:bg-emerald-50 cursor-pointer;
        }
      `}</style>
    </main>
  );
}

/* ---------------------------- subcomponentes ---------------------------- */
function FieldRow({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="grid md:grid-cols-[220px_1fr] items-center gap-3">
      <label className="text-emerald-700 font-semibold">
        {label} {required && <span className="text-rose-600">*</span>}
      </label>
      {children}
    </div>
  );
}

function PlanoCard({
  ativo,
  onClick,
  titulo,
  preco,
  subtitulo,
}: {
  ativo: boolean;
  onClick: () => void;
  titulo: string;
  preco: string;
  subtitulo: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-2xl border p-5 transition shadow-sm hover:shadow-md ${
        ativo
          ? 'border-emerald-500 ring-2 ring-emerald-400/40 bg-emerald-50'
          : 'border-emerald-200 bg-white'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-extrabold text-emerald-700">{titulo}</div>
          <div className="text-sm text-gray-600">{subtitulo}</div>
        </div>
        <div className="text-emerald-700 font-extrabold">{preco}</div>
      </div>
    </button>
  );
}
