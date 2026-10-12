import Router from "express";
import { sendCodeHandler } from "../controllers/user.controller.js";
const router = Router();

router.post("/send-code", sendCodeHandler);
export default router;
