import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import BlurText from "./BlurText"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Logo CNU */}
          <div className="mb-12 flex justify-center">
            <img
              src="/logoCNU.png"
              alt="Logo CNU - Centro Nacional de Universidades"
              className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary/20 transition-colors">
              Descubre el futuro de la educación{" "}
              <Link href="/herramientas" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Explorar herramientas <ArrowRight className="inline h-3 w-3" />
              </Link>
            </div>
          </div>
          <BlurText
            text="Inteligencia Artificial, TICS y educación"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-heading text-balance"
          />
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Descubre cómo la inteligencia artificial está transformando la educación. Explora herramientas y
            contenidos interactivos que te ayudarán a integrar la IA en tu práctica educativa.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
            <Button variant="outline" asChild size="lg">
              <Link href="/herramientas">
                <Sparkles className="mr-2 h-4 w-4" />
                Explorar contenidos
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/herramientas">Interacción</Link>
            </Button>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/aplicacion">Aplicaciones</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
