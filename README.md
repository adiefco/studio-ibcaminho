# 🛠️ IBCaminho CMS (Sanity Studio)

CMS da Igreja Batista do Caminho, responsável por gerenciar o conteúdo exibido no aplicativo mobile.

## ✨ Sobre o projeto

Este projeto utiliza o **Sanity Studio** como Headless CMS para permitir que a igreja edite conteúdos de forma simples, sem precisar mexer em código.

O CMS controla:

- 🏠 Home (mensagens, palavra da semana, frases)
- 📅 Eventos (agenda da igreja)
- 🙌 Projetos (ações e iniciativas)
- 📺 Cultos (estrutura preparada, mesmo com vídeos vindo do YouTube)

---

## 🚀 Tecnologias

- [Sanity](https://www.sanity.io/)
- TypeScript
- Vite

---

## 📦 Estrutura

```bash
studio-ibcaminho/
├── schemaTypes/
│   ├── home.ts
│   ├── event.ts
│   ├── project.ts
│   └── index.ts
├── sanity.config.ts
├── sanity.cli.ts
```

---

## ⚙️ Rodando localmente

```bash
npm install
npm run dev
```

O Studio estará disponível em:

```bash
http://localhost:3333
```

---

## 🌐 Deploy

O CMS está publicado em:

👉 https://ibcaminho.sanity.studio/

Para fazer deploy:
```bash
npx sanity deploy
```

---

## 🧠 Como usar

1. Acesse o Studio
   
2. Crie ou edite conteúdos:
- Home
- Eventos
- Projetos

1. As alterações são refletidas automaticamente no app

---

## 🔐 Configuração

```bash
projectId: 'y9my9x5h'
dataset: 'production'
```

---

## ⚠️ Observações

- Não é necessário backend próprio
- Conteúdo é entregue via API do Sanity
- O plano gratuito atende perfeitamente o projeto atual

## 💛 Sobre

Projeto desenvolvido como presente para a Igreja Batista do Caminho, com foco em simplicidade, autonomia e baixo custo.

## 📱 Integração
Este CMS é consumido pelo app mobile (Expo):

👉 

