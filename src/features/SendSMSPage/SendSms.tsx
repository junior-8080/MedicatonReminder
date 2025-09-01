"use client";
import React, {useEffect, useState} from "react";
import SingleSmsForm from "@/features/SendSMSPage/components/SingleSmsForm";
import {messageOptions} from "@/lib/data";
import MessageOptions from "@/features/SendSMSPage/components/MessageOptions";
import {useSendSmsMutation} from "./hooks/useSendSmsMutation";
import {Form} from "antd";
import {ScheduleMessageBody, SendSMSBody} from "@/features/SendSMSPage/lib/types";
import {toast} from "react-toastify";
import {ContactBody, GroupType} from "@/features/ContactPage/lib/types";
import {useScheduleSmsMutation} from "@/features/SendSMSPage/hooks/useScheduleSmsMutation";
import {useAuth} from "@/features/AuthPage/hooks/useAuth";
import {useGetSmsBalance} from "@/features/RechargePage/hooks/useGetSmsBalance";



const SendSms: React.FC = () => {
    const [selectedId, setSelected] = useState(messageOptions[0].id);
    const [contacts, setContacts] = useState<ContactBody[] | []>([]);
    const [form] = Form.useForm();
    const {user,} = useAuth();
    const {isLoading, data: smsBalanceData} = useGetSmsBalance();
    const [showSummary, setShowSummary] = useState(false);
    const [values, setValues] = useState<SendSMSBody | null>(null);

    const clearForm = () => {
        form.resetFields(["message","receiverAddresses","senderAddress","scheduleMessage","message","frequency"]);
        setContacts([]);
    }
    const {mutate: sendSms, isPending: isSendingSms} = useSendSmsMutation(() => {
        clearForm()
        toast.success("Message sent");
    });
    const {mutate: schedulesSms, isPending: isScheduling} = useScheduleSmsMutation(() => {
        clearForm()
        toast.success("Message scheduled");
    });

    useEffect(() => {
        clearForm();
    }, [selectedId]);


    const handleOnFinish = (values: SendSMSBody) => {
        setValues(values);
        setShowSummary(true);
    }

    const scheduleMessage = Form.useWatch('scheduleMessage', form);

    const handleSendSms = (values: SendSMSBody) => {
        console.log({smsPayload:values,smsBalanceData})
        if ((Number(smsBalanceData?.data?.totalSmsCredits || '0') <= 0)) {
            return toast.error("Insufficient Balance")
        }
        if (typeof values.receiverAddresses === "string") {
            values.receiverAddresses = values.receiverAddresses.split(",") || []
        }
        if (contacts.length > 0) {
            if (!values.receiverAddresses) {
                values.receiverAddresses = []
            }
            const phoneNumbersFromContacts = contacts.map(contact => contact.phoneNumber)
            values.receiverAddresses = values.receiverAddresses.concat(...phoneNumbersFromContacts);
        }
        if (values.group) {
            const group: GroupType = JSON.parse(values.group);
            const groupMembers = group.members.map(member => member.phoneNumber);
            values.receiverAddresses = [...(values.receiverAddresses || []), ...groupMembers];
            delete values.group;
        }
        delete values.scheduleMessage
        sendSms(values);
    }
    const handleScheduleMessage = (values: ScheduleMessageBody) => {
        if (contacts.length > 0) {
            if (!values.receiverAddresses) {
                values.receiverAddresses = []
            }
            const phoneNumbersFromContacts = contacts.map(contact => contact.phoneNumber)
            values.receiverAddresses = (values.receiverAddresses || []).concat(...phoneNumbersFromContacts);
        }
        if (values.group) {
            values.recipientType = "GROUP";
            const group = JSON.parse(values.group);
            values.groupId = group.id;
            delete values.group;
        } else {
            values.recipientType = "INDIVIDUAL"
        }
        delete values.scheduleMessage
        schedulesSms(values)
    }
    const handleFileChange = (contacts: ContactBody[]) => {
        if (selectedId === "custom") {
            const phoneNumbers = contacts.map(contact => contact.phoneNumber);
            form.setFieldsValue({receiverAddresses: phoneNumbers});
        }
        setContacts(contacts)
    }

    return (
        <div className="w-[80%] mx-auto">
            <MessageOptions
                messageOptions={messageOptions}
                handleSelected={(selectedId) => setSelected(selectedId)}
                selectedId={selectedId}
            />
            <Form className="mt-20" layout={"vertical"} form={form} onFinish={(values) => {
                if(scheduleMessage) {
                    handleScheduleMessage(values)
                }else {
                    handleSendSms(values)
                }
            }}>
                <SingleSmsForm
                    messageOption={selectedId}
                    isSending={isSendingSms || isScheduling}
                    form={form}
                    handleFileChange={handleFileChange}
                />
            </Form>
            {/*{values && <SummaryModal open={showSummary} handleClose={() => setShowSummary(false)} message={values?.message}*/}
            {/*               contactCount={values.receiverAddresses.length || 0}*/}
            {/*               messageCount={calculateMessageCount(values.message)} smsBalance={Number(smsBalanceData?.data?.balance || '0')}/>}*/}
        </div>
    );
};

export default SendSms;
