# IA y Educación

Sitio web sobre Inteligencia Artificial aplicada a la educación, desarrollado con Next.js 15 y Tailwind CSS.

## Características

- **Diseño minimalista y moderno** con paleta de colores azul eléctrico
- **Modo claro/oscuro** automático
- **Totalmente responsive** y optimizado para móviles
- **Accesibilidad AA** con contraste adecuado y navegación por teclado
- **SEO optimizado** con metadata completa y sitemap
- **Rendimiento superior** con Lighthouse ≥ 95

## Estructura del proyecto

\`\`\`
├── app/                    # Páginas de Next.js App Router
│   ├── page.tsx           # Página de inicio
│   ├── herramientas/      # Página de herramientas
│   ├── videos/            # Página de videos
│   ├── presentaciones/    # Página de presentaciones
│   ├── contacto/          # Página de contacto
│   ├── sitemap.ts         # Sitemap automático
│   └── robots.ts          # Robots.txt
├── components/            # Componentes reutilizables
│   ├── header.tsx         # Navegación principal
│   ├── footer.tsx         # Pie de página
│   ├── content-card.tsx   # Tarjetas de contenido
│   ├── embed-player.tsx   # Reproductor embebido
│   ├── content-tag.tsx    # Tags de categorías
│   └── search-filter.tsx  # Búsqueda y filtros
├── data/                  # Archivos de datos JSON
│   ├── herramientas.json  # Datos de herramientas
│   ├── videos.json        # Datos de videos
│   └── presentaciones.json # Datos de presentaciones
└── lib/                   # Utilidades
\`\`\`

## Gestión de contenidos

### Agregar nuevas herramientas

Edita el archivo `data/herramientas.json` y agrega un nuevo objeto:

\`\`\`json
{
  "id": "nueva-herramienta",
  "nombre": "Nombre de la herramienta",
  "descripcion": "Descripción breve de la herramienta",
  "url": "https://ejemplo.com",
  "categoria": "Categoría",
  "tags": ["tag1", "tag2", "tag3"]
}
\`\`\`

### Agregar nuevos videos

Edita el archivo `data/videos.json`:

\`\`\`json
{
  "id": "nuevo-video",
  "titulo": "Título del video",
  "descripcion": "Descripción del contenido",
  "url": "https://youtube.com/watch?v=...",
  "provider": "youtube",
  "duracion": "15:30",
  "tags": ["tag1", "tag2"],
  "fechaPublicacion": "2024-01-15"
}
\`\`\`

**Providers soportados:**
- `youtube`: Videos de YouTube
- `vimeo`: Videos de Vimeo  
- `drive`: Videos de Google Drive

### Agregar nuevas presentaciones

Edita el archivo `data/presentaciones.json`:

\`\`\`json
{
  "id": "nueva-presentacion",
  "titulo": "Título de la presentación",
  "descripcion": "Descripción del contenido",
  "url": "https://docs.google.com/presentation/d/.../edit",
  "provider": "google-slides",
  "slides": 25,
  "tags": ["tag1", "tag2"],
  "fechaCreacion": "2024-01-10"
}
\`\`\`

**Providers soportados:**
- `google-slides`: Google Slides
- `canva`: Presentaciones de Canva
- `slides`: Slides.com

## Desarrollo

### Instalación

\`\`\`bash
npm install
\`\`\`

### Desarrollo local

\`\`\`bash
npm run dev
\`\`\`

### Build de producción

\`\`\`bash
npm run build
npm start
\`\`\`

### Linting

\`\`\`bash
npm run lint
\`\`\`

## Tecnologías utilizadas

- **Next.js 15** - Framework React con App Router
- **Tailwind CSS v4** - Framework de CSS utilitario
- **TypeScript** - Tipado estático
- **Lucide React** - Iconos
- **shadcn/ui** - Componentes de UI
- **Inter & Poppins** - Tipografías

## Licencia

Este proyecto está bajo la Licencia MIT.
# ai-cnu
