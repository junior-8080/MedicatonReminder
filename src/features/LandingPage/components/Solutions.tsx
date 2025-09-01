import React from "react";
import {GoGraph} from "react-icons/go";
import {FaRegHeart} from "react-icons/fa";


const Solutions = () => {

    const solutions = [
        {
            title: "The Challenge",
            description: `Medication non-adherence affects 50% of patients, leading to 125,000 deaths annually and $100 billion in healthcare costs`,
            icon: <div className="p-2 bg-red-100 rounded-md">
                <GoGraph className="text-red-700"/>
            </div>
            ,

        },
        {
            title: "Our Solution",
            description: `Automated voice calls scheduled by healthcare providers ensure patients never miss their medications.`,
            icon: <div className="p-2 bg-blue-100 rounded-md">
                <FaRegHeart className="text-blue-700"/>
            </div>
        }
    ]
    return (
        <section className="bg-gray-50 sm:mt-4 md:mt-12">
            <div className="w-[80%] mx-auto">
                <div className="flex  flex-col sm:flex-row justify-center items-center gap-8">
                    {solutions.map((i) => (
                        <div key={i.title} className="px-8 py-10 space-y-4">
                            <div className="flex items-center gap-2">
                                {i.icon}
                                <p>{i.title}</p>
                            </div>
                            <p>{i.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions