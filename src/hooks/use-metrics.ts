"use client";

import { useState, useEffect } from "react";
import { DashboardMetrics } from "@/app/api/metrics/route";

export function useMetrics() {
  const [data, setData] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchMetrics = async () => {
      try {
        const response = await fetch("/api/metrics");
        if (!response.ok) throw new Error("Error obteniendo métricas");
        
        const result = await response.json();
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchMetrics();
    return () => { isMounted = false; };
  }, []);

  return { data, isLoading, error };
}