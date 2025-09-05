"use client"
import { Input } from "@/components/ui/input"
import { ContentTag } from "@/components/content-tag"
import { Search } from "lucide-react"

interface SearchFilterProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  availableTags: string[]
  activeTags: string[]
  onTagToggle: (tag: string) => void
  placeholder?: string
}

export function SearchFilter({
  searchTerm,
  onSearchChange,
  availableTags,
  activeTags,
  onTagToggle,
  placeholder = "Buscar contenido...",
}: SearchFilterProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {availableTags.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Filtrar por categoría:</p>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <ContentTag
                key={tag}
                tag={tag}
                variant="filter"
                isActive={activeTags.includes(tag)}
                onClick={() => onTagToggle(tag)}
                onRemove={() => onTagToggle(tag)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
