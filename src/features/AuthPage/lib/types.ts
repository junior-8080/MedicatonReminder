export interface User {
    id: string;
   email:string;
   name:string;
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