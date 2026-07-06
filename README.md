# 📊 B2B Analytics Dashboard

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Table](https://img.shields.io/badge/TanStack_Table-FF4154?style=for-the-badge&logo=react&logoColor=white)

> Un panel administrativo corporativo centrado en la **Arquitectura Frontend, UI/UX y el Rendimiento Web (Lighthouse 100/100)**. 

Este proyecto fue construido para demostrar el dominio en la creación de interfaces modernas, accesibles y altamente interactivas utilizando el ecosistema actual de React. 

🔗 **[Ver Demo en Vivo (Vercel)](https://vercel.com/maicol-freires-projects/b2b-analytics-dashboard)**

---

## 🚀 Características Principales

*   **Arquitectura de Rendimiento:** Implementación de carga diferida (`next/dynamic`) para componentes pesados (gráficos), garantizando un *Total Blocking Time (TBT)* casi nulo en el hilo principal.
*   **Tablas de Datos Avanzadas:** Integración de `@tanstack/react-table` con ordenamiento por columnas, filtrado multicondicional, paginación y renderizado semántico de estados.
*   **Gráficos Interactivos:** Visualización de datos con `recharts` que permite al usuario mutar la vista de datos (ej. rangos de 3 a 6 meses) recalculando de forma instantánea.
*   **Diseño Accesible (A11y):** Paleta de colores Zinc optimizada para contraste, soporte completo para modo claro/oscuro nativo, atributos ARIA implementados y navegación semántica.
*   **Estados de UI Avanzados:** Manejo profesional de "Skeleton Loaders" para transiciones de carga fluidas y "Empty States" amigables para el usuario.

## 🛠️ Stack Tecnológico

*   **Framework:** Next.js (App Router)
*   **Estilos:** Tailwind CSS v4 + variables CSS
*   **Componentes UI:** shadcn/ui (Radix UI)
*   **Visualización de Datos:** Recharts
*   **Gestión de Tablas:** TanStack Table (React Table v8)
*   **Iconografía:** Lucide React

## 💡 Nota sobre el Backend (Mock Data)

Este proyecto está diseñado específicamente como una **demostración de capacidades Frontend y diseño de interfaces**. 
Para garantizar una experiencia de usuario inmediata y demostrar el manejo de estados de carga asíncronos en React, el panel consume una **Mock API** interna configurada mediante *Route Handlers* de Next.js. Esto permite exhibir interacciones complejas de UI sin la latencia de una base de datos externa, enfocándose puramente en la excelencia del lado del cliente.

## ⚙️ Instalación y Desarrollo Local

Si deseas correr este proyecto de forma local:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/MaicolFreire001/b2b-analytics-dashboard.git](https://github.com/MaicolFreire001/b2b-analytics-dashboard.git)
   ```
   
2. Instala las dependencias:

  ```bash
  npm install
  ```

3. Inicia el servidor de desarrollo:

  ```bash
  npm run dev
  ```

4. Abre http://localhost:3000 en tu navegador para ver el resultado.

## 📈 Rendimiento y Accesibilidad

- Se ha puesto especial atención en cumplir con las métricas vitales de Google (Core Web Vitals):
- Uso de etiquetas semánticas (<aside>, <main>, <nav>).
- Formateo nativo de internacionalización (API Intl.NumberFormat).
- Prevención de Layout Shifts (CLS) mediante dimensiones predefinidas en Skeletons.
