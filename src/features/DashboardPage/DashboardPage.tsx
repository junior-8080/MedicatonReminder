"use client";

import StatsCard from "@/features/DashboardPage/components/StatsCard";
// import {useGetSmsSummary} from "@/features/SMSPage/hooks/useGetSmsSummary";
// import {useGetSmsGraph} from "@/features/SMSPage/hooks/useGetSmsGraph";
import { FaUserGroup } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import AdherenceChart from "@/features/DashboardPage/components/AdherenceChart";
import UpcomingReminders from "@/features/DashboardPage/components/UpcomingReminders";







const DashboardPage = () => {
    // const {user, isAuthenticated} = useAuth();
    // const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="p-6">
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
                        <p className="text-gray-600">Monitor patient medication adherence and manage reminders</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Last updated: 04/09/2025</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                    title="Total Patients"
                    value="247"
                    icon={<FaUserGroup className="w-6 h-6 text-blue-600"/>}
                    color="text-gray-900"
                    bgColor="bg-blue-100"
                />
                <StatsCard
                    title="Overall Adherence"
                    value="87%"
                    icon={<BsGraphUp className="w-6 h-6 text-green-600"/>}
                    color="text-green-600"
                    bgColor="bg-green-100"
                />
                <StatsCard
                    title="Active Reminders"
                    value="156"
                    icon={<FaRegClock className="w-6 h-6 text-purple-600"/>}
                    color="text-gray-900"
                    bgColor="bg-purple-100"
                />
                <StatsCard
                    title="Missed Doses"
                    value="12"
                    icon={<IoWarningOutline className="w-6 h-6 text-red-600"/>}
                    color="text-red-600"
                    bgColor="bg-red-100"
                />
            </div>

            {/* Charts and Reminders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                    <AdherenceChart/>
                </div>
                <div className="lg:col-span-1">
                    <UpcomingReminders/>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
