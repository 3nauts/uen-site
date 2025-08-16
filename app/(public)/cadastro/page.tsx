'use client';
import { useState } from 'react';
export default function Cadastro(){
  const [form,setForm]=useState<any>({ensino:'Superior'});
  const [foto,setFoto]=useState<File|null>(null);
  const [doc,setDoc]=useState<File|null>(null);
  const fields=['nome','cpf','dataNascimento','email','telefone','rg','curso','instituicao','cep','endereco','numero','bairro','cidade','uf'];
  const go=async(e:any)=>{
    e.preventDefault();
    const fd=new FormData();
    Object.entries(form).forEach(([k,v]:any)=>fd.append(k,String(v)));
    if(foto) fd.append('foto', foto);
    if(doc) fd.append('documento', doc);
    const r=await fetch('/api/users',{method:'POST', body:fd});
    const d=await r.json();
    if(d.ok) location.href=`/cliente/${form.cpf}`; else alert(d.error||'Erro');
  };
  return (<main className='min-h-[calc(100vh-64px)] grid place-items-center p-6'>
    <form onSubmit={go} className='bg-white p-6 rounded-xl shadow w-full max-w-3xl space-y-3'>
      <h1 className='text-xl font-semibold mb-2'>Cadastro</h1>
      <div className='grid md:grid-cols-2 gap-3'>
        {fields.map(k=>(<input key={k} required={['nome','cpf','dataNascimento'].includes(k)} placeholder={k} className='border rounded p-2' onChange={e=>setForm({...form,[k]:e.target.value})}/>))}
        <select className='border rounded p-2' onChange={e=>setForm({...form,ensino:e.target.value})} value={form.ensino}>
          {['Infantil','Fundamental','Médio','Superior'].map(o=>(<option key={o}>{o}</option>))}
        </select>
        <input type='file' accept='image/*' onChange={e=>setFoto(e.target.files?.[0]||null)}/>
        <input type='file' accept='image/*,application/pdf' onChange={e=>setDoc(e.target.files?.[0]||null)}/>
      </div>
      <button className='w-full bg-emerald-600 text-white rounded p-2 mt-2'>Salvar</button>
    </form>
  </main>);
}
