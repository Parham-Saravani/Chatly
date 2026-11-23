import jwt from "jsonwebtoken";
import type { ObjectId } from "mongoose";
const generateToken = (userID: string) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in .env file");
  }

  return jwt.sign({ id: userID }, jwtSecret, {
    expiresIn: "7d",
  });
};

const decompressToken = (token: string) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in .env file");
  }
  const data = jwt.verify(token, jwtSecret);
  if (typeof data === "string" || !("id" in data)) {
    throw new Error("Invalid Token");
  }
  return data.id;
};
export { generateToken, decompressToken };
