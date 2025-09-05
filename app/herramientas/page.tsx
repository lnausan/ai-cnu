import type { Metadata } from "next"
import { HerramientasClient } from "./herramientas-client"

export const metadata: Metadata = {
  title: "Interacción | IA y Educación",
  description:
    "Página de interacción para explorar contenido sobre inteligencia artificial en educación.",
  keywords:
    "interacción IA educación, inteligencia artificial, tecnología educativa",
  openGraph: {
    title: "Interacción | IA y Educación",
    description: "Página de interacción para explorar contenido sobre IA en educación.",
    url: "/herramientas",
    type: "website",
  },
  alternates: {
    canonical: "/herramientas",
  },
}

export default function HerramientasPage() {
  return <HerramientasClient />
}
