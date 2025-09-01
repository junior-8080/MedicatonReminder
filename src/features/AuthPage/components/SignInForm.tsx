"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { AuthView, LoginBody } from "@/lib/type";
import AuthTitle from "@/features/AuthPage/components/AuthTitle";

type Props = {
  onSubmit: (data: LoginBody) => Promise<void>;
  setAuthView: (view: AuthView) => void;
  isSubmitting: boolean;
};

const SignInForm = ({ onSubmit, setAuthView, isSubmitting }: Props) => {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values: LoginBody) => {
    await onSubmit({ email: values.email, password: values.password });
  };

  return (
    <div>
      <AuthTitle
        title="Login into your account"
        subtitle="Enter your details to login."
      />
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-4"
      >
        <Form.Item
          name="email"
          label={<span className="block text-sm font-medium mb-1">Email</span>}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            type="email"
            placeholder="eg. johnfrancis@gmail.com"
            className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            size={"large"}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={
            <span className="block text-sm font-medium mb-1">Password</span>
          }
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <span className="relative block">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
              size={"large"}
            />
            <Button
              type="text"
              className="absolute right-1 top-1 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
              icon={showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            />
          </span>
        </Form.Item>

        <Form.Item>
          <div className="flex items-center justify-between">
            <div></div>
            <p
              className="text-primary text-sm cursor-pointer"
              onClick={() => setAuthView("request-password-reset")}
            >
              Forgot Password?
            </p>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200"
            size={"large"}
            loading={isSubmitting}
          >
            Login
          </Button>
        </Form.Item>
      </Form>

      <div className="flex items-center gap-1 justify-center text-sm mt-4">
        <p className="text-center text-sm text-gray-400">
          Do not have an account?
        </p>
        <p
          className="underline cursor-pointer text-gray-600"
          onClick={() => setAuthView("signup")}
        >
          Sign up
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
