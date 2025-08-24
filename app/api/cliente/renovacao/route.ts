// app/api/cliente/[cpf]/renovacao/route.ts
import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";
import MercadoPagoConfig, { Preference } from "mercadopago";

const mpClient = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

// Função utilitária para habilitar CORS
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

export async function POST(req: Request, { params }: { params: { cpf: string } }) {
  try {
    // 🔎 Busca cliente pelo CPF
    const cliente = await prisma.cliente.findUnique({
      where: { cpf: params.cpf },
    });

    if (!cliente) {
      return corsResponse({ error: "Cliente não encontrado" }, 404);
    }

    // 💳 Cria novo pedido no banco
    const pedido = await prisma.pedido.create({
      data: {
        clienteId: cliente.id,
        tipo: "RENOVACAO",
        valorCentavos: 3500, // R$35,00 em centavos
        status: "RECEBIDO",
      },
    });

    // 🔗 Cria preferência no Mercado Pago
    const preference = await new Preference(mpClient).create({
      body: {
        items: [
          {
            id: pedido.id.toString(), // 👈 obrigatório no SDK TS
            title: "Renovação Carteirinha Estudantil",
            quantity: 1,
            unit_price: 35.0,
            currency_id: "BRL",
          },
        ],
        payer: {
          name: cliente.nome,
          email: cliente.email || undefined,
        },
        back_urls: {
          success: `https://seusite.com/cliente/${cliente.cpf}?status=sucesso`,
          failure: `https://seusite.com/cliente/${cliente.cpf}?status=falha`,
          pending: `https://seusite.com/cliente/${cliente.cpf}?status=pendente`,
        },
        auto_return: "approved",
        external_reference: pedido.id.toString(), // liga o pagamento ao pedido
      },
    });

    return corsResponse(
      {
        success: true,
        pedidoId: pedido.id,
        init_point: preference.init_point,
      },
      201
    );
  } catch (error: any) {
    console.error("Erro ao criar renovação:", error);
    return corsResponse({ error: "Erro ao processar renovação" }, 500);
  }
}
