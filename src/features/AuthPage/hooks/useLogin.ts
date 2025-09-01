import {LoginBody} from "@/lib/type";
import {useMutation} from "@tanstack/react-query";
import {toast} from 'react-toastify';
import {authApi} from "../lib/authApi";
import {useAuth} from "./useAuth";
import {useRouter} from "next/navigation";

export const useLogin = () => {
    const {
        login,
        user
    } = useAuth()
    return useMutation({
        mutationFn: (data: LoginBody) => authApi.signin(data),
        onSuccess: (response) => {
            login(response.data.user, response.data.access_token);
            toast.success("Login Success");
        },
        onError: (error:any) => {
            toast.error(  error?.response?.data?.message || "Invalid credentials");
        },
    });
};
