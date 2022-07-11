import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "../routes";
import Main from "../pages/Main";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Main/>}/>
        </Routes>
    );
};

export default AppRouter;