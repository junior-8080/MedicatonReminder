import React from "react";
import {AuthTileType} from "@/lib/type";
import Link from "next/link";


const AuthTitle = ({title,subtitle}:AuthTileType) => {
    return <div className="text-center">
        <Link href="/" className="flex justify-center mb-6">
            <img src="/logo.png" className="w-[180px]" alt="logo"/>
        </Link>
        <h2 className="text-2xl  font-semibold mb-4">{title}</h2>
        <p className="mb-8 text-gray-400">{subtitle}</p>
    </div>
}

export default  AuthTitle