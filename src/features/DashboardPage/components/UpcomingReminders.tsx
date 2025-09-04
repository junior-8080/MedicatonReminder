

const upcomingReminders = [
    { name: 'Sarah Johnson', medication: 'Lisinopril 10mg', time: '2:00 PM', status: 'Today' },
    { name: 'Robert Wilson', medication: 'Metformin 500mg', time: '3:30 PM', status: 'Today' },
    { name: 'Lisa Anderson', medication: 'Atorvastatin 20mg', time: '6:00 PM', status: 'Today' },
    { name: 'Sarah Johnson', medication: 'Lisinopril 10mg', time: '2:00 PM', status: 'Today' },
    { name: 'Robert Wilson', medication: 'Metformin 500mg', time: '3:30 PM', status: 'Today' },
    { name: 'Lisa Anderson', medication: 'Atorvastatin 20mg', time: '6:00 PM', status: 'Today' }
];


const UpcomingReminders = () => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Reminders</h3>
        <div className="space-y-4">
            {upcomingReminders.map((reminder, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-900">{reminder.name}</p>
                        <p className="text-sm text-gray-600">{reminder.medication}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-medium text-blue-600">{reminder.time}</p>
                        <p className="text-xs text-gray-500">{reminder.status}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);


export default  UpcomingReminders