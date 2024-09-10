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
    const {data} = await axios.get(genHTTP('getWebhookInfo'))
    res.status(200).json(data)
  }catch(err){
    console.log(err)
  }
}
