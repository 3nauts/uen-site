import { prisma } from '@/lib/prisma'; import QRCode from 'qrcode';
export async function GET(_:Request,{params}:{params:{cpf:string}}){
  try{
    const cpf = params.cpf.replace(/\D/g,'');
    if(cpf.length!==11) return Response.json({ ok:false, error:'CPF_INVALIDO' }, { status:400 });
    const c = await prisma.cliente.findUnique({ where:{ cpf } });
    if(!c) return Response.json({ ok:false, error:'CLIENTE_NAO_ENCONTRADO' }, { status:404 });
    const ano = c.anoVigente ?? new Date().getFullYear();
    const iso = c.dataNascimento.toISOString();
    const dataUrl = await QRCode.toDataURL(`${cpf}|${iso.substring(0,10)}|${ano}`, { margin:1, scale:6 });
    const base = process.env.NEXT_PUBLIC_BASE_URL || '';
    return Response.json({ ok:true, carteirinha:{
      nome:c.nome, cpf:c.cpf, dataNascimento: iso.substring(0,10), instituicao:c.instituicao, curso:c.curso, ano,
      validade: c.dataExpiracao?.toISOString().substring(0,10) ?? null, fotoUrl:c.fotoUrl,
      qrcodeDataUrl: dataUrl, qrcodeDownload: `${base}/api/cliente/${cpf}/carteirinha/qrcode.png`
    }});
  }catch(e){ console.error(e); return Response.json({ ok:false, error:'SERVER_ERROR' }, { status:500 }); }
}
