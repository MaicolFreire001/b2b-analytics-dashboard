"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"
import { DashboardMetrics } from "@/app/api/metrics/route"
import { Button } from "@/components/ui/button"

const chartConfig = {
  desktop: {
    label: "Escritorio",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Móvil",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

interface RevenueChartProps {
  data: DashboardMetrics["revenueHistory"]
}

export function RevenueChart({ data }: RevenueChartProps) {
  const [monthsToShow, setMonthsToShow] = React.useState<3 | 6>(6)

  const filteredData = React.useMemo(() => {
    return [...data].slice(-monthsToShow)
  }, [data, monthsToShow])

  return (
    <Card className="col-span-1 border-border bg-card">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b border-border p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Ingresos por Dispositivo</CardTitle>
          <CardDescription>
            Comparativa de ventas entre escritorio y móvil.
          </CardDescription>
        </div>
        <div className="flex items-center px-6 py-4 sm:border-l sm:border-border sm:px-6 sm:py-0 gap-2">
          <Button 
            variant={monthsToShow === 3 ? "default" : "outline"}
            size="sm"
            onClick={() => setMonthsToShow(3)}
            aria-pressed={monthsToShow === 3}
          >
            3 Meses
          </Button>
          <Button 
            variant={monthsToShow === 6 ? "default" : "outline"}
            size="sm"
            onClick={() => setMonthsToShow(6)}
            aria-pressed={monthsToShow === 6}
          >
            6 Meses
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
          <BarChart accessibilityLayer data={filteredData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="text-muted-foreground text-xs"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              className="text-muted-foreground text-xs"
              width={60}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar 
              dataKey="desktop" 
              fill="var(--color-desktop)" 
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="mobile" 
              fill="var(--color-mobile)" 
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}