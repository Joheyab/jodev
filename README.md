# JO.DEV — Portfolio Web

Landing page personal para servicios de desarrollo web. Stack: **React + TypeScript + Vite + CSS Modules**.

## Requisitos

- Node.js 18+ instalado
- npm o pnpm

## Setup rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (http://localhost:5173)
npm run dev

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

## Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Cursor.tsx       # Cursor personalizado animado
│   ├── GlassCard.tsx    # Tarjeta con efecto glass
│   ├── Navbar.tsx       # Navegación sticky
│   └── SectionHeader.tsx
├── sections/            # Secciones de la página
│   ├── Hero.tsx         # Hero con canvas de partículas
│   ├── Metrics.tsx      # Strip de métricas
│   ├── Services.tsx     # Tarjetas de servicios
│   ├── Process.tsx      # Pasos del proceso
│   ├── Stack.tsx        # Chips de tecnologías
│   ├── Pricing.tsx      # Planes y precios
│   ├── CtaFinal.tsx     # CTA de contacto
│   └── Footer.tsx
├── hooks/
│   └── useReveal.ts     # Hook para animaciones de scroll
├── App.tsx
├── main.tsx
└── index.css            # Variables CSS globales
```

## Personalización

### Contacto
Edita `src/sections/CtaFinal.tsx`:
```tsx
const WHATSAPP_NUMBER = '50688888888'  // tu número con código de país
const EMAIL           = 'hola@jodev.cr'
```

### Logo / Nombre
Busca `JO.DEV` en `Navbar.tsx`, `CtaFinal.tsx` y `Footer.tsx`.

### Precios
Edita el array `PLANS` en `src/sections/Pricing.tsx`.

### Servicios
Edita el array `SERVICES` en `src/sections/Services.tsx`.

### Colores
Todas las variables de color están centralizadas en `src/index.css`:
```css
--red:        #d32f2f;   /* rojo principal */
--red-hover:  #b71c1c;   /* rojo hover */
--red-bright: #ff5252;   /* rojo brillante */
```

## Deploy

### Vercel (recomendado)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Arrastra la carpeta /dist a netlify.com/drop
```

### GitHub Pages
```bash
npm run build
# Commit + push la carpeta /dist
```
