"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContentCard } from "@/components/content-card"
import { SearchFilter } from "@/components/search-filter"
import herramientasData from "@/data/herramientas.json"

export function VideosClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTags, setActiveTags] = useState<string[]>([])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    herramientasData.forEach((herramienta) => {
      herramienta.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter herramientas based on search and tags
  const filteredHerramientas = useMemo(() => {
    return herramientasData.filter((herramienta) => {
      const matchesSearch =
        herramienta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        herramienta.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        herramienta.categoria.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTags = activeTags.length === 0 || activeTags.some((tag) => herramienta.tags.includes(tag))

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
                Herramientas de IA Educativa
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Explora nuestra colección curada de herramientas de inteligencia artificial diseñadas para potenciar la
                educación y mejorar los procesos de enseñanza-aprendizaje.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16" aria-labelledby="herramientas-section">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8">
              <SearchFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                availableTags={allTags}
                activeTags={activeTags}
                onTagToggle={handleTagToggle}
                placeholder="Buscar herramientas..."
              />
            </div>

            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
                Mostrando {filteredHerramientas.length} de {herramientasData.length} herramientas
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {filteredHerramientas.map((herramienta) => (
                <div key={herramienta.id} role="listitem">
                  <ContentCard
                    title={herramienta.nombre}
                    description={herramienta.descripcion}
                    url={herramienta.url}
                    tags={herramienta.tags}
                    type="herramienta"
                  />
                </div>
              ))}
            </div>

            {filteredHerramientas.length === 0 && (
              <div className="text-center py-12" role="status" aria-live="polite">
                <p className="text-lg text-muted-foreground">
                  No se encontraron herramientas que coincidan con tu búsqueda.
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
