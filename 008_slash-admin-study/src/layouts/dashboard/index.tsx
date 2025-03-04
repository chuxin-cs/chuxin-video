import {Outlet} from "react-router-dom"
import {Layout} from "antd";
import {Suspense} from "react";

import Nav from "./nav"
import Main from "./main"
import Header from "./header"
import {CircleLoading} from "@/components/loading";

function DashboardLayout() {
    const layoutClassName = ""

    return (
        <Layout className={layoutClassName}>
            <Suspense fallback={<CircleLoading/>}>
                <Layout style={{}}>
                    <Header/>
                    <Nav/>
                    <Main/>
                    <Outlet></Outlet>
                </Layout>

            </Suspense>
        </Layout>
    )
}

export default DashboardLayout