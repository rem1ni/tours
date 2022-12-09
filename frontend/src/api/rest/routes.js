import {makeRequest} from "./makeRequest";

export const getRouteInfo = () => {
    return makeRequest({
        url: "tour/route/all",
        method: "GET",
    });
}

export const addRouteInfo = (data) => {
    return makeRequest({
        url: "tour/route/create",
        method: "POST",
        data: data
    });
}

export const editRouteInfo = (data) => {
    return makeRequest({
        url: "tour/route/edit",
        method: "POST",
        data: data
    });
}

export const deleteRouteInfo = (data) => {
    return makeRequest({
        url: "tour/route/delete",
        method: "POST",
        data: data
    });
}