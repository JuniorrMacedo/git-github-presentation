import type React from "react"
import Slide from "@/components/slide"
import { GitBranch, GitCommit, Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeBlock from "@/components/code-block"

const BestPracticesSlide: React.FC = () => {
  return (
    <Slide title="Boas Práticas">
      <Tabs defaultValue="gitflow" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="gitflow" className="flex items-center gap-2">
            <GitBranch size={16} />
            <span>Estratégia de Branches (GitFlow)</span>
          </TabsTrigger>
          <TabsTrigger value="commits" className="flex items-center gap-2">
            <GitCommit size={16} />
            <span>Conventional Commits</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gitflow" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">O que é GitFlow?</h3>
              <p>
                O GitFlow é uma estratégia de ramificação que organiza o desenvolvimento em diferentes tipos de
                branches, facilitando o gerenciamento de versões e a colaboração entre equipes.
              </p>

              <div className="mt-6 bg-muted/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Benefícios:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-green-500" />
                    <span>Desenvolvimento paralelo organizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-green-500" />
                    <span>Isolamento de funcionalidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-green-500" />
                    <span>Controle de versões mais eficiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-green-500" />
                    <span>Facilita a colaboração em equipe</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border overflow-auto">
              <h3 className="text-xl font-semibold mb-4">Estrutura de Branches</h3>

              <div className="space-y-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-md">
                  <h4 className="font-semibold text-blue-500">main</h4>
                  <p className="text-sm">Contém o código em produção, refletindo o estado estável do software.</p>
                </div>

                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-md">
                  <h4 className="font-semibold text-purple-500">stage</h4>
                  <p className="text-sm">Ambiente de testes antes de ir para produção (main).</p>
                </div>

                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-md">
                  <h4 className="font-semibold text-green-500">develop</h4>
                  <p className="text-sm">
                    Agrega as funcionalidades que serão incluídas na próxima versão. Serve como base para outras
                    branches de desenvolvimento.
                  </p>
                </div>

                <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-md">
                  <h4 className="font-semibold text-yellow-500">feature/*</h4>
                  <p className="text-sm">
                    Branches derivadas de develop para desenvolvimento de novas funcionalidades. Nomeadas como
                    feature/nome-da-funcionalidade.
                  </p>
                </div>

                <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-md">
                  <h4 className="font-semibold text-orange-500">release/*</h4>
                  <p className="text-sm">
                    Criadas a partir de develop quando o software está pronto para uma nova versão. Permitem ajustes
                    finais antes de serem mescladas em main e develop.
                  </p>
                </div>

                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md">
                  <h4 className="font-semibold text-red-500">hotfix/*</h4>
                  <p className="text-sm">
                    Derivadas de main para corrigir bugs críticos em produção. Após a correção, são mescladas de volta
                    em main e develop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="commits" className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Conventional Commits</h3>
            <p className="mb-4">
              Adotar uma convenção para mensagens de commit melhora a legibilidade e o histórico do projeto. A seguir,
              os principais tipos de commits semânticos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-md">
                <h4 className="font-semibold text-green-500 font-mono">feat</h4>
                <p className="text-sm">Indica a adição de uma nova funcionalidade ao código.</p>
                <CodeBlock code='git commit -m "feat: adiciona funcionalidade de login"' language="bash" />
              </div>

              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md">
                <h4 className="font-semibold text-red-500 font-mono">fix</h4>
                <p className="text-sm">Refere-se a uma correção de bug.</p>
                <CodeBlock code='git commit -m "fix: corrige erro na validação de email"' language="bash" />
              </div>

              <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-md">
                <h4 className="font-semibold text-blue-500 font-mono">test</h4>
                <p className="text-sm">Utilizado para a adição ou correção de testes.</p>
                <CodeBlock
                  code='git commit -m "test: adiciona testes para o componente de autenticação"'
                  language="bash"
                />
              </div>

              <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-md">
                <h4 className="font-semibold text-purple-500 font-mono">refactor</h4>
                <p className="text-sm">
                  Usado para mudanças no código que não alteram a funcionalidade, mas melhoram sua estrutura ou
                  legibilidade.
                </p>
                <CodeBlock code='git commit -m "refactor: otimiza função de processamento de dados"' language="bash" />
              </div>

              <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-md">
                <h4 className="font-semibold text-yellow-500 font-mono">chore</h4>
                <p className="text-sm">
                  Para atualizações de tarefas de manutenção que não afetam o código de produção, como mudanças em
                  configurações de build ou dependências.
                </p>
                <CodeBlock code='git commit -m "chore: atualiza dependências do projeto"' language="bash" />
              </div>

              <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-md">
                <h4 className="font-semibold text-orange-500 font-mono">ci</h4>
                <p className="text-sm">
                  Relacionado a alterações nos arquivos e scripts de configuração de integração contínua CI.
                </p>
                <CodeBlock code='git commit -m "ci: adiciona configuração para pipeline de testes"' language="bash" />
              </div>
            </div>
          </div>

          <div className="bg-muted/20 p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Proteção de Branches</h3>
            <p>
              Configurar regras no GitHub para impedir commits diretos na <code>main</code> e exigir revisões de código.
            </p>

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="font-semibold mb-2">Como configurar proteção de branches:</h4>
                <ol className="space-y-2 pl-5 list-decimal">
                  <li>Acesse o repositório no GitHub</li>
                  <li>Vá para Settings → Branches</li>
                  <li>Clique em "Add rule" ou "Add branch protection rule"</li>
                  <li>Digite o nome do padrão de branch (ex: main)</li>
                  <li>
                    Configure as regras desejadas:
                    <ul className="pl-5 list-disc mt-1">
                      <li>Require pull request reviews before merging</li>
                      <li>Require status checks to pass before merging</li>
                      <li>Require signed commits</li>
                      <li>Include administrators</li>
                    </ul>
                  </li>
                  <li>Clique em "Create" ou "Save changes"</li>
                </ol>
              </div>

              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="font-semibold mb-2">Benefícios da proteção de branches:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-green-500" />
                    <span>Evita alterações acidentais em branches importantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-green-500" />
                    <span>Garante revisão de código antes de merge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-green-500" />
                    <span>Melhora a qualidade do código</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-green-500" />
                    <span>Mantém o histórico de commits mais organizado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Slide>
  )
}

export default BestPracticesSlide

