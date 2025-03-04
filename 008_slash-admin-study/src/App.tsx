import Router from "@/router/index";
import Logo from "@/assets/images/logo.png";
import {Helmet} from "react-helmet-async";
import { MotionLazy } from "@/components/animate/motion-lazy";

function App() {
    return (
        <MotionLazy>
            {/*设置title 和 icon*/}
            <Helmet>
                <title>Slash Admin</title>
                <link rel="icon" href={Logo}/>
            </Helmet>

            {/*路由*/}
            <Router></Router>
        </MotionLazy>
    )
}

export default App;