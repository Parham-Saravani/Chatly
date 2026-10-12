import { baseUrl } from "./constants";

const requestEmail = async (email) => {
  try {
    const response = await fetch(`${baseUrl}/api/user/send-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    return undefined;
  }
};

export default requestEmail;