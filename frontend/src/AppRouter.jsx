import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MyNavbar} from "./Navbar";
import {Clients} from "./pages/Clients";
import {MRoutes} from "./pages/MRoutes";
import {Users} from "./pages/Users";
import {Trips} from "./pages/Trips";


const AppRouter = () => {
    return (
        <>
            <MyNavbar/>
            <Routes>
                <Route path="/clients" element={<Clients/>}/>
                <Route path="/routes" element={<MRoutes/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/trips" element={<Trips/>}/>
            </Routes>
        </>
    );
};

export default AppRouter;

