import {Suspense} from "react";
import {createRoot} from 'react-dom/client'


// helmet
import {HelmetProvider} from "react-helmet-async"
// 引入全局css
import "./global.css"
import "./theme/theme.css"


// root component
import App from "./App"
import ProgressBar from "@/components/progress-bar"


const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <HelmetProvider>
        <Suspense>
            {/*进度条*/}
            <ProgressBar/>
            {/*主容器 对标vue中的 App.vue*/}
            <App/>
        </Suspense>
    </HelmetProvider>
)
