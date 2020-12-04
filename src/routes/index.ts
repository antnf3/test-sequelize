import express, { Request, Response, NextFunction } from "express";
import { index, userInfo } from "../controllers/indexController";
const router = express.Router();

/* GET home page. */
router.get("/", index);
router.get("/userInfo", userInfo);

export default router;
