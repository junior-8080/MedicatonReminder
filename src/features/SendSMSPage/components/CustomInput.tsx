import React from "react";
import { Form, Input } from "antd";

type Props = {
  labelText: string;
  name: string;
  placeholder?: string;
};

const CustomInput = ({
  name,
  labelText,
  placeholder = "Enter value",
}: Props) => {
  return (
    <Form.Item
      label={labelText}
      name={name}
      rules={[{ required: true, message: `${labelText} is required` }]}
    >
      <Input
        id={name.replace("_", "-")}
        placeholder={placeholder}
        className="w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        size={"large"}
      />
    </Form.Item>
  );
};

// @ts-ignore
export default CustomInput;
