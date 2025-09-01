"use client"
import React, {useState} from "react";
import AuthTitle from "@/features/AuthPage/components/AuthTitle";
import {Button, Form, Input} from "antd";
import {RequestPasswordResetType, ResetPasswordType} from "@/features/AuthPage/lib/types";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";


type Props = {
    onSubmit: (data:ResetPasswordType) => void;
    loading:boolean;
}

const ResetPasswordForm = ({onSubmit,loading}: Props) => {
    const [form] = Form.useForm();
    const [showPassword, setShowPassword] = useState(false);
    const strongPasswordValidator = (_: any, value: string) => {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!strongPasswordRegex.test(value)) {
            return Promise.reject(
                new Error(
                    "Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character (e.g., !@#$%^&*)"
                )
            );
        }
        return Promise.resolve();
    };

    return <div>
        <AuthTitle title="Password Reset" subtitle={"Set your new password"}/>
        <Form className="space-y-4" layout="vertical" form={form} onFinish={(data) => onSubmit({
            ...data,
            deliveryMethod:"sms"
        })}>
            <Form.Item label="Enter your email" rules={[{required:true}]} name="email">
                <Input
                    type="email"
                    placeholder="eg.johnfransis@gmail.com"
                    className="w-full px-4 py-2 rounded-md bg-gray-light  focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                />
            </Form.Item>
            <Form.Item
                name="phoneNumber"
                label="Enter your phoneNumber"
                rules={[
                    {required: true, message: "PhoneNumber is required"},
                ]}
            >
                <Input
                    placeholder="23320000000"
                    className="w-full px-4 py-2 rounded-md bg-gray-light placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </Form.Item>
            <Form.Item
                name="newPassword"
                label={<span className="text-sm font-medium">Password</span>}
                rules={[{
                    required: true,
                    message: "Please enter your password"
                }, {validator: strongPasswordValidator},]}
            >
          <span className="relative block">
            <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your  new assword"
                className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            />
            <Button
                type="text"
                className="absolute right-1 top-1 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
            />
          </span>
            </Form.Item>
            <Button htmlType="submit" size={"large"} loading={loading}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200">
                Submit
            </Button>
        </Form>
    </div>
}

export default ResetPasswordForm