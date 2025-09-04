"use client";
import React from "react";
import {Button, Form, Input} from "antd";
import {AuthView, SignupBody} from "@/lib/type";
import AuthTitle from "@/features/AuthPage/components/AuthTitle";

type Props = {
    onSubmit: (data: { email: string, name: string; password: string }) => void;
    setAuthView: (view: AuthView) => void;
    isSubmitting: boolean;
};

const SignUpForm = ({onSubmit, setAuthView, isSubmitting}: Props) => {
    const [form] = Form.useForm();

    const strongPasswordValidator = (_: any, value: string) => {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!strongPasswordRegex.test(value)) {
            return Promise.reject(
                new Error(
                    "Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character (e.g., !@#$%^&*)"
                )
            );
        }
        return Promise.resolve();
    };

    const validateGhanaNumber = (_: any, value: string) => {
        if (!value) {
            return Promise.reject('Please enter your phone number');
        }
        const cleaned = value.replace(/\D/g, '');
        if (/^233\d{9}$/.test(cleaned)) {
            return Promise.resolve();
        }
        return Promise.reject('Please enter a valid Ghanaian phone number (e.g., 233200000000)');
    };

    const handleSubmit = (values: SignupBody) => {
        const {firstName, lastName, ...signUpPayload} = values;

        onSubmit({
            name: `${firstName} ${lastName}`,
            ...signUpPayload,
        });
    };

    return (
        <div>
            <AuthTitle
                title="Sign Up"
                subtitle="Enter your personal data to sign up."
            />
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="space-y-4"
                initialValues={{}}
            >

                <Form.Item
                    name="firstName"
                    label={<span className="text-sm font-medium">First Name</span>}
                    rules={[
                        {required: true, message: "First Name is required"},
                    ]}
                >
                    <Input
                        placeholder="Enter first name"
                        className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                    />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label={<span className="text-sm font-medium">Last Name</span>}
                    rules={[
                        {required: true, message: "Last Name is required"},
                    ]}
                >
                    <Input
                        placeholder="Enter last name"
                        className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    label={<span className="text-sm font-medium">Email</span>}
                    rules={[
                        {required: true, message: "Email is required"},
                        {type: "email", message: "Please enter a valid email"},
                    ]}
                >
                    <Input
                        type="email"
                        placeholder="Eg. johnfrancis@gmail.com"
                        className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    label={<span className="text-sm font-medium">Password</span>}
                    rules={[{
                        required: true,
                        message: "Please enter your password"
                    }, {validator: strongPasswordValidator},]}
                >
                    <Input.Password name="password"
                                    className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"></Input.Password>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200 mt-6"
                        size={"large"}
                        loading={isSubmitting}
                    >
                        SignUp
                    </Button>
                </Form.Item>
            </Form>

            <div className="text-center">
                <p className="mt-4 text-sm text-gray-400">
                    By creating an account, you agree to the{" "}
                    <a
                        href="#"
                        className="underline text-sm text-gray-600 cursor-pointer"
                    >
                        Terms of Service
                    </a>
                </p>
                <p className="mt-4 text-sm text-gray-400">
                    Already have an account?{" "}
                    <span
                        className="text-sm text-gray-600 underline cursor-pointer"
                        onClick={() => setAuthView("login")}
                    >
            Login
          </span>
                </p>
            </div>
        </div>
    );
};

export default SignUpForm;
