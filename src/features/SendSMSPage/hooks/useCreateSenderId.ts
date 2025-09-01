import {useMutation} from "@tanstack/react-query";
import {toast} from 'react-toastify';
import {sendSmsApi} from "@/features/SendSMSPage/lib/sendSmsApi";
import {SenderIdBodyType} from "@/features/SendSMSPage/lib/types";
import {useAuth} from "@/features/AuthPage/hooks/useAuth";

type Props = {
    onSuccess: () => void
}
export const useCreateSenderId = (onSuccess:any) => {
    const {user} = useAuth();
    return useMutation({
        mutationFn: (data: SenderIdBodyType) => sendSmsApi.createSenderId(data),
        onSuccess: (response) => {
            // Later define the response type??
            onSuccess?.();
            console.log({user})
            sendSmsApi.sendSms({
                message:"SenderId Approved",
                senderAddress:response?.data?.name,
                receiverAddresses:[user?.phone_number ||"233545543359"],
            }).catch((error) => {
                console.error("Failed to send SMS notification:", error);
            })
        },
        onError: (error:any) => {
            toast.error( error?.response?.data?.message || "Error Creating SenderId");
        },
    });
};
