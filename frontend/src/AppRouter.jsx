import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MyNavbar} from "./components/Navbar";
import {Clients} from "./pages/Clients";
import {MRoutes} from "./pages/MRoutes";
import {Users} from "./pages/Users";
import {Trips} from "./pages/Trips";
import {Login} from "./pages/Login";
import {useAuth} from "./auth/useAuth";


const AppRouter = () => {

    const {isAuth, roles} = useAuth();

    if (!isAuth) {
        return (
            <Routes>
                <Route path="*" element={<Login/>}/>;
            </Routes>
        )
    }

    return (
        <>
            <MyNavbar/>
            <Routes>
                <Route path="/clients" element={<Clients/>}/>
                <Route path="/routes" element={<MRoutes/>}/>
                {roles.length > 1 && <Route path="/users" element={<Users/>}/>}
                <Route path="/trips" element={<Trips/>}/>
            </Routes>
        </>
    );
};

export default AppRouter;

