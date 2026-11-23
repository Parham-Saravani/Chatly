import app from "./app.js";
import connectToDatabase from "./configs/database.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

(async () => {
  connectToDatabase();
  app.listen(PORT, () => {
    console.log("Server is Running on port :", process.env.PORT);
  });
})();
