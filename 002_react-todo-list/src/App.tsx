import {useState} from 'react'
import TodoList from "./pages/useState-TodoList";
import clsx from "clsx";
import GlobalStyle from "./global.module.css"

function App() {
    const [count, setCount] = useState(0)

    const className = clsx({
        btn: true,
        'btn-active': true,
        'btn-error': true
    })
    const classes = clsx(className, GlobalStyle.btn, {
        [GlobalStyle.active]: true
    })
    return (
        <>
            <div className={GlobalStyle.btn}></div>
            <button className={classes} onClick={() => setCount(count + 1)}>{count}</button>
            <TodoList/>
        </>
    )
}

export default App
