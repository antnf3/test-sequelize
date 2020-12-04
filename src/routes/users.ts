import express, { Request, Response, NextFunction } from "express";
import { users, signin } from "../controllers/usersController";
const router = express.Router();

/* GET users listing. */
router.get("/", users);
router.get("/signin", signin);

export default router;
