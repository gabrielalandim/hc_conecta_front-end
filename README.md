# 🚀 SPRINT 04 – HC Conecta (Front-End)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Este projeto foi desenvolvido como parte da Sprint 04 da disciplina de Front-End Design Engineering, consolidando a aplicação SPA (Single Page Application) do Hospital das Clínicas.

---

## 🔗 Links Essenciais

* **Deploy (Vercel):** https://hc-conecta-front-end.vercel.app/
* **Vídeo de Apresentação (YouTube):** [https://youtu.be/SEU-LINK-AQUI](https://youtu.be/SEU-LINK-AQUI)
* **Repositório (GitHub):** [https://github.com/gabrielalandim/hc_conecta_front-end](https://github.com/gabrielalandim/hc_conecta_front-end)

---

## 🎯 Objetivo do Projeto

O objetivo principal desta Sprint 04 é finalizar a aplicação **HC Conecta**, evoluindo o SPA (Single Page Application) desenvolvido na Sprint 03 para integrar-se completamente com o backend.

Esta etapa é crucial e foca no consumo da **API Java** (criada na disciplina de Domain Driven Design), implementando todas as operações de CRUD (GET, POST, PUT, DELETE) e assegurando que o front-end consuma o endpoint remotamente (hospedado) para uma experiência de usuário coesa e funcional.

## 🔧 Funcionalidades e Recursos (Sprint 04)

* **Integração Total com API Java:** Consumo da API remota para todas as operações de CRUD (GET, POST, PUT, DELETE) utilizando a **Fetch API** nativa.
* **Arquitetura SPA com Roteamento:** Estrutura em React + Vite + TypeScript com rotas estáticas e dinâmicas (passagem de parâmetros) usando `react-router-dom`.
* **Tipagem Estática com TypeScript:** Utilização de `Interfaces` e tipos avançados (UnionTypes, Intersection) para garantir a segurança e manutenção do código.
* **Estilização Exclusiva com TailwindCSS:** Design responsivo (mobile-first) e adaptável para todos os tamanhos de tela (XS, SM, MD, LG, XL), sem uso de bibliotecas externas.
* **Validação de Formulários:** Implementação de formulários robustos com `react-hook-form` para validação de entradas.
* **Tratamento de Erros:** Manipulação de respostas da API, tratando erros e fornecendo feedback visual ao usuário.
* **Páginas Obrigatórias:** O projeto contém as páginas Index/Home, Integrantes, Sobre/About, FAQ e Contato.

## 🌟 Diferenciais da Solução

* **🎮 Gamificação:** Pontos por participação e interação com a plataforma.
* **🆘 Assistente virtual integrado:** Interação simplificada e linguagem acessível.
* **📱 Mobile first e acessibilidade:** Otimizado para dispositivos móveis, com contraste adequado e suporte a leitores de tela.
* **🔔 Notificações e lembretes automáticos:** Sistema de lembretes para consultas.
* **🧑‍⚕️ Feedback integrado:** Sistema de avaliação após a consulta para melhorias contínuas.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Propósito |
| :--- | :--- |
| **React** | Biblioteca principal para construção da UI. |
| **Vite** | Ferramenta de build e servidor de desenvolvimento. |
| **TypeScript** | Superset do JavaScript para tipagem estática. |
| **TailwindCSS** | Framework CSS utility-first para estilização responsiva. |
| **React Router DOM** | Gerenciamento de rotas da SPA. |
| **React Hook Form** | Manipulação e validação de formulários. |
| **Fetch API** | Consumo da API Java (sem bibliotecas externas). |
| **Vercel** | Plataforma de deploy para hospedagem do front-end. |
| **GitHub / GitFlow** | Versionamento e colaboração em equipe. |

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/gabrielalandim/hc_conecta_front-end.git](https://github.com/gabrielalandim/hc_conecta_front-end.git)
    cd hc_conecta_front-end
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione a URL da API Java remota:
    ```
    VITE_API_URL=[https://url-da-sua-api-java.com](https://url-da-sua-api-java.com)
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O projeto estará disponível em `http://localhost:5173`.

## 👥 Integrantes

- **Samara Porto Souza**  
  📌 RM: 559072 – 1TDSR
  🔗 [LinkedIn](https://www.linkedin.com/in/samara-porto-732723325) | 💻 [GitHub](https://github.com/ssamaraps)

- **Eduarda Weiss Ventura**  
  📌 RM: 564434 – 1TDSPX 
  🔗 [LinkedIn](https://www.linkedin.com/in/eduarda-weiss-ventura-55bb37268) | 💻 [GitHub](https://github.com/eduardawv)

- **Maria Gabriela Landim Severo**  
  📌 RM: 565146 – 1TDSA  
  🔗 [LinkedIn](https://www.linkedin.com/in/maria-gabriela-landim-595654322/) | 💻 [GitHub](https://github.com/gabrielalandim)

---

## 📂 Estrutura de Pastas

A estrutura de pastas do projeto foi organizada para promover a modularidade e escalabilidade:

hc_conecta_front-end/
├── public/             # Arquivos estáticos (ícones, imagens)
├── src/
│   ├── assets/         # Imagens e fontes usadas nos componentes
│   ├── components/     # Componentes React reutilizáveis (Botão, Card, etc.)
│   ├── contexts/       # Contextos da aplicação (Ex: Autenticação)
│   ├── hooks/          # Hooks customizados (Ex: useFetch)
│   ├── pages/          # As páginas da aplicação (Home, Sobre, Contato, etc.)
│   ├── services/       # Lógica de consumo da API (fetch)
│   ├── types/          # Definições de tipos e interfaces TypeScript
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Ponto de entrada da aplicação (renderiza o App)
│   └── routes/         # Definição das rotas (React Router)
├── .env                # Variáveis de ambiente (NÃO versionado)
├── .gitignore          # Arquivos ignorados pelo Git
├── index.html          # Template HTML principal
├── package.json        # Dependências e scripts
├── tailwind.config.js  # Configuração do TailwindCSS
└── tsconfig.json       # Configuração do TypeScript
