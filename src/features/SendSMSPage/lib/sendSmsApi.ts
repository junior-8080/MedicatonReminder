import api from "@/lib/clientApi/apiHelpers";
import {endpoints} from "@/lib/endPoints";
import {GenerateSmsAiBody, ScheduleMessageBody, SenderIdBodyType, SendSMSBody} from "@/features/SendSMSPage/lib/types";

export const sendSmsApi = {
    createSenderId: async (payload: SenderIdBodyType) => {
        return await api.post(endpoints.sms_sender, payload);
    },
    fetchSenderIds: async (params:any) => {
        return await api.get(endpoints.sms_sender,params)
    },
    fetchSenderAllIds: async (params:any) => {
        return await api.get(`${endpoints.sms_sender}/admin/all`,params)
    },
    deleteSenderId: async  (id:string) => {
        return await api.delete(`endpoints.sms_sender/${id}`)
    },
    sendSms: async (payload: SendSMSBody) => {
        return await api.post(endpoints.send_sms, {
                ...payload,
            },
        );
    },
    scheduleSms: async (payload: ScheduleMessageBody) => {
        return await api.post(endpoints.scheduleSms, {
                ...payload,
            },
        );
    },
    generateAiMessage: async (payload: GenerateSmsAiBody) => {
        return await api.post(endpoints.generateAiMessage, {
                ...payload,
            },
        );
    }
}