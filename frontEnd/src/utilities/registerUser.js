import { baseUrl } from "./constants";

const registerUser = async (options) => {
  try {
    const registerResponse = await fetch(`${baseUrl}/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    });
    if (!registerResponse.ok) {
      console.log(registerResponse);
      toast.error("Your account could not be created. Please try again.");
      return;
    }
    const data = await registerResponse.json();

    return data;
  } catch (error) {
    console.log(error);

    throw new Error();
  }
};

export default registerUser;
