import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  nome: "", cpf: "", nascimento: "", telefone: "", email: "", rg: "",
  ensino: "", curso: "", instituicao: "", cep: "", endereco: "",
  numero: "", bairro: "", cidade: "", uf: "",
};

function Field({
  label, id, children,
}: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
      <label htmlFor={id}
        className="font-extrabold text-[#009c3b] text-base md:text-lg md:w-40">
        {label}
      </label>
      <div className="w-full">{children}</div>
    </div>
  );
}

const inputBase =
  "w-full bg-[#eaf2ff] border-2 border-yellow-400 rounded-xl py-3 px-4 text-[16px] md:text-lg focus:outline-none focus:border-[#009c3b] transition";

export default function Cadastro() {
  const [form, setForm] = useState(initialState);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const navigate = useNavigate();

  const onChange =
    (name: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [name]: e.target.value });

  function onFoto(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setFotoPreview(URL.createObjectURL(f));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // simulação de salvamento
    sessionStorage.setItem("cadastroUEN", JSON.stringify({ ...form, fotoUrl: fotoPreview }));
    navigate("/pagamento");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009c3b] via-[#ffcc29] to-[#006837] p-4">
      <div className="mx-auto w-full max-w-xl bg-[#f9f8f1] rounded-2xl shadow-2xl px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-black text-[#009c3b] mb-6 text-center">
          Cadastro de Estudante
        </h1>

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <Field label="Nome" id="nome">
            <input id="nome" className={inputBase} value={form.nome} onChange={onChange("nome")} required />
          </Field>

          <Field label="CPF" id="cpf">
            <input id="cpf" className={inputBase} placeholder="000.000.000-00"
                   value={form.cpf} onChange={onChange("cpf")} required />
          </Field>

          <Field label="Nascimento" id="nascimento">
            <input id="nascimento" type="date" className={inputBase}
                   value={form.nascimento} onChange={onChange("nascimento")} required />
          </Field>

          <Field label="Telefone" id="telefone">
            <input id="telefone" className={inputBase}
                   value={form.telefone} onChange={onChange("telefone")} required />
          </Field>

          <Field label="E-mail" id="email">
            <input id="email" type="email" className={inputBase}
                   value={form.email} onChange={onChange("email")} required />
          </Field>

          <Field label="RG" id="rg">
            <input id="rg" className={inputBase}
                   value={form.rg} onChange={onChange("rg")} required />
          </Field>

          <Field label="Ensino" id="ensino">
            <select id="ensino" className={inputBase} value={form.ensino} onChange={onChange("ensino")} required>
              <option value="">Selecione</option>
              <option>Infantil</option><option>Fundamental</option>
              <option>Médio</option><option>Superior</option>
            </select>
          </Field>

          <Field label="Curso" id="curso">
            <input id="curso" className={inputBase}
                   value={form.curso} onChange={onChange("curso")} required />
          </Field>

          <Field label="Instituição" id="instituicao">
            <input id="instituicao" className={inputBase}
                   value={form.instituicao} onChange={onChange("instituicao")} required />
          </Field>

          <Field label="CEP" id="cep">
            <input id="cep" className={inputBase}
                   value={form.cep} onChange={onChange("cep")} required />
          </Field>

          <Field label="Endereço" id="endereco">
            <input id="endereco" className={inputBase}
                   value={form.endereco} onChange={onChange("endereco")} required />
          </Field>

          <Field label="Número" id="numero">
            <input id="numero" className={inputBase}
                   value={form.numero} onChange={onChange("numero")} required />
          </Field>

          <Field label="Bairro" id="bairro">
            <input id="bairro" className={inputBase}
                   value={form.bairro} onChange={onChange("bairro")} required />
          </Field>

          <Field label="Cidade" id="cidade">
            <input id="cidade" className={inputBase}
                   value={form.cidade} onChange={onChange("cidade")} required />
          </Field>

          <Field label="UF" id="uf">
            <input id="uf" className={inputBase}
                   value={form.uf} onChange={onChange("uf")} required />
          </Field>

          {/* Foto 3x4 */}
          <Field label="Foto 3x4" id="foto">
            <div className="space-y-2">
              <input id="foto" type="file" accept="image/*" onChange={onFoto} className="w-full" required />
              {fotoPreview && (
                <img src={fotoPreview} alt="Prévia" className="rounded-lg w-24 h-28 object-cover border border-[#ffcc29]" />
              )}
            </div>
          </Field>

          {/* Documento (PDF/Imagem) */}
          <Field label="Documento" id="doc">
            <input id="doc" type="file" accept=".pdf,image/*" className="w-full" required />
          </Field>

          <button
            type="submit"
            className="w-full bg-[#008d32] hover:bg-[#009c3b] text-white font-extrabold text-xl rounded-xl py-3 mt-2 shadow-lg transition-all"
          >
            Prosseguir para Pagamento
          </button>
        </form>
      </div>
    </div>
  );
}
