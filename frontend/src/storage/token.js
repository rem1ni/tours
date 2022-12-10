const setToken = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}

const getToken = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const removeToken = () => {
    localStorage.removeItem("user")
}

export {
    setToken,
    getToken,
    removeToken
}