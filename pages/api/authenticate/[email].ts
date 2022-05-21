// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type User = {
email: string,
passowrd: string
}
const users = [
  {email: 'jacobschwantes@outlook.com', password: "pass12345"}
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = req.query.email;
  if (users.find(item => item.email === email))  {
    setTimeout(() => res.status(200).send('user exists'), 1000)
  } else {
    setTimeout(() => res.status(404).send('No Coinbase account exists for this email. Please check your spelling or create an account.'), 1000)
   
  }
}
