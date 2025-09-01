// @ts-ignore
import Cookies, { CookieAttributes } from "js-cookie";
import {Auth_Token_Name, ResetPassword_Token} from "./constants";
export const getToken = () => Cookies.get(Auth_Token_Name);
export const getResetPasswordToken = () => Cookies.get(ResetPassword_Token)
export const setToken = (token?: string) => {
  setCookie(Auth_Token_Name, token, {
    expires: 7,
  });
};

export const setPasswordResetToken = (token:string) => {
  setCookie(ResetPassword_Token, token, {
    expires: 1,
  });
}

export const removeToken = () => Cookies.remove(Auth_Token_Name);
export const removePasswordResetToken = () => Cookies.remove(ResetPassword_Token);
export const setCookie = (
  name: string,
  token?: string,
  options?: CookieAttributes
) => {
  if (!token) {
    Cookies.remove(name);
  } else {
    Cookies.set(name, token, options ?? { expires: 60 * 60 * 24 * 30 });
  }
};


