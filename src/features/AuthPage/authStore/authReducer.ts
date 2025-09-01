"use client";

import { AuthAction, AuthState } from "../lib/types";


export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};