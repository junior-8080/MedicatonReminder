"use client"
import React, {useRef} from "react";

const UploadContact = () => {

    const fileInputRef = useRef(null);
    const handleUploadClick = () => {
        // @ts-ignore
        fileInputRef?.current?.click()
    };

    return <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Contact
        </label>
        <div
            className="border border-dashed border-gray-300 rounded p-6 flex flex-col items-center justify-center">
            {/* Hidden file input */}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".csv,.xlsx,.xls"
            />
            {/* Custom upload button using image */}
            <div onClick={handleUploadClick} className="w-full cursor-pointer text-center">
                <p className="text-sm text-gray-500">Drag and Drop all contact here</p>
                <button type="button" className="mt-4 text-blue-600 text-sm font-medium">
                    Browse Files
                </button>
            </div>
        </div>
    </div>
}

export default  UploadContact