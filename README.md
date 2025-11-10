# 🚀 HC Conecta - Portal do Paciente (Front-End)

## Introdução

O **HC Conecta** é um sistema projetado para combater o alto índice de absenteísmo em teleconsultas de reabilitação no Hospital das Clínicas. O foco é oferecer uma experiência digital simples e acessível para pacientes, especialmente idosos e aqueles com baixa afinidade tecnológica.

Este repositório contém a aplicação Front-End, desenvolvida como uma **Single Page Application (SPA)**.

---

## 💻 Tecnologias

A aplicação segue a arquitetura moderna exigida, promovendo modularidade e escalabilidade.

| Categoria | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Framework** | **React** | Essencial para a arquitetura SPA e componentização. |
| **Bundler** | **Vite** | Ferramenta de build rápida e leve. |
| **Linguagem** | **TypeScript** | Garante a tipagem e segurança do código, obrigatório no projeto. |
| **Estilização** | **TailwindCSS** | Framework utilitário, obrigatório para estilização. |
| **Roteamento** | `react-router-dom` | Gerenciamento de rotas estáticas e dinâmicas. |
| **Formulários** | `react-hook-form` | Gerenciamento e validação obrigatória de formulários. |

---

## 🛠️ Estrutura de Pastas

A arquitetura modular do projeto é baseada na divisão de responsabilidades:

---

## ⚙️ Instruções para Manipular o Sistema (Rodar e Testar)

### 1. Pré-Requisitos

* Node.js e npm (ou pnpm) instalados.
* **Servidor Java (Quarkus) rodando** em `http://localhost:8080` (Obrigatório para o Login/Consultas).
    > *Nota: O servidor Java deve estar com a configuração CORS correta para aceitar pedidos do Front-End.*

### 2. Instalação

```bash
# 1. Clone o repositório
git clone [LINK_DO_SEU_REPOSITORIO_AQUI]
cd [NOME_DO_REPOSITORIO]

# 2. Instale as dependências (React, Tailwind, RHF, Icons)
npm install

# Inicia a aplicação em modo desenvolvimento (Geralmente em http://localhost:5177)
npm run dev
```bash

### 4. Funcionalidades para Teste

* **Página: /login**
    * **Funcionalidade:** Autenticação do Usuário.
    * **Verbo HTTP:** POST.

* **Página: /consultas**
    * **Funcionalidade:** Listagem de Agendamentos.
    * **Verbo HTTP:** GET.

* **Página: /contato**
    * **Funcionalidade:** Busca de Endereço (ViaCEP).
    * **Verbo HTTP:** GET.

* **Página: / (Home)**
    * **Funcionalidade:** Teste de Rotas Dinâmicas (Rota: /detalhes/:id).
    * **Verbo HTTP:** N/A.

Eu compreendo a sua frustração e peço desculpas. A sintaxe de tabela é a fonte do seu problema de visualização, mas a única maneira de evitar o código de "planilha" é remover a tabela e usar listas formatadas.

Aqui está a seção "Integrantes da Equipe" formatada com listas e negrito, sem usar a sintaxe de tabela (|, :---).

👥 Integrantes da Equipe (Formato de Lista)
O versionamento do projeto segue a metodologia Git/GitHub/GitFlow, com no mínimo 5 commits significativos por integrante.

Eduarda Weiss Ventura (RM: 564434) - Afinidade: Linguagem Java

Maria Gabriela Landim Severo (RM: 565146) - Afinidade: Linguagem Java

Samara Porto Souza (RM: 559072) - Afinidade: Front-End e Bancos de Dados

Se você deseja o README.md completo com esta alteração (e a correção anterior das funcionalidades), use o código abaixo.

📄 Arquivo README.md (Completo com Listas)
Markdown

# 🚀 HC Conecta - Portal do Paciente (Front-End)

## Introdução

O **HC Conecta** é um sistema projetado para combater o alto índice de absenteísmo em teleconsultas de reabilitação no Hospital das Clínicas. O foco é oferecer uma experiência digital simples e acessível para pacientes, especialmente idosos e aqueles com baixa afinidade tecnológica.

Este repositório contém a aplicação Front-End, desenvolvida como uma **Single Page Application (SPA)**.

---

## 💻 Tecnologias (Requisito de Entrega)

A aplicação segue a arquitetura moderna exigida, promovendo modularidade e escalabilidade.

