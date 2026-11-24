import toast from "react-hot-toast";
import { baseUrl } from "./constants.js";
import { upload } from "@imagekit/react";

export const uploadImage = async (
  currentFile: File,
  currentFileName: string,
) => {
  try {
    const imagekitParamsResponse = await fetch(
      `${baseUrl}/api/discover/imagekit`,
    );

    if (!imagekitParamsResponse.ok) {
      toast.error("Something happend, please try again.");
      return;
    }

    const { token, expire, signature, publicKey } =
      await imagekitParamsResponse.json();

    const uploadProfileImage = await upload({
      token,
      expire,
      signature,
      file: currentFile,
      publicKey,
      fileName: currentFileName,
    });

    return uploadProfileImage.url;
  } catch (error) {
    return undefined;
  }
};

export default uploadImage;
