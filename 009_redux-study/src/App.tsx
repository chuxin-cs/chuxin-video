import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, reset} from "./store/modules/count"
import type {RootState, AppDispatch} from "./store";
import TodoList from "./pages/TodoList";

function App() {
    const count = useSelector((state: RootState) => state.count.count)
    const dispatch = useDispatch<AppDispatch>()
    return <>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement(1))}>-1</button>
        <button onClick={() => dispatch((increment(2)))}>+1</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <TodoList/>
    </>
}

export default App;