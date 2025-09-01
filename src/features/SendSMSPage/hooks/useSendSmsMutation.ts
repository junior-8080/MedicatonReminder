import {useMutation, useQueryClient} from "@tanstack/react-query";
import {sendSmsApi} from "../lib/sendSmsApi";
import {toast} from "react-toastify";

export const useSendSmsMutation = (onSuccess: () => void) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: sendSmsApi.sendSms,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["SmsBalance"]})
            onSuccess()
        },
        onError: (error:any) => {
            toast.error(error?.response?.data?.message || "Failed to send SMS");
        }
    });
};