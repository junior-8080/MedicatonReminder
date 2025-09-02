"use client";
import React, {useEffect, useState} from "react";
import SignUpForm from "@/features/AuthPage/components/SignUpForm";
import {AuthView} from "@/lib/type";
import SignInForm from "@/features/AuthPage/components/SignInForm";
import RequestPasswordResetForm from "@/features/AuthPage/components/RequestPasswordResetForm";
import {useLogin} from "./hooks/useLogin";
import {useRegister} from "./hooks/useRegister";
import {toast} from "react-toastify";
import {useAuth} from "@/features/AuthPage/hooks/useAuth";
import {useRequestPasswordReset} from "@/features/AuthPage/hooks/useRequestPasswordReset";
import ResetPasswordForm from "@/features/AuthPage/components/ResetPasswordForm";
import {useResetPassword} from "@/features/AuthPage/hooks/useResetPassword";


const AuthPage = () => {
    const [authView, setAuthView] = useState<AuthView>("login");
    const {isAuthenticated} = useAuth();
    const {
        mutate: loginMutate,
        isPending: loginPending,
    } = useLogin();

    useEffect(() => {
        if (isAuthenticated) {
            window.location.href = "/dashboard"
        }
    }, [isAuthenticated]);

    const {mutate: signUpMutate, isPending: signupPending} = useRegister({
        onSuccess: () => {
            toast.success("Registration Successful");
            setAuthView("login");
        },
    });

    const {isPending: isRequestingPassword, mutate: requestPasswordReset} = useRequestPasswordReset(() => {
        toast.success("An Otp has been sent");
        setAuthView("reset-password");
    })

    const {isPending: isResetting, mutate: resetPassword} = useResetPassword(() => {
        toast.success("An Otp has been sent");
        setAuthView("login");
    })

    return (
        <div className="h-screen bg-white grid grid-cols-1 md:grid-cols-12 overflow-hidden">
            <div className="hidden md:block col-span-5 h-full">
                <img
                    src={"AuthBanner.jpg"}
                    className="w-full h-full object-cover"
                    alt={"login"}
                />
            </div>
            <div className="grid-cols-1 md:col-span-7 flex items-center justify-center p-4">
                <div className="w-full md:max-w-md mx-auto shadow-md">
                    <div className="p-6">
                        {authView === "signup" && (
                            <SignUpForm
                                onSubmit={(data) => signUpMutate(data)}
                                setAuthView={(view) => setAuthView(view)}
                                isSubmitting={signupPending}
                            />
                        )}
                        {authView === "login" &&
                            <SignInForm
                                onSubmit={async (data) => loginMutate(data)}
                                setAuthView={(view) => setAuthView(view)}
                                isSubmitting={loginPending}
                            />
                        }
                        {authView === "request-password-reset" &&
                            <RequestPasswordResetForm onSubmit={requestPasswordReset} loading={isRequestingPassword}/>
                        }
                        {authView === "reset-password" &&
                            <ResetPasswordForm onSubmit={resetPassword} loading={isResetting}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;