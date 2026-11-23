import crypto from "crypto";
import type { Request, Response } from "express";

const getImageKitData = async (req: Request, res: Response) => {
  const pubKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!pubKey) {
    throw new Error("IMAGEKIT_PRIVATE_KEY is not defined in .env file");
  }

  const token = crypto.randomUUID();
  const expire = Math.floor(Date.now() / 1000) + 30 * 60;
  const signature = crypto
    .createHmac("sha1", pubKey)
    .update(token + expire)
    .digest("hex");
  res.json({
    token,
    expire,
    signature,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  });
};

export { getImageKitData };
