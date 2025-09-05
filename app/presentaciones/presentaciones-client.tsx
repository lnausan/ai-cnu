"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContentCard } from "@/components/content-card"
import { SearchFilter } from "@/components/search-filter"
import presentacionesData from "@/data/presentaciones.json"

export function PresentacionesClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTags, setActiveTags] = useState<string[]>([])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    presentacionesData.forEach((presentacion) => {
      presentacion.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter presentaciones based on search and tags
  const filteredPresentaciones = useMemo(() => {
    return presentacionesData.filter((presentacion) => {
      const matchesSearch =
        presentacion.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        presentacion.descripcion.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTags = activeTags.length === 0 || activeTags.some((tag) => presentacion.tags.includes(tag))

      return matchesSearch && matchesTags
    })
  }, [searchTerm, activeTags])

  const handleTagToggle = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
                Presentaciones Especializadas
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Colección de presentaciones académicas y profesionales sobre la implementación de inteligencia
                artificial en contextos educativos.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16" aria-labelledby="presentaciones-section">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8">
              <SearchFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                availableTags={allTags}
                activeTags={activeTags}
                onTagToggle={handleTagToggle}
                placeholder="Buscar presentaciones..."
              />
            </div>

            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
                Mostrando {filteredPresentaciones.length} de {presentacionesData.length} presentaciones
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {filteredPresentaciones.map((presentacion) => (
                <div key={presentacion.id} role="listitem">
                  <ContentCard
                    title={presentacion.titulo}
                    description={presentacion.descripcion}
                    url={presentacion.url}
                    tags={presentacion.tags}
                    type="presentacion"
                    metadata={{
                      slides: presentacion.slides,
                      fechaCreacion: presentacion.fechaCreacion,
                    }}
                  />
                </div>
              ))}
            </div>

            {filteredPresentaciones.length === 0 && (
              <div className="text-center py-12" role="status" aria-live="polite">
                <p className="text-lg text-muted-foreground">
                  No se encontraron presentaciones que coincidan con tu búsqueda.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Intenta con otros términos o elimina algunos filtros.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
