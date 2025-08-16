'use client';
import { useState } from 'react';
export default function Login(){
  const [cpf,setCpf]=useState('');
  const go=async(e:any)=>{
    e.preventDefault();
    const r=await fetch('/api/auth/cpf-check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({cpf})});
    const d=await r.json();
    if(d.exists) location.href=`/cliente/${cpf}`; else location.href='/cadastro';
  };
  return (<main className='min-h-[calc(100vh-64px)] grid place-items-center p-6'>
    <form onSubmit={go} className='bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4'>
      <h1 className='text-xl font-semibold'>Acesse com CPF</h1>
      <input value={cpf} onChange={e=>setCpf(e.target.value)} placeholder='CPF' className='w-full border rounded p-2'/>
      <button className='w-full bg-emerald-600 text-white rounded p-2'>Entrar</button>
    </form>
  </main>);
}
