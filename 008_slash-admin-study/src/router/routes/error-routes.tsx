import {Suspense, lazy} from "react"
import {Outlet} from "react-router-dom"
import ProtectedRoute from "../components/protected-route";
import {AppRouteObject} from "#/router.ts";


const Page403 = lazy(() => import("@/pages/sys/error/Page403.tsx"));
const Page404 = lazy(() => import("@/pages/sys/error/Page404.tsx"));
const Page500 = lazy(() => import("@/pages/sys/error/Page500.tsx"));

export const ERROR_ROUTE: AppRouteObject = {
    element: (
        <ProtectedRoute>
            <Suspense fallback={<div>loading....</div>}>
                <Outlet/>
            </Suspense>
        </ProtectedRoute>
    ),
    children: [
        {path: "403", element: <Page403/>},
        {path: "404", element: <Page404/>},
        {path: "500", element: <Page500/>},
    ]
}