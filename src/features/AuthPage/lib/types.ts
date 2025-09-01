export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    country:string;
    phoneNumber: string;
    phone_number:string;
    first_name: string;
    last_name: string;
    role:"ADMIN" | "USER";
    createdAt: string;
    updateAt:string;
  }
  
 export  interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
  }
  
  export type AuthAction =
    | { type: "LOGIN"; payload: { user: User; token: string } }
    | { type: "LOGOUT" };
  
  export interface AuthContextType extends AuthState {
    login: (user: User, token: string) => void;
    logout: () => void;
  }


  export interface RequestPasswordResetType {
      email?: string;
      phone:string;
      deliveryMethod: "sms" | "email"
  }

  export interface  ResetPasswordType {
      resetToken?:string;
      otpCode:string;
      phoneNumber: string;
      resetMethod?: 'otp' | 'email';
      newPassword: string;
  }