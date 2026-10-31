import { useState } from "react";
import { getCookie } from "../utilities/cookie";
import { baseUrl } from "../utilities/constants";
import useAuth from "../Store/AuthStore";

function useAuthentication() {
  const changeUserData = useAuth((state) => state.changeUserData);
  const [isLoading, setIsLoading] = useState(true);

  const takeUserData = async () => {
    try {
      const token = getCookie("auth-token");
      if (token) {
        const response = await fetch(`${baseUrl}/api/user/me`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        if (!response.ok) {
          throw new Error();
        }
        const userData = await response.json();
        if (userData.message !== "INVALID_TOKEN") {
          changeUserData(userData);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, takeUserData };
}

export default useAuthentication;
