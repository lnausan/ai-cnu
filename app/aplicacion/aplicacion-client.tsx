"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, Scan, Palette, BookOpen, Rocket } from "lucide-react"

export function AplicacionClient() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
                Aplicación
              </h1>
            </div>
          </div>
        </div>

        {/* Sección de Herramientas con beneficios .edu */}
        <section className="py-16 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                Herramientas de Aplicación
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground text-justify">
                Explora estas herramientas para aplicar la inteligencia artificial en tus proyectos educativos.
              </p>
            </div>
            
            {/* Layout con herramientas y texto rotado */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative">
              {/* Grid de 4 herramientas */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Cam Scanner */}
                <div className="bg-background p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
                      <Scan className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Cam Scanner</h4>
                    <p className="text-muted-foreground text-sm mb-4 text-justify">
                      Aplicación móvil para escanear documentos y convertirlos en PDFs de alta calidad
                    </p>
                    <Button asChild className="w-full">
                      <a 
                        href="https://www.camscanner.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Acceder a Cam Scanner
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Canva */}
                <div className="bg-background p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Canva</h4>
                    <p className="text-muted-foreground text-sm mb-4 text-justify">
                      Plataforma de diseño gráfico con herramientas de IA para crear contenido visual profesional
                    </p>
                    <Button asChild className="w-full">
                      <a 
                        href="https://www.canva.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Acceder a Canva
                      </a>
                    </Button>
                  </div>
                </div>

                {/* NotebookLM */}
                <div className="bg-background p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">NotebookLM</h4>
                    <p className="text-muted-foreground text-sm mb-4 text-justify">
                      Asistente de IA de Google que crea un cuaderno de notas a partir de tus documentos y fuentes
                    </p>
                    <Button asChild className="w-full">
                      <a 
                        href="https://notebooklm.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Acceder a NotebookLM
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Comet */}
                <div className="bg-background p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                      <Rocket className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Comet</h4>
                    <p className="text-muted-foreground text-sm mb-4 text-justify">
                      Plataforma de experimentación y seguimiento de modelos de machine learning
                    </p>
                    <Button asChild className="w-full">
                      <a 
                        href="https://www.comet.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Acceder a Comet
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Beneficios .edu rotado 90 grados - puede salir del margen */}
              <div className="flex items-center justify-center lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-16 xl:translate-x-32 2xl:translate-x-48 min-h-[400px] lg:min-h-0">
                <p 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary tracking-tight whitespace-nowrap"
                  style={{ 
                    transform: 'rotate(90deg)',
                    transformOrigin: 'center'
                  }}
                >
                  beneficios .edu
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Padlet Embed */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                Actividad
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Accede al Padlet para realizar y compartir tus publicaciones
              </p>
            </div>
            <div 
              className="padlet-embed rounded-lg shadow-lg overflow-hidden"
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "8px",
                boxSizing: "border-box",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                background: "#F4F4F4"
              }}
            >
              <p style={{ padding: 0, margin: 0 }}>
                <iframe 
                  src="https://padlet.com/embed/66pxhzrays0j49i" 
                  frameBorder="0" 
                  allow="camera;microphone;geolocation;display-capture;clipboard-write" 
                  style={{
                    width: "100%",
                    height: "608px",
                    display: "block",
                    padding: 0,
                    margin: 0
                  }}
                  title="Padlet de Aplicación"
                />
              </p>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                margin: 0,
                height: "28px"
              }}>
                <a 
                  href="https://padlet.com?ref=embed" 
                  style={{
                    display: "block",
                    flexGrow: 0,
                    margin: 0,
                    border: "none",
                    padding: 0,
                    textDecoration: "none"
                  }} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img 
                      src="https://padlet.net/embeds/made_with_padlet_2022.png" 
                      width="114" 
                      height="28" 
                      style={{
                        padding: 0,
                        margin: 0,
                        background: "0 0",
                        border: "none",
                        boxShadow: "none"
                      }} 
                      alt="Criado com o Padlet"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

