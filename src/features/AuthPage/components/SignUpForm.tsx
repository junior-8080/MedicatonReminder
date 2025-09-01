"use client";
import React, {useState} from "react";
import {Button, Form, Input, Select} from "antd";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {AuthView, SignupBody} from "@/lib/type";
import AuthTitle from "@/features/AuthPage/components/AuthTitle";
import {countries} from "@/features/AuthPage/lib/data";
import {sanitizeGhanaPhoneNumber} from "@/lib/helpers";

type Props = {
    onSubmit: (data: SignupBody) => void;
    setAuthView: (view: AuthView) => void;
    isSubmitting: boolean;
};

const SignUpForm = ({onSubmit, setAuthView, isSubmitting}: Props) => {
    const [form] = Form.useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        const {confirmPassword,phone, ...signUpPayload} = values;

        onSubmit({
            ...signUpPayload,
            phone: sanitizeGhanaPhoneNumber(phone) || phone,
            isValid: false,
            isKycVerify: "not_verified",
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
                    name="country"
                    label={<span className="text-sm font-medium">Country</span>}
                    rules={[
                        {required: true, message: "Country is required"},
                    ]}
                >
                    <Select
                        size={"large"}
                        className="w-full px-0 py-0 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500"
                        dropdownStyle={{backgroundColor: "white"}}
                        placeholder={"Select your country"}
                        optionFilterProp="label"
                        showSearch={true}
                        options={countries.slice(0,1).map((country) => {
                            return {
                                value: country.code.toUpperCase(),
                                label: country.name
                            }
                        })}
                    >

                    </Select>
                </Form.Item>

                <Form.Item
                    name="phone"
                    label={<span className="text-sm font-medium">Phone number</span>}
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
                    name="password"
                    label={<span className="text-sm font-medium">Password</span>}
                    rules={[{
                        required: true,
                        message: "Please enter your password"
                    }, {validator: strongPasswordValidator},]}
                >
          <span className="relative block">
            <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

                <Form.Item
                    name="confirmPassword"
                    label={<span className="text-sm font-medium">Confirm Password</span>}
                    dependencies={["password"]}
                    rules={[
                        {required: true, message: "Please confirm your password"},
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("The two passwords do not match")
                                );
                            },
                        }),
                    ]}
                >
          <span className="relative block">
            <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            />
            <Button
                type="text"
                className="absolute right-1 top-1 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                icon={
                    showConfirmPassword ? <EyeOutlined/> : <EyeInvisibleOutlined/>
                }
            />
          </span>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full bg-primary mt-8 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200"
                        size={"large"}
                        loading={isSubmitting}
                    >
                        Sign Up
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
