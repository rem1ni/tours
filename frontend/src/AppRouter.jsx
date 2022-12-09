import React from 'react';
import {Routes, Route} from "react-router-dom";
import {MyNavbar} from "./Navbar";
import {Clients} from "./pages/Clients";


const AppRouter = () => {
    return (
        <>
            <MyNavbar/>
            <Routes>
                <Route path="/clients" element={<Clients/>}/>
            </Routes>
        </>
    );
};

export default AppRouter;

