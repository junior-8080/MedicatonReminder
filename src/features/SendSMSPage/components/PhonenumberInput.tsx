import React from "react";
import { Form, Input } from "antd";

const PhoneNumberInput = () => {
  return (
      <Form.Item
          label="Phone Number"
          name="receiverAddresses"
          rules={[{required: true, message: "Please enter your phone number!"}]}
      >
        <div className="relative">
          <Input
              id="phone-number"
              className="w-full pr-10"
              placeholder="eg: 23354177777"
              size={"large"}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <img src="/svgs/phonebook.svg" alt="phone-number-icon"/>
          </div>
        </div>
        <p className="text-xs mt-1">
          <span className="font-bold">NB:</span>Example: <span>233500000000</span>
        </p>
      </Form.Item>
  );
};

export default PhoneNumberInput;
