import type {AppRouteObject} from "#/router.ts";
const {VITE_APP_HOMEPAGE: HOMEPAGE} = import.meta.env;
import {createHashRouter, RouterProvider, Navigate, type RouteObject} from "react-router-dom"

// 不需要任何权限就可以访问的 403、404、500 页面
import DashboardLayout from "@/layouts/dashboard";
import ProtectedRoute from "@/router/components/protected-route";
import {ERROR_ROUTE} from "@/router/routes/error-routes.tsx";

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
        ]
    }
    const routes = [PROTECTED_ROUTE, ERROR_ROUTE] as RouteObject[];
    const router = createHashRouter(routes)
    return <RouterProvider router={router}/>
}

export default Router;