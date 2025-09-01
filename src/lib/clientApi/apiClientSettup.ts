import axios from "axios";
import {API_URL} from "../constants";
import {getToken, removeToken} from "../cookies";

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`,
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        apiClient.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401 && window.location.pathname !== "/auth") {
                    removeToken()
                    window.location.href = "/";
                }
                return Promise.reject(error);
            }
        );
        return Promise.reject(error);
    }
);


export const logout = async () => {
    await removeToken();
    window.location.assign("/");
};


export default apiClient;
