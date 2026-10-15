import { createContext, useEffect, useReducer, useState } from "react";
import { getCookie } from "../utilities/cookie";
import { baseUrl } from "../utilities/constants";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_IN": {
      return { ...action.data };
    }
    case "UPDATE_USER_DATA": {
      return { ...state, ...action.data };
    }
    case "LOGOUT": {
      return {};
    }
  }
};
function AuthProvider({ children }) {
  const [userData, dispatch] = useReducer(authReducer, {});
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    (async () => {
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
          if (userData) {
            dispatch({ type: "LOGIN_IN", data: userData });
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsAuthLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext value={{ userData, dispatch, isAuthLoading }}>
      {children}
    </AuthContext>
  );
}

export default AuthProvider;
