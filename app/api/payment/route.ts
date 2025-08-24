import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { clienteId } = body;

    if (!clienteId) {
      return NextResponse.json({ error: "ClienteId obrigatório" }, { status: 400 });
    }

    // 🔹 Simula criação de pedido
    const pedidoId = Math.floor(Math.random() * 100000);

    // 🔹 Retorna link fake (checkout simulado)
    const fakePaymentUrl = `/pagamento/${pedidoId}?status=pendente`;

    return NextResponse.json({
      success: true,
      pedidoId,
      init_point: fakePaymentUrl,
    });
  } catch (error) {
    console.error("Erro simulado ao criar pagamento:", error);
    return NextResponse.json({ error: "Erro ao processar pagamento simulado" }, { status: 500 });
  }
}
