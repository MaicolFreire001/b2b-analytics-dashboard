"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Transaction } from "@/app/api/transactions/route"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "ID Transacción",
    cell: ({ row }) => <div className="font-medium text-muted-foreground">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 hover:bg-transparent"
          aria-label="Ordenar por cliente"
        >
          Cliente
          <ArrowUpDown className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      
      const variant = 
        status === "completado" ? "default" : 
        status === "fallido" ? "destructive" : "secondary"

      return (
        <Badge variant={variant} className="capitalize">
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 hover:bg-transparent"
          aria-label="Ordenar por fecha"
        >
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      )
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-transparent pr-0"
            aria-label="Ordenar por monto"
          >
            Monto
            <ArrowUpDown className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      
      const formatted = new Intl.NumberFormat("es-UY", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]