import type { Metadata } from "next"
import { PresentacionesClient } from "./presentaciones-client"

export const metadata: Metadata = {
  title: "Presentaciones sobre IA Educativa | IA y Educación",
  description:
    "Colección de presentaciones académicas y profesionales sobre implementación de inteligencia artificial en contextos educativos. Estrategias, casos de éxito y metodologías.",
  keywords:
    "presentaciones IA educación, estrategias implementación IA, casos éxito universidades, metodología evaluación herramientas IA",
  openGraph: {
    title: "Presentaciones sobre IA Educativa | IA y Educación",
    description: "Colección de presentaciones académicas y profesionales sobre implementación de IA en educación.",
    url: "/presentaciones",
    type: "website",
  },
  alternates: {
    canonical: "/presentaciones",
  },
}

export default function PresentacionesPage() {
  return <PresentacionesClient />
}
