import {makeRequest} from "./makeRequest";

export const getClientsInfo = () => {
    return makeRequest({
        url: "tour/client/all",
        method: "GET",
    });
}

export const addClientInfo = (data) => {
    return makeRequest({
        url: "tour/client/create",
        method: "POST",
        data: data
    });
}

export const editClientInfo = (data) => {
    return makeRequest({
        url: "tour/client/edit",
        method: "POST",
        data: data
    });
}