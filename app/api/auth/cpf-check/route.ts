import { prisma } from '@/lib/prisma';
export async function POST(req:Request){
  try{
    const { cpf } = await req.json();
    if(!cpf) return Response.json({ ok:false, error:'CPF_OBRIGATORIO' }, { status:400 });
    const d = String(cpf).replace(/\D/g,'');
    if(d.length!==11) return Response.json({ ok:false, error:'CPF_INVALIDO' }, { status:400 });
    const c = await prisma.cliente.findUnique({ where:{ cpf:d }, select:{ id:true } });
    return Response.json({ ok:true, exists: !!c, next: c ? 'client' : 'signup', clienteId: c?.id });
  }catch(e){ console.error(e); return Response.json({ ok:false, error:'SERVER_ERROR' }, { status:500 }); }
}
