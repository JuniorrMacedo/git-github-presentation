"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  className?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "bash", title, className }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className={cn("rounded-md overflow-hidden bg-black/80 my-4", className)}>
      {title && (
        <div className="bg-muted/55 px-4 py-2 text-sm font-mono">
          <span>{title}</span>
        </div>
      )}
      <div className="relative">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={copyToClipboard} 
          className="absolute top-2 right-2 h-8 w-8 p-0 rounded-md"
        >
          <Copy size={14} />
        </Button>
        <pre className="p-4 overflow-x-auto text-sm bg-muted/90">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBlock

