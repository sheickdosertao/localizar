# 🔄 Como Forçar Deploy na Vercel

## ✅ Passo 1: Git Push Concluído

```
$ git push
✅ Enviado para GitHub com sucesso!
```

## 📱 Passo 2: Verificar Reconexão com Vercel

A Vercel deve detectar o novo push automaticamente. Siga:

### 2.1 Acessar Dashboard da Vercel

- Visite: https://vercel.com/dashboard
- Procure pelo projeto **`localizar`**

### 2.2 Verificar se há novo Deploy

- Você deve ver um novo **"Deployment"** na lista
- Ele pode estar em estado "Building" ou "Ready"

---

## 🔁 Passo 3: Se Não Detectar (Forçar Redeploy)

### Opção A: Redeploy via Dashboard

1. Clique no projeto `localizar`
2. Vá em **"Deployments"**
3. Procure o deploy mais recente
4. Clique nos **3 pontos** (...)
5. Clique em **"Redeploy"**
6. Aguarde o novo deploy

### Opção B: Redeploy via CLI

```bash
# Instalar Vercel CLI (primeira vez)
npm install -g vercel

# Fazer login
vercel login

# Fazer redeploy
vercel --prod
```

---

## 🔐 Passo 4: Verificar Variáveis de Ambiente

Se o deploy terminar mas ainda não funcionar, verifique:

1. Vá em **Settings** → **Environment Variables**
2. Confirme que existem:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. Se faltarem, adicione
4. Faça um novo redeploy

---

## 🧪 Passo 5: Testar a Aplicação

### Se estiver rodando localmente:

```bash
npm start
# Visite http://localhost:3000
```

### Se estiver na Vercel:

1. Vá para sua URL (ex: https://localizar-abc.vercel.app)
2. Clique em "Permitir Localização"
3. Autorize no navegador
4. Verifique se recebe mensagem no Telegram

---

## 📊 Status de Deploy

### ✅ Deploy Bem-Sucedido:

- URL funciona
- Comprovante aparece ofuscado
- Modal de consentimento funciona
- Mensagem chega no Telegram

### ❌ Deploy com Problema:

- URL dá erro 404 ou 500
- Confira os logs em **Deployments** → **Clique no deployment** → **Logs**
- Verifique variáveis de ambiente

---

## 🚨 Solução para "Environment Variables Não Carregadas"

Se vê erro "Configuração do servidor incompleta":

1. Verifique `.env` localmente:
   ```bash
   cat .env
   ```
2. Confirme que tem exatamente:

   ```
   TELEGRAM_BOT_TOKEN=7944401182:AAEc...
   TELEGRAM_CHAT_ID=-1002659707249
   ```

3. Na Vercel, adicione as mesmas em Settings

4. Redeploy com o novo `git push`:
   ```bash
   git add .
   git commit -m "atualização: variáveis ambiente"
   git push
   ```

---

## 📝 Resumo Rápido

```bash
# 1. Você fez push
git push ✅

# 2. Aguarde ou force redeploy na Vercel

# 3. Teste em produção
# https://seu-projeto.vercel.app

# Pronto! 🎉
```
