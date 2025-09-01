import {LoginBody, WalletApiResponse} from "@/lib/type";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { shareApi } from "@/lib/sharedApi";

export const useGetWallet = (userId:string) => {
    return useQuery<WalletApiResponse>({
        queryKey: ["userWallet",userId], 
        queryFn: () => shareApi.fetchUserWallet(userId), 
    });
};