| Categoria | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Framework** | **React** | Essencial para a arquitetura SPA e componentização. |
| **Bundler** | **Vite** | Ferramenta de build rápida e leve. |
| **Linguagem** | **TypeScript** | Garante a tipagem e segurança do código, obrigatório no projeto. |
| **Estilização** | **TailwindCSS** | Framework utilitário, obrigatório para estilização. |
| **Roteamento** | `react-router-dom` | Gerenciamento de rotas estáticas e dinâmicas. |
| **Formulários** | `react-hook-form` | Gerenciamento e validação obrigatória de formulários. |

---

## 🛠️ Estrutura de Pastas

A arquitetura modular do projeto é baseada na divisão de responsabilidades:

/src ┣ /assets # Imagens e fontes. ┣ /components # Componentes globais/reutilizáveis (Header, Footer, Button, SearchCepForm) ┣ /config # Configurações de Rotas (router.tsx) e Constantes globais. ┣ /hooks # Hooks customizados (useCepSearch, useAuth). ┣ /pages # Cada página principal em sua própria subpasta. │ ┣ /Consultas # Componentes específicos da rota /consultas. │ │ ┗ Consultas.tsx │ ┣ /Contato # Componentes e tela principal para /contato. │ │ ┗ Contato.tsx │ ┣ /Faq # Componentes e tela principal para /faq. │ │ ┗ Faq.tsx │ ┣ /Home # Componentes e tela principal para /home. │ │ ┗ Home.tsx │ ┣ /Integrantes # Componentes e tela principal para /integrantes. │ │ ┗ Integrantes.tsx │ ┣ /Login # Componentes e tela principal para /login. │ │ ┗ Login.tsx │ ┗ /Sobre # Componentes e tela principal para /sobre. │ ┗ Sobre.tsx ┣ /services # Lógica de integração com APIs (api.ts - fetch nativo). ┣ /types # Interfaces e definições TypeScript (ViaCEP, AgendamentoJava). ┣ App.tsx # Layout Principal (contém Header/Footer e Outlet). ┗ main.tsx # Ponto de entrada (Inicializa e renderiza o roteador).


---

## ⚙️ Instruções para Manipular o Sistema (Rodar e Testar)

### 1. Pré-Requisitos

* Node.js e npm (ou pnpm) instalados.
* **Servidor Java (Quarkus) rodando** em `http://localhost:8080` (Obrigatório para o Login/Consultas).
    > *Nota: O servidor Java deve estar com a configuração CORS correta para aceitar pedidos do Front-End.*

### 2. Instalação

```bash
# 1. Clone o repositório
git clone [LINK_DO_SEU_REPOSITORIO_AQUI]
cd [NOME_DO_REPOSITORIO]

# 2. Instale as dependências (React, Tailwind, RHF, Icons)
npm install
3. Execução
Bash

# Inicia a aplicação em modo desenvolvimento (Geralmente em http://localhost:5177)
npm run dev
4. Funcionalidades para Teste
Página: /login

Funcionalidade: Autenticação do Usuário.

Verbo HTTP: POST.

Página: /consultas

Funcionalidade: Listagem de Agendamentos.

Verbo HTTP: GET.

Página: /contato

Funcionalidade: Busca de Endereço (ViaCEP).

Verbo HTTP: GET.

Página: / (Home)

Funcionalidade: Teste de Rotas Dinâmicas (Rota: /detalhes/:id).

Verbo HTTP: N/A.

👥 Integrantes da Equipe
O versionamento do projeto segue a metodologia Git/GitHub/GitFlow, com no mínimo 5 commits significativos por integrante.

Eduarda Weiss Ventura (RM: 564434) - Afinidade: Linguagem Java

Maria Gabriela Landim Severo (RM: 565146) - Afinidade: Linguagem Java

Samara Porto Souza (RM: 559072) - Afinidade: Front-End e Bancos de Dados


🔗 Links e Entrega
Repositório e Deploy (Obrigatório)
Link do Repositório GitHub: [COLE AQUI O LINK COMPLETO DO SEU REPOSITÓRIO]

URL do Deploy (Vercel): [COLE AQUI O LINK PÚBLICO DA APLICAÇÃO NA VERCEL]

Vídeo de Apresentação
Link do Vídeo (YouTube): [COLE AQUI O LINK DO VÍDEO DE APRESENTAÇÃO]