import fs from 'fs'; import path from 'path'; import { NextRequest } from 'next/server';
export const dynamic='force-dynamic';
export async function GET(_req:NextRequest,{params}:{params:{path:string[]}}){
  const p = path.join(process.cwd(),'uploads', params.path.join('/'));
  if(!fs.existsSync(p)) return new Response('NOT_FOUND',{status:404});
  const b = fs.readFileSync(p);
  const ext = path.extname(p).toLowerCase();
  const type = ext==='.png'?'image/png':ext==='.jpg'||ext==='.jpeg'?'image/jpeg':ext==='.pdf'?'application/pdf':'application/octet-stream';
  return new Response(b,{headers:{'Content-Type':type}});
}
