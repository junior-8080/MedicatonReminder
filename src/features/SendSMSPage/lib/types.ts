import {ApiResponse} from "@/lib/type";

export interface DataType {
    messageId: string;
    senderId: string;
    messageType: string;
    phoneNumber: string;
    category: string;
    content: string;
    date: string;
    status: string;
}


export interface SenderIdBodyType {
    name: string;
    description: string
}


export type SendSMSBody = {
    senderAddress: string;
    receiverAddresses: string | string[]
    message: string;
    group?: string;
    scheduleMessage?: boolean
};


export type ScheduleMessageBody = {
    senderAddress: string;
    receiverAddresses?: string | string[]
    message: string;
    group?: string;
    frequency: string;
    groupId?: string;
    date: string;
    recipientType: string;
    scheduleMessage?: boolean
};

export interface SenderIdType {
    id: string;
    name: string;
    description: string
    userId: string,
    status: string,
    createdAt: string,
    updatedAt: string
}

export type UserSenderIdResponse = ApiResponse & {
    data: {
        senders: SenderIdType[],
        totalSenders:number,
        currentPage:number,
        hasNextPage:boolean,
        hasPrevPage:boolean,
        totalPages:number
    }
}

export type SenderIdResponse = ApiResponse & {
    data: SenderIdType[]
}

export type GenerateSmsAiBody = {
    context: string
}


export interface AiMessageType {
    message: string,
    messageCount: 1
}

export type GenerateAiMessageResponse = ApiResponse & {
    data: AiMessageType
}