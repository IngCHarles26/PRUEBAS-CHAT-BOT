export const genHTTP = (method:string) => {
  const base = 'https://api.telegram.org/bot'
  const key = process.env.TELEGRAM_KEY
  return base+key+'/'+method
}