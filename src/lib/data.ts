export const authSliderData = [
    {
        id: 1,
        title: "Experience the power of positivity",
        subtitle: "Experience the elegance of simplicity. Every detail is designed with you in mind.",
        bannerImage: "/loginBanner.jpg",
        // bannerImage: "/svgs/homeAuth.svg",
        shadowColor: ""
    },
    // {
    //     id: 2,
    //     title: "Experience the power of positivity",
    //     subtitle: "Experience the elegance of simplicity. Every detail is designed with you in mind",
    //     bannerImage: "/loginImage.jpeg",
    //     shadowColor: ""
    // },
    // {
    //     id: 3,
    //     title: "Experience the power of positivity",
    //     subtitle: "Experience the elegance of simplicity. Every detail is designed with you in mind",
    //     bannerImage: "/loginImage02.jpeg",
    //     shadowColor: ""
    // },
]


export const navItems = [
    {id: 1, label: 'USSD', key: 'ussd', roles:["USERS","ADMIN"]},
    {id: 2, label: 'API', key: 'api',roles:["ADMIN","USER"]},
    {id: 3, label: 'Contacts', key: 'contact',roles:["ADMIN","USER"]},
    {id: 4, label: 'Documentation', key: 'support',roles:["ADMIN","USER"]},
];


export const smsNavs = [
    {id: 1, label: 'Send SMS', key: "send-sms",roles:["ADMIN","USER"]},
    {id: 3, label: 'SMS History', key: "sms",roles:["ADMIN","USER"]},
    {id: 5, label: 'Schedule SMS History', key: 'scheduled-message', roles:["USERS","ADMIN"]},
    {id: 6, label: 'Sender ID', key: 'sender-id',roles:["ADMIN","USER"]},
    {id: 8, label: 'SMS Template', key: 'templates',roles:["ADMIN","USER"]}
];



export const DashboardStats = [
    {
        title: "Total Sent",
        icon: "/svgs/messageDeepGreen.svg",
        count: 0
    },
    {
        title: "Total Delivered",
        icon: "/svgs/messageLightGreen.svg",
        count: 0
    },
    {
        title: "Total Failed",
        icon: "/svgs/messageRed.svg",
        count: 0
    },
    {
        title: "Total Scheduled",
        icon: "/svgs/messageBlue.svg",
        count: 0
    }
]


export const messageOptions = [
    {
        id: 'bulk',
        icon: "/svgs/bulk.svg",
        title: 'Bulk SMS',
        description: 'Send a bulk SMS to your audience.',
        shadowColor: "shadow-green-800/50",
    },
    {
        id: 'group',
        icon: "/svgs/edit.svg",
        title: 'Group Sms',
        description: 'Send SMS to group from your contact list',
        shadowColor: "shadow-black-800/50"
    },
    {
        id: 'custom',
        icon: "/svgs/layers-minimalistic.svg",
        title: 'Custom Blast',
        description: 'Create a personalized SMS message for specific needs',
        shadowColor: 'shadow-orange-200/50'
    }
];


export const otpTableData = Array(7).fill({
    otp: "2386",
    phone: "0547141237",
    date: "12-11-24/12:00PM",
    status: "delivered",
});

export const rechargeTableData = Array.from({length: 7}, (_, index) => ({
    paymentId: `Etz-2386-3284${index + 1}z`,
    paymentMethod: "Mobile Money",
    amountAdded: "₵100.00",
    status: "delivered",
    date: "12-11-24/12:00PM"
}));


export const ussdInfoData = Array.from({length: 7}, (_, index) => ({
    extentionType: `One Digit Extension ${index + 1}`,
    example: `*565${index + 1}#`,
    weeklyRate: "₵100.00",
    numberOfNetwork: 10,
    amount: "$900"
}));

export const contactTableData = Array(7).fill({
    name: "Victor Odame",
    phone: "0547141237",
    status: "active",
    date: "12-11-24/12:00PM"
});


export const recentUssdData = Array.from({length: 7}, (_, index) => ({
    id: `#${index + 1}z`,
    extentionType: "*897*333#",
    subscriptionDate: "12 - 20-2025",
    renewalDate: "12 - 20-2025",
    lastSubscriptionDuration: "300",
    status: "active"
}));

export const cardData = [
    {
        id: 2,
        type: 'SMSPage Balance',
        amount: '$200.00',
        icon: '/svgs/chat-round-unread.svg',
    }
];

export const dashboardBarChartFilters = [
    {
        id: 1,
        keyword: "week",
        label: "Week"
    },
    {
        id: 2,
        keyword: "month",
        label: "Month"
    },
    {
        id: 3,
        keyword: "year",
        label: "Year"
    }
]

export const smsHistoryTableFilters = [
    {
        id: 1,
        keyword: "all",
        label: "General Blast"
    }, {
        id: 2,
        keyword: "custom",
        label: "Custom Blast"
    },
    {
        id: 3,
        keyword: "singles",
        label: "Singles"
    }
]

export const otpFilters = [
    {
        id: 1,
        keyword: "all",
        label: "All"
    }, {
        id: 2,
        keyword: "delivered",
        label: "Delivered"
    },
    {
        id: 3,
        keyword: "failed",
        label: "Failed"
    }
]

export const walletFilters = [
    {
        id: 1,
        keyword: "all",
        label: "All"
    }, {
        id: 2,
        keyword: "success",
        label: "Success"
    },
    {
        id: 3,
        keyword: "pending",
        label: "Pending"
    },
    {
        id: 4,
        keyword: "failed",
        label: "Failed"
    }
]


export const landingPageFeatures = [
    {
        icon: "👥",
        title: "Bulk Messaging",
        description: "Send messages to multiple recipients at once."
    },
    {
        icon: "📅",
        title: "Scheduling",
        description: "Schedule your messages to be sent at a later time."
    },
    {
        icon: "🔗",
        title: "Integration",
        description: "Integrate with your favorite tools and services."
    }
]

export const landingPageFooterLinks = [
    {text: "Terms of Service", url: "/terms"},
    {text: "Privacy Policy", url: "/privacy"}
]

export const landingPageNavLinks = [{text: "Login", url: "/login"}]

export const monthMapping = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};

export const daysMapping = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

export const scheduleMessageFrequencies  = ["Once","hourly","Daily","weekly","Biweekly","Monthly"];

export const smsPricingData = [
    {credit: "0 – 49,999", cost: "0.05", expiry: "No Expiry"},
    {credit: "50,000 – 249,999", cost: "0.04", expiry: "No Expiry"},
    {credit: "250,000 – 499,999", cost: "0.03", expiry: "No Expiry"},
    {credit: "500,000 – 999,999", cost: "0.02", expiry: "No Expiry"}
];


export const sharedUssdData = [
    {type: "Free", cost: "USSD Set Up Fee"},
    {type: "GHS 900", cost: "Monthly Maintenance Fee"},
    {type: "GHC 0.03", cost: "Postpaid Session Cost"}
];


export const dedicatedUssdData = [
    {type: "GHS 2,100", cost: "Annual Regulator Fee (3 Digit Code)"},
    {type: "GHS 500", cost: "Annual Regulator Fee (4 Digit Code)"},
    {type: "GHS 3,500", cost: "MTN Set up Fee (One off)"},
    {type: "GHS 3,500", cost: "Airtel Tigo Set up Fee (One off)"},
    {type: "GHS 4,500", cost: "Telecel Set up Fee (One off)"},
    {type: "GHS 3,500", cost: "Monthly maintenance fee (MTN)"},
    {type: "GHS 3,500", cost: "Monthly maintenance fee (Airtel Tigo)"},
    {type: "GHS 4,000", cost: "Monthly maintenance fee (Vodafone)"},
    {type: "GHS 4,000", cost: "Monthly maintenance fee (Vodafone)"}
];


export const  statusColors: { [key: string]: string }= { //TODO:disable it for now status types later
    completed: "bg-green-200 text-green-700",
    pending: "bg-yellow-200 text-yellow-700",
    failed: "bg-red-200 text-red-700",
    approved:"bg-green-200 text-green-700",
    sent: "bg-green-200 text-green-700",
    active:"bg-green-200 text-green-700",
    revoked: "bg-red-200 text-red-700",
    rejected: "bg-red-200 text-red-700",

};

export const  statusColorsDot: { [key: string]: string }= { //TODO:disable it for now status types later
    completed: "bg-green-700",
    pending: "bg-yellow-700",
    failed: "bg-red-700",
    approved:"bg-green-700",
    sent: "bg-green-700",
    active:"bg-green-700",
    revoked:"bg-red-700",
    rejected:"bg-red-700"
};