#!/usr/bin/env node

/**
 * Script para Obter Chat ID Correto
 *
 * Siga estes passos:
 * 1. Abra o Telegram
 * 2. Procure por @sheickdosertaoBot
 * 3. Clique em "START"
 * 4. Envie qualquer mensagem (ex: "Oi")
 * 5. Execute este script: node get-chat-id.js
 */

require("dotenv").config();
const axios = require("axios");

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!TELEGRAM_BOT_TOKEN) {
  console.error("❌ TELEGRAM_BOT_TOKEN não está definido em .env");
  process.exit(1);
}

console.log("🔍 Procurando por mensagens recentes...\n");

axios
  .get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`)
  .then((response) => {
    const updates = response.data.result;

    if (updates.length === 0) {
      console.error("❌ Nenhuma mensagem encontrada!");
      console.error("\nSiga estes passos:");
      console.error("1. Abra o Telegram");
      console.error("2. Procure por @sheickdosertaoBot");
      console.error("3. Clique em START ou envie uma mensagem");
      console.error("4. Execute este script novamente");
      process.exit(1);
    }

    console.log("✅ Mensagens encontradas!\n");
    console.log("━".repeat(50));

    updates.forEach((update, index) => {
      const message = update.message;
      if (message) {
        console.log(`\nMensagem ${index + 1}:`);
        console.log(`  👤 De: ${message.chat.first_name || "Desconhecido"}`);
        console.log(`  📌 Chat ID: ${message.chat.id}`);
        console.log(`  💬 Texto: ${message.text || "(sem texto)"}`);
        console.log(
          `  🕐 Data: ${new Date(message.date * 1000).toLocaleString("pt-BR")}`,
        );
      }
    });

    console.log("\n" + "━".repeat(50));
    console.log("\n📌 Use o Chat ID mais recente no seu .env:");
    console.log(
      `TELEGRAM_CHAT_ID=${updates[updates.length - 1]?.message?.chat?.id}`,
    );
  })
  .catch((error) => {
    console.error("❌ Erro:");
    console.error(error.message);
    process.exit(1);
  });
