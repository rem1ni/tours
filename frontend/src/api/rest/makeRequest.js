import {instance} from "../createInstance";

export const makeRequest = ({
        url = '/',
        method = "GET",
        data = {},
        ...configs
    }) => {
    return instance.request({url, method, data, ...configs});
};