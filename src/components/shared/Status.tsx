import {statusColors, statusColorsDot} from "@/lib/data";
import React from "react";

type Props  = {
    status: string
}

const Status = ({status}:Props) => {
    return (
        <div
            className={`flex items-center w-fit justify-center rounded-2xl gap-1 px-2 text-center font-semibold ${statusColors[status.toLowerCase()]}`}>
            <div
                className={`inline-block w-1.5 h-1.5 rounded-full ${statusColorsDot[status.toLowerCase()]}`}></div>
            <p className="text-xs">{status}</p>
        </div>
    );
};


export default Status