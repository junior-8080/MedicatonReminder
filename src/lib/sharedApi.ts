import api from "@/lib/clientApi/apiHelpers";
import {endpoints} from "@/lib/endPoints";
import {WalletApiResponse} from "@/lib/type";

export const shareApi = {
    fetchUserWallet : async (userId:string):Promise<WalletApiResponse> => {
        return await api.get(`${endpoints.fetch_user_wallet}`);
    },
}