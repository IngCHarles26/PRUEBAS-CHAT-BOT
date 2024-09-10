// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { genHTTP } from "@/helpers/telegram/helpers";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const route = genHTTP('getMe')
  try{
    await axios.post(genHTTP('sendMessage'),{
      chat_id:1573982513,
      text: 'probando mensaje'
    })
    res.status(200).json({message: 'mensaje enviado correctamente'})
  }catch(err){
    console.log(err)
  }
}
