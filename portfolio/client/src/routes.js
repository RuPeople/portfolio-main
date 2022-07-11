

import {MAIN_ROUTE, PORTFOLIO_ROUTE, WORK_ROUTE} from "./utils/consts";
import Main from "./components/Main";
import Portfolio from "./pages/Portfolio";
import Work from "./pages/Work";

/*export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]*/
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PORTFOLIO_ROUTE,
        Component: Portfolio
    },
    {
        path: WORK_ROUTE + '/:id',
        Component: Work
    },
]