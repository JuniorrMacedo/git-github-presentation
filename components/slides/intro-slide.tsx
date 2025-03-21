import type React from "react"
import Slide from "@/components/slide"
import { Github, GitBranch } from "lucide-react"

const IntroSlide: React.FC = () => {
  return (
    <Slide title="Introdução ao GitHub">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <Github size={64} className="text-primary" />
            <h3 className="text-2xl font-bold">GitHub para Desenvolvedores</h3>
          </div>

          <p className="text-lg">
            O GitHub é uma plataforma de hospedagem de código-fonte baseada em Git que revolucionou a forma como equipes
            de desenvolvimento colaboram.
          </p>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="text-xl font-semibold mb-4">Diferenciando Git e GitHub:</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <GitBranch className="mt-1 text-primary" />
                <div>
                  <span className="font-bold">Git:</span> Um sistema de controle de versão distribuído que rastreia o
                  histórico de alterações em arquivos e facilita o trabalho colaborativo.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Github className="mt-1 text-primary" />
                <div>
                  <span className="font-bold">GitHub:</span> Uma plataforma na nuvem que hospeda repositórios Git,
                  oferecendo funcionalidades adicionais como Pull Requests, Issues, Actions CI/CD e integração com
                  outras ferramentas.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="text-xl font-semibold mb-4">Vantagens do GitHub:</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Centralização do código</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Histórico completo de commits</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Colaboração assíncrona e revisão de código</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Integração com CI/CD</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Controle de permissões e segurança</span>
            </li>
          </ul>

          <div className="mt-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-30"></div>
            <div className="relative p-6 bg-card/50 rounded-lg border border-border">
              <h5 className="text-lg font-semibold mb-2">Fluxo de Trabalho Colaborativo</h5>
              <p>
                O GitHub permite que equipes trabalhem em paralelo no mesmo projeto, gerenciem versões e mantenham um
                histórico completo de alterações, facilitando a colaboração e o desenvolvimento ágil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}

export default IntroSlide

