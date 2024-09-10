import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = process.env.TELEGRAM_KEY;
  const url = `https://api.telegram.org/bot${token}/setWebhook`;

  const webhookUrl = `${process.env.DOMAIN_URL}/api/telegram/chatbot`; // URL de tu aplicación Next.js

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: webhookUrl,
    }),
  });

  const data = await response.json();

  res.status(200).json(data);
}
