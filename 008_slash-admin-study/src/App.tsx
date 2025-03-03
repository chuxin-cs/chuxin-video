import Router from "@/router/index";
import Logo from "@/assets/images/logo.png";
import {Helmet} from "react-helmet-async";

function App() {
    return (
        <>
            {/*设置title 和 icon*/}
            <Helmet>
                <title>Slash Admin</title>
                <link rel="icon" href={Logo}/>
            </Helmet>

            {/*路由*/}
            <Router></Router>
        </>
    )
}

export default App;