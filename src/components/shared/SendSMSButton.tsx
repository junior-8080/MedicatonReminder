import Link from "next/link";
import {Button} from "antd";
import {RiMailSendLine} from "react-icons/ri";

type Props = {
    size?: "large" | "middle" | "small"
}
const SendSMSButton = ({size}: Props) => {
    return <Link href={"/send-sms"}>
        <Button className={`bg-primary rounded-md p-2 text-white`} size={ size || "middle"} icon={<RiMailSendLine/>}>
            Send SMS</Button>
    </Link>
}

export default SendSMSButton