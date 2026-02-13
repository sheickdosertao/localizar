#!/usr/bin/env node

/**
 * Script de Teste do Telegram
 * Use para verificar se o Bot Token e Chat ID estão corretos
 */

require("dotenv").config();
const axios = require("axios");

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

console.log("🧪 Iniciando testes do Telegram...\n");

// Teste 1: Verificar variáveis
console.log("1️⃣  Verificando variáveis de ambiente:");
if (TELEGRAM_BOT_TOKEN) {
  console.log(`   ✅ TELEGRAM_BOT_TOKEN está definido`);
  console.log(
    `      (primeiros 20 chars: ${TELEGRAM_BOT_TOKEN.substring(0, 20)}...)`,
  );
} else {
  console.error(`   ❌ TELEGRAM_BOT_TOKEN NÃO DEFINIDO!`);
}

if (TELEGRAM_CHAT_ID) {
  console.log(`   ✅ TELEGRAM_CHAT_ID está definido: ${TELEGRAM_CHAT_ID}`);
} else {
  console.error(`   ❌ TELEGRAM_CHAT_ID NÃO DEFINIDO!`);
}

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error(
    "\n❌ Variáveis de ambiente faltando! Abra .env.local e adicione:",
  );
  console.error("   TELEGRAM_BOT_TOKEN=seu_token_aqui");
  console.error("   TELEGRAM_CHAT_ID=seu_chat_id_aqui");
  process.exit(1);
}

// Teste 2: Testar conexão com API do Telegram
console.log("\n2️⃣  Testando conexão com API do Telegram...");

axios
  .post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`)
  .then((response) => {
    console.log(`   ✅ Conexão bem-sucedida!`);
    console.log(`      Bot nome: ${response.data.result.first_name}`);
    console.log(`      Bot username: @${response.data.result.username}`);
  })
  .catch((error) => {
    console.error(`   ❌ Erro na conexão:`);
    if (error.response?.data) {
      console.error(`      ${error.response.data.description}`);
    } else {
      console.error(`      ${error.message}`);
    }
    process.exit(1);
  })
  .then(() => {
    // Teste 3: Enviar mensagem de teste
    console.log("\n3️⃣  Enviando mensagem de teste...");

    const mensagemTeste = `✅ Teste de conexão bem-sucedido!\n\nData: ${new Date().toLocaleString("pt-BR")}\nLatitude: -23.5505\nLongitude: -46.6333\nLocalização: São Paulo, SP`;

    return axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: mensagemTeste,
      },
    );
  })
  .then((response) => {
    console.log(`   ✅ Mensagem enviada com sucesso!`);
    console.log(`      Message ID: ${response.data.result.message_id}`);
    console.log(`      Chat ID: ${response.data.result.chat.id}`);
    console.log("\n🎉 Todos os testes passaram! Seu Bot está funcionando!");
  })
  .catch((error) => {
    console.error(`   ❌ Erro ao enviar mensagem:`);
    if (error.response?.data) {
      console.error(`      ${error.response.data.description}`);
      console.error(`      Error Code: ${error.response.status}`);
    } else {
      console.error(`      ${error.message}`);
    }
    process.exit(1);
  });
