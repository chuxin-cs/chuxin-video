import {createRoot} from 'react-dom/client'


// helmet
import {HelmetProvider} from "react-helmet-async"
// 引入全局css
import "./global.css"
import "./theme/theme.css"


// root component
import App from "./App"


const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <HelmetProvider>
        <App/>
    </HelmetProvider>
)
