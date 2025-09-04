


type Props = {
     title:string;
     value:string;
     icon:any;
     color:string;
     bgColor:string
}
const StatsCard = ({ title, value, icon, color, bgColor }:Props) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-600 mb-1">{title}</p>
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
            </div>
            <div className={`p-3 rounded-lg ${bgColor}`}>
                {icon}
            </div>
        </div>
    </div>
);

export default  StatsCard
