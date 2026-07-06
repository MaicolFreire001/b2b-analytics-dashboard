"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function ConfiguracionPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Configuración</h2>
          <p className="text-muted-foreground">Gestiona las preferencias de tu cuenta y seguridad.</p>
        </div>

        <Tabs defaultValue="cuenta" className="w-full max-w-2xl flex flex-col">
          <TabsList className="grid w-full grid-cols-3 h-10 mb-4">
            <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
            <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
            <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
          </TabsList>

          <TabsContent value="cuenta">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Datos del Perfil</CardTitle>
                <CardDescription>Actualiza la información pública de tu empresa.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Nombre de la Empresa</label>
                  <Input id="company" defaultValue="Acme Analytics Ltd." />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email de Soporte</label>
                  <Input id="email" type="email" defaultValue="soporte@acme.com" />
                </div>
                <Button 
                    onClick={() => toast.info("Función deshabilitada", {
                        description: "Los cambios de configuración están desactivados en el entorno de demostración."
                    })}
                >
                    Guardar Cambios
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notificaciones">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Alertas de Sistema</CardTitle>
                <CardDescription>Configura qué eventos quieres recibir por correo electrónico.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Las opciones avanzadas de webhooks e integraciones por correo están desactivadas en el entorno demo.
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seguridad">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Credenciales de Acceso</CardTitle>
                <CardDescription>Cambia tu contraseña o gestiona llaves de API.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="current-pass" className="text-sm font-medium">Contraseña Actual</label>
                  <Input id="current-pass" type="password" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="new-pass" className="text-sm font-medium">Nueva Contraseña</label>
                  <Input id="new-pass" type="password" />
                </div>
                <Button variant="destructive">Actualizar Contraseña</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}