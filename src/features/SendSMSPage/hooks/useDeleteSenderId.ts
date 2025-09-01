import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {sendSmsApi} from "@/features/SendSMSPage/lib/sendSmsApi";



export const useDeleteContact = (onSuccess:any) => {
    return useMutation(
        {
            mutationFn: (id:string) => {
                return sendSmsApi.deleteSenderId(id);
            },
            onSuccess: () => {
                onSuccess()
            },
            onError: (error:any) => {
                toast.error( error?.response?.data?.message || "Something went wrong");
            },
        }
    );
}