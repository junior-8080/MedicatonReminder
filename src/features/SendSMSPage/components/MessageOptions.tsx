import React from 'react';
import {CheckCircleFilled} from "@ant-design/icons";
import {MessageOptionType} from "@/lib/type";
import clsx from "clsx";

type MessageOptionProps = {
    icon: string;
    title: string;
    description: string;
    selected: boolean,
    onClick: () => void;
    activeShadowClass: string
}
const MessageOption = ({icon, title, description, selected, onClick,activeShadowClass}: MessageOptionProps) => {
    return (
        <div
            className={`relative flex items-start p-4 rounded-lg border ${activeShadowClass} cursor-pointer transition-colors duration-200`}
            onClick={onClick}
        >
            {selected && (
                <div className="absolute top-2 right-2">
                    <CheckCircleFilled className="h-5 w-5 text-primary"/>
                </div>
            )}
            <div className="flex-shrink-0 mr-4">
                <img src={icon} alt={title}/>
            </div>
            <div className="flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                <p className="mt-1 text-xs text-gray-500">{description}</p>
            </div>
        </div>
    );
};

type Props = {
    messageOptions: MessageOptionType[],
    selectedId: string;
    handleSelected: (selectedId:string) => void
}


const MessagingOptions = ({messageOptions, selectedId,handleSelected}: Props) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {messageOptions.map((option) => (
                <MessageOption
                    key={option.id}
                    icon={option.icon}
                    title={option.title}
                    description={option.description}
                    selected={option.id === selectedId}
                    onClick={() => handleSelected(option.id)}
                    activeShadowClass = {clsx(
                        option.id === selectedId ? `shadow-lg ${option.shadowColor}` : "border-gray-200 hover:bg-gray-50"
                    )}
                />
            ))}
        </div>
    );
};

export default MessagingOptions;