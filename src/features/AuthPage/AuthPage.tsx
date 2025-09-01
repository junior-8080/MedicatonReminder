"use client";
import React, {useEffect, useState} from "react";
import SignUpForm from "@/features/AuthPage/components/SignUpForm";
import AuthSlider from "@/features/AuthPage/components/AuthSlider";
import {authSliderData} from "@/lib/data";
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
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-white">
            <div className="w-[80%] md:w-[50%] mx-auto my-auto text-black">
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
                {authView === "reset-password" && <ResetPasswordForm onSubmit={resetPassword} loading={isResetting}/>}
            </div>

            <AuthSlider authSliderData={authSliderData}/>
        </div>
    );
};

export default AuthPage;
