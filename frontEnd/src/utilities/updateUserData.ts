import { baseUrl } from "./constants.js";

type UpdateUserParams = {
  url: string;
  name: string;
  username: string;
  bio: string;
  email: string;
  newEmail: string;
};

const updateUserData = async ({
  url: imageUrl,
  name,
  username,
  bio,
  email: previousEmail,
  newEmail,
}: UpdateUserParams) => {
  try {
    const updatedData = {
      ...(imageUrl && { imageUrl }),
      ...(newEmail && { newEmail }),
      ...(name && { name }),
      ...(username && { username }),
      ...(bio && { bio }),
      ...(previousEmail && { previousEmail }),
    };

    const response = await fetch(`${baseUrl}/api/user`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    console.log(error);

    return undefined;
  }
};

export default updateUserData;
