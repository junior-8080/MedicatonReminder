import { Form, Select} from "antd";
import {useGetGroups} from "@/features/ContactPage/hooks/useGetGroups";

const GroupsInput = () => {
    const {isLoading, data: groupData} = useGetGroups({page:1,pageSize:1000})
    return (
        <div className="">
            <Form.Item label="Group" name={"group"} rules={[{required: true, message: "Select group!"}]}>
                <Select
                    placeholder="Select group"
                    loading={isLoading}
                    options={(groupData?.data?.data || []).map((group) => ({
                        key: group.id,
                        value: JSON.stringify(group),
                        label: group.name,
                    }))}
                    showSearch
                    size={"large"}
                    className="w-full"
                    allowClear={true}
                />
            </Form.Item>
        </div>
    );
};

export default GroupsInput;
