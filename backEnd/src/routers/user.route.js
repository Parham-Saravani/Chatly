import Router from "express";
import {
  sendCodeHandler,
  codeVerifierHandler,
  checkIsUserIDAvailable,
  registerNewUser,
  updageUserData,
  takeUserData,
} from "../controllers/user.controller.js";
const router = Router();

router.post("/", registerNewUser);
router.put("/", updageUserData);
router.post("/me", takeUserData);
router.post("/send-code", sendCodeHandler);
router.post("/verify-code", codeVerifierHandler);
router.post("/check-id", checkIsUserIDAvailable);

export default router;
