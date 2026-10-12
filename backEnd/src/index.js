import app from "./app.js";
import connectToDatabase from "./configs/database.js";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  connectToDatabase();
  app.listen(process.env.PORT, () => {
    console.log("Server is Running on port :", process.env.PORT);
  });
})();
