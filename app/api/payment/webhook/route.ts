// app/api/payment/webhook/route.ts
import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";

function corsResponse(body: any, status = 200) {
  return new NextResponse(JSON.stringify(body), {
    status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function OPTIONS() {
  return corsResponse({}, 200);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 🔎 Verifica tipo de evento
    if (body.type !== "payment") {
      return corsResponse({ message: "Evento ignorado" }, 200);
    }

    const paymentId = body.data.id;

    // Consulta pagamento no Mercado Pago
    const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
      },
    });

    const payment = await res.json();

    // Só processa se o pagamento foi aprovado
    if (payment.status === "approved") {
      const pedidoId = parseInt(payment.external_reference);

      // Atualiza pedido
      const pedido = await prisma.pedido.update({
        where: { id: pedidoId },
        data: { status: "PAGO" },
        include: { cliente: true },
      });

      // Atualiza validade da carteirinha (+1 ano)
      const novaDataExpiracao = new Date();
      novaDataExpiracao.setFullYear(novaDataExpiracao.getFullYear() + 1);

      await prisma.cliente.update({
        where: { id: pedido.clienteId },
        data: { dataExpiracao: novaDataExpiracao },
      });

      return corsResponse({ success: true, pedidoId }, 200);
    }

    return corsResponse({ message: "Pagamento não aprovado ainda" }, 200);
  } catch (error: any) {
    console.error("Erro no webhook:", error);
    return corsResponse({ error: "Erro ao processar webhook" }, 500);
  }
}
