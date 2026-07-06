"use client"

import { useTransactions } from "@/hooks/use-transactions"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentTransactions() {
  const { data, isLoading, error } = useTransactions()

  if (error) {
    return <div className="text-destructive font-medium p-4 border rounded-md">Error cargando transacciones.</div>
  }

  return (
    <Card className="col-span-1 border-border">
      <CardHeader>
        <CardTitle>Transacciones Recientes</CardTitle>
        <CardDescription>
          Gestiona las últimas ventas. Utiliza el buscador para filtrar clientes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} isLoading={isLoading} />
      </CardContent>
    </Card>
  )
}