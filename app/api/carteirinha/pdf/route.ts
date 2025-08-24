import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";
import QRCode from "qrcode";
import { PDFDocument, rgb } from "pdf-lib";

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

    // 🔹 Gera QR Code em Base64
    const qrCodeDataUrl = await QRCode.toDataURL(urlValidacao);

    // 🔹 Cria PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([350, 200]); // tamanho tipo cartão
    const { height } = page.getSize();

    // Fundo
    page.drawRectangle({
      x: 0,
      y: 0,
      width: 350,
      height: 200,
      color: rgb(0.1, 0.7, 0.4), // verde estilo PicPay/Nike
    });

    // Nome do aluno
    page.drawText(cliente.nome, {
      x: 20,
      y: height - 40,
      size: 16,
      color: rgb(1, 1, 1),
    });

    // Instituição
    if (cliente.instituicao) {
      page.drawText(cliente.instituicao, {
        x: 20,
        y: height - 65,
        size: 12,
        color: rgb(1, 1, 1),
      });
    }

    // Curso
    if (cliente.curso) {
      page.drawText(cliente.curso, {
        x: 20,
        y: height - 85,
        size: 12,
        color: rgb(1, 1, 1),
      });
    }

    // Validade
    if (cliente.dataExpiracao) {
      page.drawText(`Validade: ${cliente.dataExpiracao.toLocaleDateString("pt-BR")}`, {
        x: 20,
        y: height - 110,
        size: 12,
        color: rgb(1, 1, 1),
      });
    }

    // 🔹 Adiciona QR Code
    const qrImageBytes = Buffer.from(qrCodeDataUrl.split(",")[1], "base64");
    const qrImage = await pdfDoc.embedPng(qrImageBytes);
    const qrDims = qrImage.scale(0.25);
    page.drawImage(qrImage, {
      x: 250,
      y: height - 140,
      width: qrDims.width,
      height: qrDims.height,
    });

    // Gera PDF final
    const pdfBytes = await pdfDoc.save();
    const pdfBuffer = Buffer.from(pdfBytes);

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename=carteirinha-${cpf}.pdf`,
      },
    });
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    return NextResponse.json({ error: "Erro ao gerar PDF" }, { status: 500 });
  }
}
