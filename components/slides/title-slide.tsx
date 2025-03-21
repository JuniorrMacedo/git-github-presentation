import type React from "react"
import { Github, GitBranch, GitCommit, GitMerge } from "lucide-react"

const TitleSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/10">
      <div className="text-center max-w-3xl px-6">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Github size={120} className="text-primary" />
            <div className="absolute -right-4 -bottom-4 bg-background rounded-full p-2 border border-border">
              <GitBranch size={32} className="text-primary" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Git & GitHub
        </h1>

        <div className="flex justify-center gap-6 mb-12">
          <div className="flex flex-col items-center">
            <GitCommit size={28} className="text-primary mb-2" />
            <span className="text-sm">Commits</span>
          </div>
          <div className="flex flex-col items-center">
            <GitBranch size={28} className="text-primary mb-2" />
            <span className="text-sm">Branches</span>
          </div>
          <div className="flex flex-col items-center">
            <GitMerge size={28} className="text-primary mb-2" />
            <span className="text-sm">Merges</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleSlide

