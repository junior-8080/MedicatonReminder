export type AuthBanner = {
    id: number;
    title: string;
    subtitle: string;
    bannerImage: string;
    shadowColor: string;
};


export type LoginBody = {
    email: string;
    password: string;
}

export type SignupBody = {
    email: string;
    firstName: string
    lastName: string
    password: string
    country: string
    phone: string;
    confirmPassword?: string;
    isValid?: boolean;
    isKycVerify: "not_verified" | "verified" | "rejected";
}

export type SignupFormBody = {
    email: string;
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    country: string
    phoneNumber: string;

}

export type OtpDataType = {
    phone: string;
    otp: string;
    date: string;
    status: string;
}

export type ContactType = {
    phone: string;
    name: string;
    date: string;
    status: string;
}

export type RechargeDataTypes = {
    paymentId: string;
    paymentMethod: string;
    amountAdded: string;
    status: string;
    date: string
}

export type UssdInfo = {
    extentionType: string
    example: string
    weeklyRate: string
    numberOfNetwork: number
    amount: number
}

export type RecentUssdType = {
    id: string
    extentionType: string
    subscriptionDate: string
    renewalDate: string
    lastSubscriptionDuration: string
    status: string
}

export type NavItemType = {
    id: number;
    label: string;
}
export type AuthView = "signup" | "login" | "request-password-reset" | "reset-password"

export type AuthTileType = {
    title: string;
    subtitle: string
}

export type FilterType = {
    id: number,
    keyword: string;
    label: string
}

export type MessageOptionType = {
    id: string;
    icon: string;
    title: string;
    description: string;
    shadowColor: string
}

export interface ApiResponse {
    statusCode: number;
    message: string;
    timestamp: string; // ISO date string
}

export type WalletType = {
    id: string;
    userId: string;
    balance: number;
    description: string;
    updatedAt: string; // ISO date string
    createdAt: string; // ISO date string
}

export interface Welcome {
    id: string;
    userId: string;
    walletId: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    type: string;
    status: string;
    reference: string;
    description: string;
    metadata: any;
    createdAt: Date;
    updatedAt: Date;
}


export type TransactionType = {
    id: string;
    userId: string;
    walletId: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    type: string;
    status: string;
    reference: string;
    description: string;
    metadata: {
        paymentProvider: string;
    };
    createdAt: String;
    updatedAt: String;
}


type SMSBalanceType = {
    id: string;
    userId: string;
    balance: string;
    expiringBalance: number;
    totalSmsCredits: number;
    updatedAt: string; // ISO date string
    createdAt: string; // ISO date string
    expiryDate: string | null;
    description: string | null;
};


export type WalletApiResponse = ApiResponse & {
    data: WalletType
}

export type TransactionApiResponse = ApiResponse & {
    data: TransactionType []
}


export type SmsBalanceApiResponse = ApiResponse & {
    data: SMSBalanceType
}