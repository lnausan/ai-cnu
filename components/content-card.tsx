import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, FileText } from "lucide-react"

interface ContentCardProps {
  title: string
  description: string
  url?: string
  tags?: string[]
  type: "herramienta" | "video" | "presentacion"
  metadata?: {
    duracion?: string
    slides?: number
    fechaPublicacion?: string
    fechaCreacion?: string
  }
}

export function ContentCard({ title, description, url, tags, type, metadata }: ContentCardProps) {
  const getIcon = () => {
    switch (type) {
      case "herramienta":
        return <ExternalLink className="h-4 w-4" />
      case "video":
        return <Play className="h-4 w-4" />
      case "presentacion":
        return <FileText className="h-4 w-4" />
    }
  }

  const getButtonText = () => {
    switch (type) {
      case "herramienta":
        return "Usar herramienta"
      case "video":
        return "Ver video"
      case "presentacion":
        return "Ver presentación"
    }
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="flex-1">
        <CardTitle className="text-lg font-heading line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">{description}</CardDescription>
        {metadata && (
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {metadata.duracion && (
              <span className="flex items-center gap-1">
                <Play className="h-3 w-3" />
                {metadata.duracion}
              </span>
            )}
            {metadata.slides && (
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                {metadata.slides} slides
              </span>
            )}
            {(metadata.fechaPublicacion || metadata.fechaCreacion) && (
              <span>{new Date(metadata.fechaPublicacion || metadata.fechaCreacion!).toLocaleDateString("es-AR")}</span>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {url && (
          <Button asChild className="w-full">
            <Link href={url} target="_blank" rel="noopener noreferrer">
              {getIcon()}
              {getButtonText()}
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
