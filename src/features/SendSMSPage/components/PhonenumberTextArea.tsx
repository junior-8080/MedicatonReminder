import {Form, Input, Tag} from "antd";
import {useEffect, useState} from "react";
import {sanitizeGhanaPhoneNumber} from "@/lib/helpers";

type Props = {
    form: any; // Ant Design Form instance
    isSending: boolean;
};

const PhoneNumberTextArea = ({form, isSending}: Props) => {
    const [inputValue, setInputValue] = useState<string>("");
    // Watch the receiverAddresses field from the form
    const receiverAddresses = Form.useWatch("receiverAddresses", form) || [];
    const [phoneNumbers, setPhoneNumbers] = useState<string[]>(receiverAddresses);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && inputValue.trim()) {
            e.preventDefault();
            handleSetInputNumber()
        }
    };

    const handleAddPhoneNumber = () => {
        if (inputValue) {
            handleSetInputNumber()
        }
    };

    const handleSetInputNumber = () => {
        const cleanedInputValue = sanitizeGhanaPhoneNumber(inputValue) || '';
        const newPhoneNumbers = [...phoneNumbers, cleanedInputValue];
        setPhoneNumbers([...new Set(newPhoneNumbers)]);
        form.setFieldsValue({receiverAddresses: newPhoneNumbers});
        setInputValue("")
    }

    const handleRemove = (phoneNumber: string) => {
        const newPhoneNumbers = phoneNumbers.filter((num) => num !== phoneNumber);
        setPhoneNumbers(newPhoneNumbers);
        form.setFieldsValue({receiverAddresses: newPhoneNumbers});
    };

    useEffect(() => {
        if(receiverAddresses.length === 0){
            setPhoneNumbers([])
        }
    },[isSending])

    return (
        <div className="relative border border-gray-200 bg-white p-2">
            {Array.isArray(phoneNumbers) && phoneNumbers.length > 0 && (
                <div className="h-60">
                    {phoneNumbers?.map((phoneNumber) => (
                        <Tag
                            key={phoneNumber}
                            closable={!isSending}
                            onClose={(e) => {
                                e.preventDefault();
                                handleRemove(phoneNumber);
                            }}
                            className="bg-light-primary text-white  mb-1 cursor-pointer pointer-events-auto p-1"
                        >
                            {phoneNumber}
                        </Tag>
                    ))}
                </div>
            )}
            <Form.Item name="receiverAddresses" rules={[{required: true, message: "Please enter your phone number!"}]}>
                <div className="flex items-start gap-2">
                    <Input.TextArea
                        cols={2}
                        rows={1}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 border border-borders rounded p-2"
                        placeholder="Enter PhoneNumber"
                        disabled={isSending}
                    />
                    <span
                        className="border border-gray-100 p-2 text-center cursor-pointer rounded-md  bg-primary text-white whitespace-nowrap"
                        onClick={handleAddPhoneNumber}
                    >
            + Add
        </span>
                </div>
            </Form.Item>
            <p className="text-xs mt-1 font-bold">
                <span>NB:</span> Enter a phone number and press
                Enter to add it. Example: <span>233547141237</span>
            </p>
        </div>
    );
};

export default PhoneNumberTextArea;