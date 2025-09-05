"use client"

interface EmbedPlayerProps {
  provider: "youtube" | "vimeo" | "drive"
  url: string
  title: string
  className?: string
}

export function EmbedPlayer({ provider, url, title, className = "" }: EmbedPlayerProps) {
  const getEmbedUrl = () => {
    switch (provider) {
      case "youtube":
        const youtubeId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
        return youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : ""

      case "vimeo":
        const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1]
        return vimeoId ? `https://player.vimeo.com/video/${vimeoId}` : ""

      case "drive":
        const driveId = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/)?.[1]
        return driveId ? `https://drive.google.com/file/d/${driveId}/preview` : ""

      default:
        return ""
    }
  }

  const embedUrl = getEmbedUrl()

  if (!embedUrl) {
    return (
      <div className={`aspect-video bg-muted rounded-lg flex items-center justify-center ${className}`}>
        <p className="text-muted-foreground">No se pudo cargar el contenido</p>
      </div>
    )
  }

  return (
    <div className={`aspect-video ${className}`}>
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full rounded-lg border"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
