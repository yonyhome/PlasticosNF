# Plásticos NF — Sitio Web Industrial Premium

Sitio web corporativo de **Plásticos NF**, empresa colombiana especializada en fabricación y distribución de empaques plásticos industriales en Barranquilla, Atlántico.

Construido con arquitectura moderna, mobile-first y estética industrial premium.

---

## 🏭 Concepto visual

Empresa manufacturera tecnológica moderna. Combinación de:

- **Negro carbón** + **azul eléctrico** + **gris metálico** + **blanco limpio**
- Glassmorphism industrial, bordes luminosos, sombras cinematográficas
- Tipografía display Montserrat ExtraBold + Inter + Poppins
- Iluminación cinematográfica azul industrial
- Animaciones suaves y premium con Framer Motion

---

## 🚀 Stack técnico

- **Next.js 15** (App Router, Server Components)
- **React 19**
- **TypeScript** (strict mode)
- **TailwindCSS 3.4** (configuración custom)
- **Framer Motion 11** (animaciones premium)
- **Lucide React** (iconografía)

---

## 📁 Estructura del proyecto

```
plasticos-nf/
├── src/
│   ├── app/                       # App Router de Next.js 15
│   │   ├── layout.tsx             # Layout raíz + SEO + fonts + JSON-LD
│   │   ├── page.tsx               # Home page (ensambla secciones)
│   │   ├── globals.css            # Sistema de diseño global
│   │   ├── robots.ts              # robots.txt generado
│   │   └── sitemap.ts             # sitemap.xml generado
│   │
│   ├── components/
│   │   ├── layout/                # Componentes de layout
│   │   │   ├── Navbar.tsx         # Nav responsive + menú móvil
│   │   │   ├── Footer.tsx         # Footer premium
│   │   │   └── FloatingWhatsApp.tsx
│   │   │
│   │   ├── sections/              # Secciones de la home
│   │   │   ├── Hero.tsx           # Hero cinematográfico
│   │   │   ├── Products.tsx       # Catálogo productos
│   │   │   ├── Process.tsx        # Proceso fabricación
│   │   │   ├── Machinery.tsx      # Maquinaria industrial
│   │   │   ├── WhyUs.tsx          # Por qué elegirnos
│   │   │   ├── Gallery.tsx        # Galería industrial
│   │   │   ├── Sectors.tsx        # Sectores y clientes
│   │   │   ├── Testimonials.tsx   # Testimonios
│   │   │   ├── CTASection.tsx     # CTA cotización
│   │   │   └── Contact.tsx        # Formulario contacto
│   │   │
│   │   ├── ui/                    # Sistema de diseño base
│   │   │   ├── Container.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── WhatsAppIcon.tsx
│   │   │
│   │   └── animations/
│   │       └── Reveal.tsx         # Animaciones reutilizables
│   │
│   └── lib/
│       ├── constants.ts           # Datos empresa, navegación, stats
│       └── utils.ts               # cn(), whatsappLink()
│
├── public/                        # Assets estáticos
├── tailwind.config.ts             # Sistema de diseño completo
├── next.config.ts                 # Optimizaciones + headers seguridad
├── tsconfig.json
└── package.json
```

---

## 🎨 Sistema de diseño

### Paleta de colores

| Color       | Variable                | Uso                          |
| ----------- | ----------------------- | ---------------------------- |
| Carbon      | `--color-carbon`        | Fondos base, negro industrial |
| Electric    | `--color-electric`      | Acentos primarios, CTAs       |
| Electric Glow | `--color-electric-glow` | Highlights y brillos        |
| Steel       | `--color-steel`         | Tipografía secundaria         |
| Platinum    | `--color-platinum`      | Tipografía principal         |

### Tipografía

- **Display**: Montserrat ExtraBold (titulares, números industriales)
- **Sans**: Inter (cuerpo, UI)
- **Accent**: Poppins (eyebrows, labels)

### Clases utilitarias destacadas

- `.glass-industrial` — Glassmorphism industrial con borde luminoso
- `.text-gradient-electric` — Gradiente azul eléctrico para titulares
- `.bg-grid-industrial` — Mesh grid background
- `.btn-electric` — Botón premium con shimmer animado
- `.industrial-scanline` — Línea de escaneo animada
- `.section-number` — Números grandes outline para secciones

