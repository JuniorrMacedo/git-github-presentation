"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Slide from "@/components/slide"
import { BookOpen, Check, Github, Linkedin, Mail, User } from "lucide-react"
import Image from "next/image"
import ConfettiAnimation from "../confetti-animation"
import { motion } from "framer-motion"

const ConclusionSlide: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Mostrar a animação quando o componente for montado
    const animationTimer = setTimeout(() => {
      setShowAnimation(true)
    }, 50) // Pequeno atraso para garantir que a slide esteja completamente carregada

    setTimeout(() => {
      setShowContent(true)
    }, 1800)

    // Limpar os timers quando o componente for desmontado
    return () => {
      clearTimeout(animationTimer)
      setShowAnimation(false)
      setShowContent(false)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Slide title="Conclusão">
      {showAnimation && <ConfettiAnimation />}

      {showContent && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="text-primary" />
                <span>Recapitulação dos conceitos</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check size={16} className="mt-1 text-green-500" />
                  <span>Entendemos a diferença entre Git e GitHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="mt-1 text-green-500" />
                  <span>Aprendemos os conceitos fundamentais: repositórios, commits, branches, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="mt-1 text-green-500" />
                  <span>Configuramos o Git e a autenticação com GitHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="mt-1 text-green-500" />
                  <span>Dominamos comandos essenciais e avançados do Git</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="mt-1 text-green-500" />
                  <span>Conhecemos boas práticas: GitFlow e Conventional Commits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="mt-1 text-green-500" />
                  <span>Exploramos ferramentas avançadas e curiosidades do GitHub</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-semibold mb-4">Objetivo Final</h3>
              <div className="bg-card/80 p-4 rounded-lg">
                <p className="text-lg">
                  Elevar a produtividade e a qualidade do código no time utilizando GitHub de forma profissional.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Referências</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <a
                        href="https://git-scm.com/doc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Git Documentation
                      </a>{" "}
                      - Documentação oficial do Git
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <a
                        href="https://docs.github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GitHub Docs
                      </a>{" "}
                      - Documentação oficial do GitHub
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <a
                        href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GitFlow Workflow
                      </a>{" "}
                      - Atlassian
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <a
                        href="https://www.conventionalcommits.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Conventional Commits
                      </a>{" "}
                      - Guia oficial
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Github className="text-primary" />
                <span>Melhores práticas para times</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">1</div>
                  <div>
                    <span className="font-semibold">Padronize o fluxo de trabalho</span>
                    <p className="text-sm text-muted-foreground">Adote GitFlow ou GitHub Flow consistentemente</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">2</div>
                  <div>
                    <span className="font-semibold">Revisão de código obrigatória</span>
                    <p className="text-sm text-muted-foreground">Implemente Pull Requests com pelo menos um revisor</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">3</div>
                  <div>
                    <span className="font-semibold">Automatize testes e deploys</span>
                    <p className="text-sm text-muted-foreground">Use GitHub Actions para CI/CD</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">4</div>
                  <div>
                    <span className="font-semibold">Documente o projeto</span>
                    <p className="text-sm text-muted-foreground">Mantenha README.md e documentação atualizados</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">5</div>
                  <div>
                    <span className="font-semibold">Gerencie issues eficientemente</span>
                    <p className="text-sm text-muted-foreground">Use labels, milestones e projetos para organização</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <User className="text-primary" />
                <span>Autor</span>
              </h3>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4 relative">
                  <Image src="/images/profile.png" alt="Foto do autor" fill className="object-cover" />
                </div>

                <div className="space-y-3 text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <Github className="text-primary" size={20} />
                    <a
                      href="https://github.com/JuniorrMacedo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/JuniorrMacedo
                    </a>
                  </div>

                  <div className="flex items-center gap-2 justify-center">
                    <Mail className="text-primary" size={20} />
                    <a href="mailto:idelmariocorreia@hotmail.com" className="text-primary hover:underline">
                      idelmariocorreia@hotmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2 justify-center">
                    <Linkedin className="text-primary" size={20} />
                    <a
                      href="https://www.linkedin.com/in/juniorrmacedo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/juniorrmacedo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </Slide>
  )
}

export default ConclusionSlide

