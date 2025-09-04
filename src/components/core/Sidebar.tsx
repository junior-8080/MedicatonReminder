'use client'
import {FaPills} from "react-icons/fa6";
import {FaChartLine, FaFileMedicalAlt} from "react-icons/fa";
import {MdDashboard} from "react-icons/md";
import {useState} from "react";
import Link from "next/link";


const Sidebar = () => {
    const tabs = [
        {title: "Dashboard", icon: <MdDashboard/>, path:"/dashboard"},
        {title: "schedules", icon: <FaFileMedicalAlt/>,path:"schedules"},
        {title: "Monitor patient", icon: <FaChartLine/>,path:"monitor-patient"},

    ]
    const [activeTab, setActiveTab] = useState("");

    return <aside className="w-full bg-gray-50 border-r border-gray-200 min-h-screen">
        <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FaPills className="w-5 h-5 text-white"/>
                </div>
                <div>
                    <h2 className="font-semibold text-gray-900">MedReminder</h2>
                    <p className="text-xs text-gray-500">Healthcare Portal</p>
                </div>
            </div>

            <nav className="space-y-2">
                {tabs.map(tab => <Link href={tab.path} onClick={() => setActiveTab(tab.path)} key={tab.path}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left ${
                        activeTab === tab.path ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    {tab.icon}
                    <span>{tab.title}</span>
                </Link>)}
            </nav>
        </div>
    </aside>
}

export default Sidebar