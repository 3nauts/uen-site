// app/api/users/route.ts
import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// 🔹 Função utilitária para normalizar CPF (remove tudo que não for dígito)
function normalizeCPF(cpf: string) {
  return cpf.replace(/\D/g, "");
}

// 🔹 Função utilitária para habilitar CORS
function corsResponse(body: any, status = 200) {
  return new NextResponse(JSON.stringify(body), {
    status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function OPTIONS() {
  return corsResponse({}, 200);
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Normaliza CPF antes de usar
    const rawCpf = formData.get("cpf") as string;
    if (!rawCpf) {
      return corsResponse({ error: "CPF é obrigatório" }, 400);
    }
    const cpf = normalizeCPF(rawCpf);

    // 🔎 Verifica se já existe cliente
    let cliente = await prisma.cliente.findUnique({ where: { cpf } });

    if (cliente) {
      // Já existe → retorna cliente para direcionar Área do Aluno
      return corsResponse(
        { success: true, usuario: cliente, jaExistente: true },
        200
      );
    }

    // 🔹 Campos obrigatórios
    const nome = formData.get("nome") as string;
    const dataNascimento = new Date(formData.get("dataNascimento") as string);

    // 🔹 Campos opcionais
    const telefone = (formData.get("telefone") as string) || null;
    const email = (formData.get("email") as string) || null;
    const rg = (formData.get("rg") as string) || null;
    const ensino = (formData.get("ensino") as string) || null;
    const curso = (formData.get("curso") as string) || null;
    const instituicao = (formData.get("instituicao") as string) || null;
    const cep = (formData.get("cep") as string) || null;
    const endereco = (formData.get("endereco") as string) || null;
    const numero = (formData.get("numero") as string) || null;
    const bairro = (formData.get("bairro") as string) || null;
    const cidade = (formData.get("cidade") as string) || null;
    const uf = (formData.get("uf") as string) || null;

    // 🔹 Uploads
    const foto = formData.get("foto") as File | null;
    const documento = formData.get("documento") as File | null;

    const fotosDir = path.join(process.cwd(), "public", "uploads", "fotos");
    const docsDir = path.join(process.cwd(), "public", "uploads", "documentos");

    await mkdir(fotosDir, { recursive: true });
    await mkdir(docsDir, { recursive: true });

    let fotoUrl: string | null = null;
    let documentoUrl: string | null = null;

    if (foto) {
      const bytes = await foto.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${cpf}_foto_${Date.now()}${path.extname(foto.name)}`;
      await writeFile(path.join(fotosDir, fileName), buffer);
      fotoUrl = `/uploads/fotos/${fileName}`;
    }

    if (documento) {
      const bytes = await documento.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${cpf}_doc_${Date.now()}${path.extname(documento.name)}`;
      await writeFile(path.join(docsDir, fileName), buffer);
      documentoUrl = `/uploads/documentos/${fileName}`;
    }

    // 🔹 Cria novo cliente
    cliente = await prisma.cliente.create({
      data: {
        cpf,
        nome,
        dataNascimento,
        telefone,
        email,
        rg,
        ensino,
        curso,
        instituicao,
        cep,
        endereco,
        numero,
        bairro,
        cidade,
        uf,
        fotoUrl,
        documentoUrl,
        anoVigente: new Date().getFullYear(),
        dataExpiracao: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ), // +1 ano
      },
    });

    return corsResponse(
      { success: true, usuario: cliente, jaExistente: false },
      201
    );
  } catch (error: any) {
    console.error("Erro ao salvar cadastro:", error);
    return corsResponse({ error: "Erro ao processar cadastro" }, 500);
  }
}

export async function GET() {
  try {
    const clientes = await prisma.cliente.findMany({
      orderBy: { criadoEm: "desc" },
    });
    return corsResponse({ success: true, usuarios: clientes }, 200);
  } catch (error: any) {
    console.error("Erro ao listar clientes:", error);
    return corsResponse({ error: "Erro ao listar clientes" }, 500);
  }
}
