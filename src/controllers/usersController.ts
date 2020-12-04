import { Request, Response, NextFunction } from "express";

/* GET users listing. */
const users = (req: Request, res: Response, next: NextFunction) =>
  res.json({ path: "users" });

const signin = (req: Request, res: Response, next: NextFunction) => {
  res.json({ path: "users/signin" });
};

export { users, signin };
