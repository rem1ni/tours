import {makeRequest} from "./makeRequest";

export const getTripsInfo = () => {
    return makeRequest({
        url: "tour/voucher/all",
        method: "GET",
    });
}

export const addRouteInfo = (data) => {
    return makeRequest({
        url: "tour/voucher/create",
        method: "POST",
        data: data
    });
}

export const editRouteInfo = (data) => {
    return makeRequest({
        url: "tour/voucher/edit",
        method: "POST",
        data: data
    });
}

export const deleteRouteInfo = (data) => {
    return makeRequest({
        url: "tour/voucher/delete",
        method: "POST",
        data: data
    });
}