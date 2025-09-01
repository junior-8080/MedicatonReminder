import {useMutation,UseMutationResult} from "@tanstack/react-query";
import {toast} from "react-toastify";

import {GenerateAiMessageResponse, GenerateSmsAiBody} from "@/features/SendSMSPage/lib/types";
import {sendSmsApi} from "@/features/SendSMSPage/lib/sendSmsApi";

export const useGenerateAiMessage = (
    onSuccess: (data:GenerateAiMessageResponse) => void
): UseMutationResult<GenerateAiMessageResponse, unknown, GenerateSmsAiBody> => {
    return useMutation({
        mutationFn: (data: GenerateSmsAiBody) => sendSmsApi.generateAiMessage(data),
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (error:any) => {
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    });
};