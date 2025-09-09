"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, Sparkles, MessageSquare, Brain } from "lucide-react"
import { EmbedPlayer } from "@/components/embed-player"

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

        {/* Herramientas de IA */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                Herramientas de IA
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground text-justify">
                Accede a las principales herramientas de inteligencia artificial para crear contenido, 
                generar ideas y explorar las posibilidades de la IA en educación.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* IA Studio */}
              <div className="bg-background p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">IA Studio</h4>
                  <p className="text-muted-foreground text-sm mb-4 text-justify">
                    Plataforma de Google para crear y experimentar con modelos de IA generativa
                  </p>
                  <Button asChild className="w-full">
                    <a 
                      href="https://aistudio.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Acceder a IA Studio
                    </a>
                  </Button>
                </div>
              </div>

              {/* ChatGPT */}
              <div className="bg-background p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">ChatGPT</h4>
                  <p className="text-muted-foreground text-sm mb-4 text-justify">
                    Asistente de IA conversacional de OpenAI para diálogos y generación de contenido
                  </p>
                  <Button asChild className="w-full">
                    <a 
                      href="https://chat.openai.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Acceder a ChatGPT
                    </a>
                  </Button>
                </div>
              </div>

              {/* Gemini */}
              <div className="bg-background p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Gemini</h4>
                  <p className="text-muted-foreground text-sm mb-4 text-justify">
                    Modelo de IA multimodal de Google para texto, imágenes y análisis avanzado
                  </p>
                  <Button asChild className="w-full">
                    <a 
                      href="https://gemini.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Acceder a Gemini
                    </a>
                  </Button>
                </div>
              </div>

              {/* Minimax */}
              <div className="bg-background p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Minimax</h4>
                  <p className="text-muted-foreground text-sm mb-4 text-justify">
                    Plataforma de IA conversacional avanzada para diálogos inteligentes y generación de contenido
                  </p>
                  <Button asChild className="w-full">
                    <a 
                      href="https://chat.minimax.io/?type=chat&chatID=0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Acceder a Minimax
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video embebido */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading mb-8">
                Consigna
              </h2>
              <EmbedPlayer
                provider="youtube"
                url="https://youtu.be/mtmcurvu_Kw"
                title="Video de introducción sobre IA en educación"
                className="shadow-lg"
              />
            </div>
          </div>
        </section>

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
        
        {/* Prompt en estilo código (después del Padlet) */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-background p-8 rounded-xl border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Prompt para generar imagen</h3>
              <pre className="whitespace-pre overflow-x-auto bg-muted/50 p-6 rounded-lg border">
                <code className="text-sm">
                  <span className="text-muted-foreground"># Prompt para generador de imágenes (formato 16:9)</span><br />
                  <span className="text-sky-500">prompt</span>
                  <span className="text-foreground"> = </span>
                  <span className="text-foreground">{'{'}</span><br />

                  {/* objetivo */}
                  &nbsp;&nbsp;<span className="text-purple-500">"objetivo"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-emerald-500">"Generar imagen hiperrealista en formato panorámico (wallpaper 16:9)"</span><span className="text-foreground">,</span><br />

                  {/* contexto */}
                  &nbsp;&nbsp;<span className="text-purple-500">"contexto"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-emerald-500">"Aula real de escuela secundaria pública en América Latina, año 2025"</span><span className="text-foreground">,</span><br />

                  {/* comentario */}
                  &nbsp;&nbsp;<span className="text-muted-foreground"># Escena: aprendizaje en contexto complejo con presencia de IA</span><br />

                  {/* escena */}
                  &nbsp;&nbsp;<span className="text-purple-500">"escena"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-emerald-500">"Situación de aprendizaje con desigualdades visibles y uso de IA"</span><span className="text-foreground">,</span><br />

                  {/* detalles */}
                  &nbsp;&nbsp;<span className="text-purple-500">"detalles"</span>
                  <span className="text-foreground">: [</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"Docente explicando Inteligencia Artificial en el pizarrón, intentando mantener la atención"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"Estudiante 1: con notebook moderna, usando una IA (p.ej. ChatGPT) para una tarea"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"Estudiante 2: sin recursos básicos (sin mochila ni cuaderno), escribiendo en hojas sueltas"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"Estudiante 3: distraído, mirando TikTok en el celular, desconectado de la clase"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"Estudiante 4: comprometido/a, tomando apuntes a mano y haciendo preguntas"</span><br />
                  &nbsp;&nbsp;<span className="text-foreground">],</span><br />

                  {/* ambiente */}
                  &nbsp;&nbsp;<span className="text-purple-500">"ambiente"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-emerald-500">"Contrastes en vestimenta, materiales y lenguaje corporal; algunas sillas/mesas rotas o desiguales"</span><span className="text-foreground">,</span><br />

                  {/* cartel */}
                  &nbsp;&nbsp;<span className="text-purple-500">"cartel"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-amber-500">"¿Usás IA o la IA te usa a vos?"</span><span className="text-foreground">,</span><br />

                  {/* extras */}
                  &nbsp;&nbsp;<span className="text-purple-500">"extras"</span>
                  <span className="text-foreground">: [</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"Mochila con stickers de ChatGPT y TikTok"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"Un estudiante grabando un video para redes sociales"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"Docente con vocación pero visiblemente agotado/a"</span><br />
                  &nbsp;&nbsp;<span className="text-foreground">],</span><br />

                  {/* iluminación y estilo */}
                  &nbsp;&nbsp;<span className="text-purple-500">"iluminacion"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-emerald-500">"Luz natural de la mañana entrando por la ventana"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;<span className="text-purple-500">"estilo"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-emerald-500">"Hiperrealista, fotografía documental, sin estética futurista"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;<span className="text-purple-500">"ambientacion"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-emerald-500">"Escuela urbana pública de Argentina, Brasil o país latinoamericano"</span><span className="text-foreground">,</span><br />

                  {/* salida */}
                  &nbsp;&nbsp;<span className="text-purple-500">"formato_salida"</span>
                  <span className="text-foreground">: {'{'}</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">"proporcion"</span><span className="text-foreground">: </span><span className="text-emerald-500">"16:9"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">"resolucion_minima"</span><span className="text-foreground">: </span><span className="text-emerald-500">"1920x1080"</span><span className="text-foreground">,</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">"uso"</span><span className="text-foreground">: </span><span className="text-emerald-500">"Fondo de pantalla"</span><br />
                  &nbsp;&nbsp;<span className="text-foreground">{'}'}</span><br />

                  <span className="text-foreground">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

