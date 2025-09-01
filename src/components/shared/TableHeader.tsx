import {Button, Input, Space} from "antd";
import {DownloadOutlined, SearchOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import Filters from "@/components/shared/Filters";
import {FilterType} from "@/lib/type";

type TableFilter = {
    id: string;
    label: string;
}

type Props = {
    title?: string;
    subtitle?:string;
    filters?: FilterType [];
    onSearch?: (text: string) => void;
    // onActionButtonClick: () => void;
    actionButtonLabel?: string;
    onFilterChange? : (filter:FilterType) => void;
    ActionButton?:  any;
}
const TableHeader = ({title, filters,actionButtonLabel,onSearch,onFilterChange,ActionButton,subtitle}: Props) => {
    const [searchValue,setSearchValue] = useState('')

    return <div className="flex items-center justify-between p-1 p-l-0">
        <div>
            <h1 className="text-xl">{title}</h1>
            <p className="text-xs">{subtitle}</p>
        </div>
        <div className="flex justify-between items-center">
            {filters ? <Filters filters={filters} onChange={(filter) => onFilterChange?.(filter)}/> : <div></div>}
            <Space>
                {onSearch && <div className="flex items-center">
                    <Input
                        placeholder="Search anything"
                        className="w-64"
                        size={"middle"}
                        onChange={(e: any) => {
                            setSearchValue(e.target.value)
                        }}
                        allowClear
                    />
                    <Button onClick={() => onSearch?.(searchValue)}>
                        <SearchOutlined/>
                    </Button>

                </div>}
                {ActionButton}
            </Space>
        </div>
    </div>
}

export default TableHeader