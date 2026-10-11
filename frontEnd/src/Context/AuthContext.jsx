import { createContext, useReducer } from "react";

export const AuthContext = createContext();
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_IN": {
      return { login: true };
    }
    case "LOGOUT": {
      return {};
    }
  }
};
function AuthProvider({ children }) {
  const [userData, dispatch] = useReducer(authReducer, {});
  return <AuthContext value={{ userData, dispatch }}>{children}</AuthContext>;
}

export default AuthProvider;
