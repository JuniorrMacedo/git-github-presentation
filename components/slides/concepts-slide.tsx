"use client"

import type React from "react"
import { useState } from "react"
import Slide from "@/components/slide"
import { GitBranch, GitCommit, GitMerge, GitPullRequest, MessageSquare, Tag, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ConceptsSlide: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<string>("repository")

  const concepts = [
    {
      id: "repository",
      title: "Repositório",
      icon: <GitBranch className="text-primary" size={24} />,
      description:
        "Um repositório é o local onde todo o código-fonte de um projeto e seu histórico de versões são armazenados. Pode ser um diretório local no seu computador ou estar hospedado remotamente no GitHub.",
      tip: "Mantenha seu repositório organizado com um bom README.md e .gitignore.",
    },
    {
      id: "commit",
      title: "Commit",
      icon: <GitCommit className="text-primary" size={24} />,
      description: "O commit é um registro de alterações no código. Cada commit gera um identificador único (hash) e armazena informações sobre as modificações realizadas, o autor e a data.",
      tip: "Escreva mensagens de commit descritivas e significativas seguindo convenções.",
    },
    {
      id: "branch",
      title: "Branch",
      icon: <GitBranch className="text-primary" size={24} />,
      description:
        "Uma branch (ramo) é uma versão separada do código, permitindo o desenvolvimento paralelo sem afetar a versão principal. Isso facilita a implementação de novas funcionalidades e correção de bugs sem comprometer o código já estável.",
      tip: "Use nomes descritivos para branches, como feature/login ou fix/header-bug.",
    },
    {
      id: "merge",
      title: "Merge e Pull Request",
      icon: <GitMerge className="text-primary" size={24} />,
      description:
        "O merge combina as mudanças de uma branch com outra. O processo pode ser feito localmente via git merge ou pelo GitHub através de um Pull Request (PR).",
      tip: "Sempre revise o código antes de fazer merge para evitar problemas.",
    },
    {
      id: "issue",
      title: "Issue",
      icon: <MessageSquare className="text-primary" size={24} />,
      description:
        'Uma Issue é um ticket usado para relatar bugs, sugerir melhorias ou discutir ideias no GitHub. Pode ser atribuída a membros da equipe e conter rótulos (labels) como "bug", "feature request", "documentação".',
      tip: "Use labels e milestones para organizar suas issues de forma eficiente.",
    },
    {
      id: "tag",
      title: "Tag",
      icon: <Tag className="text-primary" size={24} />,
      description:
        "As tags são usadas para marcar versões específicas do código, como lançamentos de software. São úteis para versionamento semântico, como v1.0.0, v1.1.0, etc.",
      tip: "Use versionamento semântico (MAJOR.MINOR.PATCH) para suas tags.",
    },
    {
      id: "fork",
      title: "Fork",
      icon: <GitFork className="text-primary" size={24} />,
      description:
        "Um Fork é uma cópia de um repositório feita para contribuir em projetos de terceiros sem modificar o repositório original. Usado em projetos open-source.",
      tip: "Mantenha seu fork atualizado com o repositório original usando git remote add upstream.",
    },
    {
      id: "actions",
      title: "GitHub Actions",
      icon: <GitPullRequest className="text-primary" size={24} />,
      description:
        "O GitHub Actions permite a automação de tarefas dentro do GitHub, como testes automatizados e deploys contínuos.",
      tip: "Crie workflows reutilizáveis para tarefas comuns como testes e deploy.",
    },
  ]

  return (
    <Slide title="Conceitos Fundamentais">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        <div className="md:col-span-1 space-y-2">
          {concepts.map((concept) => (
            <Button
              key={concept.id}
              variant={activeConcept === concept.id ? "default" : "outline"}
              className={cn(
                "w-full justify-start text-left h-auto py-3",
                activeConcept === concept.id ? "bg-primary text-primary-foreground" : "",
              )}
              onClick={() => setActiveConcept(concept.id)}
            >
              <div className="flex items-center gap-3">
                {concept.icon}
                <span>{concept.title}</span>
              </div>
            </Button>
          ))}
        </div>

        <div className="md:col-span-2 bg-card rounded-lg border border-border p-6 overflow-auto">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className={cn(
                "space-y-4 transition-opacity duration-300",
                activeConcept === concept.id ? "block opacity-100" : "hidden opacity-0",
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                {concept.icon}
                <h3 className="text-2xl font-bold">{concept.title}</h3>
              </div>

              <p className="text-lg">{concept.description}</p>

              <div className="bg-muted/20 p-4 rounded-md mt-4 border border-border">
                <h4 className="font-semibold mb-2">Dica:</h4>
                <p>{concept.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  )
}

export default ConceptsSlide

