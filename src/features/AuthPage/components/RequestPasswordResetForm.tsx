"use client"
import React, {useState} from "react";
import AuthTitle from "@/features/AuthPage/components/AuthTitle";
import {Button, Form, Input} from "antd";
import {RequestPasswordResetType} from "@/features/AuthPage/lib/types";


type Props = {
    onSubmit: (data:RequestPasswordResetType) => void;
    loading:boolean;
}

const RequestPasswordResetForm = ({onSubmit,loading}: Props) => {
    const [form] = Form.useForm();
    return <div>
        <AuthTitle title="Password Reset" subtitle={"Set your new password"}/>
        <Form className="space-y-4" layout="vertical" form={form} onFinish={(data) => onSubmit({
            phone:`+${data.phone}`,
            deliveryMethod:"sms"
        })}>
            {/*<Form.Item label="Enter your email" rules={[{required:true}]}>*/}
            {/*    <Input*/}
            {/*        name="email"*/}
            {/*        type="email"*/}
            {/*        placeholder="eg.johnfransis@gmail.com"*/}
            {/*        className="w-full px-4 py-2 rounded-md bg-gray-light  focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"*/}
            {/*    />*/}
            {/*</Form.Item>*/}
            <Form.Item
                name="phone"
                label="Enter your phoneNumber"
                rules={[
                    {required: true, message: "PhoneNumber is required"},
                ]}
            >
                <Input
                    name="phone"
                    placeholder="23320000000"
                    className="w-full px-4 py-2 rounded-md bg-gray-light placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </Form.Item>
            <Button htmlType="submit" size={"large"} loading={loading}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200">
                Submit
            </Button>
        </Form>
    </div>
}

export default RequestPasswordResetForm