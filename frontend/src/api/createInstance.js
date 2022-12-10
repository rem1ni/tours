import axios from "axios";
import {getToken} from "../storage/token";

export const instance = axios.create({
    baseURL: "http://localhost:8080",
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = getToken()?.accessToken;
        if (accessToken) {
            config.headers.Authorization = 'Bearer ' + accessToken;
        }
        return config;
    },
    error => Promise.reject(error)
);