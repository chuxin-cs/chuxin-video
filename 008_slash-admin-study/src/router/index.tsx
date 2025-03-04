import {lazy} from "react";
import type {AppRouteObject} from "#/router.ts";
import {ErrorBoundary} from "react-error-boundary";
import {createHashRouter, RouterProvider, Navigate, type RouteObject} from "react-router-dom"

const {VITE_APP_HOMEPAGE: HOMEPAGE} = import.meta.env;

// 不需要任何权限就可以访问的 403、404、500 页面
import Login from "@/pages/sys/login/Login";
import DashboardLayout from "@/layouts/dashboard";
import PageError from "@/pages/sys/error/PageError";
import {ERROR_ROUTE} from "@/router/routes/error-routes";
import ProtectedRoute from "@/router/components/protected-route";


const PUBLIC_ROUTE: AppRouteObject = {
    path: "/login",
    element: (
        <ErrorBoundary FallbackComponent={PageError}>
            <Login/>
        </ErrorBoundary>
    ),
};
const NO_MATCHED_ROUTE: AppRouteObject = {
    path: "*",
    element: <Navigate to="/404" replace/>,
};

import About from "@/pages/about/index"

const Home = lazy(() => import("@/pages/home/index"));

function Router() {
    // 未来的业务路由
    const PROTECTED_ROUTE: AppRouteObject = {
        path: "/",
        element: (
            <ProtectedRoute>
                <DashboardLayout/>
            </ProtectedRoute>
        ),
        children: [
            {index: true, element: <Navigate to={HOMEPAGE} replace/>},
            {path: "about", element: <About/>},
            {path: "home", element: <Home/>}
        ]
    }
    const routes = [PUBLIC_ROUTE, NO_MATCHED_ROUTE, PROTECTED_ROUTE, ERROR_ROUTE] as RouteObject[];
    const router = createHashRouter(routes)
    return <RouterProvider router={router}/>
}

export default Router;