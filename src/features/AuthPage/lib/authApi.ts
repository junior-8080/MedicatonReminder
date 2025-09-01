import api from "@/lib/clientApi/apiHelpers";
import {endpoints} from "@/lib/endPoints";
import {LoginBody, SignupBody} from "@/lib/type";
import {RequestPasswordResetType, ResetPasswordType} from "@/features/AuthPage/lib/types";

export const authApi = {
    signin : async (payload:LoginBody) => {
        return await api.post(endpoints.login, payload);
      },
      signup : async (payload:SignupBody) => {
          return await api.post(endpoints.create_user, payload);
      },
      requestPasswordReset: async (payload: RequestPasswordResetType) => {
        return await  api.post(endpoints.request_password_reset,payload)
      },
      resetPassword: async (payload: ResetPasswordType) => {
          return await  api.post(endpoints.reset_password,payload)
      }

}