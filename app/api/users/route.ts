import { prisma } from '@/lib/prisma';
import { NextRequest } from 'next/server';
import formidable from 'formidable';
import fs from 'fs'; import path from 'path';
export const dynamic = 'force-dynamic';
function ensureDir(d:string){ if(!fs.existsSync(d)) fs.mkdirSync(d,{recursive:true}); }
async function parseForm(req:NextRequest){
  const base = path.join(process.cwd(),'uploads');
  ['','/fotos','/documentos'].forEach(s=>ensureDir(base+s));
  const form = formidable({ multiples:false, uploadDir: base, keepExtensions:true,
    filename:(_n,_e,p)=>`${Date.now()}-${p.originalFilename?.normalize('NFD').replace(/[^\w.\-]+/g,'_')}`,
    filter:(part)=>!!part.mimetype });
  return await new Promise((res,rej)=>form.parse(req as any,(err,fields,files)=>err?rej(err):res({fields,files})));
}
export async function POST(req:NextRequest){
  try{
    const { fields, files }: any = await parseForm(req);
    const b:any = Object.fromEntries(Object.entries(fields).map(([k,v]:any)=>[k,Array.isArray(v)?v[0]:v]));
    const nasc = b.dataNascimento || b.nascimento;
    if(!b.nome || !b.cpf || !nasc) return Response.json({ ok:false, error:'CAMPOS_OBRIGATORIOS' }, { status:400 });
    const cpf = String(b.cpf).replace(/\D/g,'');
    if(cpf.length!==11) return Response.json({ ok:false, error:'CPF_INVALIDO' }, { status:400 });
    const ex = await prisma.cliente.findUnique({ where:{ cpf } });
    if(ex) return Response.json({ ok:false, error:'CPF_JA_CADASTRADO' }, { status:409 });
    const foto:any = files?.foto?.[0] || files?.foto;
    const doc:any  = files?.documento?.[0] || files?.documento;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const fotoUrl = foto ? `${baseUrl}/api/uploads/fotos/${path.basename(foto.filepath)}` : undefined;
    const documentoUrl = doc ? `${baseUrl}/api/uploads/documentos/${path.basename(doc.filepath)}` : undefined;
    const cliente = await prisma.cliente.create({ data: {
      cpf, nome:b.nome, dataNascimento:new Date(nasc), telefone:b.telefone, email:b.email, rg:b.rg,
      ensino:b.ensino, curso:b.curso, instituicao:b.instituicao, cep:b.cep, endereco:b.endereco, numero:b.numero,
      bairro:b.bairro, cidade:b.cidade, uf:b.uf, fotoUrl, documentoUrl,
      anoVigente: b.anoVigente ? Number(b.anoVigente) : new Date().getFullYear(),
      dataExpiracao: b.dataExpiracao ? new Date(b.dataExpiracao) : undefined
    }});
    const pedido = await prisma.pedido.create({ data: { clienteId: cliente.id, tipo: b.tipo ?? 'digital', valorCentavos: b.valorCentavos ? Number(b.valorCentavos) : 3000 } });
    return Response.json({ ok:true, cliente, pedido, next:'client' }, { status:201 });
  }catch(e){ console.error(e); return Response.json({ ok:false, error:'SERVER_ERROR' }, { status:500 }); }
}
