// app/api/validar/[cpf]/route.ts
import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { cpf: string } }
) {
  try {
    const cliente = await prisma.cliente.findUnique({
      where: { cpf: params.cpf },
    });

    if (!cliente) {
      return NextResponse.json(
        { valido: false, mensagem: "Carteirinha não encontrada" },
        { status: 404 }
      );
    }

    // Verifica validade
    if (!cliente.dataExpiracao || cliente.dataExpiracao < new Date()) {
      return NextResponse.json({
        valido: false,
        mensagem: "Carteirinha expirada. Solicite a renovação.",
        aluno: {
          nome: cliente.nome,
          instituicao: cliente.instituicao,
        },
      });
    }

    return NextResponse.json({
      valido: true,
      mensagem: "Carteirinha válida!",
      aluno: {
        nome: cliente.nome,
        instituicao: cliente.instituicao,
        validade: cliente.dataExpiracao.toLocaleDateString("pt-BR"),
      },
    });
  } catch (error) {
    console.error("Erro ao validar carteirinha:", error);
    return NextResponse.json(
      { valido: false, mensagem: "Erro ao validar carteirinha" },
      { status: 500 }
    );
  }
}
