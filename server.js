const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Servir arquivos estáticos
app.use(express.static("./"));

// Rota para enviar localização para Telegram
app.post("/api/send-location", async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Método não permitido" });
  }

  const { latitude, longitude, maps, source } = req.body;

  console.log("📍 Requisição recebida:", { latitude, longitude, maps, source });

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  // Validar se as variáveis de ambiente estão configuradas
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("❌ ERRO: Variáveis de ambiente não configuradas!");
    console.error(
      "   TOKEN:",
      TELEGRAM_BOT_TOKEN ? "✅ Definido" : "❌ FALTANDO",
    );
    console.error(
      "   CHAT_ID:",
      TELEGRAM_CHAT_ID ? "✅ Definido" : "❌ FALTANDO",
    );
    return res.status(500).json({
      success: false,
      message: "Configuração do servidor incompleta",
    });
  }

  const message = `📍 Localização recebida\nFonte: ${source}\nLatitude: ${latitude}\nLongitude: ${longitude}\nMaps: ${maps}`;

  console.log(
    `🔐 Token (primeiros 20 chars): ${TELEGRAM_BOT_TOKEN.substring(0, 20)}...`,
  );
  console.log(`📧 Chat ID: ${TELEGRAM_CHAT_ID}`);
  console.log(`📝 Mensagem:\n${message}`);

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      },
    );

    console.log("✅ Mensagem enviada para Telegram com sucesso!");
    console.log("   Resposta da API:", response.data);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Erro ao enviar para Telegram:");
    console.error("   Status:", error.response?.status);
    console.error("   Mensagem:", error.message);
    if (error.response?.data) {
      console.error("   Detalhes:", error.response.data);
    }
    return res
      .status(500)
      .json({ success: false, message: "Erro ao enviar para o Telegram" });
  }
});

// Rota de teste
app.get("/api/health", (req, res) => {
  res.json({ status: "✅ Servidor funcionando!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
