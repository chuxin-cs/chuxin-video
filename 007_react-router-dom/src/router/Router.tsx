import React from "react"
import {createHashRouter} from "react-router-dom"

const Page1 = React.lazy(() => import("../pages/page1/Page1.tsx"));
import Page2 from "../pages/page2/Page2.tsx";
import Page3 from "../pages/page3/Page3.tsx";


const router = createHashRouter([
    {
        path: "/page1",
        element: <Page1/>,
    },
    {
        path: "/page2",
        element: <Page2/>,
    },
    {
        path: "/page3",
        element: <Page3/>,
        // loader: page3Loader
    },
    {
        path: "*",
        element: <div>404</div>
    }
])

export default router