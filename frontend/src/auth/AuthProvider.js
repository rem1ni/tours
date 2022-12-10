import AuthContext from "./authContext";
import React, {useEffect, useState} from "react";
import {getToken, removeToken, setToken} from "../storage/token";
import {auth} from "../api/rest/auth";

export function AuthProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const userData = getToken();
        if (userData) {
            setIsAuth(true);
            setUser(userData)
            setRoles(userData.roles)
        }
    }, [])

    const login = ({username, password}) => {
        auth.login({username, password})
            .then(response => {
                const userData = response.data;
                console.log(userData)
                setUser(userData);
                setRoles(userData.roles)
                setToken(userData)
                setIsAuth(true);
            })

    }

    const logout = () => {
        removeToken();
        setIsAuth(false);
    }

    return <AuthContext.Provider value={{
        isAuth,
        user,
        roles,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}