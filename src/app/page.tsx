"use client"

import dynamic from "next/dynamic"
import { DashboardLayout } from "@/components/dashboard-layout"
import { useMetrics } from "@/hooks/use-metrics"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { DollarSign, Users, TrendingUp } from "lucide-react"


const RevenueChartLazy = dynamic(
  () => import("@/components/revenue-chart").then((mod) => mod.RevenueChart),
  {
    ssr: false, 
    loading: () => <Skeleton className="min-h-[350px] w-full rounded-xl" />,
  }
)

const RecentTransactionsLazy = dynamic(
  () => import("@/components/transactions/recent-transactions").then((mod) => mod.RecentTransactions),
  { ssr: false } // Evita renderizado en servidor de tablas complejas
)

export default function DashboardPage() {
  const { data, isLoading, error } = useMetrics()

  if (error) {
    return (
      <DashboardLayout>
        <div className="text-destructive font-semibold" role="alert">
          Error al cargar datos: {error}
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Panel de Control</h2>
          <p className="text-muted-foreground">Bienvenido al resumen de métricas de hoy.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-24" />
              ) : (
                <div className="text-2xl font-bold">
                  ${data?.totalRevenue.toLocaleString()}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold">
                  +{data?.activeUsers.toLocaleString()}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Crecimiento (Mes)</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold text-emerald-500">
                  +{data?.salesGrowth}%
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          {isLoading ? (
            <Skeleton className="min-h-[350px] w-full rounded-xl" />
          ) : (
            data && <RevenueChartLazy data={data.revenueHistory} />
          )}
        </div>

        <div className="mt-8">
          <RecentTransactionsLazy />
        </div>
      </div>
    </DashboardLayout>
  )
}