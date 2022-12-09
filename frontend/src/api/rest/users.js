import {makeRequest} from "./makeRequest";

export const getUsersInfo = () => {
    return makeRequest({
        url: "tour/user/all",
        method: "GET",
    });
}

export const addUserInfo = (data) => {
    return makeRequest({
        url: "tour/user/add",
        method: "POST",
        data: data
    });
}

export const editUserInfo = (data) => {
    return makeRequest({
        url: "tour/user/edit",
        method: "POST",
        data: data
    });
}

export const changeUserRole = (data) => {
    return makeRequest({
        url: "tour/user/role",
        method: "POST",
        data: data
    });
}


export const deleteUserInfo = (data) => {
    return makeRequest({
        url: "tour/user/delete",
        method: "POST",
        data: data
    });
}