import { NextResponse } from "next/server";

export type TransactionStatus = "completado" | "pendiente" | "fallido";

export interface Transaction {
  id: string;
  clientName: string;
  email: string;
  amount: number;
  status: TransactionStatus;
  date: string;
}

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const data: Transaction[] = [
    { id: "TRX-7281", clientName: "TechCorp Inc.", email: "billing@techcorp.com", amount: 4500.00, status: "completado", date: "2026-07-04" },
    { id: "TRX-7282", clientName: "Juan Pérez", email: "juan@startup.io", amount: 1250.50, status: "pendiente", date: "2026-07-04" },
    { id: "TRX-7283", clientName: "María Gómez", email: "maria.g@freelance.net", amount: 850.00, status: "completado", date: "2026-07-03" },
    { id: "TRX-7284", clientName: "Acme Corp", email: "finance@acme.com", amount: 12000.00, status: "fallido", date: "2026-07-02" },
    { id: "TRX-7285", clientName: "DevStudios", email: "pagos@devstudios.co", amount: 3400.00, status: "completado", date: "2026-07-01" },
  ];

  return NextResponse.json(data);
}