---

## ✨ Características principales

### 🎬 Hero Section cinematográfico
- Imagen de fondo industrial con overlays oscuros
- Stats card en glassmorphism con scanline animado
- Trust strip con avatares de clientes
- Mobile: stats grid compacto

### 📦 Productos (6 categorías principales)
- Cards con imágenes industriales premium
- Hover effects con scale, glow y reveal de CTA
- Tags de features por producto
- Link directo a WhatsApp con mensaje personalizado

### ⚙️ Proceso de fabricación (6 pasos)
- Grid con conexión visual entre pasos
- Métricas industriales por paso
- Iconos con glow eléctrico

### 🏭 Maquinaria industrial
- Layout alternado izquierda/derecha
- Specs técnicos con iconografía
- Parallax sutil al hacer scroll
- Badge "Operativa" en tiempo real

### 🎯 Por qué elegirnos (6 razones)
- Cards con hover glow
- Labels con accent monoespaciado
- Iconografía industrial

### 🖼️ Galería industrial
- Bento grid responsive
- Imágenes con scan line en hover
- Labels y números industriales

### 🏢 Sectores y clientes
- 8 sectores con contador de clientes
- Marquee animado con logos de empresas

### 💬 Testimonios
- 3 testimonios verticales
- Rating con estrellas eléctricas
- Avatares con iniciales

### 🚀 CTA de cotización
- Card grande glassmorphism con borde luminoso
- Stats destacados (<30 min respuesta)
- Botones grandes WhatsApp + llamada

### 📞 Contacto
- Formulario que envía a WhatsApp pre-formateado
- Card destacado WhatsApp en verde brand
- 4 métodos de contacto en grid

### 📱 Floating WhatsApp Button
- Aparece tras 1.2s
- Label tooltip animado
- Ping pulse + glow effect
- Badge de notificación

---

## 🎬 Animaciones Framer Motion

- **Scroll reveal** con `whileInView` y `viewport={{ once: true }}`
- **Stagger animations** en grids de productos, sectores, razones
- **Parallax suave** en sección de maquinaria
- **Hover micro-interactions** en cards, botones e iconos
- **Page load orchestration** en Hero (entrada cinematográfica)
- **Spring physics** en botones y elementos interactivos

Curvas Bézier: `[0.22, 1, 0.36, 1]` (smooth premium)

---

## 📱 Mobile-First & Performance

- Diseño 100% responsive desde 320px
- Imágenes optimizadas con `next/image` (AVIF/WebP)
- Lazy loading nativo
- Server Components donde es posible
- Fonts con `display: swap`
- Headers de seguridad configurados
- `optimizePackageImports` para framer-motion y lucide-react

---

## 🔍 SEO

- Metadata completa (Open Graph, Twitter, robots)
- JSON-LD `Organization` schema
- Sitemap dinámico
- robots.txt dinámico
- Lang: `es-CO`
- Keywords industriales y geográficas

---

## 🛠️ Comandos

```bash
npm install         # Instalar dependencias
npm run dev         # Desarrollo (http://localhost:3000)
npm run build       # Build de producción
npm run start       # Servidor producción
npm run lint        # Linting
npm run type-check  # Validación TypeScript
```

---

## 📝 Configuración personal

Editar `src/lib/constants.ts` para actualizar:

- Datos de empresa (teléfono, email, dirección)
- Número de WhatsApp (formato internacional sin +)
- Links de redes sociales
- Stats y métricas

---

## 🎯 Objetivo de conversión

Toda la UX está orientada a generar cotizaciones por WhatsApp:

1. **CTA principal** visible en Hero, Navbar y Footer
2. **Floating WhatsApp** persistente con badge animado
3. **Cards de producto** enlazan directo a WhatsApp con mensaje pre-llenado
4. **Formulario de contacto** envía el mensaje directo a WhatsApp
5. **CTA Section** dedicada antes del contacto
6. **Trust signals**: stats, clientes, testimonios, sectores

---

**© Plásticos NF — Fabricación industrial premium en Colombia.**
