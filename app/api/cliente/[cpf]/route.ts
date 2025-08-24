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
      return NextResponse.json({ error: "Aluno não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ success: true, cliente });
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
    return NextResponse.json({ error: "Erro ao buscar cliente" }, { status: 500 });
  }
}
