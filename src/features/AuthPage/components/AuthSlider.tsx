"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthBanner } from "@/lib/type";

type Props = {
    authSliderData: AuthBanner[];
};

const AuthSlider = ({ authSliderData }: Props) => {
    const [activeAuthBanner, setActiveAuthBanner] = useState(authSliderData[0]);

    const handleBannerChange = (item: AuthBanner) => {
        setActiveAuthBanner(item);
    };

    return (
        <div className="hidden md:block relative bg-slate-800 text-white overflow-hidden h-full">
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeAuthBanner.id}
                        src={activeAuthBanner.bannerImage}
                        alt="Person smiling at phone"
                        className="w-full h-full mx-auto object-cover bg-center opacity-80"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>

            <div className="relative h-full flex flex-col justify-end p-12 z-10">
                <div className="flex items-center gap-2 mb-4">
                    {authSliderData.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`w-[30px] h-[10px] cursor-pointer rounded-md ${
                                activeAuthBanner.id === item.id ? "bg-white" : "bg-gray-700"
                            }`}
                            onClick={() => handleBannerChange(item)}
                            whileHover={{ scale: 1.2 }}
                        />
                    ))}
                </div>

                <motion.h2
                    key={activeAuthBanner.id}
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {activeAuthBanner.title}
                </motion.h2>

                <motion.p
                    key={activeAuthBanner.subtitle}
                    className="text-lg opacity-90"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    {activeAuthBanner.subtitle}
                </motion.p>
            </div>
        </div>
    );
};

export default AuthSlider;
