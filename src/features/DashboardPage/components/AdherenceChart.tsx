import {ResponsiveContainer,LineChart,XAxis,YAxis,Line} from "recharts";

const adherenceData = [
    { month: 'Jan', value: 85 },
    { month: 'Feb', value: 88 },
    { month: 'Mar', value: 82 },
    { month: 'Apr', value: 91 },
    { month: 'May', value: 89 },
    { month: 'Jun', value: 94 }
];


const AdherenceChart = () => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Adherence Trends</h3>
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={adherenceData}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis domain={[0, 100]} axisLine={false} tickLine={false} />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export default AdherenceChart