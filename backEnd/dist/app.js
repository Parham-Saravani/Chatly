import express from "express";
import userRouter from "./routers/user.route.js";
import discoverRouter from "./routers/discoer.route.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/discover", discoverRouter);
export default app;
//# sourceMappingURL=app.js.map