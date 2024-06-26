import axios, { AxiosInstance } from "axios";
import router from "@/router";
import { getToken, removeToken } from "./token";

const http: AxiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000,
})


http.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    }
);

http.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const status = error.response?.status;
        console.log("error status", status)
        switch (status) {
            case 401:
                router.navigate("/login");
                removeToken();
                // window.location.reload();
                break;
            default:
                break;
        }
        return Promise.reject(error)
    }
)

export default http;