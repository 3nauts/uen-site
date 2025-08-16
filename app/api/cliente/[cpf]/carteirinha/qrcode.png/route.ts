import { prisma } from '@/lib/prisma'; import QRCode from 'qrcode';
export async function GET(_:Request,{params}:{params:{cpf:string}}){
  try{
    const cpf = params.cpf.replace(/\D/g,'');
    if(cpf.length!==11) return new Response('CPF_INVALIDO',{status:400});
    const c = await prisma.cliente.findUnique({ where:{ cpf } });
    if(!c) return new Response('CLIENTE_NAO_ENCONTRADO',{status:404});
    const ano = c.anoVigente ?? new Date().getFullYear();
    const payload = `${cpf}|${c.dataNascimento.toISOString().substring(0,10)}|${ano}`;
    const buf = await QRCode.toBuffer(payload, { margin:1, scale:6, type:'png' });
    return new Response(new Uint8Array(buf),{ headers:{ 'Content-Type':'image/png', 'Content-Disposition': `inline; filename="qrcode-${cpf}.png"` } });
  }catch(e){ console.error(e); return new Response('SERVER_ERROR',{status:500}); }
}
