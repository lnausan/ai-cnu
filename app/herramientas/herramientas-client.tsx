"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function HerramientasClient() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
                Interacción
              </h1>
            </div>
          </div>
        </div>

        {/* Dinámica de trabajo */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-background p-8 rounded-xl border shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Dinámica de trabajo
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Formación de grupos</h3>
                    <p className="text-muted-foreground text-justify leading-relaxed">
                      Formen grupos de 3 a 4 docentes. La idea es que los equipos sean pequeños para favorecer la conversación, 
                      la toma de decisiones y la construcción colectiva.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Tarea del grupo</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-background p-4 rounded-lg border">
                        <h4 className="font-semibold text-foreground mb-2">1. Diseñar una escena de aprendizaje</h4>
                        <p className="text-muted-foreground text-justify leading-relaxed mb-3">
                          Piensen en una situación donde se produzca (o no) un aprendizaje. Puede ser:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li><strong>Real:</strong> un aula, una charla, un taller</li>
                          <li><strong>Ficticia:</strong> un mundo imaginario o un futuro posible</li>
                          <li><strong>Metafórica:</strong> una escena simbólica que represente un aprendizaje</li>
                          <li><strong>Cotidiana:</strong> momentos comunes fuera de la escuela</li>
                        </ul>
                        <div className="mt-3 p-3 bg-muted/30 rounded border-l-2 border-primary">
                          <p className="text-sm text-muted-foreground">
                            <strong>Ejemplo:</strong> "Un adolescente aprende a cocinar viendo un video de IA en su celular 
                            mientras la abuela compara con la receta escrita en su cuaderno."
                          </p>
                        </div>
                      </div>

                      <div className="bg-background p-4 rounded-lg border">
                        <h4 className="font-semibold text-foreground mb-2">2. Generar la escena con una herramienta de IA generativa</h4>
                        <p className="text-muted-foreground text-justify leading-relaxed">
                          Puede ser en forma de imagen (usando generadores de imágenes) o en texto narrativo breve (usando un generador de textos). 
                          Sean claros con las instrucciones (el prompt) para lograr un resultado que represente bien su idea.
                        </p>
                      </div>

                      <div className="bg-background p-4 rounded-lg border">
                        <h4 className="font-semibold text-foreground mb-2">3. Registar el prompt utilizado</h4>
                        <p className="text-muted-foreground text-justify leading-relaxed">
                          Copien y guarden la consigna exacta que ingresaron en la IA. El objetivo es reflexionar sobre cómo 
                          la formulación del prompt influye en el resultado.
                        </p>
                      </div>

                      <div className="bg-background p-4 rounded-lg border">
                        <h4 className="font-semibold text-foreground mb-2">4. Publicar en un Padlet común</h4>
                        <p className="text-muted-foreground text-justify leading-relaxed mb-3">
                          Cada grupo deberá subir al Padlet:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>La escena generada (imagen o texto)</li>
                          <li>El prompt exacto que usaron</li>
                          <li>Un título breve para identificar su producción</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Padlet Embed */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                  title="Padlet de Interacción"
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

