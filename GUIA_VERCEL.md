# 🚀 Guia Completo: Hospedando na Vercel

## 📋 Pré-requisitos

✅ Conta no GitHub (para conectar ao repositório)
✅ Conta na Vercel (crie em https://vercel.com)
✅ Token do Bot Telegram
✅ Chat ID do Telegram

---

## 🤖 **PASSO 1: Criar/Obter Token do Bot Telegram**

### 1️⃣ Encontrar o BotFather

- Abra Telegram e procure por `@BotFather`
- Digite `/start`
- Digite `/newbot`

### 2️⃣ Configurar o Bot

- **Nome do bot**: Escolha um nome (ex: "LocalizadorBot")
- **Username**: Escolha um username único (ex: "meu_localizador_bot")
- 🎯 **Você receberá o TOKEN** (salve este valor!)

**Formato do Token:**

```
123456789:ABCDEFGHIjklmnopqrstuvwxyz-abcdefgh
```

### 3️⃣ Obter seu Chat ID

- Abra o chat com seu bot recém criado
- Digite `/start`
- Visite: https://api.telegram.org/bot<SEU_TOKEN>/getUpdates
- Procure pelo `"id"` dentro de `"chat"` (será um número)

**Exemplo:**

```json
{
  "ok": true,
  "result": [
    {
      "message": {
        "chat": {
          "id": 123456789  <- ESTE É SEU CHAT ID
        }
      }
    }
  ]
}
```

---

## 📁 **PASSO 2: Configurar o Arquivo .env.local (Teste Local)**

Na raiz do projeto, edite `.env.local`:

```plaintext
TELEGRAM_BOT_TOKEN=123456789:ABCDEFGHIjklmnopqrstuvwxyz-abcdefgh
TELEGRAM_CHAT_ID=123456789
```

---

## 🧪 **PASSO 3: Testar Localmente**

### Instalar dependências:

```bash
npm install
```

### Rodar o servidor:

```bash
npm start
```

### Esperar:

```
🚀 Servidor rodando em http://localhost:3000
```

### Abrir no navegador:

- Visite `http://localhost:3000`
- Clique em "Permitir Localização"
- Autorize a localização
- Verifique se a mensagem chegou no Telegram!

---

## 🌪️ **PASSO 4: Fazer Push para GitHub**

```bash
# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "feat: adicionar server e configuração Vercel com suporte a Telegram"

# Fazer push
git push origin main
```

---

## 🔗 **PASSO 5: Conectar à Vercel**

### 1️⃣ Acessar Vercel

- Visite https://vercel.com/dashboard
- Clique em "Add New" → "Project"

### 2️⃣ Importar Repositório

- Selecione seu repositório `localizar`
- Clique em "Import"

### 3️⃣ Configurar Projeto

- **Project Name**: `localizar` (ou outro nome)
- **Framework Preset**: deixe em "Other"
- Clique em "Deploy"

**Aguarde o Deploy terminar!** ✅

---

## 🔐 **PASSO 6: Adicionar Variáveis de Ambiente**

### 1️⃣ No Dashboard da Vercel

- Vá para seu projeto `localizar`
- Clique em "Settings"
- Clique em "Environment Variables"

### 2️⃣ Adicionar Variáveis

Clique em "Add New" e adicione:

**Primeira:**

- **Name**: `TELEGRAM_BOT_TOKEN`
- **Value**: `123456789:ABCDEFGHIjklmnopqrstuvwxyz-abcdefgh`
- **Environments**: Production, Preview, Development
- Clique em "Save"

**Segunda:**

- **Name**: `TELEGRAM_CHAT_ID`
- **Value**: `123456789`
- **Environments**: Production, Preview, Development
- Clique em "Save"

---

## 🔄 **PASSO 7: Fazer Redeploy**

### Após adicionar as variáveis:

- Clique em "Deployments"
- Clique nos 3 pontos "..." do último deploy
- Clique em "Redeploy"

**Aguarde o redeploy terminar!** ✅

---

## ✅ **PASSO 8: Testar a Aplicação em Produção**

### 1️⃣ Obter URL

- Copie a URL no topo da página (ex: `https://localizar-abc123.vercel.app`)

### 2️⃣ Testar

- Abra `https://localizar-abc123.vercel.app`
- Clique em "Permitir Localização"
- Autorize a localização
- Verifique se a mensagem chegou no Telegram! 🎉

---

## 🆘 **Troubleshooting**

### ❌ "Erro ao enviar para o Telegram"

- ✅ Verifique se as variáveis estão certas na Vercel
- ✅ Confirme que o TOKEN e CHAT_ID são corretos
- ✅ Tente fazer redeploy

### ❌ "Localização não está sendo enviada"

- ✅ Abra DevTools (F12) → Console
- ✅ Procure por mensagens de erro
- ✅ Verifique se `/api/send-location` retorna erro 500

### ❌ "Permissão de localização negada"

- ✅ Verifique se está usando HTTPS (Telegram requer)
- ✅ Vercel usa HTTPS automaticamente ✅
- ✅ Localmente, pode precisar de localhost

### ❌ "Variáveis de ambiente não carregadas"

- ✅ Faça redeploy após adicionar variáveis
- ✅ Aguarde 1-2 minutos para as mudanças propagarem
- ✅ Limpe o cache (Ctrl+Shift+R)

---

## 📝 **Resumo de Arquivos Criados**

| Arquivo        | Função                        |
| -------------- | ----------------------------- |
| `server.js`    | Servidor Express local        |
| `vercel.json`  | Configuração de deploy Vercel |
| `.env.local`   | Variáveis para teste local    |
| `.env.example` | Template das variáveis        |

---

## 🎯 **URL Final**

```
https://localizar-seu-projeto.vercel.app
```

Pronto! Sua aplicação agora está hospedada na Vercel com suporte completo a Telegram! 🚀
