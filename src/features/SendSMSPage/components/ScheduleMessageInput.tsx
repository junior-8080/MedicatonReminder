import {DatePicker, Form, Select} from "antd";
import {scheduleMessageFrequencies} from "@/lib/data";


const ScheduleMessageInput = () => {
    return (
        <div className="p-2 border-2 border-dotted rounded-sm">
            <p className="mb-4 font-semibold">Schedule Message Configuration </p>
            <Form.Item label="Select Frequency" name={"frequency"} rules={[{required: true, message: "Please enter your frequency"}]}>
                <Select
                    placeholder="Select schedule frequency"
                    options={scheduleMessageFrequencies.map((frequency) => ({
                        key: frequency,
                        value: frequency.toUpperCase(),
                        label: frequency,
                    }))}
                    showSearch
                    size={"large"}
                    className="w-full"
                />
            </Form.Item>
            {/*<Form.Item label="Select schedule start date" rules={[{required: true, message: "Please enter your phone number!"}]} name="start_date">*/}
            {/*    <DatePicker*/}
            {/*        format="YYYY-MM-DD HH:mm:ss"*/}
            {/*        showTime*/}
            {/*        className={"w-full"}*/}
            {/*        size={"large"}*/}
            {/*    />*/}
            {/*</Form.Item>*/}
        </div>
    );
};

export default ScheduleMessageInput;
