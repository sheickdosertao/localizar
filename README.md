<<<<<<< HEAD
# Tutorial Completo: Configurando e Rodando o localizar no Ubuntu do Zero

Este tutorial irá guiar um iniciante absoluto para configurar um ambiente de desenvolvimento no Ubuntu e rodar o projeto **localizar**.

---

## 1. Atualizar o Sistema Operacional
Antes de começar, é recomendado atualizar os pacotes do Ubuntu.

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 2. Instalar o Node.js e o npm
O projeto requer o **Node.js 16+**.

### 2.1 Verificar se o Node.js já está instalado
```bash
node -v
```
Se aparecer um número de versão (ex: `v16.13.0`), pule para a próxima etapa.

### 2.2 Instalar o Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
```

### 2.3 Verificar a instalação
```bash
node -v  # Deve exibir a versão do Node.js
npm -v   # Deve exibir a versão do npm
```

---

## 3. Instalar o Git
O Git é necessário para clonar o projeto.

```bash
sudo apt install -y git
```
Verifique a instalação:
```bash
git --version
```

---

## 4. Clonar o Repositório BackScan

```bash
git clone git@github.com:sheickdosertao/localizar.git
cd localizar
```

---

## 5. Instalar as Dependências do Projeto

```bash
npm install
```

---

---

## 7. Criar e Configurar um Bot no Telegram

1. No Telegram, procure por **@BotFather**.
2. Envie o comando:
   ```
   /newbot
   ```
3. Siga as instruções e anote o **token** fornecido.
4. Para obter o **ID do chat/grupo**:
   - Adicione o bot ao grupo.
   - Envie uma mensagem no grupo.
   - Acesse:
     ```
     https://api.telegram.org/botSEU_BOT_TOKEN/getUpdates
     ```
   - Anote o `chat_id`.

5. tambem no telegram procure por manybot e ative o servido para seu bot roda 24 horas siga as instrucoes no bot e envie seu token



---

## 12. Testar o Projeto
Abra o **index.html** no navegador e permita o acesso à localização. Se tudo estiver correto, a localização será enviada para o bot no Telegram.

---

## 13. Hospedar a Página HTML na Vercel

Para deixar a interface do **BackScan** online, vamos hospedar o `index.html` na Vercel.

### 13.1 Criar uma Conta na Vercel
1. Acesse (https://vercel.com/) e crie uma conta (pode usar o login do GitHub).
2. Após logar, clique em **"New Project"**.

### 13.2 Subir o Projeto para o GitHub
Caso ainda não tenha subido o código:
```bash
git init
git add index.html
git commit -m "Adiciona interface do localizar"
git branch -M main
git remote add origin git@github.com:sheickdosertao/localizar.git
git push -u origin main
```

### 13.3 Implantar na Vercel
1. Na Vercel, clique em **"Import Git Repository"** e selecione o repositório do seu projeto.
2. Escolha as configurações padrão e clique em **Deploy**.
3. Após a implantação, copie a URL gerada (ex: `https://localizar.vercel.app`).

Agora qualquer pessoa pode acessar sua página! 🚀

---

## Conclusão
Agora você tem o projeto localizar rodando do zero no Ubuntu, mesmo sem experiência em programação. 🚀

=======
# localizar
>>>>>>> 26337b9bd44273f6b00a90c43cd32a90ae1ca967
