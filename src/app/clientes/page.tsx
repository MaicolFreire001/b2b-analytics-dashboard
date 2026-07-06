"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserPlus } from "lucide-react"

export default function ClientesPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Clientes</h2>
            <p className="text-muted-foreground">Administra y organiza tu base de usuarios.</p>
          </div>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Nuevo Cliente
          </Button>
        </div>

        <Card className="flex flex-col items-center justify-center p-12 text-center border-dashed border-2 bg-card">
          <CardHeader className="p-0 flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
              <Users className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
            </div>
            <CardTitle className="text-xl">No hay clientes cargados</CardTitle>
            <CardDescription className="max-w-sm mt-2">
              Aún no tienes clientes registrados en este entorno. Comienza agregando tu primer cliente corporativo.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6 p-0">
            <Button variant="outline">Importar desde CSV</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}