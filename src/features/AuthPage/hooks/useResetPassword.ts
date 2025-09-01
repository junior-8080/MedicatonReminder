import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { authApi } from "../lib/authApi";
import { ResetPasswordType} from "@/features/AuthPage/lib/types";
import {getResetPasswordToken} from "@/lib/cookies";


export const useResetPassword = (onSuccess:any) => {
    const resetPasswordToken = getResetPasswordToken();
    return useMutation({
        mutationFn: (data: ResetPasswordType) => authApi.resetPassword({
            ...data,
            resetMethod:'otp',
            resetToken:resetPasswordToken
        }),
        onSuccess: () => {
            onSuccess()
        },
        onError: (error:any) => {
            toast.error( error?.response?.data?.message || "Password Reset Failed" );
        },
    });
};
