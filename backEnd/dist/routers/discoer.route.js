import Router from "express";
import { getImageKitData } from "../controllers/discover.controller.js";
const router = Router();
router.get("/imageKit", getImageKitData);
export default router;
//# sourceMappingURL=discoer.route.js.map