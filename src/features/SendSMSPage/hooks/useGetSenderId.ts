import { useQuery } from "@tanstack/react-query";
import {SenderIdResponse, UserSenderIdResponse} from "@/features/SendSMSPage/lib/types";
import {sendSmsApi} from "@/features/SendSMSPage/lib/sendSmsApi";
export const useGetSenderId = (params?:any) => {
    return useQuery<UserSenderIdResponse>({
        queryKey: ["sendIds",params],
        queryFn: () => sendSmsApi.fetchSenderIds(params),
    });
};
