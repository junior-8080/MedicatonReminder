import {Button, Form, Input, Modal} from "antd";
import {SenderIdBodyType} from "@/features/SendSMSPage/lib/types";
import {useCreateSenderId} from "@/features/SendSMSPage/hooks/useCreateSenderId";
import {toast} from "react-toastify";

type Props = {
    open: boolean;
    handleClose: () => void;
    refetch: () => any;
}
const AddSenderIdModal = ({open, handleClose, refetch}: Props) => {
    const [form] = Form.useForm();
    const handleSuccess = () => {
        form.resetFields()
        refetch();
        handleClose();
        toast.success("Sender ID Created")
    }
    const {isPending: isCreatingSenderId, mutate: createSenderId} = useCreateSenderId(handleSuccess)
    const handleCreateSenderId = (values: SenderIdBodyType) => {
        createSenderId(values);
    }
    return <Modal
        title="Create New SenderId"
        open={open}
        onCancel={() => {
            refetch();
            handleClose()
        }}
        footer={null}
    >
        <Form
            form={form}
            layout="vertical"
            onFinish={handleCreateSenderId}
        >
            <Form.Item
                name="name"
                label="SenderId Name"
                rules={[{required: true, message: "Please enter a senderId name"}, {min: 1, max: 11},{
                    pattern: /^[a-zA-Z0-9]+$/,
                    message: "SenderId must contain only letters and numbers, no spaces or special characters"
                }]}
            >
                <Input placeholder="Enter senderId"/>
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[{required: true, message: "Please enter a senderId description"}]}
            >
                <Input placeholder="Enter senderId"/>
            </Form.Item>
            <Form.Item>
                <Button className="bg-primary text-white" htmlType="submit" block loading={isCreatingSenderId}>
                    Create
                </Button>
            </Form.Item>
        </Form>
    </Modal>
}


export default AddSenderIdModal
