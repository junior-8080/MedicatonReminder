import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { authApi } from "../lib/authApi";
import {RequestPasswordResetType} from "@/features/AuthPage/lib/types";
import {setPasswordResetToken} from "@/lib/cookies";



export const useRequestPasswordReset = (onSuccess:any) => {
    return useMutation({
        mutationFn: (data: RequestPasswordResetType) => authApi.requestPasswordReset(data),
        onSuccess: (response) => {
            setPasswordResetToken(response.data?.resetToken)
            onSuccess()
        },
        onError: (error:any) => {
            toast.error( error?.response?.data?.message || "Password Reset Failed" );
        },
    });
};
