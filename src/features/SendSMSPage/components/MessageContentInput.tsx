import {Button, Form, Input, Modal} from "antd";
import {LuBrain} from "react-icons/lu";
import {useEffect, useState} from "react";
import {useGenerateAiMessage} from "@/features/SendSMSPage/hooks/useGenerateAiMessage";
import {useWatch} from 'antd/es/form/Form';
import {calculateMessageCount} from "@/lib/helpers";

type Props = {
    handleAiUseMessage: (message: string) => void;
    form: any;
}

const MessageContentInput = ({handleAiUseMessage, form}: Props) => {
    const [generateAi, setGenerateAi] = useState(false);
    const [messageAi, setMessageAi] = useState("");
    const [context, setContext] = useState("");
    const [message, setMessage] = useState("");
    const [messageCount, setMessageCount] = useState(0);
    const {isPending: isGenerating, mutate: generateAiMessage} = useGenerateAiMessage((data) => {
        setMessageAi(data?.data?.message);
        setMessage(data?.data?.message);
    });
    const messageFr = useWatch('message', form);

    const handleMessageChange = (e: any) => {
        const newMessage = e.target.value;
        setMessage(newMessage);
        const count = calculateMessageCount(newMessage);
        setMessageCount(count || 0);
    };

    const handleGenerate = () => {
        generateAiMessage({context});
    };

    useEffect(() => {
        if(messageFr){
          const count = calculateMessageCount(messageFr);
          setMessageCount(count)
        }else{
            setMessageCount(0);
        }
    }, [messageFr]);

    return (
        <div>
            <Form.Item
                label="Message Content"
                name="message"
                rules={[
                    {required: true, message: "Please enter your message content!"},
                ]}
            >
                <Input.TextArea
                    id="message-content"
                    rows={12}
                    value={message}
                    onChange={handleMessageChange}
                />
            </Form.Item>
            <div className="flex justify-between items-center cursor-pointer rounded-sm"
                 onClick={() => setGenerateAi(true)}>
                <p className="bg-gray-100 p-2 flex items-center gap-1">
                    Message Count: {messageCount}
                </p>
                <div className="bg-gray-100 p-2 flex items-center gap-1">
                    <p>Generate Message AI</p>
                    <LuBrain className="text-light-primary"/>
                </div>
            </div>
            <Modal
                open={generateAi}
                onCancel={() => setGenerateAi(false)}
                destroyOnClose={true}
                footer={[]}
            >
                <div className="flex flex-col gap-4">
                    <label>Enter Message Context For AI Suggestions:</label>
                    <Input.TextArea value={context} onChange={(e) => setContext(e.target.value)}/>
                    <div className="flex justify-end">
                        <Button
                            className="bg-primary text-white cursor-pointer"
                            loading={isGenerating}
                            icon={<LuBrain/>}
                            iconPosition={"end"}
                            onClick={handleGenerate}
                        >
                            Generate
                        </Button>
                    </div>
                </div>
                {messageAi && (
                    <div className="mt-4">
                        <Input.TextArea value={messageAi} rows={12}/>
                        <div
                            className="flex justify-end my-2"
                            onClick={() => {
                                form.setFieldValue("message", message);
                                const count = calculateMessageCount(message)
                                setMessageCount(count || 0);
                                setGenerateAi(false);
                            }}
                        >
                            <p className="bg-gray-200 py-1 px-4 cursor-pointer">Use Message</p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default MessageContentInput;