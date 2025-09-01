import {useState} from "react";
import {Button, Form, Select} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {useGetSenderId} from "@/features/SendSMSPage/hooks/useGetSenderId";
import AddSenderIdModal from "@/features/SendSMSPage/components/AddSenderIdModal";

const SenderIdInput = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {isLoading, data: senderIdData, refetch} = useGetSenderId({page:1,pageSize:100});

    return (
        <div className="">
            <Form.Item label="Sender Address" name={"senderAddress"} rules={[{required: true, message: "Select sender ID"}]}>
                <Select
                    placeholder="Select a senderId"
                    loading={isLoading}
                    options={(senderIdData?.data?.senders || []).filter(senderId => senderId.status === "approved").map((senderId) => ({
                        key: senderId.id,
                        value: senderId.name,
                        label: `${senderId.name}`,
                    }))}
                    showSearch
                    size={"large"}
                    className="w-full"
                    dropdownRender={(menu) => (
                        <>
                            {menu}
                            <div className="p-2">
                                <Button
                                    type="dashed"
                                    block
                                    icon={<PlusOutlined/>}
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Add SenderId
                                </Button>
                            </div>
                        </>
                    )}
                />
            </Form.Item>
            <AddSenderIdModal
                open={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
                refetch={refetch}
            />
        </div>
    );
};

export default SenderIdInput;
