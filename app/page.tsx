"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import TitleSlide from "@/components/slides/title-slide"
import IntroSlide from "@/components/slides/intro-slide"
import ConceptsSlide from "@/components/slides/concepts-slide"
import ConfigSlide from "@/components/slides/config-slide"
import CommandsSlide from "@/components/slides/commands-slide"
import AdvancedCommandsSlide from "@/components/slides/advanced-commands-slide"
import BestPracticesSlide from "@/components/slides/best-practices-slide"
import TipsSlide from "@/components/slides/tips-slide"
import ConclusionSlide from "@/components/slides/conclusion-slide"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalSlides = 9 // Aumentado para incluir o slide de título

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextSlide()
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <main className="flex min-h-screen flex-col items-center justify-between bg-background text-foreground">
        <div className="w-full h-screen flex flex-col">
          <div className="flex-1 relative overflow-hidden">
            <div
              className={cn(
                "absolute inset-0 transition-transform duration-300 ease-in-out",
                isTransitioning ? "opacity-0" : "opacity-100",
              )}
            >
              {currentSlide === 0 && <TitleSlide />}
              {currentSlide === 1 && <IntroSlide />}
              {currentSlide === 2 && <ConceptsSlide />}
              {currentSlide === 3 && <ConfigSlide />}
              {currentSlide === 4 && <CommandsSlide />}
              {currentSlide === 5 && <AdvancedCommandsSlide />}
              {currentSlide === 6 && <BestPracticesSlide />}
              {currentSlide === 7 && <TipsSlide />}
              {currentSlide === 8 && <ConclusionSlide />}
            </div>
          </div>

          <div className="p-4 flex justify-between items-center border-t border-border">
            <Button
              variant="outline"
              onClick={goToPrevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={16} />
              Anterior
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentSlide === index ? "bg-primary w-4" : "bg-muted",
                  )}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={goToNextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="flex items-center gap-2"
            >
              Próximo
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}

