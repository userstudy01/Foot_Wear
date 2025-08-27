import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/SignIn/SignIn";

export function ChildThemeLayout() {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignUp />} />
            </Routes>
        </>
    );
};
