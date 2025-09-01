'use client'
import React,{useEffect,useState} from "react";
import {BiArrowToTop} from "react-icons/bi"

export const Footer = () => {
    const landingPageFooterLinks = [
        {text: 'Terms of Service', url: '/terms'},
        {text: 'Privacy Policy', url: '/privacy'},
        {text: 'Help Center', url: '/help'},
        {text: 'API Documentation', url: '/api-docs'},
        {text: 'Blog', url: '/blog'}
    ];
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <footer className="bg-blue-600 py-4 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div className="mb-8 md:mb-0">
                        <img src="/logo.png" className="w-[50px] bg-white rounded-full" alt={"logo"}/>
                        <p className="text-white mt-2 text-sm">
                            Powerful SMS solutions for businesses of all sizes. Reach your customers with timely,
                            relevant messages.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
