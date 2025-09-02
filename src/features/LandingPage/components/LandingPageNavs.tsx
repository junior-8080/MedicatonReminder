'use client'
import React, {useState} from "react";
import {Button} from "antd";
import Link from "next/link";

const LandingPageNavs = () => {
    const landingPageNavLinks = [
        {text: 'How It Works', url: '#works'},
        {text: 'Features', url: '#features'},
        {text: 'Contact', url: '#contact'}
    ];

    return (
        <header className="w-full shadow-sm">
            <div className="flex justify-between items-center px-6">
                <div className="flex items-center">
                    <img
                        src="/Logo.png"
                        alt="app-logo"
                        className="w-[50px] rounded-full"
                    />
                    <p className="text-[#c94242]">MedReminder</p>
                </div>
                <nav className="hidden md:flex items-center">
                    {landingPageNavLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="ml-6 font-medium transition-all duration-300"
                        >
                            {link.text}
                        </a>
                    ))}
                </nav>
               <Link href="/auth" ><Button className="bg-blue-600 text-white">SignUp</Button></Link>

            </div>
        </header>
    );
};

export default LandingPageNavs;