import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Método não permitido",
    });
  }

  const { latitude, longitude, maps, source } = req.body;

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Variáveis de ambiente não configuradas.");
    return res.status(500).json({
      success: false,
      message: "Configuração do Telegram ausente.",
    });
  }

  const message = `📍 Localização recebida
Fonte: ${source}
Latitude: ${latitude}
Longitude: ${longitude}
Maps: ${maps}`;

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      },
    );

    console.log("Enviado com sucesso:", response.data);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("ERRO TELEGRAM:");
    console.error(error.response?.data);
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: "Erro ao enviar para o Telegram.",
    });
  }
}
