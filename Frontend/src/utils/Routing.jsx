import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donations from "../pages/Admin/Donations";
import Login from "../pages/Admin/Login";
import Register from "../pages/Admin/Register";

const Router = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Donations />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;
