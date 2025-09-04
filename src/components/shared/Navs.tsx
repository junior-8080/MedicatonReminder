"use client";
import React, {useState} from "react";
import {navItems} from "@/lib/data";
import {CiLogout} from "react-icons/ci";
import Link from "next/link";
import {useAuth} from "@/features/AuthPage/hooks/useAuth";
import {useGetWallet} from "@/lib/hooks/useGetWalltet";
import {usePathname} from 'next/navigation';
import {Avatar, Button, Popover} from "antd";
import { IoMdArrowDropdown } from "react-icons/io";



const Navs = () => {
    const pathname = usePathname();
    const {user, logout} = useAuth();
    const {isLoading: isLoadingBalance, data: walletData} = useGetWallet(
        user?.id || ""
    );

    const [menuOpen, setMenuOpen] = useState(false);
    const handleLogout = () => {
        logout();
        setMenuOpen(false);
    };

    return (
        <div className="w-full">
            <div className="bg-primary py-3 flex items-center justify-between px-8">
                <Link href={"/dashboard"}>
                    <img src="/logo.png" className="w-[80px] bg-white rounded-full" alt="logo"/>
                </Link>
                <div className="flex items-center gap-4 text-white cursor-pointer text-sm">
                    <div className="flex items-center bg-light-primary rounded-3xl border border-2-white py-2 px-4 gap-4">
                        {/*<Link href={"/wallet"}>*/}
                            <p className="rounded-2xl flex items-center gap-1">
                                <img src="/svgs/money.svg" alt="msg" className="w-[20px]" />GH₵{walletData?.data.balance ?? "0.00"}
                            </p>
                        {/*</Link>*/}
                        <p>|</p>
                    </div>
                    <Link href={"/wallet"}>
                        <Button className="text-primary rounded-md"><span className="text-lg">+</span> TopUp</Button>
                    </Link>

                    <div className="flex items-center text-white" onClick={() => setMenuOpen(!menuOpen)}>
                        {user && (
                            <Avatar className="text-sm">{`${user?.name.slice(0, 1)}`}</Avatar>
                        )}
                        <div className="relative">
                            <button
                                className="flex items-center text-slate-300 cursor-pointer focus:outline-none"
                            >
                                <IoMdArrowDropdown size={14} className="text-white"/>
                            </button>

                            {menuOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md p-2 text-black"
                                    onMouseLeave={() => setMenuOpen(false)}
                                >
                                    {/*<Link href={"/settings"} className="flex items-center gap-2 p-2"*/}
                                    {/*>*/}
                                    {/*    <CiSettings/>*/}
                                    {/*    Settings*/}
                                    {/*</Link>*/}
                                    <div>
                                        <p
                                            className="flex items-center gap-2 text-red-500 p-2"
                                            onClick={handleLogout}
                                        >
                                            <CiLogout/>
                                            Logout
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navs;
