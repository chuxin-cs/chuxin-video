import type {AppRouteObject} from "#/router.ts";
import DashboardLayout from "@/layouts/dashboard";
import ProtectedRoute from "@/router/components/protected-route";
import {createHashRouter, RouterProvider, Navigate, type RouteObject} from "react-router-dom"

const {VITE_APP_HOMEPAGE: HOMEPAGE} = import.meta.env;
// 组件
import {ERROR_ROUTE} from "@/router/routes/error-routes.tsx";

function Router() {

    const PROTECTED_ROUTE: AppRouteObject = {
        path: "/",
        element: (
            <ProtectedRoute>
                <DashboardLayout/>
            </ProtectedRoute>
        ),
        children: [
            {index: true, element: <Navigate to={HOMEPAGE} replace/>},
        ]
    }
    const routes = [PROTECTED_ROUTE, ERROR_ROUTE] as RouteObject[];
    const router = createHashRouter(routes)
    return <RouterProvider router={router}/>
}

export default Router;