"use client"

import { useEffect, useState } from "react"

interface BlurTextProps {
  text: string
  delay?: number
  animateBy?: "words" | "characters"
  direction?: "top" | "bottom" | "left" | "right"
  onAnimationComplete?: () => void
  className?: string
}

export default function BlurText({
  text,
  delay = 100,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = ""
}: BlurTextProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [isAnimating, setIsAnimating] = useState(false)

  const items = animateBy === "words" ? text.split(" ") : text.split("")

  useEffect(() => {
    setIsAnimating(true)
    setVisibleItems([])

    const timeouts: NodeJS.Timeout[] = []

    items.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => [...prev, index])
        
        if (index === items.length - 1) {
          setTimeout(() => {
            setIsAnimating(false)
            onAnimationComplete?.()
          }, delay)
        }
      }, index * delay)

      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [text, delay, animateBy, onAnimationComplete])

  const getTransformClass = () => {
    switch (direction) {
      case "top":
        return "translate-y-[-20px]"
      case "bottom":
        return "translate-y-[20px]"
      case "left":
        return "translate-x-[-20px]"
      case "right":
        return "translate-x-[20px]"
      default:
        return "translate-y-[-20px]"
    }
  }

  const getInitialTransformClass = () => {
    switch (direction) {
      case "top":
        return "translate-y-[20px]"
      case "bottom":
        return "translate-y-[-20px]"
      case "left":
        return "translate-x-[20px]"
      case "right":
        return "translate-x-[-20px]"
      default:
        return "translate-y-[20px]"
    }
  }

  const getItemColor = (item: string, index: number) => {
    if (item === "TICS") return "text-black"
    if (item === "educación") return "text-primary"
    return ""
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${getItemColor(item, index)} ${
            visibleItems.includes(index)
              ? `opacity-100 ${getTransformClass()} blur-0`
              : `opacity-0 ${getInitialTransformClass()} blur-sm`
          }`}
          style={{
            transitionDelay: `${index * delay}ms`
          }}
        >
          {item}
          {animateBy === "words" && index < items.length - 1 && <span className="inline-block w-2"></span>}
        </span>
      ))}
    </div>
  )
}
