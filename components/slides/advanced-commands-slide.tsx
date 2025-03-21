"use client"

import type React from "react"
import { useState } from "react"
import Slide from "@/components/slide"
import { Terminal, RotateCcw, GitMerge, History, Edit, FileX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import CodeBlock from "@/components/code-block"

const AdvancedCommandsSlide: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<string>("revert")

  const commands = [
    {
      id: "revert",
      title: "Reverter um commit",
      icon: <RotateCcw size={20} className="text-primary" />,
      command: "git revert <hash>",
      description:
        "O git revert é usado para desfazer um commit específico sem alterar o histórico. Ele cria um novo commit que inverte as mudanças do commit alvo, preservando a integridade do histórico.",
      whenToUse: [
        "Para remover alterações de um commit sem apagar outros commits subsequentes.",
        "Quando já foi feito push do commit remoto e não se deseja modificar o histórico compartilhado.",
      ],
      example: "git revert 3f2e3d1",
      warning: "",
    },
    {
      id: "rebase",
      title: "Rebase (reestrutura o histórico de commits)",
      icon: <GitMerge size={20} className="text-primary" />,
      command: "git rebase main",
      description:
        'O git rebase é uma técnica para reescrever o histórico de commits, movendo commits de uma branch para outra de forma linear, eliminando "commits sujos" (como merge commits desnecessários).',
      whenToUse: [
        "Para manter um histórico mais limpo e linear.",
        "Quando precisa sincronizar a branch de desenvolvimento (feature/*) com a branch principal (main ou develop) sem gerar commits extras de merge.",
      ],
      example: "git checkout feature/api-login\ngit rebase main",
      warning:
        "⚠ Atenção: O rebase altera o histórico de commits, então evite usá-lo em branches compartilhadas. Caso precise reverter um rebase, use:\ngit rebase --abort",
    },
    {
      id: "log",
      title: "Visualizar o histórico de commits",
      icon: <History size={20} className="text-primary" />,
      command: "git log --oneline --graph",
      description:
        "Esse comando exibe um histórico compacto dos commits, apresentando um gráfico visual das branches e merges.",
      whenToUse: [
        "Para entender a estrutura do repositório.",
        "Para visualizar rapidamente o fluxo de desenvolvimento e os merges entre branches.",
      ],
      example:
        "* 3a2f1d9 (HEAD -> main) feat: adiciona autenticação JWT\n* 1b4e6f3 fix: corrige bug na rota de login\n* e2d4b5a refactor: melhora estrutura do controller de usuários",
      warning: "",
    },
    {
      id: "amend",
      title: "Alterando a última mensagem do commit",
      icon: <Edit size={20} className="text-primary" />,
      command: 'git commit --amend -m "feat: adiciona autenticação OAuth"',
      description: "Esse comando permite modificar a mensagem do último commit, sem alterar o conteúdo das mudanças.",
      whenToUse: [
        "Para corrigir um erro de digitação na mensagem do commit.",
        "Para adicionar informações adicionais ao commit antes de fazer push.",
      ],
      example: 'git commit --amend -m "feat: adiciona autenticação OAuth"',
      warning:
        "⚠ Se o commit já foi enviado ao repositório remoto (push), é necessário forçar a atualização da branch para refletir a alteração:\ngit push origin main --force\n\nApenas use --force com cuidado, pois pode sobrescrever o trabalho de outros desenvolvedores!",
    },
    {
      id: "reset",
      title: "Removendo um arquivo do último commit",
      icon: <FileX size={20} className="text-primary" />,
      command: "git reset HEAD <arquivo>",
      description:
        "Esse comando remove um arquivo da staging area, ou seja, do próximo commit, sem apagá-lo do diretório.",
      whenToUse: ["Para evitar que um arquivo acidentalmente commitado vá para o repositório remoto."],
      example:
        "git reset HEAD config.env\n\n# Se quiser desfazer completamente as alterações feitas no arquivo:\ngit checkout -- config.env",
      warning: "",
    },
  ]

  return (
    <Slide title="Comandos Avançados">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        <div className="space-y-4">
          <div className="bg-card p-4 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Terminal size={18} className="text-primary" />
              <span>Comandos Avançados</span>
            </h3>

            <div className="space-y-2">
              {commands.map((cmd) => (
                <Button
                  key={cmd.id}
                  variant="outline"
                  className={cn("w-full justify-start text-left", activeCommand === cmd.id ? "border-primary" : "")}
                  onClick={() => setActiveCommand(cmd.id)}
                >
                  <div className="flex items-center gap-2">
                    {cmd.icon}
                    <span className="truncate">{cmd.title}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-muted/20 p-4 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-3">Por que usar?</h3>
            <p className="text-sm">
              Esses comandos avançados são úteis para corrigir erros, manter um histórico limpo e melhorar a organização
              do repositório Git. Eles permitem maior controle sobre o histórico de commits e facilitam a colaboração em
              equipe.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          {commands.map((cmd) => (
            <div
              key={cmd.id}
              className={cn(
                "bg-card p-6 rounded-lg border border-border h-full",
                activeCommand === cmd.id ? "block" : "hidden",
              )}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                {cmd.icon}
                <span>{cmd.title}</span>
              </h3>

              <div className="mb-4">
                <CodeBlock code={cmd.command} language="bash" title="Comando" />
              </div>

              <p className="mb-4">{cmd.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Quando usar:</h4>
                <ul className="space-y-1 pl-5 list-disc">
                  {cmd.whenToUse.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Exemplo de uso:</h4>
                <CodeBlock code={cmd.example} language="bash" title="Exemplo" />
              </div>

              {cmd.warning && (
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-md">
                  <p className="text-yellow-500 text-sm whitespace-pre-line">{cmd.warning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  )
}

export default AdvancedCommandsSlide

