import {useState, useEffect,useCallback} from "react"

// 定义待办事项的类型
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

let newFn: ((id: number) => void) | null = null;

function TodoList() {
    // 状态管理：输入框内容
    const [input, setInput] = useState<string>("")
    // 状态管理：待办事项列表
    const [todos, setTodos] = useState<Todo[]>(()=>{
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    })
    // 副作用：数据持久化
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // 添加待办事项
    const addTodo = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        console.log(1111111)
        e.preventDefault();
        if (!input.trim()) return;

        setTodos([...todos, {
            id: Date.now(),
            text: input,
            completed: false
        }]);
        setInput('');
    }, [input,setInput,setTodos]);

    // 切换完成状态
    const toggleComplete = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
    };

    console.log(newFn,"newFn")
    console.log(newFn == deleteTodo)

    // 删除待办事项
    console.log("我被执行了 其实这里的函数还是会被重新声明一遍")
    function deleteTodo (id: number) {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    newFn = deleteTodo;


    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={addTodo}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder={'Add new Todo'}/>
            </form>
            <ul>
                {
                    todos.map(todo => (
                            <li key={todo.id}>
                            <span
                                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                                onClick={() => toggleComplete(todo.id)}
                            >
                                {todo.text}
                            </span>
                                <button onClick={() => deleteTodo(todo.id)}>×</button>
                            </li>
                        )
                    )
                }
            </ul>

        </div>
    )
}

export default TodoList