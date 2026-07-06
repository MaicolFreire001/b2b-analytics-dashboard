"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, BarChart3, Settings, Users } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const getLinkClass = (path: string) => {
    const baseClass = "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary "
    const activeClass = "bg-muted text-primary font-semibold"
    const inactiveClass = "text-muted-foreground"
    
    return baseClass + (pathname === path ? activeClass : inactiveClass)
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      
      <aside className="hidden border-r bg-muted/40 md:block" aria-label="Menú lateral principal">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Ir al inicio de Acme Analytics">
              <Activity className="h-6 w-6" aria-hidden="true" />
              <span>Acme Analytics</span>
            </Link>
          </div>
          
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 mt-4" aria-label="Navegación del panel">
              <Link
                href="/"
                className={getLinkClass("/")}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                <BarChart3 className="h-4 w-4" aria-hidden="true" />
                Resumen
              </Link>
              <Link
                href="/clientes"
                className={getLinkClass("/clientes")}
                aria-current={pathname === "/clientes" ? "page" : undefined}
              >
                <Users className="h-4 w-4" aria-hidden="true" />
                Clientes
              </Link>
              <Link
                href="/configuracion"
                className={getLinkClass("/configuracion")}
                aria-current={pathname === "/configuracion" ? "page" : undefined}
              >
                <Settings className="h-4 w-4" aria-hidden="true" />
                Configuración
              </Link>
            </nav>
          </div>
        </div>
      </aside>

      <div className="flex flex-col">
        <header className="flex h-14 items-center justify-between border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <h1 className="text-lg font-semibold md:hidden">Acme Analytics</h1>
          <div className="w-full flex-1" />
          <ThemeToggle />
        </header>
        
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}