import {Button, Modal} from "antd";


type Props = {
    open: boolean;
    handleClose: () => void;
    message?: string;
    contactCount: number;
    messageCount: number;
    smsBalance: number;
    handleProceed: () => void;
    isSubmitting: boolean;
    frequency?:boolean
}
const SummaryModal = ({
                          open,
                          handleClose,
                          message,
                          contactCount,
                          messageCount,
                          smsBalance,
                          handleProceed,
                          isSubmitting,
                          frequency
                      }: Props) => {

    return <Modal
        title="SMS Summary"
        open={open}
        footer={null}
        onCancel={handleClose}
    >
        <div>
            <p className="p-2 bg-gray-light h-[80px] overflow-y-scroll">{message}</p>
            <div className="my-4">
                <p className="p-2  border-y-[1px]">Message Count: {messageCount}</p>
                <p className="p-2 border-y-[1px]">Total Recipient: {contactCount}</p>
                <p className="p-2 border-y-[1px]">Total Cost: {messageCount * contactCount}</p>
                {frequency && <p className="p-2 border-y-[1px]">Frequency: {frequency}</p>}
                <p className="p-2 border-y-[1px]">Current Sms Credit: {smsBalance}</p>
            </div>

        </div>
        <div>
            {smsBalance > (messageCount * contactCount) ?
                <Button className="w-full bg-primary text-center text-white" size="large" onClick={handleProceed}
                        loading={isSubmitting}>Proceed</Button> :
                <p className="p-2 text-red-600">Insufficient Balance.Kindly Buy Package</p>}
        </div>
    </Modal>
}


export default SummaryModal
