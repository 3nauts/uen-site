// app/api/cliente/[cpf]/carteirinha/route.ts
import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";
import QRCode from "qrcode";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function GET(
  req: Request,
  { params }: { params: { cpf: string } }
) {
  try {
    const cliente = await prisma.cliente.findUnique({
      where: { cpf: params.cpf },
    });

    if (!cliente) {
      return NextResponse.json({ error: "Cliente não encontrado" }, { status: 404 });
    }

    if (!cliente.dataExpiracao || cliente.dataExpiracao < new Date()) {
      return NextResponse.json(
        { error: "Carteirinha expirada. Faça a renovação." },
        { status: 400 }
      );
    }

    // 🔹 Gera QR Code com CPF (pode trocar por URL de validação)
    const qrDataUrl = await QRCode.toDataURL(cliente.cpf);

    // 🔹 Cria PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([350, 200]);
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Fundo
    page.drawRectangle({
      x: 0,
      y: 0,
      width: 350,
      height: 200,
      color: rgb(0.0, 0.6, 0.2),
    });

    // Nome
    page.drawText(cliente.nome, {
      x: 20,
      y: 160,
      size: 16,
      font,
      color: rgb(1, 1, 1),
    });

    // Instituição
    if (cliente.instituicao) {
      page.drawText(`Instituição: ${cliente.instituicao}`, {
        x: 20,
        y: 140,
        size: 12,
        font,
        color: rgb(1, 1, 1),
      });
    }

    // Validade
    page.drawText(
      `Validade: ${cliente.dataExpiracao.toLocaleDateString("pt-BR")}`,
      {
        x: 20,
        y: 120,
        size: 12,
        font,
        color: rgb(1, 1, 1),
      }
    );

    // QR Code
    const qrImageBytes = Buffer.from(qrDataUrl.split(",")[1], "base64");
    const qrImage = await pdfDoc.embedPng(qrImageBytes);
    page.drawImage(qrImage, {
      x: 250,
      y: 80,
      width: 80,
      height: 80,
    });

    const pdfBytes = await pdfDoc.save();
    const pdfBuffer = Buffer.from(pdfBytes);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="carteirinha-${cliente.cpf}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Erro ao gerar carteirinha:", error);
    return NextResponse.json({ error: "Erro ao gerar carteirinha" }, { status: 500 });
  }
}
