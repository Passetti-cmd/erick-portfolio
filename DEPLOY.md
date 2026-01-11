# Guia de Deploy - GitHub Pages

## Passo a Passo para Publicar no GitHub Pages

### 1. Criar o Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito → **"New repository"**
3. Nome do repositório: `Site-portfolio` (ou o nome que preferir)
4. Marque como **Public** (GitHub Pages gratuito só funciona com repositórios públicos)
5. **NÃO** marque "Initialize with README"
6. Clique em **"Create repository"**

### 2. Configurar o Repositório Local

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Portfolio website"

# Adicionar o repositório remoto (SUBSTITUA 'seu-usuario' pelo seu username do GitHub)
git remote add origin https://github.com/Passetti-cmd/Site-portfolio.git

# Renomear branch para main (se necessário)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

### 3. Habilitar GitHub Pages

1. No GitHub, vá para **Settings** do seu repositório
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **"GitHub Actions"**
4. O workflow já está configurado! Ele vai fazer deploy automaticamente

### 4. Aguardar o Deploy

- Após o push, vá em **Actions** no seu repositório
- Você verá o workflow "Deploy to GitHub Pages" rodando
- Aguarde alguns minutos (primeira vez pode demorar mais)
- Quando aparecer um ✅ verde, o deploy foi concluído!

### 5. Acessar seu Site

Seu site estará disponível em:

```
https://Passetti-cmd.github.io/Site-portfolio/
```

**Nota:** Se você mudou o nome do repositório, ajuste a URL acima.

### 6. Atualizar o Site (Futuras Atualizações)

Sempre que fizer mudanças:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O GitHub Actions vai fazer o deploy automaticamente!

## Personalizar o Nome do Repositório

Se você quiser usar um nome diferente de `Site-portfolio`:

1. **Renomeie o repositório no GitHub** (Settings → General → Repository name)
2. **Atualize o `vite.config.ts`** - mude a linha:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/NOVO-NOME/' : '/',
   ```
3. **Atualize este arquivo** com a nova URL

## Troubleshooting

### Site não aparece

- Verifique se o repositório é **público**
- Verifique se o workflow rodou com sucesso em **Actions**
- Aguarde alguns minutos (pode levar até 10 minutos na primeira vez)

### 404 em rotas

- O React Router está configurado para funcionar com GitHub Pages
- Se ainda tiver problemas, verifique se o `base` no `vite.config.ts` está correto

### Erro no build

- Verifique os logs em **Actions**
- Execute `npm run build` localmente para ver erros

## Domínio Personalizado (Opcional)

Se você tiver um domínio próprio:

1. Adicione um arquivo `CNAME` na pasta `public/` com seu domínio:
   ```
   seu-dominio.com
   ```
2. Configure o DNS do seu domínio apontando para o GitHub Pages
3. No GitHub, em Settings → Pages, adicione o domínio customizado
