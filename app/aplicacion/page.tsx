import type { Metadata } from "next"
import { AplicacionClient } from "./aplicacion-client"

export const metadata: Metadata = {
  title: "Aplicación | IA y Educación",
  description:
    "Herramientas de aplicación para trabajar con inteligencia artificial en educación.",
  keywords:
    "aplicación IA educación, herramientas educativas, Cam Scanner, Canva, NotebookLM, Comet",
  openGraph: {
    title: "Aplicación | IA y Educación",
    description: "Herramientas de aplicación para trabajar con IA en educación.",
    url: "/aplicacion",
    type: "website",
  },
  alternates: {
    canonical: "/aplicacion",
  },
}

export default function AplicacionPage() {
  return <AplicacionClient />
}

