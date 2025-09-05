"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ContentTagProps {
  tag: string
  isActive?: boolean
  onClick?: () => void
  onRemove?: () => void
  variant?: "default" | "filter"
}

export function ContentTag({ tag, isActive = false, onClick, onRemove, variant = "default" }: ContentTagProps) {
  if (variant === "filter") {
    return (
      <Button variant={isActive ? "default" : "outline"} size="sm" onClick={onClick} className="h-8 text-xs">
        {tag}
        {isActive && onRemove && (
          <X
            className="ml-1 h-3 w-3 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              onRemove()
            }}
          />
        )}
      </Button>
    )
  }

  return (
    <Badge
      variant="secondary"
      className={`text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
        isActive ? "bg-primary text-primary-foreground" : ""
      }`}
      onClick={onClick}
    >
      {tag}
    </Badge>
  )
}
