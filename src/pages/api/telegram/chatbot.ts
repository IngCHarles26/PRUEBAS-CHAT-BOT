import type { NextApiRequest, NextApiResponse } from 'next';

type TelegramMessage = {
  message: {
    chat: {
      id: number;
    };
    text: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('recibiendo algo')
  
  // if (req.method === 'POST') {
    const { message }: TelegramMessage = req.body;

    if (message && message.text) {
      const chatId = message.chat.id;
      const text = message.text;


      // console.log(text)
      // Aquí puedes manejar el mensaje de los usuarios
      await sendTelegramMessage(chatId, `Recibido: ${text}`);
    }

    res.status(200).json({ status: 'ok' });
  // } else {
  //   res.status(405).json({ error: 'Method Not Allowed' });
  // }
}

async function sendTelegramMessage(chatId: number, text: string) {
  const token = process.env.TELEGRAM_KEY;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
    }),
  });
}