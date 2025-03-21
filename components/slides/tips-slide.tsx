"use client"

import type React from "react"
import { useState } from "react"
import Slide from "@/components/slide"
import { Zap, Terminal, Github, Laptop, Bot, Webhook, Smile } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeBlock from "@/components/code-block"

const TipsSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tools")

  return (
    <Slide title="Curiosidades e Hacks">
      <div className="space-y-6">
        <p className="text-lg">
          O GitHub não é apenas uma plataforma para hospedagem de código; ele possui diversas ferramentas e
          funcionalidades que podem otimizar o fluxo de trabalho e tornar o desenvolvimento mais eficiente.
        </p>

        <Tabs defaultValue="tools" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Zap size={16} />
              <span>Ferramentas Avançadas</span>
            </TabsTrigger>
            <TabsTrigger value="cli" className="flex items-center gap-2">
              <Terminal size={16} />
              <span>GitHub CLI</span>
            </TabsTrigger>
            <TabsTrigger value="webhooks" className="flex items-center gap-2">
              <Webhook size={16} />
              <span>Webhooks</span>
            </TabsTrigger>
            <TabsTrigger value="easter" className="flex items-center gap-2">
              <Smile size={16} />
              <span>Easter Eggs</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Bot size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold">GitHub Copilot</h3>
                </div>
                <p className="mb-4">
                  O GitHub Copilot é uma IA desenvolvida pela OpenAI e integrada ao GitHub para sugerir código em tempo
                  real enquanto você programa.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <strong>Funciona em:</strong> VS Code, JetBrains, Neovim e GitHub Codespaces.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <strong>Baseado em:</strong> Machine Learning treinado com bilhões de linhas de código
                      open-source.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <strong>Sugere:</strong> Funções, trechos de código e até documentação automatizada.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Laptop size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold">GitHub Codespaces</h3>
                </div>
                <p className="mb-4">
                  O GitHub Codespaces permite que você desenvolva diretamente no navegador, sem precisar configurar o
                  ambiente localmente.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <strong>Baseado no VS Code:</strong> Permite edição, depuração e extensões.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <strong>Ambientes pré-configurados:</strong> Ideal para onboarding rápido de novos
                      desenvolvedores.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <span>
                      <strong>Compatível com containers:</strong> Permite configurar um ambiente Dev personalizado via
                      Docker.
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-muted/20 rounded-md">
                  <h4 className="font-semibold mb-2">Exemplo de uso:</h4>
                  <ol className="space-y-1 pl-5 list-decimal text-sm">
                    <li>Vá para um repositório no GitHub.</li>
                    <li>
                      Clique no botão <code>Code</code> &gt; <code>Codespaces</code>.
                    </li>
                    <li>Crie um novo Codespace e comece a codificar direto do navegador.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Github size={24} className="text-primary" />
                <h3 className="text-xl font-semibold">GitHub Insights</h3>
              </div>
              <p className="mb-4">
                O GitHub Insights permite analisar métricas de repositórios, como contribuição de desenvolvedores,
                número de commits e padrões de desenvolvimento.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-muted/20 rounded-md">
                  <h4 className="font-semibold mb-2">Métricas de Contribuição</h4>
                  <p className="text-sm">Quem mais contribuiu para o projeto?</p>
                </div>
                <div className="p-3 bg-muted/20 rounded-md">
                  <h4 className="font-semibold mb-2">Análise de Pull Requests</h4>
                  <p className="text-sm">Tempo médio para revisão e fusão de PRs.</p>
                </div>
                <div className="p-3 bg-muted/20 rounded-md">
                  <h4 className="font-semibold mb-2">Monitoramento de Issues</h4>
                  <p className="text-sm">Quantas issues são abertas e fechadas semanalmente?</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted/20 rounded-md">
                <h4 className="font-semibold mb-2">Para visualizar Insights no GitHub:</h4>
                <ol className="space-y-1 pl-5 list-decimal text-sm">
                  <li>Vá para um repositório.</li>
                  <li>
                    Clique na aba <code>Insights</code>.
                  </li>
                  <li>Explore estatísticas como gráficos de contribuições e tempo médio de resposta.</li>
                </ol>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cli" className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Terminal size={24} className="text-primary" />
                <h3 className="text-xl font-semibold">GitHub CLI - Automatizando o GitHub via Terminal</h3>
              </div>
              <p className="mb-4">
                O GitHub CLI (<code>gh</code>) é uma ferramenta para interagir com o GitHub diretamente pelo terminal,
                permitindo criar issues, abrir pull requests e muito mais sem precisar do navegador.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Instalação</h4>
                  <CodeBlock
                    code={`# macOS\nbrew install gh\n\n# Windows\nwinget install --id GitHub.cli\n\n# Ubuntu/Debian\napt install gh`}
                    language="bash"
                    title="Instalação do GitHub CLI"
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Autenticação</h4>
                  <CodeBlock
                    code={`# Iniciar autenticação\ngh auth login\n\n# Verificar status\ngh auth status`}
                    language="bash"
                    title="Autenticação no GitHub"
                  />
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Comandos Úteis</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CodeBlock
                    code={`# Listar repositórios\ngh repo list\n\n# Criar um repositório\ngh repo create\n\n# Clonar um repositório\ngh repo clone owner/repo`}
                    language="bash"
                    title="Gerenciamento de Repositórios"
                  />

                  <CodeBlock
                    code={`# Criar uma issue\ngh issue create\n\n# Listar issues\ngh issue list\n\n# Criar um pull request\ngh pr create`}
                    language="bash"
                    title="Issues e Pull Requests"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Webhook size={24} className="text-primary" />
                <h3 className="text-xl font-semibold">GitHub Webhooks - Automatizando Integrações</h3>
              </div>
              <p className="mb-4">
                Os Webhooks permitem que o GitHub se comunique com outras ferramentas automaticamente quando algo
                acontece no repositório.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-muted/20 rounded-md">
                  <h4 className="font-semibold mb-2">Notificações</h4>
                  <p className="text-sm">Pode acionar um bot no Discord quando há um novo commit.</p>
                </div>
                <div className="p-4 bg-muted/20 rounded-md">
                  <h4 className="font-semibold mb-2">Integração com Jira</h4>
                  <p className="text-sm">Pode enviar notificações ao Jira quando uma issue é aberta.</p>
                </div>
                <div className="p-4 bg-muted/20 rounded-md">
                  <h4 className="font-semibold mb-2">Deploy Automático</h4>
                  <p className="text-sm">Pode disparar um deploy automático ao fazer push na main.</p>
                </div>
              </div>

              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="font-semibold mb-3">Como criar um Webhook:</h4>
                <ol className="space-y-2 pl-5 list-decimal">
                  <li>
                    Vá para <code>Configurações</code> do repositório.
                  </li>
                  <li>
                    Acesse <code>Webhooks</code> e clique em <code>Add Webhook</code>.
                  </li>
                  <li>Insira a URL do serviço que receberá os eventos.</li>
                  <li>Escolha quais eventos deseja monitorar (push, PR, issue, etc).</li>
                </ol>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Exemplo de Payload de Webhook</h4>
                <CodeBlock
                  code={`{\n  "ref": "refs/heads/main",\n  "before": "abc123...",\n  "after": "def456...",\n  "repository": {\n    "name": "my-repo",\n    "owner": {\n      "name": "username"\n    }\n  },\n  "commits": [\n    {\n      "id": "def456...",\n      "message": "feat: add new feature",\n      "author": {\n        "name": "Developer Name"\n      }\n    }\n  ]\n}`}
                  language="json"
                  title="Exemplo de JSON enviado pelo webhook"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="easter" className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Smile size={24} className="text-primary" />
                <h3 className="text-xl font-semibold">Easter Eggs e Hacks Divertidos do GitHub</h3>
              </div>
              <p className="mb-4">O GitHub tem algumas surpresas escondidas para quem gosta de curiosidades!</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Octocat Secreto</h4>
                  <p className="text-sm mb-3">
                    Se você acessar{" "}
                    <a
                      href="https://octodex.github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://octodex.github.com/
                    </a>
                    , encontrará várias versões do mascote Octocat em estilos diferentes.
                  </p>
                  <div className="bg-black/50 p-3 rounded-md">
                    <div className="w-16 h-16 mx-auto">
                      <Github size={64} className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Modo Dark Oculto</h4>
                  <p className="text-sm mb-3">
                    Se você usar o GitHub no modo escuro e acessar <code>github.com/settings/appearance</code>, verá a
                    opção "Dark Dimmed", um tema ainda mais escuro.
                  </p>
                  <div className="bg-black/80 p-3 rounded-md">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-800"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-900"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">GitHub 404 Personalizado</h4>
                  <p className="text-sm mb-3">
                    Se você acessar um repositório que não existe (ex: <code>github.com/this-repo-does-not-exist</code>
                    ), verá uma animação divertida no Erro 404!
                  </p>
                  <div className="bg-black/50 p-3 rounded-md text-center">
                    <div className="text-2xl font-bold">404</div>
                    <div className="text-sm">This is not the web page you are looking for</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                <h4 className="font-semibold mb-2">Dica Bônus: Atalhos de Teclado</h4>
                <p className="mb-3">
                  Pressione <code>?</code> em qualquer página do GitHub para ver uma lista de atalhos de teclado
                  disponíveis.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="space-y-1">
                      <li>
                        <code>g c</code> - Ir para o código
                      </li>
                      <li>
                        <code>g i</code> - Ir para as issues
                      </li>
                      <li>
                        <code>g p</code> - Ir para os pull requests
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1">
                      <li>
                        <code>t</code> - Ativar a pesquisa de arquivos
                      </li>
                      <li>
                        <code>s</code> - Focar na barra de pesquisa
                      </li>
                      <li>
                        <code>l</code> - Filtrar por labels (em issues)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Slide>
  )
}

export default TipsSlide

