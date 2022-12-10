import {makeRequest} from "./makeRequest";

const login = (data) => {
    return makeRequest({
        url: "tour/user/signin",
        method: "POST",
        data,
        // withCredentials: true,
    });
}

export const auth = {
    login
}