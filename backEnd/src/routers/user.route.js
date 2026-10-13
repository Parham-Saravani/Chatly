import Router from "express";
import {
  sendCodeHandler,
  codeVerifierHandler,
} from "../controllers/user.controller.js";
const router = Router();

router.post("/send-code", sendCodeHandler);
router.post("/verify-code", codeVerifierHandler);

export default router;
