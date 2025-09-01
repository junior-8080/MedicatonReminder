import {useMutation, useQueryClient} from "@tanstack/react-query";
import {sendSmsApi} from "../lib/sendSmsApi";
import {toast} from "react-toastify";

export const useScheduleSmsMutation = (onSuccess: () => void) => {
    return useMutation({
        mutationFn: sendSmsApi.scheduleSms,
        onSuccess: async () => {
            onSuccess()
        },
        onError: (error:any) => {
            toast.error(error?.response?.data?.message || "Failed to send schedule SMS");
        }
    });
};