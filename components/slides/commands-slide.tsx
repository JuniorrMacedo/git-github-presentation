"use client"

import type React from "react"
import { useState } from "react"
import Slide from "@/components/slide"
import { Terminal, GitBranch, GitCommit, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const CommandsSlide: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<string | null>(null)

  const commandGroups = [
    {
      id: "cycle",
      title: "Ciclo de Desenvolvimento",
      icon: <GitCommit size={16} />,
      commands: [
        { name: "git init", desc: "Inicializar repositório local" },
        { name: "git remote add origin git@github.com:usuario/repo.git", desc: "Adicionar repositório remoto" },
        { name: "git add .", desc: "Adicionar todas as mudanças ao staging" },
        { name: 'git commit -m "feat: adiciona nova funcionalidade"', desc: "Registrar mudanças com uma mensagem" },
        { name: "git push origin main", desc: "Enviar commits para o repositório remoto" },
        { name: "git pull origin main", desc: "Baixar e mesclar mudanças do remoto" },
      ],
    },
    {
      id: "branches",
      title: "Gerenciamento de Branches e Merge",
      icon: <GitBranch size={16} />,
      commands: [
        { name: "git branch -b nova-feature", desc: "Criar uma nova branch" },
        { name: "git checkout nova-feature", desc: "Trocar para uma branch específica" },
        { name: "git merge nova-feature", desc: "Mesclar uma branch na atual" },
        { name: "git branch -m antigo-nome novo-nome", desc: "Renomear uma branch específica" },
        { name: "git branch -m novo-nome", desc: "Renomear a branch atual" },
      ],
    },
    {
      id: "clone",
      title: "Clonando um Repositório",
      icon: <Download size={16} />,
      commands: [
        { name: "git clone https://github.com/usuario/repo.git", desc: "Clonar um repositório remoto via HTTPS" },
        { name: "git clone git@github.com:usuario/repo.git", desc: "Clonar um repositório remoto via SSH" },
      ],
    },
  ]

  return (
    <Slide title="Comandos Essenciais do Git">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        <div className="space-y-4">
          <div className="bg-card p-4 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Terminal size={18} className="text-primary" />
              <span>Grupos de Comandos</span>
            </h3>

            <div className="space-y-2">
              {commandGroups.map((group) => (
                <Button
                  key={group.id}
                  variant="outline"
                  className={cn("w-full justify-start text-left", activeCommand === group.id ? "border-primary" : "")}
                  onClick={() => setActiveCommand(group.id)}
                >
                  <div className="flex items-center gap-2">
                    {group.icon}
                    <span>{group.title}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-muted/20 p-4 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-3">Dicas Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <span>
                  Use aliases para comandos frequentes no arquivo <code>.gitconfig</code>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <span>
                  Crie um bom <code>.gitignore</code> para evitar commits de arquivos desnecessários
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <span>
                  Use <code>git status</code> frequentemente para verificar o estado do repositório
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <span>
                  Aprenda a usar <code>git stash</code> para salvar mudanças temporárias
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-2">
          {commandGroups.map((group) => (
            <div
              key={group.id}
              className={cn(
                "bg-card p-6 rounded-lg border border-border h-full",
                activeCommand === group.id ? "block" : "hidden",
              )}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                {group.icon}
                <span>{group.title}</span>
              </h3>

              <div className="space-y-3">
                {group.commands.map((cmd, index) => (
                  <div key={index} className="bg-muted/20 p-4 rounded-lg border border-border">
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <code className="bg-muted/90 basis-3/5 px-2 py-1 rounded font-mono text-sm flex-1">
                        {cmd.name}
                      </code>
                      <span className="text-sm text-muted-foreground basis-2/5">{cmd.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-muted/10 rounded-lg border border-border">
                <h4 className="font-semibold mb-2">Fluxo de Trabalho:</h4>
                <p className="text-sm">
                  {group.id === "cycle" &&
                    "Este é o ciclo básico de desenvolvimento com Git. Comece inicializando um repositório, faça suas alterações, adicione-as ao staging, crie commits e envie para o repositório remoto."}
                  {group.id === "branches" &&
                    "O gerenciamento de branches permite trabalhar em funcionalidades isoladas. Crie branches para novas features, faça suas alterações e depois mescle de volta à branch principal."}
                  {group.id === "clone" &&
                    "Clonar um repositório é o primeiro passo para contribuir em um projeto existente. Escolha entre HTTPS (mais simples) ou SSH (mais seguro)."}
                </p>
              </div>
            </div>
          ))}

          {!activeCommand && (
            <div className="bg-card p-6 rounded-lg border border-border h-full flex items-center justify-center">
              <div className="text-center">
                <Terminal size={48} className="mx-auto mb-4 text-primary/50" />
                <p className="text-muted-foreground">Selecione um grupo de comandos para ver detalhes</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Slide>
  )
}

export default CommandsSlide

