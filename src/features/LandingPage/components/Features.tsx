import React from "react";
import {FaHeadphonesAlt} from "react-icons/fa";
import {MdOutlineDashboard} from "react-icons/md";
import {SlCalender} from "react-icons/sl";


const Features = () => {
    const landingPageFeatures = [
        {
            icon: <FaHeadphonesAlt className="mx-auto"/>,
            title: 'Automated Voice Calls',
            description: 'Intelligent voice system delivers personalized medication reminders at scheduled times.'
        },
        {
            icon: <MdOutlineDashboard className="mx-auto"/>,
            title: 'Doctor Dashboard',
            description: 'Comprehensive analytics and patient compliance tracking for healthcare providers.'
        },
        {
            icon: <SlCalender className="mx-auto"/>,
            title: 'Customizable Schedules',
            description: 'Flexible scheduling options to match any medication regimen or patient needs.'
        },
    ];
    return (
        <section className="py-20 px-8 bg-gray-50" id="features">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Features
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Advanced technology designed to improve medication adherence and patient outcomes
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-6xl mx-auto">
                    {landingPageFeatures.map((feature, index) => (
                        <div key={index}
                             className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="mb-4 text-primary text-2xl">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Features