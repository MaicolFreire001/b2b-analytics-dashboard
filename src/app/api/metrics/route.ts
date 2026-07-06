import { NextResponse } from "next/server";

export interface DashboardMetrics {
  totalRevenue: number;
  activeUsers: number;
  salesGrowth: number;
  revenueHistory: { month: string; desktop: number; mobile: number }[];
}

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const data: DashboardMetrics = {
    totalRevenue: 124500,
    activeUsers: 8432,
    salesGrowth: 14.5,
    revenueHistory: [
      { month: "Ene", desktop: 12000, mobile: 8000 },
      { month: "Feb", desktop: 15000, mobile: 9000 },
      { month: "Mar", desktop: 11000, mobile: 12000 },
      { month: "Abr", desktop: 18000, mobile: 14000 },
      { month: "May", desktop: 22000, mobile: 19000 },
      { month: "Jun", desktop: 24000, mobile: 21000 },
    ],
  };

  return NextResponse.json(data);
}