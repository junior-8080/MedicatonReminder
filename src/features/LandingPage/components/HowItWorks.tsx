import React from "react";
import {FaHeadphonesAlt, FaRegHeart} from "react-icons/fa";
import {CiHospital1} from "react-icons/ci";
import {CgArrowLongRightC} from "react-icons/cg";
import {SlCalender} from "react-icons/sl";
import {VscGraph} from "react-icons/vsc";
import {IoIosPeople} from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";




const HowItWorks = () => {
    const healthCare = [
        {
            title: "Schedule Medications",
            description: "Set up patient medication schedules through our intuitive dashboard",
            icon: <SlCalender className="w-6 h-6 text-blue-700" />
        },
        {
            title: "Automated Calls",
            description: "System automatically calls patients at prescribed times",
            icon: <FaHeadphonesAlt className="w-6 h-6 text-blue-700" />
        },
        {
            title: "Monitor Compliance",
            description: "Track patient adherence with real-time reporting and analytics",
            icon: <VscGraph className="w-6 h-6 text-blue-700" />
        }
    ];

    const patients = [
        {
            title: "Receive Call",
            description: "Get a friendly voice reminder at the exact time your doctor scheduled",
            icon: <BiPhoneCall className="w-6 h-6 text-green-700" />
        },
        {
            title: "Confirm Intake",
            description: "Simply confirm you've taken your medication or request a reminder",
            icon: <IoMdCheckmarkCircleOutline className="w-6 h-6 text-green-700" />
        },
        {
            title: "Stay Healthy",
            description: "Maintain perfect adherence and improve your health outcomes",
            icon: <FaRegHeart className="w-6 h-6 text-green-700" />
        }
    ];

    const ProcessCard = ({ item, showArrow, bgColor, iconBg }:{item:any,showArrow:boolean,bgColor:string,iconBg:string}) => (
        <div id={'works'} className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full">
                <div className={`p-6 rounded-lg border-2 border-gray-200 hover:border-${bgColor}-200 transition-colors duration-200 h-full`}>
                    <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 ${iconBg} rounded-lg flex-shrink-0`}>
                            {item.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {showArrow && (
                <div className="hidden lg:block">
                    <CgArrowLongRightC className="w-8 h-8 text-gray-400" />
                </div>
            )}
        </div>
    );

    return (
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A simple, automated system that connects healthcare providers with patients to ensure medication adherence
                    </p>
                </div>
                <div className="mb-16">
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center gap-2 py-3 px-6 rounded-full bg-blue-100 border border-blue-200">
                            <CiHospital1 className="w-5 h-5 text-blue-800" />
                            <span className="font-semibold text-blue-800">For Healthcare Providers</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {healthCare.map((item, index) => (
                            <ProcessCard
                                key={item.title}
                                item={item}
                                showArrow={index !== healthCare.length - 1}
                                bgColor="blue"
                                iconBg="bg-blue-100"
                            />
                        ))}
                    </div>
                </div>

                {/* Patients Section */}
                <div>
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center gap-2 py-3 px-6 rounded-full bg-green-100 border border-green-200">
                            <IoIosPeople className="w-5 h-5 text-green-700" />
                            <span className="font-semibold text-green-700">For Patients</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {patients.map((item, index) => (
                            <ProcessCard
                                key={item.title}
                                item={item}
                                showArrow={index !== patients.length - 1}
                                bgColor="green"
                                iconBg="bg-green-100"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;


