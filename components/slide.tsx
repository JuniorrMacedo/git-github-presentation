import type React from "react"
import { cn } from "@/lib/utils"

interface SlideProps {
  title: string
  children: React.ReactNode
  className?: string
}

const Slide: React.FC<SlideProps> = ({ title, children, className }) => {
  return (
    <div className={cn("w-full h-full p-8 flex flex-col", className)}>
      <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-2 border-border">{title}</h2>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}

export default Slide

