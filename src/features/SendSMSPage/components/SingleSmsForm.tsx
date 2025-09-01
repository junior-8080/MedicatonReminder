import React, {useEffect, useState} from "react";
import MessageContentInput from "@/features/SendSMSPage/components/MessageContentInput";
import PhoneNumberTextArea from "@/features/SendSMSPage/components/PhonenumberTextArea";
import {Button, Form, Select, Switch} from "antd";
import SenderIdInput from "@/features/SendSMSPage/components/SenderIdInput";
import ContactUploader from "@/features/ContactPage/components/ContactUploader";
import {ContactBody} from "@/features/ContactPage/lib/types";
import {useGetSmsTemplates} from "@/features/SettingsPage/hooks/useGetSmsTemplates";
import GroupsInput from "@/features/SendSMSPage/components/GroupsInput";
import ScheduleMessageInput from "@/features/SendSMSPage/components/ScheduleMessageInput";
import Link from "next/link";

type Props = {
    messageOption: string;
    isSending: boolean;
    form: any;
    handleFileChange: (contacts: ContactBody[] | []) => void;
};

export const SingleSmsForm = ({messageOption, isSending, form, handleFileChange}: Props) => {
    const {isLoading: isLoadingSmsTemplates, data: smsTemplateData} = useGetSmsTemplates();
    const [template,setTemplate] = useState('');
    const handleMessageTemplateChange = (value: string) => {
        setTemplate(value);
        form.setFieldValue("message", value);
    }
    const handleAiUseMessage = (message: string) => {
        form.setFieldValue("message", message)
    }
    const scheduleMessage = Form.useWatch('scheduleMessage', form);
    const message = Form.useWatch('message')

    useEffect(() => {
       setTemplate('');
    }, [messageOption]);

    useEffect(() => {
        if(!message){
            setTemplate('')
        }
    }, [message]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Left Column */}
            <div className="space-y-8">
                <SenderIdInput/>
                {["custom"].includes(messageOption) &&
                    <ContactUploader handleFileChange={handleFileChange} hint={`Upload a .csv or .xlsx file(max 2MB),column headers: phoneNumber`} requiredHeaders={['phoneNumber']} templateUrl={"/templates/bulkNumbers.xlsx"} />
                }
                {["group"].includes(messageOption) && <GroupsInput/>}
                {["bulk", "custom"].includes(messageOption) && <PhoneNumberTextArea form={form} isSending={isSending} />}
                {scheduleMessage && <ScheduleMessageInput/>}
            </div>
            {/* Right Column */}
            <div className="space-y-8">
                <div>
                    <label className="my-2">Message Templates</label>
                    <Select
                        showSearch
                        size="large"
                        placeholder="Select Message Template"
                        onChange={handleMessageTemplateChange}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        loading={isLoadingSmsTemplates}
                        value={template}
                        className="w-full"
                        options={(smsTemplateData?.data?.data || []).map(template => {
                            return {
                                label: template.title,
                                value: template.content
                            }
                        })}
                        dropdownRender={(menu) => (
                            <>
                                {menu}
                                <div className="p-2">
                                    <Link href={"/settings"}>
                                        <Button
                                            type="dashed"
                                            block
                                        >
                                            Go To Setting
                                        </Button>
                                    </Link>
                                </div>
                            </>
                        )}
                    />
                </div>
                <MessageContentInput handleAiUseMessage={handleAiUseMessage} form={form} />
                <Form.Item name={"scheduleMessage"} label="Schedule Message">
                    <Switch/>
                </Form.Item>
                <div className="flex justify-between space-x-4">
                    <Button
                        htmlType="submit"
                        loading={isSending}
                        size={"large"}
                        className="w-full bg-button-dark text-white rounded  transition-colors"
                    >
                        {scheduleMessage ? "Schedule Message" : "Send Message"}
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default SingleSmsForm;
