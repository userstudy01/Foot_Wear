import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/HomePages/Home/Home";

export function ChildThemeLayout() {
    return (

        <>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
};
