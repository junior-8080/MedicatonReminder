import { useContext } from "react";
import { AuthContext } from "../authStore/authContext";
import { AuthContextType } from "../lib/types";

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };