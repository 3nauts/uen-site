async function getData(cpf:string){
  const r=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL||''}/api/cliente/${cpf}`,{cache:'no-store'});
  return r.json();
}
export default async function Page({params}:{params:{cpf:string}}){
  const d=await getData(params.cpf);
  if(!d?.ok) return <main className='p-8'>Cliente não encontrado.</main>;
  const c=d.cliente;
  return (<main className='p-6 max-w-4xl mx-auto space-y-4'>
    <h1 className='text-2xl font-bold'>Área do Cliente</h1>
    <div className='bg-white p-4 rounded-xl shadow'>
      <p><b>Nome:</b> {c.nome}</p>
      <p><b>CPF:</b> {c.cpf}</p>
      <p><b>Nascimento:</b> {new Date(c.dataNascimento).toLocaleDateString()}</p>
      <a className='text-blue-600 underline' href={`/api/cliente/${c.cpf}/carteirinha`}>Ver carteirinha + QR</a>
    </div>
  </main>);
}
