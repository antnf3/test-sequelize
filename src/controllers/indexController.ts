import { Request, Response, NextFunction } from "express";
const User = require("../db/models").User;

/* GET home page. */
const index = (req: Request, res: Response, next: NextFunction) => {
  // INSERT INTO nodejs.users(name, age, married, comment) VALUES('pengsu', 10, 0, '자기소개1');
  try {
    User.create({
      email: "pengs1u22",
      password: "123213213",
      type: 1111,
    });
  } catch (err) {
    console.log(err);
  }

  return res.json({ path: "index" });
};

const userInfo = (req: Request, res: Response, next: NextFunction) => {
  try {
    User.findAll()
      .then((users: any) => {
        console.log(users);
      })
      .catch((err: any) => {
        console.error(err);
        next(err);
      });
  } catch (err) {
    console.log(err);
  }

  return res.json({ path: "index" });
};
// res.json({ test: 1234 });
export { index, userInfo };
