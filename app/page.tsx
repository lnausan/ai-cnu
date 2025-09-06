import { HeroSection } from "@/components/hero-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmbedPlayer } from "@/components/embed-player"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Sección con pestañas */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                Contenido Interactivo
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Explora diferentes aspectos de la IA en educación
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="saludo" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="saludo" className="text-base font-medium">
                    Saludo
                  </TabsTrigger>
                  <TabsTrigger value="com-vs-nvidia" className="text-base font-medium">
                    .com vs nvidia
                  </TabsTrigger>
                  <TabsTrigger value="real-o-no" className="text-base font-medium">
                    Real o no?
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="saludo" className="mt-0">
                  <div className="text-center">
                    <EmbedPlayer
                      provider="youtube"
                      url="https://youtu.be/LUMna33EOFE"
                      title="Video de saludo sobre IA en educación"
                      className="shadow-lg"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="com-vs-nvidia" className="mt-0">
                  <div className="text-center">
                    {/* Videos de ejemplo */}
                    <div className="space-y-8">
                      <div>
                        <EmbedPlayer
                          provider="youtube"
                          url="https://www.youtube.com/watch?v=PDE9b5iU8vI"
                          title="Video de ejemplo 1 - .com vs nvidia"
                          className="shadow-lg"
                        />
                      </div>
                      
                      <div>
                        <EmbedPlayer
                          provider="youtube"
                          url="https://youtu.be/j8VGP5pr9OQ?si=s5Oh_9WsqmLwEoBC"
                          title="Video de ejemplo 2 - .com vs nvidia"
                          className="shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="real-o-no" className="mt-0">
                  <div className="text-center">
                    {/* Imágenes de ejemplo */}
                    <div className="space-y-6">
                      <div className="bg-background p-4 rounded-lg border shadow-lg">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Imagen 01</h4>
                        <div className="relative">
                          <img
                            src="/01.jpeg"
                            alt="Imagen de ejemplo 01 - Real o no?"
                            className="mx-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-2xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                        </div>
                      </div>
                      
                      <div className="bg-background p-4 rounded-lg border shadow-lg">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Imagen 02</h4>
                        <div className="relative">
                          <img
                            src="/02.jpeg"
                            alt="Imagen de ejemplo 02 - Real o no?"
                            className="mx-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-2xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                        </div>
                      </div>
                      
                      <div className="bg-background p-4 rounded-lg border shadow-lg">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Imagen 03</h4>
                        <div className="relative">
                          <img
                            src="/03.jpeg"
                            alt="Imagen de ejemplo 03 - Real o no?"
                            className="mx-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-2xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                        </div>
                      </div>
                      
                      <div className="bg-background p-4 rounded-lg border shadow-lg">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Imagen 04</h4>
                        <div className="relative">
                          <img
                            src="/04.jpeg"
                            alt="Imagen de ejemplo 04 - Real o no?"
                            className="mx-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-2xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-background rounded-lg border">
                      <p className="text-sm text-muted-foreground">
                        <strong>Desafío:</strong> Observa estas imágenes y analiza si el contenido podría haber sido generado por IA o si parece ser contenido auténtico creado por humanos.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
              </Tabs>
            </div>
          </div>
        </section>

        {/* IA Generativa */}
        <section className="bg-muted/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                IA generativa
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Descubre cómo la IA puede crear contenido nuevo e innovador
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-8 mb-6 text-justify">
                  La IA generativa es una rama de la inteligencia artificial que se centra en la generación de contenido nuevo indistinguible del creado por seres humanos. A diferencia de las técnicas tradicionales que se limitan a reconocer patrones y hacer predicciones, la IA generativa puede crear datos completamente nuevos a partir de patrones aprendidos.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Large Language Models (LLM)</h3>
                <p className="text-lg leading-8 mb-6 text-justify">
                  Los LLM son una combinación de algoritmos que generan texto predictivo a partir de grandes volúmenes de datos. La diferencia clave es el crecimiento exponencial de sus capacidades: mientras más datos se usan para entrenar el modelo, mayor es su capacidad de generar contenido coherente y contextual.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">¿Cómo funciona?</h3>
                <p className="text-lg leading-8 mb-6 text-justify">
                  La IA generativa se basa en modelos de deep learning, específicamente redes neuronales generativas que simulan la forma en que aprendemos los humanos. Existen varias arquitecturas importantes:
                </p>

                <div className="space-y-8 mt-8">
                  {/* Modelos Autorregresivos - Tarjeta expandida */}
                  <div className="bg-background p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <h4 className="text-xl font-bold text-foreground">Modelos Autorregresivos</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-justify leading-relaxed">
                        Se les llama así porque funcionan prediciendo la siguiente unidad de datos basada en las unidades anteriores (por ejemplo, la siguiente palabra en una secuencia de texto). GPT (Generative Pre-trained Transformer), es un ejemplo de este tipo de modelos.
                      </p>
                      
                      <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                        <h5 className="font-semibold text-foreground mb-2">Ejemplo práctico:</h5>
                        <p className="text-muted-foreground text-justify">
                          Supongamos que la entrada del modelo es: <span className="font-mono bg-muted px-2 py-1 rounded">"El perro es el mejor amigo"</span>. 
                          Basado en esa entrada, muy probablemente, la predicción para la siguiente unidad de datos (en este caso sería una palabra) sería <span className="font-mono bg-muted px-2 py-1 rounded">"del"</span> y, 
                          una vez teniendo <span className="font-mono bg-muted px-2 py-1 rounded">"El perro es el mejor amigo del"</span>, la siguiente predicción —basada en las unidades anteriores— sería <span className="font-mono bg-muted px-2 py-1 rounded">"hombre"</span> 
                          completando así la frase: <span className="font-mono bg-primary/10 px-2 py-1 rounded font-semibold">"El perro es el mejor amigo del hombre"</span>.
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground text-justify leading-relaxed">
                        Estos modelos se entrenan en grandes conjuntos de datos y pueden generar texto coherente y contextual. El modelado autorregresivo es un componente importante de los GPT que funcionan con un tipo de arquitectura llamada Transformer.
                      </p>
                      
                      <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-3">Arquitectura Transformer:</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-justify"><strong>Codificador:</strong> Permite la comprensión del lenguaje natural</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-justify"><strong>Decodificador:</strong> Para la generación del lenguaje natural</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Modelos Fundacionales */}
                  <div className="bg-background p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🏗️</span>
                      </div>
                      <h4 className="text-xl font-bold text-foreground">Modelos Fundacionales</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-justify leading-relaxed">
                        Son modelos entrenados con conjuntos de datos masivos para servir como punto de partida en el desarrollo de IA específica. Su característica única es la adaptabilidad, permitiendo desarrollar múltiples tareas con alta precisión.
                      </p>
                      
                      <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-3">Ejemplos destacados:</h5>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="bg-muted px-3 py-1 rounded-full text-center">BERT</span>
                          <span className="bg-muted px-3 py-1 rounded-full text-center">GPT</span>
                          <span className="bg-muted px-3 py-1 rounded-full text-center">Claude</span>
                          <span className="bg-muted px-3 py-1 rounded-full text-center">Stable Diffusion</span>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            </div>
            </div>
          </div>
        </section>

        {/* Prompt */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                Prompt
              </h2>
            </div>
            
            {/* Imagen Chat */}
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="relative">
                <img
                  src="/chat.jpeg"
                  alt="Chat de IA - Ejemplo de conversación con inteligencia artificial"
                  className="mx-auto rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 w-full max-w-4xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-8 mb-6 text-justify">
                  Un prompt es una instrucción o entrada de texto que se proporciona a un modelo de IA generativa para obtener una respuesta específica. La calidad y precisión del prompt determina directamente la calidad de la respuesta generada por el modelo.
                </p>
                
                <div className="bg-background p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full mt-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">¿Qué es un prompt?</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-justify leading-relaxed">
                      Un prompt es esencialmente la forma de comunicarse con la IA. Es como dar instrucciones claras y específicas a un asistente humano. Cuanto más preciso y detallado sea el prompt, mejor será la respuesta que obtengas del modelo de IA.
                    </p>
                    
                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-semibold text-foreground mb-2">Ejemplo de prompt básico:</h4>
                      <div className="bg-muted p-3 rounded font-mono text-sm">
                        "Explica qué es la inteligencia artificial en términos simples"
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">Características de un buen prompt:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-justify"><strong>Claridad:</strong> Instrucciones específicas y sin ambigüedad</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-justify"><strong>Contexto:</strong> Proporcionar información relevante sobre el tema</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-justify"><strong>Formato:</strong> Especificar el formato de respuesta deseado</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-justify"><strong>Ejemplos:</strong> Incluir ejemplos cuando sea apropiado</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </main>
      <Footer />
    </div>
  )
}
