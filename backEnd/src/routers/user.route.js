import Router from "express";
import {
  sendCodeHandler,
  codeVerifierHandler,
  checkIsUserIDAvailable,
} from "../controllers/user.controller.js";
const router = Router();

router.post("/send-code", sendCodeHandler);
router.post("/verify-code", codeVerifierHandler);
router.post("/check-id", checkIsUserIDAvailable);

export default router;
