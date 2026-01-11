# 🚀 Comandos para Deploy no GitHub Pages

## Passo 1: Inicializar Git (se ainda não fez)

```bash
git init
```

## Passo 2: Adicionar todos os arquivos

```bash
git add .
```

## Passo 3: Fazer o primeiro commit

```bash
git commit -m "Initial commit: Portfolio website"
```

## Passo 4: Conectar com o GitHub

**IMPORTANTE:** Substitua `Passetti-cmd` pelo seu username do GitHub se for diferente!

```bash
git remote add origin https://github.com/Passetti-cmd/Site-portfolio.git
```

## Passo 5: Renomear branch para main

```bash
git branch -M main
```

## Passo 6: Enviar para o GitHub

```bash
git push -u origin main
```

---

## ⚙️ Configurar GitHub Pages

1. Vá no GitHub: https://github.com/Passetti-cmd/Site-portfolio
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **"GitHub Actions"**
5. Pronto! O deploy vai acontecer automaticamente

---

## 📍 Seu site estará em:

```
https://Passetti-cmd.github.io/Site-portfolio/
```

---

## 🔄 Para atualizar o site no futuro:

Sempre que fizer mudanças, execute:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O GitHub Actions vai fazer o deploy automaticamente!

---

## ⚠️ IMPORTANTE:

- O repositório precisa ser **PÚBLICO** (GitHub Pages gratuito só funciona com repositórios públicos)
- Se você mudar o nome do repositório, atualize o `vite.config.ts` e o `src/App.tsx` com o novo nome
- O primeiro deploy pode levar até 10 minutos

---

## 🐛 Se der erro:

1. Verifique se o repositório é público
2. Vá em **Actions** no GitHub e veja os logs do workflow
3. Execute `npm run build` localmente para ver se há erros

