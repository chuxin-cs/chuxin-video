import {useState} from 'react'
import TodoList from "./pages/useState-TodoList";

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <TodoList/>
        </>
    )
}

export default App
