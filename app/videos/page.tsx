import type { Metadata } from "next"
import { VideosClient } from "./videos-client"

export const metadata: Metadata = {
  title: "Herramientas de IA Educativa | IA y Educación",
  description:
    "Descubre las mejores herramientas de inteligencia artificial para educación. ChatGPT, Grammarly, Canva Magic Design y más recursos para potenciar tu práctica educativa.",
  keywords:
    "herramientas IA educación, ChatGPT educación, Grammarly, inteligencia artificial aula, tecnología educativa",
  openGraph: {
    title: "Herramientas de IA Educativa | IA y Educación",
    description: "Descubre las mejores herramientas de inteligencia artificial para educación.",
    url: "/videos",
    type: "website",
  },
  alternates: {
    canonical: "/videos",
  },
}

export default function VideosPage() {
  return <VideosClient />
}
