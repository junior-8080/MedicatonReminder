import {CheckCircleFilled} from "@ant-design/icons";
import React, {useState} from "react";

const MessageType = () => {
    const [messageType, setMessageType] = useState('text');
    return <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            Message Type
        </label>
        <div className="grid grid-cols-2 gap-4">
            <button
                className={`flex items-center justify-between border rounded py-2 px-4 ${
                    messageType === 'text'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-700'
                }`}
                onClick={() => setMessageType('text')}
            >
                Text
                {messageType === 'text' ? (
                    <CheckCircleFilled className="ml-2 h-4 w-4 text-blue-600"/>
                ) : <CheckCircleFilled
                    className="ml-2 h-4 w-4 text-white border-1 border-gray-500"/>}
            </button>
            <button
                className={`flex items-center justify-between border rounded py-2 px-4 ${
                    messageType === 'flash'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-700'
                }`}
                onClick={() => setMessageType('flash')}
            >
                Flash
                {messageType === 'flash' ? (
                    <CheckCircleFilled
                        className="ml-2 fill-white border-gray-300 h-4 w-4 text-blue-600"/>
                ) : <CheckCircleFilled
                    className="ml-2 h-4 w-4 text-white border-1 border-gray-500"/>}
            </button>
        </div>
    </div>
}

export default  MessageType