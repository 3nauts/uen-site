import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";
import QRCode from "qrcode";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const cpf = searchParams.get("cpf");

    if (!cpf) {
      return NextResponse.json({ error: "CPF obrigatório" }, { status: 400 });
    }

    const cliente = await prisma.cliente.findUnique({
      where: { cpf },
    });

    if (!cliente) {
      return NextResponse.json({ error: "Aluno não encontrado" }, { status: 404 });
    }

    // 🔹 URL amigável de validação
    const urlValidacao = `${process.env.NEXT_PUBLIC_SITE_URL}/validar/${cpf}`;

    // 🔹 Gera QR Code com a URL da página
    const qrCodeDataUrl = await QRCode.toDataURL(urlValidacao);

    return NextResponse.json({
      aluno: {
        nome: cliente.nome,
        instituicao: cliente.instituicao,
        validade: cliente.dataExpiracao?.toLocaleDateString("pt-BR"),
      },
      qrCode: qrCodeDataUrl, // 🔹 imagem em base64
      urlValidacao,          // 🔹 link amigável
    });
  } catch (error) {
    console.error("Erro ao gerar carteirinha:", error);
    return NextResponse.json(
      { error: "Erro ao gerar carteirinha" },
      { status: 500 }
    );
  }
}
