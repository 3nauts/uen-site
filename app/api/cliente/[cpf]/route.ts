import { prisma } from '@/lib/prisma';
export async function GET(_:Request,{params}:{params:{cpf:string}}){
  try{
    const cpf = String(params.cpf||'').replace(/\D/g,'');
    if(cpf.length!==11) return Response.json({ ok:false, error:'CPF_INVALIDO' }, { status:400 });
    const c = await prisma.cliente.findUnique({ where:{ cpf }, include:{ pedidos:{ include:{ pagamento:true }, orderBy:{ criadoEm:'desc' } } } });
    if(!c) return Response.json({ ok:false, error:'CLIENTE_NAO_ENCONTRADO' }, { status:404 });
    return Response.json({ ok:true, cliente:{
      id:c.id,nome:c.nome,cpf:c.cpf,dataNascimento:c.dataNascimento,ensino:c.ensino,curso:c.curso,
      instituicao:c.instituicao,fotoUrl:c.fotoUrl,documentoUrl:c.documentoUrl,anoVigente:c.anoVigente,
      dataExpiracao:c.dataExpiracao,criadoEm:c.criadoEm,atualizadoEm:c.atualizadoEm
    }, ultimoPedido:c.pedidos[0]??null, pedidos:c.pedidos });
  }catch(e){ console.error(e); return Response.json({ ok:false, error:'SERVER_ERROR' }, { status:500 }); }
}
