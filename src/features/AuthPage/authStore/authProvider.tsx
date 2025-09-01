"use client";
import { useEffect, useMemo, useReducer, ReactNode } from "react";
import { User } from "../lib/types";
import { authReducer, initialState } from "./authReducer";
import { AuthContext } from "./authContext";
import { removeToken, setToken, getToken } from "@/lib/cookies";
import { useRouter } from "next/navigation";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const storedAuth = useMemo(() => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem("authState");
      const token = getToken();
      if (storedState && token) {
        try {
          const parsedState = JSON.parse(storedState);
          if (parsedState.token === token) {
            return parsedState;
          }
        } catch (error) {
          console.error("Error parsing stored auth state:", error);
        }
      }
    }
    return initialState;
  }, []);

  const [state, dispatch] = useReducer(authReducer, storedAuth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("authState", JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const token = getToken();
    if (token && (!state.token || state.token !== token)) {
      dispatch({
        type: "LOGIN",
        payload: {
          token,
          user: state.user as User,
        },
      });
    }
  }, []);

  const login = (user: User, token: string) => {
    dispatch({ type: "LOGIN", payload: { user, token } });
    setToken(token);
    router.push("/dashboard");
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    removeToken();
    localStorage.removeItem("authState");
    window.location.href ="/auth"
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
