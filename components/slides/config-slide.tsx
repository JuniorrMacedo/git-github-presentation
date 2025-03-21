import type React from "react"
import Slide from "@/components/slide"
import { Terminal, Settings, Key } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeBlock from "@/components/code-block"

const ConfigSlide: React.FC = () => {
  return (
    <Slide title="Configuração Inicial do Git e GitHub">
      <Tabs defaultValue="install" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="install" className="flex items-center gap-2">
            <Terminal size={16} />
            <span>Instalação do Git</span>
          </TabsTrigger>
          <TabsTrigger value="config" className="flex items-center gap-2">
            <Settings size={16} />
            <span>Configuração do Git</span>
          </TabsTrigger>
          <TabsTrigger value="ssh" className="flex items-center gap-2">
            <Key size={16} />
            <span>Chave SSH</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="install" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                Ubuntu/Debian
              </h3>
              <CodeBlock code="sudo apt update" language="bash" />
              <CodeBlock code="sudo apt install git" language="bash" />
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                macOS
              </h3>
              <p className="mb-2 text-sm">Se você tem o Homebrew instalado:</p>
              <CodeBlock code="brew install git" language="bash" />
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                Windows
              </h3>
              <p className="mb-2 text-sm">Baixe o instalador do site oficial do Git:</p>
              <a
                href="https://git-scm.com/download/win"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://git-scm.com/download/win
              </a>
              <p className="mt-2 text-sm">E siga as instruções na tela.</p>
            </div>
          </div>

          <div className="bg-muted/20 p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Verificando a Instalação</h3>
            <p className="mb-4">Após a instalação, verifique se o Git foi instalado corretamente:</p>
            <CodeBlock code="git --version" language="bash" title="Terminal" />
            <p className="mt-4">
              Você deverá ver algo como <code>git version 2.34.1</code> ou similar.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="config" className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Configuração Básica</h3>
            <p className="mb-4">
              Após a instalação, configure sua identidade para que seus commits sejam reconhecidos corretamente:
            </p>
            <CodeBlock
              code={`git config --global user.name "Seu Nome"`}
              language="bash"
            />
            <CodeBlock
              code={`git config --global user.email "seu-email@example.com"`}
              language="bash"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Configurações Adicionais</h3>
              <CodeBlock
                code={`# Definir o editor padrão para o Git\ngit config --global core.editor "seu-editor --wait"`}
                language="bash"
              />
              <CodeBlock
                code={`# Habilitar cores na saída do Git\ngit config --global color.ui auto`}
                language="bash"
              />
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Verificar Configurações</h3>
              <CodeBlock
                code={`# Listar todas as configurações\ngit config --list`}
                language="bash"
              />
              <CodeBlock
                code={`# Verificar uma configuração específica\ngit config user.name`}
                language="bash"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ssh" className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Gerando uma Chave SSH</h3>
            <p className="mb-4">O uso de SSH é preferível para autenticação no GitHub por questões de segurança:</p>
            <CodeBlock
              code='ssh-keygen -t ed25519 -C "seu-email@example.com"'
              language="bash"
              title="Gerar Chave SSH"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Adicionar ao SSH Agent</h3>
              <CodeBlock
                code='eval "$(ssh-agent -s)"\nssh-add ~/.ssh/id_ed25519'
                language="bash"
                title="Adicionar ao Agent"
              />
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Copiar Chave Pública</h3>
              <CodeBlock code="cat ~/.ssh/id_ed25519.pub" language="bash" title="Exibir Chave Pública" />
              <p className="mt-4">Copie a saída do comando acima e adicione ao GitHub:</p>
              <ol className="mt-2 space-y-2 text-sm">
                <li>
                  1. Vá para GitHub {"->"} Configurações {"->"} SSH Keys
                </li>
                <li>2. Clique em "New SSH key"</li>
                <li>3. Cole a chave pública e dê um título descritivo</li>
                <li>4. Clique em "Add SSH key"</li>
              </ol>
            </div>
          </div>

          <div className="bg-muted/20 p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Testando a Conexão SSH</h3>
            <CodeBlock code="ssh -T git@github.com" language="bash" title="Testar Conexão" />
            <p className="mt-4">
              Se tudo estiver configurado corretamente, você verá uma mensagem de boas-vindas do GitHub.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </Slide>
  )
}

export default ConfigSlide

