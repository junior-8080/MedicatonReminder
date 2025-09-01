"use client";

import React from "react";
import {Button} from "antd";
import type {ColumnsType} from "antd/es/table";
import {PiDotsThreeOutlineThin} from "react-icons/pi";

import AppTable from "@/components/shared/AppTable";
import {DataType} from "../lib/types";
import {smsTableData} from "../lib/mockData";
import TableHeader from "@/components/shared/TableHeader";
import {smsHistoryTableFilters} from "@/lib/data";
import SendSMSButton from "@/components/shared/SendSMSButton";

type Props = {
    onActionButtonClick: () => void
}


const SMSHistory = ({onActionButtonClick}: Props) => {
    const columns: ColumnsType<DataType> = [
        {
            title: "Message ID",
            dataIndex: "messageId",
            key: "messageId",
            render: (text) => <span>{text}</span>,
        },
        {
            title: "Sender ID",
            dataIndex: "senderId",
            key: "senderId",
        },
        {
            title: "Message Type",
            dataIndex: "messageType",
            key: "messageType",
        },
        {
            title: "Phone Number",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Content",
            dataIndex: "content",
            key: "content",
            render: (text) => (
                <p className="p-1 rounded-sm text-center font-medium text-link text-sm bg-link bg-opacity-10">
                    Preview
                </p>
            ),
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <div className="flex items-center  justify-center rounded-2xl gap-1 p-[1px]  text-center bg-green-200">
                    <div className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p className="text-center">{status}</p>
                </div>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: () => <Button type="text" icon={<PiDotsThreeOutlineThin/>}/>,
        },
    ];
    const onSearch = (text: string) => {
    }
    return (
        <div className="border-[2px] border-[#E9EFF6] rounded-2xl">
            <TableHeader title="SMS management" actionButtonLabel="Send SMS" filters={smsHistoryTableFilters} onSearch={onSearch}
                          ActionButton={<SendSMSButton  />}/>
            <AppTable
                columns={columns}
                dataSource={smsTableData}
                pagination={{
                    total: 100,
                    showSizeChanger: false,
                    showQuickJumper: false,
                }}
            />
        </div>
    );
};

export default SMSHistory;
