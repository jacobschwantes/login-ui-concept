// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type User = {
  email: string;
  password: string;
};
const users: User[] = [{ email: "jacobschwantes@outlook.com", password: "pass12345!" }];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const credentials = JSON.parse(req.body);
  if (
    users.find(
      (item) =>
        item.email === credentials.email &&
        item.password === credentials.password
    )
  ) {
    setTimeout(() => res.status(200).send("authenticated"), 1000);
  } else {
    setTimeout(
      () =>
        res
          .status(404)
          .send(
            "Invalid email or password. Try clicking 'Forgot Password' if you're having trouble signing in."
          ),
      1000
    );
  }
}
